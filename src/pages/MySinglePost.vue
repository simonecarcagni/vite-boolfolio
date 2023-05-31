<script>
import axios from 'axios';
export default {
    name: 'MySinglePost',
    data() {
        return {
            apiUrl: 'http://localhost:8000',
            singleProject: [],
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.apiUrl}/api/project/${slug}`)
            .then(response => {
                this.singleProject = response.data.project;
            });
    }
}
</script>

<template>
    <div class="card m-5" style="width: 18rem;">
        <img :src="`${this.apiUrl}/storage/${singleProject.image}`" class="card-img-top" :alt="`${singleProject.title}`">
        <div class="card-body">
            <h5 class="card-title">{{ singleProject.title }}</h5>
            <h5>{{ singleProject.type?.name }}</h5>
            <p class="card-text">{{ singleProject.description }}</p>
        </div>
    </div>
</template>

<script></script>