/**
 * 字典选择器
 * 注：自定义组件规范：
 * 1、对外默认提供v-model配置,raw-value
 * 2、对外提供readonly、disabled、size属性
 * 3、对外接口事件：select-fn,具体参数请自定义
 * Created by xxx on 2018/05/07.
 */
(function (vue, $, name) {
  vue.component(name, {
    template: '<div>\
             <div class="yu-single-upload">\
              <yu-upload ref="upload" :action="action" :limit-number="limit" :disabled="disabled" :data="dataObj" list-type="listType" :multiple="false" :file-list="fileList" :on-remove="handleRemove" :on-success="handleUploadSuccess" :before-upload="beforeUpload" :on-error="handleError">\
                <yu-button size="small" type="primary" :disabled="disabled">点击上传</yu-button>\
                <span slot="tip" class="el-upload__tip" v-if="uploadText" style="margin-left:10px;"> {{ uploadText }} </span>\
              </yu-upload>\
              <transition name="el-zoom-in-top">\
                <ul class="loaded-file-list" v-if="fileInfo.length">\
                  <li v-for="(item, key) in fileInfo" :key="item.fileId">\
                    <span   @click="download(item, key)"></span>\
                    <div class="file-info" @click="download(item, key)">\
                      <p class="elli">{{ item.fileName }}</p>\
                      <span class="elli">{{ item.fileSize | formatFileSize }}</span>\
                    </div>\
                    <p v-if="!disabled" class="delete" @click="deleteFile(item, key)"><span class="yu-icon-delete"></span></p>\
                  </li>\
                </ul>\
              </transition>\
            </div>\
          </div>',

    props: {
      uploadText: String, // 上传规则说明
      // 文件限制个数
      limit: {
        type: Number,
        required: false,
        default: 10
      },
      // 是否禁用上传
      disabled: {
        type: Boolean,
        default: false
      },
      // 上传文件的最大值 默认10M
      maxSize: {
        type: Number,
        required: false,
        default: 10
      },
      // 文件列表的类型 text/picture/picture-card
      listType: {
        type: String,
        default: 'text'
      },
      // 上传地址
      action: {
        type: String,
        default: yufp.util.addTokenInfo(
          backend.fileService + '/api/file/provider/uploadfile'
        )
      },
      // 上传服务文件名
      dirName: {
        type: String,
        default: ''
      },
      file: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },

    data: function () {
      var _self = this;
      return {
        fileInfo: [], // 展示的附件列表
        fileList: [], // 组件上传列
        loadFileNum: 0, // 正在现在的文件数量
        dataObj: {
          policy: '',
          signature: '',
          key: '',
          ossaccessKeyId: '',
          dir: '',
          host: ''
        }
      };
    },
    watch: {
    // 正在上传的文件数量，用于提交时判断文件是否提交完成
      loadFileNum (val) {
        this.$emit('load-number', val);
      },
      // 页面初始化列表展示
      file: {
        deep: true,
        handler (val) {
          this.fileInfo = yufp.extend([], val);
          this.fileInfo.forEach((item) => {
            if (item.extName.startsWith('.')) {
              const type = item.extName.substring(
                item.extName.lastIndexOf('.') + 1
              );
              item.extName = this.getICon(type);
            }
          });
          this.loadFileNum = val.length;
        }
      }
    },
    methods: {
    /**
     * 获取uuid
     */
      getUUID () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          return (c === 'x'
            ? (Math.random() * 16) | 0
            : 'r&0x3' | '0x8'
          ).toString(16);
        });
      },

      // 获取文件上传参数
      policy () {
        return new Promise((resolve, reject) => {
          this.$request({
            method: 'get',
            url: backend.appOcaService + '/api/oss/policy'
          }).then((response) => {
            resolve(response);
          });
        });
      },

      /**
     * 文件上传失败时的钩子
     */
      handleError (err, file, fileList) {
        this.loadFileNum = this.loadFileNum - 1;
      },

      /**
     * 文件列表移除文件时的钩子
     */
      handleRemove (file, fileList) {
        this.$refs.upload.abort(file);
        this.loadFileNum = this.loadFileNum - 1;
      },

      /**
     * 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
     */
      beforeUpload (file) {
        const isMaxSize = file.size < 10;
        const limitNum = this.fileInfo.length < this.limit;
        this.loadFileNum = this.loadFileNum + 1;
        if (isMaxSize) {
          this.$message.error('错误');
          return false;
        }
        if (!limitNum) {
          this.$message.error('错误');
          return false;
        }
      // return new Promise((resolve, reject) => {
      //   this.policy()
      //     .then((response) => {
      //       this.dataObj.signature = response.data.signature;
      //       this.dataObj.ossaccessKeyId = response.data.ossaccessKeyId;
      //       this.dataObj.key =
      //         response.data.dir + this.getUUID() + "_${filename}";
      //       this.dataObj.dir = this.dirName + response.data.dir;
      //       this.dataObj.host = response.data.host;
      //       this.dataObj.policy = response.data.policy;
      //       this.dataObj.expire = response.data.expire;
      //       resolve(true);
      //     })
      //     .catch(() => {
      //       reject(false);
      //     });
      // });
      },

      /**
     * 文件上传成功时的钩子
     */
      handleUploadSuccess (res, file, fileList) {
        var index = fileList.indexOf(file);
        var fileSize = (file.size / 1024).toFixed(2);
        if (index > -1) {
          fileList.splice(index, 1);
        }
        if (this.fileInfo.length >= this.maxSize) {
          this.$message.error('错误');
          this.loadFileNum = this.loadFileNum - 1;
          return;
        }
        if (file) {
          const fileObj = {};
          const nameArr = file.name.split('.');
          fileObj.fileName = file.name;
          fileObj.fileSize = fileSize;
          fileObj.fileId = res.data;
          fileObj.filePath =
          this.dataObj.host +
          '/' +
          this.dataObj.key.replace('${filename}', file.name);
          fileObj.extName = this.getICon(nameArr[1]);
          this.fileInfo.push(fileObj);
          this.$emit('uploaded', fileObj);
        }
      },

      /**
     * 根据文件类型显示icon
     * @param e.value 搜索框的值
     */
      getICon (type) {
        var icon = '';
        if (type === 'xls' || type === 'xlsx') {
          icon = 'yu-icon-read';
        } else if (type === 'doc' || type === 'docx') {
          icon = 'yu-icon-word';
        } else if (type === 'ppt' || type === 'pptx') {
          icon = 'yu-icon-data';
        } else if (type === 'pdf') {
          icon = 'yu-icon-pdf';
        } else if (type === 'txt') {
          icon = 'yu-icon-details';
        } else if (type === 'zip') {
          icon = 'yu-icon-zip';
        } else if (type === 'rar') {
          icon = 'yu-icon-zip';
        } else if (
          type === 'png' ||
        type === 'jpg' ||
        type === 'jpeg' ||
        type === 'svg' ||
        type === 'gif'
        ) {
          icon = 'yu-icon-img';
        } else {
          icon = 'yu-icon-infofile';
        }
        return icon;
      },

      // 删除已上传的附件
      deleteFile (item, index) {
        var _this = this;
        _this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          callback: function (action) {
            if (action === 'confirm') {
            // 删除文件
              if (item.fileId) {
                _this.$request({
                  method: 'post',
                  url: yufp.util.addTokenInfo(
                    backend.fileService +
                    '/api/file/provider/delete/' +
                    item.fileId
                  )
                }).then((response) => {
                  _this.fileInfo.splice(index, 1);
                  _this.$emit('delete', item);
                  _this.loadFileNum = _this.loadFileNum - 1;
                });
              } else {
                _this.fileInfo.splice(index, 1);
                _this.$emit('delete', item);
                _this.loadFileNum = _this.loadFileNum - 1;
              }
            } else {
              _this.$message({
                message: '已取消删除',
                type: 'info'
              });
            }
          }
        });
      },
      download (item, index) {
        if (item.fileId) {
          yufp.util.download(
            yufp.util.addTokenInfo(
              backend.fileService +
              '/api/file/provider/download?fileId=' +
              item.fileId
            )
          );
        }
      }
    }


  });
}(Vue, yufp.$, 'yu-single-upload'));