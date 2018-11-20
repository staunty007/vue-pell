<template>
  <div id="show-blogs" class="container">
    <div class="col-12 text-center">
       <a class="blog-header-logo text-dark" href="#">All Blog Articles</a>
    </div>
  
      <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="search">
  
    <div v-for="blog in filteredBlogs" class="single-blog bg-light mt-3">
      <router-link :to="'/blog/' + blog.id">{{ blog.title | toUpperCase }}</router-link>
      <p>{{ blog.content | snippet }}</p>
      <small>Author: {{ blog.author }}</small>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
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
    this.$http.get('https://vue-fr.firebaseio.com/posts.json').then((data) => {
      // this.blogs = data.body.slice(0,10);
      return data.json();
     }).then((data) => {
      var blogsArray = [];
      for(let key in data) {
        data[key].id = key
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
     });
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
