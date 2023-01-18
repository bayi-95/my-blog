<template>
	<div class="layout-footer"><span v-html="content"/> | Copyright © {{year}}</div>
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
    data(){
        return {
            year: new Date().getFullYear()
        }
    }
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

.home .features {
    padding-bottom: 55px;
}

@media (max-width: 768px) {
	.layout-footer {
		display: none;
	}
    .home .features {
        padding-bottom: 0;
    }
}
</style>
