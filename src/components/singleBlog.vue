<template>
	<div id="single-blog" class="container">
		<h1>{{blog.title}}</h1>
		<article>{{ blog.content }}</article>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id:this.$route.params.id,
			blog: {}
		}
	},
	created() {
		this.$http.get('https://vue-fr.firebaseio.com/posts/'+this.id + '.json').then((data) => {
			return data.json();
		}).then((data) => {
			this.blog = data;
		});
	}
}	
</script>