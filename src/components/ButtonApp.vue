<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name:'ButtonApp',

    props : {
        text: String,
        color: String,
    },
    methods : {
        onClick() {
            console.log('onClick');
        }
    },
   
}
</script>

<style  scoped>

</style>