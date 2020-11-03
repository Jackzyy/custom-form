/**
 * 组件基础属性统一出口
 * @param attributes 组件属性
 * @param children 嵌套数组
 */
let basicProp = [
  {
    id: 1,
    type: 'input',
    icon: 'el-icon-more',
    name: '单行文本',
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
    attributes: {
      type: 'primary'
    }
  },
  {
    id: 3,
    type: 'card',
    icon: 'el-icon-info',
    name: '卡片',
    attributes: {},
    children: []
  }
]

export default basicProp
