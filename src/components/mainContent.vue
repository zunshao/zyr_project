<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>内容管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="orgListClick">组织概况</el-menu-item>
            <el-menu-item index="1-2" @click="deviceListClick">设备管理</el-menu-item>
            <el-menu-item index="1-3">设备点检</el-menu-item>
            <el-menu-item index="1-4">设备维护</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20" class="content">
      <router-view/>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      router: {
        orgList: 'orgList'
      }
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
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    orgListClick() {
      this.$router.push('/orgList')
    },
    deviceListClick() {
      this.$router.push('/deviceList')
    }
  }
}
</script>

<style scoped>
.content{
  min-height: 10rem;
  max-height: 84vh;
  overflow-y: auto;
  padding: 1rem;
}
</style>
