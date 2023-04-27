<template>
    <component :is="component" />
</template>

<script>
import SakuraFlying from './modules/SakuraFlying.vue'
import { markRaw } from 'vue'

const SEASON_MAP = {
    spring: SakuraFlying,
    summer: 'summer',
    autumn: 'autumn',
    winter: 'winter'
}

export default {
    name: 'SeasonsComps',
    data() {
        return {
            component: null,
            season: ''
        }
    },
    created() {
        this.component = markRaw(SEASON_MAP[this.judgeSeason()])
    },
    methods: {
        judgeSeason() {
            const month = new Date().getMonth() + 1
            let result = ''
            switch (month) {
                case 3:
                case 4:
                case 5:
                    result = 'spring'
                    break
                case 6:
                case 7:
                case 8:
                    result = 'summer'
                    break
                case 9:
                case 10:
                case 11:
                    result = 'autumn'
                    break
                case 12:
                case 1:
                case 2:
                    result = 'winter'
                    break
            }
            return result
        }
    }
}
</script>
