<template>
    <svg :width="width" :height="height" :fill="fill">
        <slot />
    </svg>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        width: {
            type: String,
            default: '20px'
        },
        height: {
            type: String,
            default: 'auto'
        },
        fill: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
    
</style>