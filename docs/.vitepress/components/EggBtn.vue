<template>
    <div class="comp-egg-button">
        <span @click="visible = true">{{ name }}</span>
        <span v-show="visible" class="tips">{{ tips }}</span>
        <div class="dialog-wrapper" :style="dialogStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EggBtn',
    props: {
        name: {
            type: String,
            default: '-彩蛋-'
        },
        tips: {
            type: String,
            default: ''
        }
    },
    computed: {
        dialogStyle() {
            return this.visible ? 'display: block' : 'display: none'
        }
    },
    data() {
        return {
            visible: false
        }
    }
})
</script>

<style lang="scss" scoped>
.comp-egg-button {
    .tips {
        margin-left: 20px;
    }
}
</style>
