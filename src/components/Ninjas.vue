<template>
	<div id="ninjas" class="container mt-2">
		<div class="row">
			<div class="col"  v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
				<div class="card" style="width: 18rem;">
				  <img class="card-img-top" src="https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg">
				  <div class="card-body">
				  	<h3>{{ ninja.name }}</h3>
				    <p class="card-text" v-show="ninja.show">{{ ninja.speciality }}</p>
				  </div>
					<button class="btn btn-danger btn-block" @click="deleteNinja">Delete Ninja</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props:{
		ninjas: {
			type: Array,
			required: true
		}
	},
	data () {
	    return {
	    	
		}
	},
	methods: {
		deleteNinja() {
			this.ninjas.pop();
		}
	},
	//lifecycle hooks
	beforeCreate() {
		alert('beforeCreate');
	},
	created() {
		alert('created');
	},
	beforeMount() {
		alert('before mount');
	},
	mounted() {
		alert('mounted');
	},
	beforeUpdate() {
		alert('before Update');
	},
	updated() {
		alert('Updated');
	}
}
</script>

<style scoped>

</style>
