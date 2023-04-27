<template></template>

<script>
export default {
    name: 'SakuraFlying',
    mounted() {
        import('../utils/sakura-flying').then(({ startSakura }) => {
            startSakura()
        })
    }
}
</script>
