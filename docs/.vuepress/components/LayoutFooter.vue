<template>
	<div class="layout-footer"><span v-html="content"/> | Copyright © 2021</div>
</template>

<script>
export default {
	name: 'LayoutFooter',
	props: {
		content: {
			type: String,
			default: `
				<span>部分文章收录于网络，转载请署名出处；联系博主可以发邮件至</span>
				<a href="mailto:necro.vice@yahoo.com">necro.vice@yahoo.com</a>
			`,
		},
	},
}
</script>

<style>
.layout-footer {
	/*position: fixed;*/
	/*bottom: 0;*/
	/*left: 0;*/
	/*z-index: 1;*/
	width: 100%;
	height: 54px;
	background-color: #fff;
	line-height: 54px;
	text-align: center;
	border-top: 1px solid #eaecef;
	font-size: 14px;
}

@media (max-width: 768px) {
	.layout-footer {
		display: none;
	}
}
</style>
