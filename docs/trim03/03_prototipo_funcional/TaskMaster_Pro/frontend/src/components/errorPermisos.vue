<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">403</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
                You do not have permission to perform this action.
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