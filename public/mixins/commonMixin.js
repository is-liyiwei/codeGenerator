let commonMixin = {
  data() {
    return {
      // 控制loading
      loading: null
    }
  },
  created() {
    this.loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  },
  mounted() {
    this.tableHeigth = window.innerHeight - this.$refs.settingContainer.getBoundingClientRect().height - 50
  },
  methods: {
    toPage(pageName) {
      window.location.replace(`${pageName}.html`)
    },
    setDialogStatus(refName, status = true) {
      this.$refs[refName].dialogFormVisible = status
    },
    // 查看对应图片的代码
    getCode(code) {
      this.clipboardDialogContent = code
      this.setDialogStatus('clipboardDialog', true)
    },
    fixStyle (num) {
      let result = num
      if (this.systemParams.runtimePlatform === globalRuntimePlatform.vue) {
        // 属于vue(web)平台，则转换成rem
        result = (num / this.systemParams.fixRem).toFixed(6) * 1
      }
      return result
    }
  }
}
