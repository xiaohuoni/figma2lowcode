import { defineConfig, defineTodoPropsObject } from '@lingxiteam/types';
import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  commonArrReloadDataTip,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const OPTIONS_MENU = [
  {
    label: '基础文字样式',
    value: 'default',
  },
  {
    label: '选项浅色背景',
    value: 'lightBackground',
  },
  {
    label: '选项深色背景',
    value: 'darkBackground',
  },
  {
    label: '文字样式',
    value: 'otherDefault',
    additionalField: true,
    ohterLabel: '附加文字',
  },
  {
    label: '选项浅色背景',
    value: 'otherLightBackground',
    additionalField: true,
    ohterLabel: '附加文字',
  },
  {
    label: '选项深色背景',
    value: 'otherDarkBackground',
    additionalField: true,
    ohterLabel: '附加文字',
  },
  {
    label: '自定义样式',
    value: 'custom',
  },
];

export default defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'MultipleSelect',
  platform: 'pc',
  label: '下拉多选框',
  type: 'MultipleSelect',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  //  组件类型  0：容器  1：通用  2：数据录入  3：数据展示 4：反馈  5：导航  6：布局   99:订阅组件
  compLib: 'comm',
  isContainer: false,
  components: [],
  props: {
    placeholder: '请选择',
    mode: 'multiple',
    isKeyEnterSearch: false,
    allowClear: true,
  },
  style: {},
  engineApi: ['sandBoxSafeRun', 'sandBoxLoadModule', 'dataState'],
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        description:
          '支持传入选项中的字符串value 或者value的多个数组 如：选项内容有[{label: 选项, value: 选项值},{label: 选项2, value: 选项值2}] 传入: 选项值,选项值2 或者 [选项值, 选项值2]',
        // defaultValue: '暂未绑定数据',
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
    defaultValue: {
      label: '默认值',
      type: 'SetDefaultValue',
      groupsName: '基础',
      props: {
        description:
          '默认值：值为key的字符串拼接，如：1，2，3 不支持表达式绑定',
      },
    },
    placeholder: {
      label: '占位提示',
      type: 'Input',
      groupsName: '基础',
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
        defaultValue: 'default',
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    allowClear: {
      label: '允许清除',
      type: 'Switch',
      groupsName: '基础',
    },
    checkedAll: {
      label: '允许全选',
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
    customRenderLabel: defineTodoPropsObject({
      label: '值样式',
      type: 'OptionStyle',
      groupsName: '自定义渲染',
      props: {
        description:
          '选择模板设置“选中内容”回显样式，点击“编辑图标”可打开弹窗自定义颜色',
        options: OPTIONS_MENU.filter((r) => !r.additionalField),
        placeholder: '请选择值样式',
        propsName: 'customRenderLabel',
        isJSX: true,
      },
    }),
    customRenderOption: defineTodoPropsObject({
      label: '选项样式',
      type: 'OptionStyle',
      groupsName: '自定义渲染',
      props: {
        description:
          '选择模板设置“下拉选项”样式，点击“编辑图标”可打开弹窗自定义颜色',
        options: OPTIONS_MENU,
        placeholder: '请选择选项样式',
        propsName: 'customRenderOption',
        isJSX: true,
      },
    }),
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
      props: {
        defaultValue: false,
      },
    },
    min: defineTodoPropsObject({
      label: '最小选项数',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {
        min: 1,
      },
    }),
    max: defineTodoPropsObject({
      label: '最大选项数',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {
        min: 1,
      },
    }),
    staticData: {
      label: '选项设置',
      type: 'StaticData',
      groupsName: '选项设置',
    },
    filter: {
      label: '过滤方式',
      type: 'Select',
      groupsName: '选项设置',
      enableI18n: true,
      props: {
        inhibitBtn: true,
        defaultValue: 'none',
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
    isInputSearch: {
      label: '输入触发',
      type: 'Switch',
      groupsName: '选项设置',
      props: {
        defaultValue: false,
        description:
          '过滤触发方式。若开启，表示键盘输入关键词后实时触发“远程数据过滤事件”，若关闭，表示按下回车键后触发“远程数据过滤事件”',
        dependProps: {
          filter: 'remote',
        },
      },
    },
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
        inhibitBtn: true,
        // TODO: 从 '$editor/constant/compList/input' 中的 InputComp
        // 录入型组件切换组件类型
        options: getInputTypes().map((k) => ({
          title: k.label,
          value: k.compName,
        })),
      },
    },
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
      enableI18n: true,
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
          title: '下拉框取值',
          name: 'e',
          value: '$e$',
        },
      ],
    },
    {
      label: '远程数据过滤',
      value: 'filterOption',
      remarks: [
        {
          label: '适用场景',
          content: '当用户需要进输入/点击键盘搜索能够进行动态搜索的场景',
        },
        {
          label: '配置建议',
          content:
            '远程数据过滤触发发送请求事件，将过滤数据当作模糊查询请求入参，成功回掉后，使用控件的加载数据进行数据加载！',
        },
      ],
      params: [
        {
          title: '下拉框过滤条件',
          name: 'e',
          value: '$e$',
        },
      ],
      dependProps: {
        filter: 'remote',
      },
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
      key: 'getSelectedData',
      label: '获取选中数据',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'clearOptions',
      label: '清空选项',
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'triggerRelDataSource',
      label: '联动设置下拉框选项',
      todoOptions: [
        {
          key: 'target',
          label: '联动来源',
          type: 'SelectObject',
        },
        {
          key: 'arelStaticData',
          label: 'A端静态数据',
          type: 'SelectStaticData',
          props: {
            options: {
              noCustom: true,
            },
          },
        },
        {
          key: 'zrelStaticData',
          label: 'Z端静态数据',
          type: 'SelectStaticData',
          props: {
            options: {
              noCustom: true,
            },
          },
        },
        {
          key: 'custTargetVal',
          label: '自定义触发值',
          type: 'SetExpression',
        },
      ],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'validateMsg',
      label: '校验提示',
      todoOptions: [
        {
          key: 'validateStatus',
          label: '校验类型',
          type: 'RadioButton',
          defaultValue: 'success',
          aliasKey: 'validateType',
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
      groupName: 'group4', // 需求暂未分组名称
    },
    {
      key: 'reloadSelectData',
      label: '加载数据',
      remarks: [
        {
          label: '适用场景',
          content: '可以通过当前动作进行动态加载下拉数据内容',
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
          label: '选项内容字段',
          type: 'SetExpressionKey',
          aliasKey: 'selectLabelKey',
          labelTip: commonArrReloadDataTip.labelKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'valueKey',
          label: '选项值字段',
          type: 'SetExpressionKey',
          aliasKey: 'selectValueKey',
          labelTip: commonArrReloadDataTip.valueKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      todoCallbacks: ['callback1'],
    },
  ],
  // todoActionList: getTodoActionListByKey([
  //   'reloadSelectData',
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setValue',
  //   'getValue',
  //   'getSelectedData',
  //   'clearValue',
  //   'clearOptions',
  //   'triggerRelDataSource',
  //   'validateMsg',
  // ]),
  // TODO: controller 中限制注册以下属性（注册信息错误，请检查您的 options:）
  // 指定当前控件数据绑定取自哪个 prop 字段
  // valuePropName: 'value',
});
