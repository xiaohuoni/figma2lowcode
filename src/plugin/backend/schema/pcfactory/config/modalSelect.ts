import { defineConfig } from '@lingxiteam/types';
import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export default defineConfig({
  engineApi: ['openModal'],
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'ModalSelect',
  platform: 'pc',
  label: '弹窗选择',
  type: 'ModalSelect',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  //  组件类型  0：容器  1：通用  2：数据录入  3：数据展示 4：反馈  5：导航  6：布局   99:订阅组件
  compLib: 'comm',
  isContainer: false,
  components: [],
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  props: {
    placeholder: '请选择',
    titleTip: 'notext',
    basicStatus: 1,
    mode: 'normal',
    size: 'default',
    postfixIcon: {
      isIconFont: false,
      theme: 'outlined',
      type: 'search',
    },
    isIconFont: false,
    theme: 'outlined',
    type: 'search',
    postfixStyle: '1',
    allowClear: true,
  },
  style: {},
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        required: false,
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
    placeholder: {
      label: '占位提示',
      type: 'Input',
      groupsName: '基础',
      enableI18n: true,
    },
    defaultValue: {
      label: '默认值',
      type: 'SetDefaultValue',
      groupsName: '基础',
      istodoBind: true,
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
    size: {
      label: '尺寸',
      type: 'RadioButton',
      groupsName: '基础',
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
    mode: {
      label: '选择模式',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        options: [
          {
            title: '单选',
            value: 'normal',
          },
          {
            title: '多选',
            value: 'multiple',
          },
        ],
        defaultValue: 'normal',
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    modalInfo: {
      label: '设置弹窗',
      type: 'SetModalSelect',
      groupsName: '基础',
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
        defaultValue: '',
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
    postfixIcon: {
      label: '后缀图标',
      type: 'ChooseIcon',
      groupsName: '后缀',
    },
    postfix: {
      label: '后缀文案',
      type: 'Input',
      groupsName: '后缀',
      props: {
        placeholder: '请输入',
        defaultValue: '',
      },
      enableI18n: true,
    },
    postfixIconPosition: {
      label: '图标位置',
      type: 'RadioButton',
      groupsName: '后缀',
      props: {
        options: [
          {
            title: '文案前',
            value: 'before',
          },
          {
            title: '文案后',
            value: 'after',
          },
        ],
        defaultValue: 'before',
      },
    },
    postfixStyle: {
      label: '后缀样式',
      type: 'PostfixStyle',
      groupsName: '后缀',
    },
    clearIcon: {
      label: '清除图标',
      type: 'ChooseIcon',
      groupsName: '清除图标',
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
    minLength: {
      label: '最小长度',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
    },
    maxLength: {
      label: '最大长度',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
    },
    regexp: {
      label: '格式',
      type: 'SetRegexp',
      groupsName: '校验',
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
          title: '弹窗选择取值',
          name: 'e',
          value: '$e$',
        },
      ],
    },
    {
      label: '点击图标',
      value: 'onIconClick',
      params: [],
      remarks: [
        {
          label: '配置建议',
          content: '当您配置了图标点击事件，您在属性-设置弹窗将不生效！',
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
      key: 'setModalSelectValue',
      label: '控件赋值',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
        {
          key: 'labelKey',
          label: '内容映射字段',
          type: 'SetExpressionKey',
          aliasKey: 'labelMapKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'value',
          },
        },
        {
          key: 'valueKey',
          label: '值映射字段',
          type: 'SetExpressionKey',
          aliasKey: 'valueMapKey',
          props: {
            // 选择后只回填参数key，不回填表达式
            isFillKey: 'value',
          },
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
      groupName: 'group3', // 需求暂未分组名称
    },
  ],
  // todoActionList:getTodoActionListByKey([
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setModalSelectValue',
  //   'getValue',
  //   'clearValue',
  //   'validateMsg',
  // ]),
  // TODO: controller 中限制注册以下属性（注册信息错误，请检查您的 options:）
  // 指定当前控件数据绑定取自哪个 prop 字段
  // valuePropName: 'value',
});
