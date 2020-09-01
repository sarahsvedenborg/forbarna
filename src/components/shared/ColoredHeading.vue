<template>
<div>
    <!-- <h1 v-html="coloredLetters"></h1> -->
     <h1><span v-for="(character, i) in headingString" :key="i" :class="character == ' ' ? '' : colorClasses[i%colorClasses.length]">{{character}}</span></h1>
</div>
</template>

<script>
export default {
    props: {
        headingString: {
            type: String
        }
    },
    data() { 
        return {
           colorClasses: ['pink', 'green', 'orange', 'red', 'purple', 'yellow']
    }
    },
    computed: {
        coloredLetters() {
            let heading = ''
            const colorClasses = ['pink', 'orange', 'purple', 'red', 'yellow']

            for(let i = 0; i < this.headingString.length; i++){
                const character = this.headingString[i]
                heading += `<span class="${character == ' ' ? '' : colorClasses[i % colorClasses.length]}">${character}</span>`
            }

            console.log("heading", heading)

            return heading
        }
    },

    
}
</script>

<style scoped>
h1{
    font-size: 4em;
}
.pink {
    color: var(--color-pink);
}
.orange {
    color: var(--color-orange);
}
.purple {
    color: var(--color-purple);
}
.red {
    color: var(--color-red);
}
.yellow {
    color: var(--color-yellow);
}
.green {
    color: var(--color-green);
}
</style>