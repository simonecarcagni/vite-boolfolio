<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    components: {
        ProjectCard
    },
    name: 'MyPostList',
    data() {
        return {
            apiUrl: 'http://localhost:8000',
            projects: [],
            currentPage: 1,
            lastPage: null,
            loading: true
        }
    },
    methods: {
        getPost(goToPage) {
            this.loading = true;
            axios.get(`${this.apiUrl}/api/projects`,
                {
                    params: {
                        page: goToPage
                    }
                })
                .then(response => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                });
        }
    },
    mounted() {
        this.getPost(1);
    }
}
</script>

<template>
    <div class="container">
        <h1>Elenco dei Progetti:</h1>
        <div class="d-flex flex-wrap">

            <div v-if="loading == false" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
            <div v-else>
                <h1>Caricamento in corso...</h1>
            </div>


        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" @click="getPost(currentPage - 1)"
                        :class="{ 'disabled': currentPage == 1 }">Previous</a></li>
                <li class="page-item" v-for="page in lastPage" :class="{ 'active': page == currentPage }">
                    <button @click="getPost(page)" :class="{ 'page-link': true }">
                        {{ page }}
                    </button>
                </li>
                <li class="page-item"><a class="page-link" @click="getPost(currentPage + 1)"
                        :class="{ 'disabled': currentPage == lastPage }">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>
