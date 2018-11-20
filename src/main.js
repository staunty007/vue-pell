import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes,
	mode:'history'
});

//Filters
// Vue.filter('to-uppercase',(value) => {
// 	return value.toUpperCase();
// });

Vue.filter('snippet',(value) => {
	return  value.slice(0,100) + '......';
});

//Custome Directive
// Vue.directive('rainbow',{
// 	bind(el, binding, vnode) {
// 		el.style.color = "#" + Math.random().toString().slice(2,8);
// 	}
// });

// Vue.directive('theme', {
// 	bind(el,binding,vnode) {
// 		if (binding.value == 'wide') {
// 			el.style.maxWidth= "1200px";
// 		}
// 		else if (binding.value == 'narrow') {
// 			el.style.maxWidth= "700px"
// 		}
// 	}
// });

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
