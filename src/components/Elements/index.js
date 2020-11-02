/**
 * 组件基础属性统一出口
 */
let basicProp = [
  {
    id: 1,
    type: 'input',
    icon: 'el-icon-more',
    name: '单行文本',
    widgetSelect: false,
    attributes: {
      defaultValue: '',
      styles: 'width:100%',
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: '',
      disabled: false
    }
  },
  {
    id: 2,
    type: 'button',
    icon: 'el-icon-info',
    name: '按钮',
    widgetSelect: false,
    attributes: {
      type: 'primary'
    }
  }
]

export default basicProp
