<template>
    <div class="tooltip">{{message}}</div>
</template>

<script>
export default {
    props: {
        message: {
            type: String
        }
    }
    
}
</script>

<style scoped>
.tooltip{
    border-radius: 5px;
    background-color: lightgray;
    color: white;
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>