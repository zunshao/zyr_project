<template>
  <div class = "orgListDetail-box">
    <!--<el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>-->
    <div class="orgListDetail-box-table">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        @cell-click="testClick"
        border
        width="100%"
        class="">
        <el-table-column
          prop="factoryName"
          label="分公司名称">
        </el-table-column>
        <el-table-column
          label="车间名称"
          width="250"
          prop="shopName"
          class="deviceList">
        </el-table-column>
        <el-table-column
          label="工位名称"
          width="180"
          prop="jobPosition">
        </el-table-column>
      </el-table>
    </div>
    <div class="addition-note">****点击表格对应元素，可进行组织概况编辑****</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          factoryName: ')(*)(*&(((公司1',
          shopName: '*&^*^**^事间车间1',
          jobPosition: '(*(*&工位1',
          rowIndex: '0',
          columnIndex: [0, 1],
          rowSpan: [4, 3]
        },
        {
          factoryName: ')(*)(*&(((公司1',
          shopName: '*&^*^**^事间车间1',
          jobPosition: '(*(*&工位2',
          rowIndex: '',
          columnIndex: [0, 1],
          rowSpan: [4, 3]
        },
        {
          factoryName: ')(*)(*&(((公司1',
          shopName: '*&^*^**^事间车间1',
          jobPosition: '(*(*&工位3',
          rowIndex: '',
          columnIndex: [0, 1],
          rowSpan: [4, 3]
        },
        {
          factoryName: ')(*)(*&(((公司1',
          shopName: '*&^*^**^事间车间2',
          jobPosition: '(*(*&工位1',
          rowIndex: '',
          columnIndex: [0],
          rowSpan: [3]
        },
        {
          factoryName: ')(*)(*&(((公司2',
          shopName: '*&^*^**^事间车间1',
          jobPosition: '(*(*&工位1',
          rowIndex: '',
          columnIndex: [],
          rowSpan: []
        },
        {
          factoryName: ')(*)(*&(((公司3',
          shopName: '*&^*^**^事间车间1',
          jobPosition: '',
          rowIndex: '',
          columnIndex: [],
          rowSpan: []
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
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      /*
      * (1)父通过 数据结构 rowIndex true or false来控制
      * (2)行列合并数组，每一行 各自 控制（显示 OR 隐藏）
      * */
      let re = null;
      let temColumnIndex = row.columnIndex.indexOf(columnIndex)
      if (temColumnIndex !== -1) {
        if (row.rowIndex && rowIndex === row.rowIndex * 1) {
          re = {
            rowspan: row.rowSpan[temColumnIndex],
            colspan: 1
          }
        } else {
          re = {
            rowspan: 0,
            colspan: 0
          }
        }
        return re
      }
    },
    testClick (row, column, cell, event) {
      console.log('aa', row, column, cell, event)
    }
  }
}
</script>

<style scoped>
  .orgListDetail-box{
    overflow: hidden;
    margin-top: 3rem;
  }
  .orgListDetail-box h6{
    font-weight: bold;
  }
  .orgListDetail-box-table{
    width: 50rem;
    margin: 0 auto;
  }
  .addition-note{
    color: #007aff;
    margin-top: 2rem;
    float: right;
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
