<template>
    <div class="success">
        <h1>Tusen takk for tilbakemeldingen!</h1>
        <h2></h2>
        <p>Tilbake til <router-link to="/">forsiden</router-link>.</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.success{
    opacity: 0;
    transform: scale(0.5);
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
/*     animation: fadeIn 2s ease-in 5s;  */
}

@keyframes fadeIn {
    from {opacity: 0;
    transform: scale(0.5)}
    to {opacity: 1;
    transform: scale(1)}
}
</style>