<template>
	<div class="comp-list">
		<div v-for="(item, index) in list" class="list-item" :key="index">
			<div class="head-box">
				<a :href="item.path" class="title">{{ item.title }}</a>
			</div>
			<div class="nav">
				<p class="time">{{ item.time }}</p>
				<p class="label">
					<span v-for="label in item.label" :key="label">{{ label }}</span>
				</p>
				<!--<span class="size"></span>-->
				<!--<span class="use-time"></span>-->
			</div>
			<div class="content">
				<span>{{ item.frontmatter.description }}……</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'pageList',
	data() {
		return {
			list: [],
		}
	},
	created() {
		console.log(this.$site?.pages)
		this.init()
	},
	methods: {
		init() {
			const pages = this.$site?.pages
			if (Array.isArray(pages) && pages.length > 0) {
				this.list = pages.filter((item) => item?.frontmatter?.label)
			}
		},
	},
}
</script>

<style lang="stylus" scoped>
	.comp-list
		box-shadow 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
		.list-item
			padding 20px;
			border-bottom 1px solid #E8E8E8;
</style>
