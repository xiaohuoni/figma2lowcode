import { defineConfig } from '@lingxiteam/types';
import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'Slider',
  label: '滑动输入条',
  type: 'Slider',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  compLib: 'comm',
  platform: 'pc',
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  props: {
    name: '滑动输入条',
    basicStatus: 1,
    min: 0,
    max: 100,
    step: 1,
  },
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {},
    },
    name: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      props: {
        required: false,
      },
      enableI18n: true,
    },
    fieldName: {
      label: '字段编码',
      type: 'SearchFieldName',
      groupsName: '基础',
      props: {
        required: true,
      },
    },
    range: {
      label: '滑动类型',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '单滑块',
            value: false,
          },
          {
            title: '双滑块',
            value: true,
          },
        ],
        defaultValue: false,
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    defaultValue: {
      label: '默认值',
      type: 'RangeInputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        description: '数字类型：双滑块默认值的起始值不可以大于结束值',
      },
    },
    basicStatus: {
      label: '状态',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
        description: '控件显隐、禁用优先级为：动作配置> 对象显示规则> 状态',
        options: [
          {
            title: '普通',
            value: 1,
          },
          {
            title: '隐藏',
            value: 2,
          },
          {
            title: '禁用',
            value: 3,
          },
          {
            title: '只读',
            value: 4,
          },
        ],
        defaultValue: 1,
      },
    },
    visibility: {
      label: '隐藏占位',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        description:
          '表单外不生效: 默认false，表示隐藏的时候不占位，为true时，隐藏的时候将占位（注意：优先级最高, 开启后控制显隐动作将也会判断是否隐藏占位）',
      },
    },
    step: {
      label: '改变幅度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    selfSpan: {
      label: '列占比',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '默认',
            value: '',
          },
          // TODO: 是否需要优化
          ...COL_SPAN_DATA,
        ],
      },
    },
    labelCol: {
      label: '标题占比',
      type: 'FormItemLabel',
      groupsName: '基础',
      props: {
        defaultValue: 8,
        required: false,
        // TODO: 是否需要优化
        options: LABEL_SPAN_DATA,
      },
    },
    wrapperCol: {
      label: '内容占比',
      type: 'FormItemLabel',
      groupsName: '基础',
      props: {
        defaultValue: 16,
        required: false,
        // TODO: 是否需要优化
        options: COL_WEAPPER_SPAN_DATA[8],
      },
    },
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
      enableI18n: true,
    },
    showMarks: {
      label: '显示刻度',
      type: 'Switch',
      groupsName: '刻度和图标',
    },
    marks: {
      label: '刻度',
      type: 'MarkColumns',
      groupsName: '刻度和图标',
      props: {
        dependProps: {
          showMarks: true,
        },
      },
    },
    stepNull: {
      label: '只拖拽到刻度',
      type: 'Switch',
      groupsName: '刻度和图标',
      props: {
        dependProps: {
          showMarks: true,
        },
      },
    },
    included: {
      label: '取值方式',
      type: 'RadioButton',
      groupsName: '刻度和图标',
      istodoBind: true,
      props: {
        options: [
          {
            title: '包含',
            value: true,
          },
          {
            title: '并列',
            value: false,
          },
        ],
        defaultValue: true,
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
        dependProps: {
          showMarks: true,
        },
      },
    },
    minIcon: {
      label: '最小值图标',
      type: 'ChooseIcon',
      groupsName: '刻度和图标',
    },
    maxIcon: {
      label: '最大值图标',
      type: 'ChooseIcon',
      groupsName: '刻度和图标',
    },
    draggableTrack: {
      label: '范围可拖拽',
      type: 'Switch',
      groupsName: '风格和样式',
      props: {
        dependProps: {
          range: true,
        },
      },
    },
    direction: {
      label: '滑动方向',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        options: [
          {
            title: '正向',
            value: 'normal',
          },
          {
            title: '反向',
            value: 'reverse',
          },
          {
            title: '垂直',
            value: 'vertical',
          },
        ],
        defaultValue: 'normal',
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    showInput: {
      label: '显示输入框',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        options: [
          {
            title: '显示',
            value: true,
          },
          {
            title: '不显示',
            value: false,
          },
        ],
        defaultValue: false,
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    showLabel: {
      label: '显示标签',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        options: [
          {
            title: '显示',
            value: true,
          },
          {
            title: '不显示',
            value: false,
          },
        ],
        defaultValue: true,
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    labelPlacement: {
      label: '标签位置',
      type: 'SetPlacement',
      groupsName: '风格和样式',
      props: {
        defaultValue: 'top',
        options: [...TIP_PLACEMENT_DATA],
      },
    },
    titleTip: {
      label: '标题提示',
      type: 'SetTipType',
      groupsName: '标题提示',
      props: {
        options: [
          {
            title: '无',
            value: 'notext',
          },
          {
            title: '文本',
            value: 'text',
          },
        ],
        defaultValue: 'notext',
      },
    },
    tipIcon: {
      label: '提示图标',
      type: 'SetTipIcon',
      groupsName: '标题提示',
      props: {
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
      },
    },
    tipLocation: {
      label: '提示位置',
      type: 'SetTipIconPlacement',
      groupsName: '标题提示',
      props: {
        options: [
          {
            title: '标题前',
            value: 'before',
          },
          {
            title: '标题后',
            value: 'after',
          },
        ],
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
      },
    },
    tipContent: {
      label: '提示内容',
      type: 'Input',
      groupsName: '标题提示',
      istodoBind: true,
      props: {
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
      },
      enableI18n: true,
    },
    tipPlacement: {
      label: '提示语位置',
      type: 'SetPlacement',
      groupsName: '标题提示',
      props: {
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
        options: [...TIP_PLACEMENT_DATA],
      },
    },
    tipSize: {
      label: '提示框尺寸',
      type: 'SetTipSize',
      groupsName: '标题提示',
      props: {
        defaultValue: 'default',
        dependProps: {
          titleTip: 'text',
        },
        options: [
          { title: '系统默认', value: 'default' },
          { title: '自定义', value: 'custom' },
        ],
      },
    },
    tipWidth: {
      label: '最大宽度',
      type: 'HeightInput',
      groupsName: '标题提示',
      props: {
        description: '小于最大宽度时根据内容自适应宽度',
        defaultValue: '240px',
        dependProps: {
          tipSize: 'custom',
        },
      },
    },
    tipHeight: {
      label: '最大高度',
      type: 'HeightInput',
      groupsName: '标题提示',
      props: {
        description: '小于最大高度时根据内容自适应宽度',
        defaultValue: 'auto',
        dependProps: {
          tipSize: 'custom',
        },
      },
    },
    required: {
      label: '必填',
      type: 'Switch',
      groupsName: '校验',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        defaultValue: false,
      },
    },
    min: {
      label: '最小值',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {
        defaultValue: 0,
      },
    },
    max: {
      label: '最大值',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {
        defaultValue: 100,
      },
    },
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
        // 录入型组件切换组件类型
        options: getInputTypes().map((k) => ({
          title: k.label,
          value: k.compName,
        })),
      },
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
    },
  },
  style: {},
  todoStyles: getStyleObjectByKeys([
    'className',
    'width',
    'margin',
    'padding',
    'customStyle',
  ]),
  todoEvents: [
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '输入框取值',
          name: 'e',
          value: '$e$',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'sysSetDisable',
      label: '禁用状态',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
          props: {
            checkable: true,
          },
        },
        {
          key: 'compValueList',
          label: '是否禁用',
          type: 'SetBatchProps',
          props: {
            defaultValue: 'toggle',
            options: [
              {
                title: '启动',
                value: '',
              },
              {
                title: '禁用',
                value: 'true',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'sysSetRequired',
      label: '设置必填',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
          props: {
            checkable: true,
          },
        },
        {
          key: 'compValueList',
          label: '是否必填',
          type: 'SetBatchProps',
          props: {
            defaultValue: 'toggle',
            options: [
              {
                title: '必填',
                value: 'true',
              },
              {
                title: '非必填',
                value: '',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'sysSetVisible',
      label: '控制显隐',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
          props: {
            checkable: true,
          },
        },
        {
          key: 'compValueList',
          label: '是否显隐',
          type: 'SetBatchProps',
          props: {
            defaultValue: '',
            options: [
              {
                title: '显示',
                value: 'true',
              },
              {
                title: '隐藏',
                value: '',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'sysSetValue',
      label: '控件赋值',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
        },
        {
          key: 'valueList',
          label: '组件赋值',
          type: 'SetSysExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      initClose: true,
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getValue',
      label: '获取当前值',
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'clearValue',
      label: '清空值',
      todoOptions: [],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'validateMsg',
      label: '校验提示',
      todoOptions: [
        {
          key: 'validateStatus',
          label: '校验类型',
          type: 'RadioButton',
          aliasKey: 'validateType',
          defaultValue: 'success',
          props: {
            options: [
              {
                title: '成功',
                value: 'success',
              },
              {
                title: '提示',
                value: 'validating',
              },
              {
                title: '错误',
                value: 'error',
              },
              {
                title: '警告',
                value: 'warning',
              },
              {
                title: '正常',
                value: '',
              },
            ],
          },
        },
        {
          key: 'help',
          label: '校验文案',
          type: 'SetExpression',
          props: {
            placeholder: '请输入',
          },
          aliasKey: 'validateMsg',
        },
      ],
      groupName: 'group3', // 需求暂未分组名称
    },
  ],
});

export default config;
