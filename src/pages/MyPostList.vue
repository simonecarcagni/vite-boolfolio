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
            lastPage: null
        }
    },
    methods: {
        getPost(goToPage) {
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
                });
        }
    },
    mounted() {
        this.getPost(1);
    }
}
</script>

<template>
    <div class="container d-flex flex-wrap">
        <div v-for="project in projects">
            <ProjectCard :project="project" />
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" @click="getPost(currentPage - 1)"
                        :class="{ 'disabled': currentPage == 1 }">Previous</a></li>
                <li class="page-item"><a class="page-link" @click="getPost(currentPage + 1)"
                        :class="{ 'disabled': currentPage == lastPage }">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>
