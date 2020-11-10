/**
 * 表单组件属性统一出口
 */
export const basicProps = [
  {
    type: 'input',
    icon: 'icon-danhangwenben',
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
  }
]

export const layoutProps = [
  {
    type: 'card',
    icon: 'icon-qiapian',
    name: '卡片',
    attributes: {
      shadow: 'always',
      styles: ''
    },
    children: []
  },
  {
    type: 'grid',
    icon: 'icon-zhagebuju',
    name: '栅格布局',
    attributes: {},
    children: [
      {
        id: 1,
        span: 12,
        attributes: {},
        children: []
      },
      {
        id: 2,
        span: 12,
        attributes: {},
        children: []
      }
    ]
  }
]

export const formConfig = {
  lableWidth: '100',
  labelPosition: 'right',
  size: '',
  styles: ''
}
