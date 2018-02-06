<template>
  <div class="box-deviceList">
    <h6>设备列表</h6>
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
    <el-row>
      <el-button type="primary" size="medium">新建设备</el-button>
    </el-row>
    <el-table
      class="box-device-tableShow"
      :data="deviceData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="设备名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="type"
        label="设备型号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        label="设备状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="添加日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="shop"
        label="所属车间">
      </el-table-column>
      <el-table-column
        prop="factory"
        label="所属分公司">
      </el-table-column>
      <el-table-column
        prop="123445"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button type="primary" plain>编辑</el-button>
          <el-button type="danger" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: '',
      deviceData: [
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        },
        {
          name: 'ldfadff',
          type: 'x9934f-11',
          status: '运行中',
          addTime: '2018-09-12',
          shop: '***&^^%%&(*)()___l车间',
          factory: ')(*(***&************分公司'
        }
      ],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: '',
      value2: ''
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
  .box-deviceList{
    overflow: hidden;
  }
  .box-deviceList h6{
    font-size: 1.5rem;
    color: #282828;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .box-device-search{
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .box-device-tableShow{
    margin-top: 1rem;
  }
  .deviceListButton{
    margin-left: .5rem;
  }
  .deviceListCheck{
    margin-left: 1rem;
  }
</style>
