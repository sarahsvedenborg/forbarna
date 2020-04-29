<template>
    <div class="navBar">
        <router-link to="/"><img src="/img/ForBarnaLogo.png"></router-link>
        <router-link to="/admin">Admin</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navBar {
    height: 2.5em;
    background: #29b6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navBar img {
    height: 2em;
}

a {
    text-decoration: none;
    color: white;
    font-size: 1em;
}
</style>