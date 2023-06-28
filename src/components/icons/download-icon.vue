<template>
    <svg :width="width" :height="height" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 38H5V46H43V38H48V46V51H0V46V38Z" fill="#5E5E5E" />
        <path class="arrow" fill-rule="evenodd" clip-rule="evenodd" d="M21.9999 24.4644L21.9999 0H26.9999L26.9999 23.981L34.9808 16L38.5164 19.5355L27.7937 30.2582L27.7951 30.2595L24.2595 33.7951L10 19.5355L13.5355 16L21.9999 24.4644Z" fill="#5E5E5E"/>
    </svg>
</template>
<script>
export default {
    name: 'download-icon',
    props: {
        width: String,
        height: String,
    }
}
</script>
<style>
    
</style>
