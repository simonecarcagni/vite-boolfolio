<script>
import axios from 'axios';
export default {
    name: 'MySinglePost',
    data() {
        return {
            apiUrl: 'http://localhost:8000',
            singleProject: null,

        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.apiUrl}/api/project/${slug}`)
            .then(response => {
                if (response.data.success == true) {
                    this.singleProject = response.data.project;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            });
    }
}
</script>

<template>
    <div v-if="singleProject">
        <div class="m-5">
            <img :src="`${this.apiUrl}/storage/${singleProject.image}`" class="" :alt="`${singleProject.title}`">
            <div>
                <h1>{{ singleProject.title }}</h1>
                <span class="badge rounded-pill text-bg-dark my-3">{{ singleProject.type?.name }}</span>
                <p>{{ singleProject.description }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Caricamento in corso...</h1>
    </div>
</template>

<script></script>