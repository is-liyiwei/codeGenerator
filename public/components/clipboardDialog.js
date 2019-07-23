let clipboardDialogComponent = {
  name: 'clipboardDialogComponent',
  data() {
    return {
      dialogFormVisible: false,
      title: '生成代码 - 生成的class，你们懂的(oﾟvﾟ)ノ'
    }
  },
  props: {
    content: String
  },
  render(_c) {
    return _c(
      'el-dialog',
      {
        attrs: {
          id: 'clipboardDialog',
          title: this.title,
          visible: this.dialogFormVisible
        },
        on: {
          'update:visible': ($event) => {
            this.dialogFormVisible = $event
          }
        }
      },
      [
        _c('el-input', {
          attrs: {
            type: 'textarea',
            autosize: {
              minRows: 2,
              maxRows: 10
            },
            placeholder: '请输入内容'
          },
          model: {
            value: this.content,
            callback: function(str) {
              this.content = str
            },
            expression: 'content'
          }
        }),
        _c(
          'div',
          {
            staticClass: 'dialog-footer',
            attrs: {
              slot: 'footer'
            },
            slot: 'footer'
          },
          [
            _c(
              'el-button',
              {
                on: {
                  click: $event => {
                    this.dialogFormVisible = false
                  }
                }
              },
              '取 消'
            )
          ]
        )
      ]
    )
  }
}
