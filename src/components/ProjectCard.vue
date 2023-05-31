<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            apiUrl: 'http://localhost:8000'
        }
    },
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="card m-5" style="width: 18rem;">
        <img :src="`${this.apiUrl}/storage/${project.image}`" class="card-img-top" :alt="`${project.title}`">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h5>{{ project.type?.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">Mostra Progetto</a>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>
