<template>
	<footer class="footer">
      <div class="container">
        <span class="text-muted">{{ copyright }} {{ title }}</span>
      </div>
    </footer>
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
    	copyright: 'Copyright 2018 '
    }
  },
  created() {
    bus.$on('titleChanged',(data) => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
footer {
	background: lavender;
}
</style>
