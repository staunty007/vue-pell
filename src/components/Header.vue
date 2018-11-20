<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <a class="navbar-brand" href="" @click.prevent="changeTitle">Vue Title</a>

		  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
		    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
		      <li class="nav-item">
		      	<router-link class="nav-link" to="/" exact>Blog</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/add" exact>Add Blog</router-link>
		      </li>
		    </ul>
		    <form class="form-inline my-2 my-lg-0">
		      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
		      <button class="btn btn-outline-default my-2 my-sm-0" type="submit">Search</button>
		    </form>
		  </div>
		</nav>
	</header>
</template>

<script>
import { bus } from '../main';

export default {
	props: {
		title: {
			type: String
		}
	},
  data () {
    return {
    	
    }
  },
  methods: {
  
  }
}
</script>

<style scoped>
.router-link-active{
	color: white;
	font-weight: bolder;
}
</style>
