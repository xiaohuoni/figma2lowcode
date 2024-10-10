import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  commonArrReloadDataTip,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'CheckboxGroup',
  label: '复选组',
  type: 'CheckboxGroup',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  platform: 'pc',
  compLib: 'comm',
  props: {
    name: '复选组',
    selfSpan: '',
    labelCol: 8,
    wrapperCol: 16,
    basicStatus: 1,
    checkAllText: '全部',
  },
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        description: '数组类型，里面添加对应的选中值',
        // defaultValue: '暂未绑定数据',
      },
    },
    name: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {},
      enableI18n: true,
    },
    fieldName: {
      label: '字段编码',
      type: 'SearchFieldName',
      groupsName: '基础',
      props: {
        required: true,
      },
      istodoBind: false,
    },
    defaultValue: {
      label: '默认值',
      type: 'SetDefaultValue',
      groupsName: '基础',
      props: {},
      istodoBind: false,
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
          ...COL_SPAN_DATA,
        ],
      },
      istodoBind: false,
    },
    labelCol: {
      label: '标题占比',
      type: 'FormItemLabel',
      groupsName: '基础',
      props: {
        options: LABEL_SPAN_DATA,
      },
      istodoBind: false,
    },
    wrapperCol: {
      label: '内容占比',
      type: 'FormItemLabel',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: COL_WEAPPER_SPAN_DATA[8],
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
          titleTip: 'text',
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
          titleTip: 'text',
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
      props: {},
    },
    min: {
      label: '最小选项数',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {
        min: 1,
      },
    },
    max: {
      label: '最大选项数',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {
        min: 1,
      },
    },
    checkedAll: {
      label: '全选选项',
      type: 'Switch',
      groupsName: '选项设置',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {},
    },
    checkAllText: {
      label: '全选文本',
      type: 'Input',
      groupsName: '选项设置',
      istodoBind: true,
      props: {
        // dependProps: {
        //   checkedAll: true,
        // },
        defaultValue: '全部',
      },
      enableI18n: true,
    },
    staticData: {
      label: '选项设置',
      type: 'StaticData',
      groupsName: '选项设置',
      props: {},
      enableI18n: true,
    },
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
        inhibitBtn: true,
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
      props: {},
    },
  },
  style: {},
  setEvents: [],
  todoStyles: {
    classNameCheck: {
      groupsName: '样式类',
      label: '全选项样式类名',
      type: 'Input',
      targetType: 'props',
      props: {
        placeholder: '空格分隔',
      },
      istodoBind: true,
    },
    ...getStyleObjectByKeys(['className', 'margin', 'customStyle', 'flex']),
  },
  todoEvents: [
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '复选组取值',
          name: 'value',
          value: '$value$',
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
      label: '清空选中项',
      todoOptions: [],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'reloadRCData',
      label: '加载数据',
      remarks: [
        {
          label: '适用场景',
          content: '可以通过当前动作进行动态加载数据内容',
        },
        {
          label: '配置建议',
          content:
            '通过发送请求，成功后使用该动作, 注意：选项设置的数据，以配置逻辑的执行顺序覆盖渲染！在页面加载时，“属性-选项配置”执行顺序，先于“控件-动作-加载数据”，若同时配置,则以“控件-动作-加载数据”为准',
        },
      ],
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
          labelTip: commonArrReloadDataTip.data,
        },
        {
          key: 'labelKey',
          label: '显示内容字段',
          type: 'SetExpressionKey',
          aliasKey: 'selectLabelKeyForRC',
          labelTip: commonArrReloadDataTip.labelKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'valueKey',
          label: '显示值字段',
          type: 'SetExpressionKey',
          aliasKey: 'selectValueKeyForRC',
          labelTip: commonArrReloadDataTip.valueKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group3', // 需求暂未分组名称
      hidden: true,
    },
    {
      key: 'reloadSelectData',
      label: '加载数据',
      remarks: [
        {
          label: '适用场景',
          content: '可以通过当前动作进行动态加载数据内容',
        },
        {
          label: '配置建议',
          content:
            '通过发送请求，成功后使用该动作, 注意：选项设置的数据，以配置逻辑的执行顺序覆盖渲染！在页面加载时，“属性-选项配置”执行顺序，先于“控件-动作-加载数据”，若同时配置,则以“控件-动作-加载数据”为准',
        },
      ],
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
          labelTip: commonArrReloadDataTip.data,
        },
        {
          key: 'labelKey',
          label: '显示内容字段',
          type: 'SetExpressionKey',
          aliasKey: 'selectLabelKeyForRC',
          labelTip: commonArrReloadDataTip.labelKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'valueKey',
          label: '显示值字段',
          type: 'SetExpressionKey',
          aliasKey: 'selectValueKeyForRC',
          labelTip: commonArrReloadDataTip.valueKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'clearOptions',
      label: '清空选项',
      groupName: 'group3', // 需求暂未分组名称
    },
  ],
  // todoActionList: getTodoActionListByKey([
  //   'reloadRCData',
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setValue',
  //   'getValue',
  //   'clearValue',
  //   'clearOptions',
  // ]),
};

export default config;
