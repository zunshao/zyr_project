<template>
  <div class="home">
    <el-button  @click="dialogFormVisible = true">新建</el-button>
    <!--文章Dialog当前全局-->
    <el-dialog title="新建文章" :visible.sync="dialogFormVisible" :width="form.width">
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="articleConfirm">确 定</el-button>
      </div>
    </el-dialog>

    <el-upload
      class="upload-pic"
      action=" http://localhost:8080/picApi/addPic"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="picList"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      picList: [],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        width: '80%'
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    articleConfirm: function () {
      this.dialogFormVisible = false
      this.$http({
        url: '/api/addArticle',
        method: 'post',
        data: {
          title: this.form.name,
          desc: this.form.desc,
        }
      }).then(function (response) {
        console.log(response)
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  overflow: hidden;
}
.el-row:last-child{
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
