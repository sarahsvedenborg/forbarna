<template>
     <div class="menu" v-if="menuOpen">
            <img src="/img/icons/close.svg" @click="close"/>
            <ul>
                <li @click="close"> <router-link to="/om-oss">Om oss</router-link></li>
                <li @click="close"> <router-link to="/kontakt">Kontakt oss</router-link></li>
            </ul>
        </div>
</template>

<script>
export default {
    props: {
        close: {
            type: Function
        },
        menuOpen: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
.menu{
    background-color: var(--color-fuksia);
    color: var(--primary-color-light);
    font-weight: bold;
    font-size: 14px;
    text-align: left;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 150px;
    z-index: 10;
}

.menu ul {
    margin-top: 40px;
}

.menu ul li{
    list-style: none;
    padding: 5px 0px;
}

.menu ul li a {
    text-decoration: none;
    color: var(--primary-color-light);
    cursor: pointer;
}

.menu img {
    position: absolute; 
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
    height: 2em;
}
</style>