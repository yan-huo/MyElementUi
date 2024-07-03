<template>
  <div style='width: 100%;height: 100%;'>
    <el-image-custom style='width: 100px; height: 100px' @sign-img='handleSignImg' @clear-sign-img='handleClearSignImg' :viewer-props='viewerProps' :src='testImg' :preview-src-list='previewSrcList'></el-image-custom>
    <el-dialog title="图片编辑" :close-on-press-escape="false" append-to-body custom-class="sign-img-preview-dialog"
               :visible.sync="signImgPreviewVisible" width="90%">
      <image-editor v-if="signImgPreviewVisible" ref="imageEditor" :load-url="signImgSrc"
                    :unique-key="previewSrcList[signImgIndex]"></image-editor>
      <div slot="footer" class="footer-btn-box">
        <el-button size="small" type="primary" @click="confirmSignImg">确定</el-button>
        <el-button size="small" @click="signImgPreviewVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      signImgPreviewVisible: false,
      signImgIndex: -1,
      viewerProps: {
        modelType: 'ORIGINAL',
        viewerCtrl: true,
        showDefectBtn: true,
        zoomRate: 0.1
      },
      testImg: 'http://192.168.1.98:8092/file/files/9273260e80b04613bc5b23ff8d5459cd/download?token=root',
      previewSrcList: ['http://192.168.1.98:8092/file/files/9273260e80b04613bc5b23ff8d5459cd/download?token=root', 'http://192.168.1.98:8092/file/files/98ede8521093475b91599eae50511af9/download?token=root']
    };
  },
  methods: {
    handleSignImg: function() {
      this.viewerProps.hasDefect = true
    },
    handleClearSignImg: function() {
      this.viewerProps.hasDefect = false
    },
    confirmSignImg: function() {

    }
  }
};
</script>