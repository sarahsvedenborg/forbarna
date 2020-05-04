<template>
    <div class="navBar">
        <router-link to="/"><img src="/img/ForBarnaShort.svg"></router-link>
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

.navBar a {
    padding: 20px;
    font-size: larger;
    font-weight: 500;
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