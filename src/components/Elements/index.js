/**
 * 表单组件基础属性统一出口
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
  },
  {
    type: 'button',
    icon: 'icon-anniu',
    name: '按钮',
    attributes: {
      type: 'primary'
    }
  }
]

export const layoutProps = [
  {
    type: 'card',
    icon: 'icon-qiapian',
    name: '卡片',
    attributes: {},
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
        children: []
      },
      {
        id: 2,
        span: 12,
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
