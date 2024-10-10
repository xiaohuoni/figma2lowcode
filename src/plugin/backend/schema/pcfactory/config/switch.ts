import { defineConfig } from '@lingxiteam/types';
import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export default defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'Switch',
  label: '开关',
  type: 'Switch',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  //  组件类型  0：容器  1：通用  2：数据录入  3：数据展示 4：反馈  5：导航  6：布局   99:订阅组件
  compLib: 'comm',
  isContainer: false,
  isInlineBlock: true,
  components: [],
  platform: 'pc',
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  props: {
    size: 'default',
    defaultChecked: false,
  },
  style: {},
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      // 旧配置中用于指定哪个属性 prop 有绑定数据源或表达式的 </> 标志，新配置在 props中配置 istodoBind: true,
      istodoBind: true,
      props: {
        // defaultValue: '暂未绑定数据',
        required: false,
        description: 'boolean类型',
      },
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
    defaultChecked: {
      label: '默认值',
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
    },
    size: {
      label: '尺寸',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
        defaultValue: 'default',
        options: [
          {
            title: '大',
            value: 'default',
          },
          {
            title: '小',
            value: 'small',
          },
        ],
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
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
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
    switchStyle: {
      label: '开关样式',
      type: 'RadioButton',
      groupsName: '样式和风格',
      props: {
        defaultValue: 'none',
        options: [
          {
            title: '基础',
            value: 'none',
          },
          {
            title: '文字',
            value: 'font',
          },
          {
            title: '图标',
            value: 'icon',
          },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    checkedChildren: {
      label: '开启文案',
      type: 'Input',
      groupsName: '样式和风格',
      props: {
        defaultValue: '开启',
        visibleFlag: 'switchStyle',
        visibleFlagValue: ['font'],
      },
      enableI18n: true,
    },
    unCheckedChildren: {
      label: '关闭文案',
      type: 'Input',
      groupsName: '样式和风格',
      props: {
        defaultValue: '关闭',
        visibleFlag: 'switchStyle',
        visibleFlagValue: ['font'],
      },
      enableI18n: true,
    },
    checkedChildrenIcon: {
      label: '开启图标',
      type: 'ChooseIcon',
      groupsName: '样式和风格',
      props: {
        visibleFlag: 'switchStyle',
        visibleFlagValue: ['icon'],
        defaultValue: {
          type: 'check',
          theme: 'outlined',
          isIconFont: false,
        },
      },
    },
    unCheckedChildrenIcon: {
      label: '关闭图标',
      type: 'ChooseIcon',
      groupsName: '样式和风格',
      props: {
        visibleFlag: 'switchStyle',
        visibleFlagValue: ['icon'],
        defaultValue: {
          type: 'close',
          theme: 'outlined',
          isIconFont: false,
        },
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
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
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
      params: [
        {
          title: '开关取值',
          name: 'e',
          value: '$e$',
        },
      ],
    },
  ],
  todoActionList: [
    // TODO: 设置/获取组件属性数据暂不实现
    // {
    //   key: 'setCompNestedState',
    //   label: '设置组件属性数据',
    //   todoOptions: [
    //     {
    //       key: 'stateName',
    //       label: '自定义属性名',
    //       type: 'Input',
    //     },
    //     {
    //       key: 'stateval',
    //       label: '内容',
    //       type: 'SetExpression',
    //     },
    //   ],
    //   classification: [
    //     {
    //       label: '数据设置',
    //       value: 'setData',
    //     },
    //   ],
    //   groupName: 'group1',
    // },
    // {
    //   key: 'getCompNestedState',
    //   label: '获取组件属性数据',
    //   todoOptions: [
    //     {
    //       key: 'stateName',
    //       label: '自定义属性名',
    //       type: 'Input',
    //     },
    //   ],
    //   todoCallbacks: ['callback1'],
    //   classification: [
    //     {
    //       label: '数据设置',
    //       value: 'setData',
    //     },
    //   ],
    //   groupName: 'group1',
    // },
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
          type: 'SetBatchProps',
          label: '是否禁用',
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
          type: 'SetBatchProps',
          label: '是否必填',
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
          type: 'SetBatchProps',
          label: '是否显隐',
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
      key: 'setLoading',
      label: '控制加载中',
      todoOptions: [
        {
          key: 'loading',
          label: '是否加载中',
          type: 'Select',
          props: {
            inhibitBtn: true,
            options: [
              {
                title: '是',
                value: true,
              },
              {
                title: '否',
                value: false,
              },
            ],
          },
        },
      ],
      groupName: 'group2',
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
  //   'setCompNestedState',
  //   'getCompNestedState',
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setValue',
  //   'getValue',
  //   'clearValue',
  //   'setLoading',
  // ]),
  // TODO: controller 中限制注册以下属性（注册信息错误，请检查您的 options:）
  // 指定当前控件数据绑定取自哪个 prop 字段
  // valuePropName: 'value',
});
