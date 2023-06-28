<template>
    <svg class="arrow-square" :width="width" :height="height" viewBox="-2 -1 10 14" fill="none">
        <rect x="1.22803" width="8.4563" :height="stroke_width || '1.73652'" transform="rotate(45 1.22803 0)" fill="#090909"/>
        <rect width="8.16033" :height="stroke_width || '1.73652'" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 1.41333 11.7773)" fill="#090909"/>
    </svg>
</template>
<script>
export default {
    name: "arrow-square",
    props: {
        width: String,
        height: String,
        stroke_width: String,
    }
}
</script>
<style scoped>
    svg.arrow-square.left {
        transform: rotate(180deg);
    }
</style>