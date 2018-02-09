<template>
  <div class="box-checkList">
    <h6>设备点检</h6>
    <div class="box-device-search">
      <el-select v-model="value1" placeholder="请选择公司" class="deviceListCheck">
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
      <el-select v-model="value1" placeholder="请选择工位" class="deviceListCheck">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value1" placeholder="设备状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </div>
    <div class="box-device-search">
      <el-date-picker
        class="deviceListCheck checkDataInput"
        v-model="getDate"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2">
      </el-date-picker>
      <el-input v-model="input" placeholder="请输入查询设备名称" class="inputDeviceName deviceListCheck"></el-input>
      <el-button type="primary" class="checkListButton">查询</el-button>
    </div>
    <el-table
      class="check-list-table"
      :data="checkData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="deviceName"
        label="设备名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="deviceType"
        label="设备型号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="checkPart"
        label="检测部位"
        width="150">
      </el-table-column>
      <el-table-column
        prop="checkTime"
        label="点检日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="点检人员"
        width="150">
      </el-table-column>
      <el-table-column
        prop="jobPosition"
        label="工位名称"
        width="220">
      </el-table-column>
      <el-table-column
        prop="deviceShop"
        label="车间名称"
        width="250">
      </el-table-column>
      <el-table-column
        prop="deviceFactory"
        label="分公司名称"
        width="260">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="check-page-box"
      background
      layout="prev, pager, next"
      :total="1000"
      :page-size="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      options: [],
      value1: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      getDate: '',
      checkData: [
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        },
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        },
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        },
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        },
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        },
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        },
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
          deviceShop: 'asdfdsfasdff%^^&车间',
          deviceFactory: 'dfklelkre*&^$#公司'
        },
        {
          deviceName: '222334',
          deviceType: 'sfafe-er',
          checkPart: '刀具',
          checkTime: '2018-09-13',
          status: '正常',
          checker: 'zhang',
          jobPosition: '(*&(*工位',
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
    handleClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
  .box-checkList{
    overflow: hidden;
  }
  .box-checkList h6{
    font-size: 1.5rem;
    color: #282828;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .deviceListCheck{
    margin-right: 1rem;
  }
  .inputDeviceName{
    width: 12rem;
  }
  .checkDataInput{
    width: 24rem;
  }
  .box-device-search{
    width: 59.2rem;
    margin: 0 auto;
    margin-bottom: .6rem;
  }
  .checkListButton{
    float: right;
  }
  .check-list-table{
    margin-top: 4rem;
  }
  .check-page-box{
    width: fit-content;
    margin: 0 auto;
    margin-top: 1.2rem;
  }
</style>
