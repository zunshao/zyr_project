<template>
  <div class = "organizationList-box">
    <h6>组织概况</h6>
    <list-detail></list-detail>
    <!--<list-detail></list-detail>
    <list-detail></list-detail>
    <list-detail></list-detail>
    <list-detail></list-detail>
    <list-detail></list-detail>-->
  </div>
</template>

<script>
import listDetail from '@/components/orgListDetail'
export default {
  data() {
    return {
      key: ''
    }
  },
  props: [

  ],
  components: {
    listDetail
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
  .organizationList-box h6{
    font-size: 1.5rem;
    color: #282828;
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>
