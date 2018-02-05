<template>
  <div class="box-main">
    <el-card class="box-card">
      <h6>用户名片</h6>
      <div class="left">
        <i class="el-icon-warning"></i>
      </div>
      <div class="right">
        <div class="top">admin</div>
        <div class="bottom">超级管理员</div>
      </div>
    </el-card>
    <el-card class="box-card-total">
      <h6>组织概况</h6>
      <div class="show-total-detail">
        <span>分公司数：</span>
        <div class="show-factory-num">9</div>
        <span>车间数：</span>
        <div class="show-shop-num">2</div>
      </div>
      <div>
        <el-button size="medium">添加分公司</el-button>
        <el-button size="medium">添加车间</el-button>
      </div>
    </el-card>
    <el-card class="box-card-device">
      <h6>设备记录</h6>
      <div class="show-device-detail">
        <span>设备数：</span>
        <div class="device-num">9</div>
        <span>维修记录：</span>
        <div class="device-modify-num">2</div>
        <span>点检记录：</span>
        <div class="device-check-num">2</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: ''
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

  }
}
</script>

<style scoped>
  .box-card{
    display: inline-block;
    width: 18rem;
    overflow: hidden;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-top: 1.2rem;
    position: relative;
    height: 8.6rem;
  }
  .box-card .left{
    float: left;
  }
  .box-card h6, .box-card-total h6, .box-card-device h6{
    position: absolute;
    left: .5rem;
    top: .5rem;
  }
  .box-card .right{
    float: left;
    margin-left: 1rem;
    padding-top: .5rem;
  }
  .left i{
    font-size: 4rem;
    color: #007aff;
  }
  .box-card-total{
    display: inline-block;
    width: 22rem;
    margin-left: 1rem;
    padding-top: 1.2rem;
    position: relative;
  }
  .show-total-detail{
    margin-bottom: .8rem;
  }
  .show-total-detail span, .show-total-detail div{
    display: inline-block;
  }
  .show-total-detail > span:nth-child(3){
    margin-left: 1rem;
  }
  .show-total-detail div{
    width: 4rem;
    height: 1.8rem;
    text-align: center;
    color: #fff;
    line-height: 1.8rem;
    background-color: #007aff;
    border-radius: 5px;
    cursor: pointer;
  }
  .box-card-device{
    width: 41.2rem;
    display: block;
    position: relative;
    padding-top: 1.2rem;
    height: 8.6rem;
    margin-top: 1rem;
  }
  .show-device-detail span, .show-device-detail div{
    display: inline-block;
  }
  .show-device-detail div{
    width: 4rem;
    height: 1.8rem;
    text-align: center;
    color: #fff;
    line-height: 1.8rem;
    background-color: #007aff;
    border-radius: 5px;
    cursor: pointer;
    margin-right: .8rem;
  }
  .show-device-detail{
    margin-top: 1.4rem;
  }
  .box-main{
    width: 50rem;
    margin: 0 auto;
    margin-top: 2rem;
  }
</style>
