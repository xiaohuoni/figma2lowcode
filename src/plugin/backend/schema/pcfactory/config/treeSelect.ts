import { defineConfig } from '@lingxiteam/types';
import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
  treeArrReloadDataTip,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';
// import { getTodoActionListByKey } from '../utils/todoActionList';
const treeParentNodeEventParams = [
  {
    title: '父节点key',
    name: 'parentKey',
    value: '$parentKey$',
  },
  {
    title: '父节点数据',
    name: 'parentNodeData',
    value: '$parentNodeData$',
    attrType: 'object',
  },
];
const config = defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  engineApi: ['service.commonFetch', 'dataState'],
  icon: 'TreeSelect',
  label: '树选择',
  type: 'TreeSelect',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  platform: 'pc',
  compLib: 'comm',
  props: {
    name: '树选择',
    selfSpan: '',
    labelCol: 8,
    wrapperCol: 16,
    treeDefaultExpandAll: true,
    size: 'default',
    showSearch: false,
    treeNodeFilterProp: 'title',
    treeData: [],
    basicStatus: 1,
    allowClear: true,
  },
  todoProps: {
    // treeColumns: {
    //   label: '服务设置',
    //   type: 'TreeService',
    //   groupsName: '服务',
    //   istodoBind: true,
    //   props: {},
    // },
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        description:
          '当前选中的key，接收字符串类型，多选时接收数组类型或者以,分割的字符串',
        required: false,
      },
    },
    asyncColumns: {
      label: '异步服务',
      type: 'TreeService',
      groupsName: '服务',
      istodoBind: true,
      props: {
        dependProps: {
          // 屏蔽异步服务配置，仅在存量数据配置了异步服务时才展示
          asyncService: (v: undefined) => v !== undefined,
        },
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
    placeholder: {
      label: '占位提示',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {},
      enableI18n: true,
    },
    defaultValue: {
      label: '默认值',
      type: 'SetDefaultValue',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    allowClear: {
      label: '允许清除',
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
      props: {},
    },
    treeDefaultExpandAll: {
      label: '展开所有',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
      props: {},
    },
    treeCheckable: {
      label: '是否多选',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
      props: {},
    },
    treeData: {
      label: '内容设置',
      type: 'TreeColumns',
      groupsName: '基础',
      istodoBind: true,
      props: {
        isLinkField: true,
      },
      enableI18n: true,
    },
    showSearch: {
      label: '是否可搜索',
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
      props: {},
    },
    filter: {
      label: '过滤方式',
      type: 'Select',
      groupsName: '基础',
      props: {
        dependProps: {
          showSearch: true,
        },
        inhibitBtn: true,
        defaultValue: 'local',
        options: [
          {
            title: '不过滤',
            value: 'none',
          },
          {
            title: '本地过滤',
            value: 'local',
          },
          {
            title: '远程过滤',
            value: 'remote',
          },
        ],
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
    size: {
      label: '尺寸',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: false,
      props: {
        options: [
          {
            title: '大',
            value: 'large',
          },
          {
            title: '中',
            value: 'default',
          },
          {
            title: '小',
            value: 'small',
          },
        ],
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
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
      props: {
        options: COL_WEAPPER_SPAN_DATA[8],
      },
    },
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
      istodoBind: true,
      props: {},
      enableI18n: true,
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
      props: {},
    },
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
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
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '选中树节点',
      value: 'onSelect',
      params: [
        {
          title: '节点key',
          name: 'value',
          value: '$value$',
        },
        {
          title: '节点数据',
          name: 'node',
          value: '$node.props.data$',
          attrType: 'object',
        },
        ...treeParentNodeEventParams,
      ],
    },
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '节点key',
          name: 'value',
          value: '$value$',
        },
        {
          title: '节点名称',
          name: 'label',
          value: '$label$',
        },
        {
          title: '节点数据',
          name: 'extra',
          value: '$extra.triggerNode.props.data$',
          attrType: 'object',
        },
      ],
    },
    {
      label: '搜索',
      value: 'onSearch',
      params: [
        {
          title: '搜索框取值',
          name: 'value',
          value: '$value$',
        },
      ],
      dependProps: {
        filter: 'remote',
      },
    },
    {
      label: '展开',
      value: 'onTreeExpand',
      params: [
        {
          title: '展开节点key',
          name: 'key',
          value: '$key$',
        },
        {
          title: '展开节点的下级keys',
          name: 'childrenKeys',
          value: '$childrenKeys$',
        },
        ...treeParentNodeEventParams,
      ],
    },
  ],
  todoActionList: [
    {
      key: 'reloadData',
      label: '加载数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
          labelTip: treeArrReloadDataTip.data,
        },
        {
          key: 'labelKey',
          label: '节点名称取值字段',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.labelKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'nodeValueKey',
          label: '节点key取值字段',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.nodeValueKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'selectable',
          label: '节点可选字段编码',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.selectable,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'childrenKey',
          label: '下级列表取值字段',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.childrenKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'appendTreeNode',
      label: '加载子节点数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
        },
        {
          key: 'nodeKey',
          label: '操作节点key',
          type: 'SetExpression',
        },
        {
          key: 'title',
          label: '节点名称取值字段',
          type: 'SetExpression',
          aliasKey: 'titleKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'key',
          label: '节点key取值字段',
          type: 'SetExpression',
          aliasKey: 'valueKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'selectable',
          label: '节点可选字段编码',
          type: 'SetExpressionKey',
          labelTip:
            "适用场景：需要控制当前节点是否能够选择，且需后端服务有字段标识出是否可选；\n    处理逻辑：当节点的字段编码值为布尔类型的false，或者字符串类型为'false'、\n    空字符串时，都认为不可选，否则认为可选。",
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      groupName: 'group1', // 需求暂未分组名称
    },
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
      groupName: 'group2', // 需求暂未分组名称
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
      groupName: 'group2', // 需求暂未分组名称
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
      groupName: 'group2', // 需求暂未分组名称
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
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'getValue',
      label: '获取选中值',
      todoCallbacks: ['callback1'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'clearValue',
      label: '清空选中项',
      todoOptions: [],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'setSelectAll',
      label: '设置全部选中',
      todoCallbacks: ['callback1'],
      groupName: 'group3', // 需求暂未分组名称
      remarks: [
        {
          label: '配置建议',
          content: '请先开启多选模式',
        },
      ],
    },
  ],
  // todoActionList: getTodoActionListByKey([
  //   'reloadData',
  //   'appendTreeNode',
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setValue',
  //   'getValue',
  //   'clearValue',
  //   'setSelectAll'
  // ]),
});

export default config;
