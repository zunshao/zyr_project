<template>
  <div class = "" id="App">
    <top-nav></top-nav>
    <main-content></main-content>
    <foot-show></foot-show>
  </div>
</template>

<script>
  import topNav from '@/components/topNav'
  import mainContent from '@/components/mainContent'
  import footShow from '@/components/footShow'
  export default {
    data() {
      return {
        key: ''
      }
    },
    props: [

    ],
    components: {
      topNav,
      mainContent,
      footShow
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style>
  @import "./assets/styles/main.css";
</style>
