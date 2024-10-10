import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'GridView',
  label: '循环块',
  type: 'GridView',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  platform: 'pc',
  isContainer: true,
  components: [],
  deprecated: true,
  props: {
    name: '循环块',
    itemKey: 'item',
    indexKey: 'i',
    pieceData: [],
    defaultValue: [],
    isChecked: true,
    isMultiple: true,
    columnNum: 1,
    valueKey: 'value',
    span: 24,
    vspace: 16,
    hspace: 16,
    isEditor: true,
  },
  style: {
    minHeight: 40,
  },
  engineApi: ['MemoRenderer'],
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      props: {
        // defaultValue: '暂未绑定数据',
      },
      istodoBind: true,
    },
    itemKey: {
      label: '数据项编码',
      type: 'Input',
      groupsName: '基础',
      props: {
        readOnly: true,
      },
      istodoBind: false,
    },
    indexKey: {
      label: '索引编码',
      type: 'Input',
      groupsName: '基础',
      props: {
        readOnly: true,
      },
      istodoBind: false,
    },
    gridData: {
      label: '数据源',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
    },
    defaultValue: {
      label: '默认值',
      type: 'SetDefaultValue',
      groupsName: '基础',
      istodoBind: true,
    },
    selectImg: {
      label: '选中图标地址',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
    },
    normalImg: {
      label: '默认图标地址',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
    },
    isChecked: {
      label: '选择模式',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
    },
    isMultiple: {
      label: '是否多选',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
      props: {
        description: '控制多单选',
      },
    },
    valueKey: {
      label: '唯一字段别名',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
    },
    vspace: {
      label: '水平间距',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: false,
    },
    hspace: {
      label: '垂直间距',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: false,
    },
    normalStyle: {
      label: '默认样式',
      type: 'CustomProps',
      groupsName: '基础',
      istodoBind: false,
    },
    selectStyle: {
      label: '选中样式',
      type: 'CustomProps',
      groupsName: '基础',
      istodoBind: false,
    },
    span: {
      label: '行占比',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
    },
    mediaLayout: {
      label: '响应式布局',
      type: 'ColMediaModal',
      groupsName: '基础',
      istodoBind: false,
    },
    fixedWidth: {
      label: '固定宽度',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
      props: {
        description: '固定宽度开启后，请在“默认样式”中设置每列宽度。',
      },
    },
    isEditor: {
      label: '开启编辑模式',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
    },
    formUnique: {
      label: '开启表单重复校验',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
    },
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'backgroundColor',
    'margin',
    'padding',
    'width',
    'height',
  ]),
  todoEvents: [
    {
      label: '值改变时回调',
      value: 'onChange',
      params: [{ title: '变化值', value: '$vals$', name: 'vals' }],
    },
  ],
  todoActionList: getTodoActionListByKey([
    'getBlockSelectValues',
    'setBlockSelectData',
    'validateGridViewForms',
    'getGridViewFormValues',
  ]),
};

export default config;
