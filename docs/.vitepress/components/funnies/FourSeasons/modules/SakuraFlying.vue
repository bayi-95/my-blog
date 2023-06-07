<template></template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SakuraFlying',
    mounted() {
        import('../utils/sakura-flying').then(({ startSakura }) => {
            startSakura()
        })
    }
})
</script>
