<template>
	<div id="gitalk-container" />
</template>

<script>
import Gitalk from 'gitalk'
import Config from '../config'
import 'gitalk/dist/gitalk.css'

export default {
	name: 'gitalk-comment',
	props: {
		options: {
			type: Object,
			default: ()=> ({
				id: 1,
				number: 1
			})
		},
	},
	mounted() {
		const gitalk = new Gitalk({
			...Config.gitalkConfig,
			...this.config
		})
		gitalk.render('gitalk-container')
	},
}
</script>

<style scoped></style>
