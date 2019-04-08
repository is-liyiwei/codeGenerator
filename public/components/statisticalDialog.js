let statisticalDialogComponent = {
  name: 'statisticalDialogComponent',
  data() {
    return {
      dialogFormVisible: false
    }
  },
  props: {
    statisticalDialogContent: {
      type: Array,
      default: () => []
    }
  },
  render(_c) {
    return _c(
      'el-dialog',
      {
        props: {
          title: '数量统计',
          visible: this.dialogFormVisible
        },
        attrs: {
          id: 'statisticalDialog'
        },
        nativeOn: {
          click: e => {
            if (
              e.target.className.indexOf('el-dialog__wrapper') !== -1 ||
              e.target.className.indexOf('el-dialog__close el-icon el-icon-close') !== -1
            ) {
              this.dialogFormVisible = false
            }
          }
        }
      },
      [
        _c(
          'el-table',
          {
            props: {
              data: this.statisticalDialogContent
            }
          },
          [
            _c('el-table-column', {
              attrs: {
                align: 'center',
                prop: 'path',
                label: '目录'
              }
            }),
            _c('el-table-column', {
              attrs: {
                align: 'center',
                prop: 'num',
                label: '数量'
              }
            })
          ]
        ),
        _c(
          'div',
          {
            class: {
              'dialog-footer': true
            },
            slot: 'footer'
          },
          [
            _c(
              'el-button',
              {
                on: {
                  click: e => {
                    this.dialogFormVisible = false
                  }
                }
              },
              '关闭'
            )
          ]
        )
      ]
    )
  }
}
