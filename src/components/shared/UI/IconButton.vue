<template>
    <button @click="action"> <img :src="icon"/></button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String
        },
        action:{
            type: Function
        }
    }
}
</script>

<style scoped>
    button {
        width: 4em;
        height: 4em;
        padding: 0px;
        border-radius: 50%;
        border: none;
        background-color: #29b6f6;
        padding: 20px;
        cursor: pointer;
    }

    button img {
        width: 2em;
        height: 2em;
    }
</style>
