<template>
  <div id="show-blogs" class="container">
    <div class="col-12 text-center">
       <a class="blog-header-logo text-dark" href="#">List Blog Titles</a>
    </div>
      <input class="form-control" type="text" placeholder="Search" v-model="search">
    
    <div v-for="blog in filteredBlogs" class="single-blog bg-light mt-2">
      <h5 v-rainbow>{{ blog.title | toUpperCase }}</h5>
      <!-- <p>{{ blog.body | snippet }}</p> -->
    </div>
  </div>
     
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {

  data () {
    return {
      blogs:[],
      search: ''
    }
  },
  methods: {
    
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      this.blogs = data.body.slice(0,10);
     })
  },
  computed: {
    
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
      el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>

</style>
