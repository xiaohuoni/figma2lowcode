import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'GridView',
  label: '循环列表',
  type: 'LoopList',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  platform: 'pc',
  isContainer: true,
  components: [],
  props: {
    name: '循环列表',
    pieceData: [],
    defaultValue: [],
    mode: 1,
    columnNum: 1,
    span: 24,
    vspace: 16,
    hspace: 16,
    itemKey: 'rowData',
    indexKey: 'rowIndex',
    gridMode: false,
  },
  engineApi: ['MemoRenderer', 'service.getAppFileUrlByFileCode'],
  edEngineApi: ['getAppFileUrlByFileCode', 'getAppFileUrlById'],
  style: {
    minHeight: 40,
  },
  todoProps: {
    value: {
      label: '选中项数据',
      type: 'Input',
      groupsName: '数据绑定',
      props: {
        // defaultValue: '暂未绑定数据',
      },
      istodoBind: true,
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
      },
    },
    gridData: {
      label: '循环数据',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
    },
    itemKey: {
      label: '循环项变量名',
      type: 'Input',
      groupsName: '基础',
      props: {
        required: true,
        description:
          '为循环项定义一个变量名，例如rowData，循环列表内可通过$rowData.XX$获取数据',
      },
      istodoBind: false,
    },
    indexKey: {
      label: '索引变量名',
      type: 'Input',
      groupsName: '基础',
      props: {
        required: true,
        description:
          '定义坐标变量名，例如rowIndex，循环列表内可通过$数据源[rowIndex]$获取数据',
      },
      istodoBind: false,
    },
    valueKey: {
      label: '唯一字段编码',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: true,
        description: '业务数据中的唯一标识的字段编码',
      },
    },
    loopContent: {
      label: '循环项内容',
      type: 'LoopContent',
      groupsName: '基础',
      istodoBind: false,
    },
    defaultValue: {
      label: '默认值',
      type: 'SetDefaultValue',
      groupsName: '基础',
      istodoBind: true,
    },
    basicStatus: {
      label: '状态',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '普通', value: 1 },
          { title: '隐藏', value: 2 },
          { title: '禁用', value: 3 },
        ],
        defaultValue: 1,
      },
    },
    mode: {
      label: '选择模式',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '无', value: 1 },
          { title: '单选', value: 2 },
          { title: '多选', value: 3 },
        ],
        defaultValue: 2,
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    normalImg: {
      label: '默认图标地址',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          mode: [2, 3],
        },
      },
    },
    selectImg: {
      label: '选中图标地址',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          mode: [2, 3],
        },
      },
    },
    normalStyle: {
      label: '默认样式',
      type: 'CustomStyle',
      groupsName: '风格和样式',
      istodoBind: false,
    },
    selectStyle: {
      label: '选中样式',
      type: 'CustomStyle',
      groupsName: '风格和样式',
      istodoBind: false,
    },
    gridMode: {
      label: '开启栅格模式',
      type: 'Switch',
      groupsName: '风格和样式',
      istodoBind: false,
    },
    span: {
      label: '行占比',
      type: 'Input',
      groupsName: '风格和样式',
      istodoBind: false,
      props: {
        dependProps: {
          gridMode: true,
        },
      },
    },
    vspace: {
      label: '水平间距',
      type: 'InputNumber',
      groupsName: '风格和样式',
      istodoBind: false,
      props: {
        dependProps: {
          gridMode: true,
        },
      },
    },
    hspace: {
      label: '垂直间距',
      type: 'InputNumber',
      groupsName: '风格和样式',
      istodoBind: false,
      props: {
        dependProps: {
          gridMode: true,
        },
      },
    },
    mediaLayout: {
      label: '响应式布局',
      type: 'ColMediaModal',
      groupsName: '风格和样式',
      istodoBind: false,
      props: {
        dependProps: {
          gridMode: true,
        },
      },
    },
    fixedWidth: {
      label: '固定宽度',
      type: 'Switch',
      groupsName: '风格和样式',
      istodoBind: false,
      props: {
        description: '固定宽度开启后，请在“默认样式”中设置每列宽度。',
      },
    },
  },
  todoStyles: {
    backgroundType: {
      groupsName: '内容区域背景',
      label: '填充类型',
      type: 'BackgroundType',
      targetType: 'props',
      props: {
        options: [
          { title: '纯色填充', value: 'cleanColor' },
          { title: '图片填充', value: 'image' },
        ],
        selectType: 'RadioButton',
        compType: 'pc',
      },
      ignoreRule: ['backgroundColor'],
    },
    ...getStyleObjectByKeys([
      'className',
      'margin',
      'padding',
      'width',
      'height',
      'customStyle',
    ]),
  },
  todoEvents: [
    {
      label: '切换选项事件',
      value: 'onChange',
      params: [
        { title: '选中数据key', name: 'valueKeys', value: '$valueKeys$' },
        { title: '选中数据', name: 'values', value: '$values$' },
      ],
    },
    {
      label: '点击循环项事件',
      value: 'onClickLoopItem',
      params: [
        { title: '点击数据key', name: 'valueKey', value: '$valueKey$' },
        { title: '点击数据', name: 'value', value: '$value$' },
        { title: '索引值', name: 'valueIndex', value: '$valueIndex$' },
      ],
    },
  ],
  todoActionList: getTodoActionListByKey(['getLoopListValues', 'setValue']),
});

export default config;
