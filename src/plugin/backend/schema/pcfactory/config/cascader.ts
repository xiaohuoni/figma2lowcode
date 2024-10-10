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

const config = defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'Cascader',
  label: '级联选择',
  type: 'Cascader',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  compLib: 'comm',
  platform: 'pc',
  props: {
    name: '级联选择',
    selfSpan: '',
    labelCol: 8,
    wrapperCol: 16,
    size: 'default',
    expandTrigger: 'click',
    popupPlacement: 'bottomLeft',
    basicStatus: 1,
    popoverStyle: 'default',
    showSearch: false,
    allowClear: true,
  },
  engineApi: ['dataState'],
  todoProps: {
    // columns: {
    //   label: '选择服务',
    //   type: 'SelectService',
    //   groupsName: '服务',
    //   istodoBind: true,
    //   props: {},
    // },
    // dataSource: {
    //   label: '选择数据源',
    //   type: 'TableDataSource',
    //   groupsName: '数据绑定',
    //   istodoBind: true,
    //   props: {},
    // },
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        description: '数组类型，里面添加每级数据对应的选中值',
        required: false,
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
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
      enableI18n: true,
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
    size: {
      label: '尺寸',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
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
    staticData: {
      label: '选项设置',
      type: 'StaticData',
      groupsName: '基础',
      enableI18n: true,
      props: {
        treeType: true,
        tabs: ['静态', '自定义'],
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
    multiple: {
      label: '选择类型',
      type: 'RadioButton',
      groupsName: '风格和样式',
      props: {
        options: [
          {
            title: '单选',
            value: '1',
          },
          {
            title: '多选',
            value: '2',
          },
        ],
        defaultValue: '1',
      },
    },
    // showCheckedStrategy: {
    //   label: '全选回填方式',
    //   type: 'Select',
    //   groupsName: '风格和样式',
    //   istodoBind: false,
    //   props: {
    //     options: [
    //       { title: '只显示父节点', value: 'SHOW_PARENT' },
    //       { title: '只显示子节点', value: 'SHOW_CHILD' },
    //     ],
    //   },
    // },
    expandTrigger: {
      label: '子级触发',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        options: [
          {
            title: '点击',
            value: 'click',
          },
          {
            title: '悬浮',
            value: 'hover',
          },
        ],
      },
    },
    changeOnSelect: {
      label: '选择时变化',
      type: 'Switch',
      groupsName: '风格和样式',
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
    popupPlacement: {
      label: '浮层位置',
      type: 'Select',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '左下',
            value: 'bottomLeft',
          },
          {
            title: '右下',
            value: 'bottomRight',
          },
          {
            title: '左上',
            value: 'topLeft',
          },
          {
            title: '右上',
            value: 'topRight',
          },
        ],
      },
    },
    showSearch: {
      label: '允许搜索',
      type: 'Switch',
      groupsName: '风格和样式',
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
    popoverStyle: {
      label: '搜索浮层宽度',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        description: '默认值等于与输入框同宽',
        options: [
          {
            title: '默认',
            value: 'default',
          },
          {
            title: '自适应',
            value: 'auto',
          },
        ],
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
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '选中值获取',
          name: 'value',
          value: '$value$',
        },
        {
          title: '选中节点获取',
          name: 'selectedOptions',
          value: '$selectedOptions$',
        },
      ],
    },
    {
      label: '搜索',
      value: 'onSearch',
      params: [
        {
          title: '搜索值获取',
          name: 'searchVal',
          value: '$searchVal$',
        },
        {
          title: '选中值获取',
          name: 'selectedOptionIds',
          value: '$selectedOptionIds$',
        },
        {
          title: '选中节点获取',
          name: 'selectedOptions',
          value: '$selectedOptions$',
        },
      ],
      dependProps: {
        showSearch: true,
      },
    },
    {
      label: '展开',
      value: 'onClickOption',
      params: [
        {
          title: '展开节点key',
          name: 'openKey',
          value: '$openKey$',
        },
        {
          title: '展开节点下级key',
          name: 'childrenKeys',
          value: '$childrenKeys$',
        },
        {
          title: '选中值获取',
          name: 'selectedOptionIds',
          value: '$selectedOptionIds$',
        },
        {
          title: '选中节点获取',
          name: 'selectedOptions',
          value: '$selectedOptions$',
        },
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
      groupName: 'group1',
    },
    {
      key: 'reloadChildData',
      label: '加载子节点数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
        },
        {
          key: 'parentKey',
          label: '操作节点key',
          type: 'SetExpression',
        },
        {
          key: 'labelKey',
          label: '节点名称取值字段',
          type: 'SetExpressionKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'nodeValueKey',
          label: '节点key取值字段',
          type: 'SetExpressionKey',
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
        {
          key: 'childrenKey',
          label: '下级列表取值字段',
          type: 'SetExpressionKey',
          labelTip:
            '使用场景：一次性查询所有数据时，需要设置下一级列表数据的取值字段；\n    示例说明：如下参数，当查询所有数据，需要标记出从children字段获取下级列表的数据；\n    {\n      "resultObject": [{\n        "children": [{\n          "children": [],\n          "parent_id": "10700",\n          "name": "2-1",\n          "id": "10900",\n        }]，\n        "parent_id": "-1",\n        "name": "第二棵",\n        "id": "10700",\n      }]\n    }\n    ',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group1',
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
      groupName: 'group2',
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
      groupName: 'group2',
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
      groupName: 'group2',
    },
    {
      key: 'setSelectAllValues',
      label: '设置全部选中',
      todoCallbacks: ['callback1'],
      groupName: 'group3',
      remarks: [
        {
          label: '配置建议',
          content: '请先开启多选模式（属性-风格样式-选择模式-多选）',
        },
      ],
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
      groupName: 'group3',
    },
    {
      key: 'getValue',
      label: '获取当前值',
      todoCallbacks: ['callback1'],
      groupName: 'group3',
    },
    {
      key: 'clearValue',
      label: '清空值',
      todoOptions: [],
      groupName: 'group3',
    },
  ],
  // todoActionList: getTodoActionListByKey([
  //   'reloadData',
  //   'reloadChildData',
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setValue',
  //   'getValue',
  //   'clearValue',
  //   'setSelectAllValues'
  // ]),
});

export default config;
