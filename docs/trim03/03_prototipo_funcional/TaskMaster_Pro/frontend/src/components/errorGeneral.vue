<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">500</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
                Internal Server Error
            </p>
            <a @click="goHome" class="btn btn-primary go-home">Go Home</a>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goHome() {
            this.$router.push('/perfil-completo');
        }
    }
}
</script>