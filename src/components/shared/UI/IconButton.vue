<template>
    <button @click="action">
    <font-awesome-icon :icon="icon" :style="{ color: 'white' }"/>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: Array
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
</style>
