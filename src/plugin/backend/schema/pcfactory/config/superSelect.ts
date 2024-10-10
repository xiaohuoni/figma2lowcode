import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export default {
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'SuperSelect',
  platform: 'pc',
  label: '高级选择框',
  type: 'SuperSelect',
  description: '',
  deprecated: true,
  image: '',
  groupsName: '数据录入',
  compType: 2,
  //  组件类型  0：容器  1：通用  2：数据录入  3：数据展示 4：反馈  5：导航  6：布局   99:订阅组件
  compLib: 'comm',
  isContainer: false,
  components: [],
  props: {
    selcetMode: 'select',
    showMode: 'pop',
    mode: '',
  },
  engineApi: ['service.commonFetch'],
  style: {},
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        // defaultValue: '暂未绑定数据',
      },
    },
    sourceData: {
      label: '数据源设置',
      type: 'SelectSource',
      groupsName: '服务',
      istodoBind: true,
    },
    name: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      props: {
        required: false,
      },
    },
    fieldName: {
      label: '字段编码',
      type: 'SearchFieldName',
      groupsName: '基础',
      props: {
        required: true,
      },
    },
    defaultValue: {
      label: '默认值',
      type: 'SetDefaultValue',
      groupsName: '基础',
      istodoBind: true,
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
    mode: {
      label: '选择类型',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '单选',
            value: '',
          },
          {
            title: '多选',
            value: 'multiple',
          },
        ],
      },
    },
    selcetMode: {
      label: '展示方式',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        defaultValue: 'select',
        options: [
          {
            title: '下拉',
            value: 'select',
          },
          // { title: '卡片', value: 'card' },
        ],
      },
    },

    showMode: {
      label: '选择方式',
      // 原显示类型
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        defaultValue: 'pop',
        visibleFlag: 'selcetMode',
        visibleFlagValue: ['select'],
        options: [
          {
            title: '浮层',
            value: 'pop',
          },
          // { title: '弹窗', value: 'modal' },
          // todo EditProps.jsx 中处理了存量数据，是 modal时 改为  pop ,故后续需删掉该处理相关
          // ComSelect.jsx中也注释了 modal相关，
        ],
      },
    },

    modalTitle: {
      label: '弹窗标题',
      type: 'Input',
      groupsName: '基础',
      props: {
        defaultValue: '请选择',
        visibleFlag: 'showMode',
        visibleFlagValue: ['modal'],
      },
    },
    showAddBtn: {
      label: '显示新增',
      type: 'Switch',
      groupsName: '基础',
      props: {
        defaultValue: false,
      },
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    addBtnText: {
      label: '新增按钮',
      type: 'Input',
      groupsName: '基础',
      props: {
        defaultValue: '新增',
        visibleFlag: 'showAddBtn',
        visibleFlagValue: [true],
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
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
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
      props: {
        defaultValue: false,
      },
    },
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
        // TODO: 从 '$editor/constant/compList/input' 中的 InputComp
        // 录入型组件切换组件类型
        options: getInputTypes().map((k) => ({
          title: k.label,
          value: k.compName,
        })),
      },
    },
  },
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
      params: [],
    },
    {
      label: '点击新增按钮',
      value: 'onClickAddBtn',
      params: [],
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
          label: '是否显示',
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
      key: 'getSelectedData',
      label: '获取选中数据',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'reloadOptions',
      label: '重新加载选项',
      groupName: 'group3', // 需求暂未分组名称
    },
  ],

  // todoActionList: [
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setValue',
  //   'getValue',
  //   'getSelectedData',
  //   'clearValue',
  //   'reloadOptions',
  // ],
  // TODO: controller 中限制注册以下属性（注册信息错误，请检查您的 options:）
  // 指定当前控件数据绑定取自哪个 prop 字段
  // valuePropName: 'value',
};
