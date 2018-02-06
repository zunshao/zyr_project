<template>
  <div class="box-checkList">
    <h6>点检列表</h6>
    <div class="box-device-search">
      <el-select v-model="value1" placeholder="请选择公司" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value1" placeholder="请选择车间" class="deviceListCheck">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" class="deviceListButton">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: '',
      checkData: [
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          checker: 'zhang',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        }
      ]
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

</style>
