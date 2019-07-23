let settingDialogComponent = {
  name: 'settingDialogComponent',
  data() {
    return {
      dialogFormVisible: false,
      form: new SystemSettingParams()
    }
  },
  methods: {
    setSystemParams() {
      this.$emit('set-system-params', this.form)
      this.dialogFormVisible = false
    }
  },
  watch: {
    dialogFormVisible(newVal, olcVal) {
      this.form = Object.assign({}, this.$parent.systemParams)
    }
  },
  render(_c) {
    return _c(
      'el-dialog',
      {
        props: {
          title: '系统设置',
          visible: this.dialogFormVisible
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
        _c('div', {
          domProps: {
            innerHTML: `文本处理只有【'fixRemValue', '运行平台', 'class选择器'】起作用`
          },
          style: {
            color: 'red',
            marginBottom: '20px'
          }
        }),
        _c(
          'el-form',
          {
            props: {
              model: this.form
            }
          },
          [
            (() => {
              if (this.form.runtimePlatform != 'weapp') {
                return _c(
                  'el-form-item',
                  {
                    props: {
                      label: 'fixRemValue'
                    }
                  },
                  [
                    _c('el-input', {
                      on: {
                        change: val => {
                          this.form.fixRem = val
                        }
                      },
                      props: {
                        value: this.form.fixRem
                      }
                    })
                  ]
                )
              }
            })(),
            (() => {
              if (this.form.srcWay != 'base64') {
                return _c(
                  'el-form-item',
                  {
                    props: {
                      label: 'basePath'
                    }
                  },
                  [
                    _c('el-input', {
                      on: {
                        change: val => {
                          this.form.pathFix = val
                        }
                      },
                      props: {
                        value: this.form.pathFix
                      }
                    })
                  ]
                )
              }
            })(),
            _c(
              'el-form-item',
              {
                props: {
                  label: '运行平台'
                }
              },
              [
                _c(
                  'el-select',
                  {
                    on: {
                      change: val => {
                        this.form.runtimePlatform = val
                      }
                    },
                    props: {
                      value: this.form.runtimePlatform
                    }
                  },
                  ['vue', 'weapp'].map(v => {
                    return _c('el-option', {
                      props: {
                        label: v,
                        value: v
                      }
                    })
                  })
                )
              ]
            ),
            _c(
              'el-form-item',
              {
                props: {
                  label: '图片引入类型'
                }
              },
              [
                _c(
                  'el-select',
                  {
                    on: {
                      change: val => {
                        this.form.srcWay = val
                      }
                    },
                    props: {
                      value: this.form.srcWay
                    }
                  },
                  ['path', 'base64'].map(v => {
                    return _c('el-option', {
                      props: {
                        label: v,
                        value: v
                      }
                    })
                  })
                )
              ]
            ),
            _c(
              'el-form-item',
              {
                props: {
                  label: '是否添加id选择器，默认值为自身名字 + icon'
                }
              },
              [
                _c('el-switch', {
                  on: {
                    change: val => {
                      this.form.hasId = val
                    }
                  },
                  props: {
                    value: this.form.hasId
                  }
                })
              ]
            ),
            _c(
              'el-form-item',
              {
                props: {
                  label: '是否添加class选择器'
                }
              },
              [
                _c('el-switch', {
                  on: {
                    change: val => {
                      this.form.hasCommonClass = val
                    }
                  },
                  props: {
                    value: this.form.hasCommonClass
                  }
                })
              ]
            )
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
          ['取消', '确定'].map((v, idx) => {
            if (idx === 0) {
              return _c('el-button', {
                on: {
                  click: e => {
                    this.dialogFormVisible = false
                  }
                }
              }, v)
            }
            if (idx === 1) {
              return _c('el-button', {
                on: {
                  click: e => {
                    this.setSystemParams()
                  }
                },
                props: {
                  type: 'primary'
                }
              }, v)
            }
          })
        )
      ]
    )
  }
}
