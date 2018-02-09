<template>
  <div class="box-deviceList">
    <list-head :config-data="configData"></list-head>
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
        prop="jobPosition"
        width="120"
        label="所属工位">
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
import listHead from '@/components/listHead'
export default {
  data() {
    return {
      configData: {
        title: '设备列表',
        factoryList: [
          {
            value: '1',
            label: '03)*&^&*)))_公司'
          },
          {
            value: '2',
            label: '03)*&^&*)))_公司'
          },
          {
            value: '3',
            label: '03)*&^&*)))_公司'
          },
          {
            value: '4',
            label: '03)*&^&*)))_公司'
          }
        ],
        shopList: [
          {
            value: '1',
            label: '03)*&^&*)))_车间'
          },
          {
            value: '2',
            label: '03)*&^&*)))_车间'
          },
          {
            value: '3',
            label: '03)*&^&*)))_车间'
          },
          {
            value: '4',
            label: '03)*&^&*)))_车间'
          }
        ]
      },
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
      ]
    }
  },
  props: [

  ],
  components: {
    listHead
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
