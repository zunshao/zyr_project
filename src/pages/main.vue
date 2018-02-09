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
        <span>车间总数：</span>
        <div class="show-shop-num">200</div>
        <span>工位总数：</span>
        <div class="show-jobPosition-num">2000</div>
      </div>
      <div>
        <el-button size="medium">组织编辑</el-button>
      </div>
    </el-card>
    <el-card class="box-card-device">
      <h6>设备记录</h6>
      <div class="show-device-detail">
        <div class="device-total-num detail">
          <span>设备统计：</span>
          <ul>
            <li><span class="detail-title">设备总数:</span><el-button plain size="small" class="detail-button">32333</el-button></li>
          </ul>
        </div>
        <div class="device-check-num detail">
          <span>点检记录：</span>
          <ul>
            <li><span class="detail-title">正常：</span><el-button plain size="small" class="detail-button">32333</el-button></li>
            <li><span class="detail-title">已处理：</span><el-button class="detail-button" type="success" plain size="small">3345</el-button></li>
            <li><span class="detail-title">当前异常：</span><el-button class="detail-button" type="danger" plain size="small">890</el-button></li>
          </ul>
        </div>
        <div class="device-check-num detail">
          <span>维修记录：</span>
          <ul>
            <li><span class="detail-title">已处理：</span><el-button class="detail-button" type="success" plain size="small">3345</el-button></li>
            <li><span class="detail-title">维修中：</span><el-button class="detail-button" type="danger" plain size="small">890</el-button></li>
          </ul>
        </div>
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
    font-weight: bold;
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
    width: 32rem;
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
  }
  .box-card-device{
    width: 51.2rem;
    display: block;
    position: relative;
    padding-top: 1.2rem;
    height: 14.6rem;
    margin-top: 1rem;
  }
  .show-device-detail{
    overflow: hidden;
    margin-top: 1rem;
  }
  .show-device-detail .detail{
    float: left;
    margin-left: 3.8rem;
  }
  .box-main{
    width: fit-content;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .show-device-detail ul{
    margin-top: .5rem;
    margin-left: 1.2rem;
  }
  .show-device-detail ul li{
    margin-bottom: .4rem;
  }
  .show-device-detail .detail-title{
    display: inline-block;
    width: 5.6rem;
  }
  .box-card-device .detail-button{
    width: 4rem;
  }
</style>
