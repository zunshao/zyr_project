<template>
  <div class = "orgListDetail-box">
    <h6>****&^&^&%分公司</h6>
    <div class="orgListDetail-box-table">
      <el-table
        :data="tableData"
        border
        width="100%"
        class="">
        <el-table-column
          prop="shopName"
          label="车间名称">
        </el-table-column>
        <el-table-column
          label="设备数量"
          width="150"
          class="deviceList">
          <template slot-scope="scope">
            <div class="table-deviceNum-detail">{{ scope.row.deviceNum }}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="点检次数"
          width="150">
          <template slot-scope="scope">
            <div class="table-checkNum-detail">{{ scope.row.checkNum }}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="维修次数"
          width="150">
          <template slot-scope="scope">
            <div class="table-modifyNum-detail">{{ scope.row.modifyNum }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: '',
      tableData: [
        {
          shopName: '*&^*^**^事间车间',
          deviceNum: 20,
          modifyNum: 33,
          checkNum: 90
        },
        {
          shopName: '*&^*^**^事间车间',
          deviceNum: 20,
          modifyNum: 33,
          checkNum: 90
        },
        {
          shopName: '*&^*^**^事间车间',
          deviceNum: 20,
          modifyNum: 33,
          checkNum: 90
        },
        {
          shopName: '*&^*^**^事间车间',
          deviceNum: 20,
          modifyNum: 33,
          checkNum: 90
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
  .orgListDetail-box{
    overflow: hidden;
    margin-top: 3rem;
    padding-left: 2rem;
  }
  .orgListDetail-box h6{
    font-weight: bold;
  }
  .orgListDetail-box-table{
    width: 50rem;
    margin: 0 auto;
  }
  .table-deviceNum-detail, .table-modifyNum-detail, .table-checkNum-detail{
    color: #007aff;
    cursor: pointer;
    font-weight: bold;
  }
  .table-deviceNum-detail:hover{
    color: #3db4d8;
  }
  .table-modifyNum-detail:hover{
    color: #3db4d8;
  }
  .table-checkNum-detail:hover{
    color: #3db4d8;
  }
</style>
