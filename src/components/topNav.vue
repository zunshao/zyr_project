<template>
  <div class = "topNav">
    <div class="logo">
      LOGO
    </div>
    <ul class="nav-show">
      <li class="nav-active"><i class="el-icon-edit"></i>内容管理</li>
      <!--<li><Icon type="ios-keypad" />admin</li>
      <li><Icon type="ios-analytics"></Icon> 意见建议</li>-->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  props: [

  ],
  components: {

  },
  computed: {

  },
  mounted() {

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .topNav{
    width: 100vm;
    height: 9vh;
    line-height: 9vh;
    background: linear-gradient(90deg, #445dd1, #3298ff);
    overflow: hidden;
  }
  .logo{
    height: inherit;
    line-height: inherit;
    width: 3rem;
    margin-left: .5rem;
    font-weight: bold;
    color: #fff;
    float: left;
  }
  .nav-show{
    overflow: hidden;
    float: right;
    margin-right: 12rem;
  }
  .nav-show li{
    display: inline-block;
    float: left;
    width: fit-content;
    font-size: 1.1rem;
    color: #eee;
    margin-right: 2rem;
    cursor: pointer;
    font-weight: 500;
    transition: all .2s ease-in-out;
  }
  .nav-show li:hover{
    color: #fff;
    transition: all .2s ease-in-out;
  }
  .nav-show .nav-active{
    color: #fff;
  }
  .nav-show li:last-child{
    margin-right: 0;
  }
  .nav-show li i{
    margin-right: .2rem;
    display: inline-block;
    vertical-align: middle;
  }
</style>
