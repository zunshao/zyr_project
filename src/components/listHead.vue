<template>
  <div class="box-listHead">
    <h6>{{configData.title}}</h6>
    <div class="box-search">
      <el-select v-model="factoryResult" placeholder="请选择公司" >
        <el-option
          v-for="item in configData.factoryList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="shopResult" placeholder="请选择车间" class="headCheckShop">
        <el-option
          v-for="item in configData.shopList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="shopResult" placeholder="请选择工位 " class="headCheckShop">
        <el-option
          v-for="item in configData.shopList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" class="headButton">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      factoryResult: '',
      shopResult: ''
    }
  },
  props: ['configData'],
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
  .box-listHead{
    overflow: hidden;
  }
  .box-listHead h6{
    font-size: 1.5rem;
    color: #282828;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .box-search{
    width: fit-content;
    height: 3rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .headButton{
    margin-left: .5rem;
  }
  .headCheckShop{
    margin-left: 1rem;
  }
</style>
