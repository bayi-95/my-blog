<template>
	<div class="layout-footer">
		<span>{{ content }}</span> | Copyright © 2021
	</div>
</template>

<script>
export default {
	props: {
		content: {
			type: String,
			default:
				'部分文章收集于网络，转载请著名出处，联系博主可以发邮件至<necro.vice@yahoo.com>',
		},
	},
}
</script>

<style>
.layout-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 54px;
	background-color: #fff;
	line-height: 54px;
	text-align: center;
	border-top: 1px solid #eaecef;
	font-size: 14px;
}
</style>
