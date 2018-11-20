<template>
  <!-- <div>
    <app-header :title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer :title="title"></app-footer>
  </div> -->
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
     
</template>

<script>
// import Header from './components/Header.vue';
// import Ninjas from './components/Ninjas.vue';
// import Footer from './components/Footer.vue';
// import formHelper from './components/formHelper.vue';
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlog from './components/listBlog.vue';
import Header from './components/Header.vue';

export default {
  components: {
    // 'app-header': Header,
    // 'app-ninjas': Ninjas,
    // 'app-footer': Footer
    // 'form-helper': formHelper
       'add-blog': addBlog,
       'show-blogs': showBlogs,
       'list-blog': listBlog,
       'app-header': Header
  },
  data () {
    return {
      // ninjas: [
      //     {name: 'Ryu', speciality: 'Vue Components', show: false},
      //     {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
      //     {name: 'Hitoshi', speciality: 'Click Events', show: false},
      //     {name: 'Tango', speciality: 'Conditionals', show: false},
      //     {name: 'Kami', speciality: 'Webpack', show: false},
      //     {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      // ],
      // title: "Vue-Ninjas"
    }
  },
  methods: {
    // updateTitle(updatedTitle){
    //   this.title = updatedTitle;
    // }
  }
}
</script>

<style>

</style>
