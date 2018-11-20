<template>

<div id="add-blog" class="container">
  <div class="row">
    <div class="col">
      <h2>Add a New Blog</h2>
      <form v-if="!submitted">
        <label for="">Blog Title</label>
        <input type="text" name="" required class="form-control" v-model.lazy="blog.title">
        <label for="">Blog Content</label>
        <textarea name="" id="" cols="20" rows="10" class="form-control" v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
          <div class="form-check-inline">
          <input type="checkbox"class="form-check-input" value="ninjas" v-model="blog.categories">
          <label for="" class="form-check-label">Ninjas</label>
          </div>
          <div class="form-check-inline">
          <input type="checkbox"class="form-check-input" value="wizards" v-model="blog.categories">
          <label for="" class="form-check-label">Wizards</label>
           </div>
          <div class="form-check-inline">
          <input type="checkbox"class="form-check-input" value="mario" v-model="blog.categories">
          <label for="" class="form-check-label">Mario</label>
           </div>
          <div class="form-check-inline">
          <input type="checkbox"class="form-check-input" value="cheese" v-model="blog.categories">
          <label for="" class="form-check-label">Cheese</label>
           </div>
        </div>
        <select class="custom-select" v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
        <button @click.prevent="post" class="btn btn-primary">Add Blog</button>
      </form>
      <h4 v-if="submitted" class="text-success">Thanks For Adding Your Post</h4>
    </div>


    <div class="col">
      <div id="preview" class="mt-3">
      <h3>Preview Blog</h3>
      <p class="text-primary">Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p class="text-primary">{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: <span class="text-primary">{{ blog.author }}</span></p>
    </div>
    </div>
  </div>
</div>
     
</template>

<script>
// import addBlog from './components/addBlog.vue';

export default {
  components: {
    // 'app-header': Header,
    // 'app-ninjas': Ninjas,
    // 'app-footer': Footer
    // 'form-helper': formHelper
  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors:['The Philips','Rangers','Lmntrix','Lavenders'],
      submitted:false
    }
  },
  methods: {
    post() {
      this.$http.post('https://vue-fr.firebaseio.com/posts.json',this.blog).then((data)=> {
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style>

</style>
