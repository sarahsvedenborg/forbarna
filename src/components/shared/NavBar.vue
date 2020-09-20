<template>
    <div class="navBar">
        <router-link to="/"><img src="/img/ForBarnaShort.png"></router-link>
        <img src="/img/icons/menu.svg" @click="menuOpen = true"/>
       <Menu :close="() => menuOpen = false" :menuOpen="menuOpen"/>
    </div>
</template>

<script>
import Menu from './Menu'
export default {
    components: {Menu},
    data(){
        return {
            menuOpen: false
        }
    }
}
</script>

<style scoped>
img {
    cursor: pointer;
    padding: 10px;
    height: 2em;
}
.navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>