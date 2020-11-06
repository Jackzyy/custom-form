/**
 * 组件基础属性统一出口
 * @param attributes 组件属性
 * @param children 布局组件属性专属
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
        type: 'blankTemp',
        span: 12,
        children: []
      },
      {
        id: 1,
        type: 'blankTemp',
        span: 12,
        children: []
      }
    ]
  }
]
