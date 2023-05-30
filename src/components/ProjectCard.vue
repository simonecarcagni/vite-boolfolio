<script>
import axios from 'axios';
export default {
    name: 'ProjectCard',
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
        <div class="card m-5" v-for="project in   projects " style="width: 18rem;">

            <img :src="`${this.apiUrl}/storage/${project.image}`" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <h5>{{ project.type?.name }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a href="#" class="btn btn-primary">Mostra Progetto</a>
            </div>

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
