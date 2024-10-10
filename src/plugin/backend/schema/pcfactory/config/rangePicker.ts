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
  icon: 'RangePicker',
  label: '时间段选择',
  type: 'RangePicker',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  //  组件类型  0：容器  1：通用  2：数据录入  3：数据展示 4：反馈  5：导航  6：布局   99:订阅组件
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  components: [],
  props: {
    format: 'YYYY-MM-DD',
    timeMode: 'date',
    // placeholder: '请选择时间',
    pickerType: 'RangePicker',
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
      istodoBind: true,
    },
    timeMode: {
      label: '日期类型',
      type: 'Select',
      groupsName: '基础',
      props: {
        isLinkField: true,
        defaultValue: 'date',
        isProps: false,
        typeFlag: 'compName',
        visibleFlag: 'pickerType',
        inhibitBtn: true,
        visibleFlagValue: ['DatePicker', 'RangePicker'],
        options: [
          {
            title: '时间',
            value: 'time',
            type: ['RangePicker'],
          },
          {
            title: '日期',
            value: 'date',
            type: ['DatePicker', 'RangePicker'],
          },
          {
            title: '月份',
            value: 'month',
            type: ['DatePicker', 'RangePicker'],
          },
          {
            title: '年份',
            value: 'year',
            type: ['DatePicker', 'RangePicker'],
          },
        ],
      },
    },
    format: {
      label: '展示格式',
      type: 'Select',
      groupsName: '基础',
      props: {
        isLinkField: true,
        isProps: true,
        typeFlag: 'timeMode',
        defaultTypeFlag: {
          DatePicker: 'date',
          TimePicker: 'time',
          RangePicker: 'date',
        },
        inhibitBtn: true,
        changeDefalutValue: true,
        // type:显示标志位
        options: [
          {
            title: 'YYYY-MM-DD HH:mm:ss',
            value: 'YYYY-MM-DD HH:mm:ss',
            type: ['time'],
          },
          {
            title: 'YYYY/MM/DD HH:mm:ss',
            value: 'YYYY/MM/DD HH:mm:ss',
            type: ['time'],
          },
          {
            title: 'YYYY年MM月DD日 HH:mm:ss',
            value: 'YYYY年MM月DD日 HH:mm:ss',
            type: ['time'],
          },
          {
            title: 'YYYYMMDD HH:mm:ss',
            value: 'YYYYMMDD HH:mm:ss',
            type: ['time'],
          },
          {
            title: 'DD/MM/YYYY HH:mm:ss',
            value: 'DD/MM/YYYY HH:mm:ss',
            type: ['time'],
          },
          {
            title: 'DD.MM.YYYY HH:mm:ss',
            value: 'DD.MM.YYYY HH:mm:ss',
            type: ['time'],
          },
          {
            title: 'YYYY-MM-DD',
            value: 'YYYY-MM-DD',
            type: ['date'],
          },
          {
            title: 'YYYY/MM/DD',
            value: 'YYYY/MM/DD',
            type: ['date'],
          },
          {
            title: 'YYYY年MM月DD日',
            value: 'YYYY年MM月DD日',
            type: ['date'],
          },
          {
            title: 'YYYYMMDD',
            value: 'YYYYMMDD',
            type: ['date'],
          },
          {
            title: 'DD/MM/YYYY',
            value: 'DD/MM/YYYY',
            type: ['date'],
          },
          {
            title: 'MM/DD/YYYY',
            value: 'MM/DD/YYYY',
            type: ['date'],
          },
          {
            title: 'DD.MM.YYYY',
            value: 'DD.MM.YYYY',
            type: ['date'],
          },
          {
            title: 'YYYY-MM',
            value: 'YYYY-MM',
            type: ['month'],
          },
          {
            title: 'YYYY/MM',
            value: 'YYYY/MM',
            type: ['month'],
          },
          {
            title: 'YYYY年MM月',
            value: 'YYYY年MM月',
            type: ['month'],
          },
          {
            title: 'YYYYMM',
            value: 'YYYYMM',
            type: ['month'],
          },
          {
            title: 'MM/YYYY',
            value: 'MM/YYYY',
            type: ['month'],
          },
          {
            title: 'MM.YYYY',
            value: 'MM.YYYY',
            type: ['month'],
          },
          {
            title: 'YYYY',
            value: 'YYYY',
            type: ['year'],
          },
          {
            title: 'YYYY年',
            value: 'YYYY年',
            type: ['year'],
          },
        ],
      },
    },
    valueFormat: {
      label: '取值格式',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        description:
          '日期标准格式：YYYY-MM-DD 时间标准格式：YYYY-MM-DD HH:mm:ss 年月标准格式: YYY-MM',
        defaultValue: 'show',
        options: [
          {
            title: '展示格式',
            value: 'show',
          },
          {
            title: '标准格式',
            value: 'standard',
          },
        ],
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    separator: {
      label: '分隔符',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        placeholder: '使用分隔符分隔两个时间段',
        defaultValue: '~',
      },
    },
    showTime: {
      label: '支持时间选择',
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
          title: '时间段选择框取值',
          name: 'e',
          value: '$e$',
        },
        {
          title: '时间段选择框取值_开始时间',
          name: 'e_begin',
          value: '$e_begin$',
        },
        {
          title: '时间段选择框取值_结束时间',
          name: 'e_end',
          value: '$e_end$',
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
      key: 'setRangeValue',
      label: '设置时间段',
      todoOptions: [
        {
          key: 'startVal',
          label: '开始值',
          type: 'SetExpression',
          props: {
            maxDateKey: 'endVal',
            placeholder: '请输入YYYY-MM-DD格式的时间',
          },
        },
        {
          key: 'endVal',
          label: '结束值',
          type: 'SetExpression',
          props: {
            minDateKey: 'startVal',
            placeholder: '请输入YYYY-MM-DD格式的时间',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getValue',
      label: '获取当前值',
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getRangePickerValue',
      label: '获取起止时间',
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
          aliasKey: 'validateType',
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
  // todoActionList: getTodoActionListByKey([
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'getValue',
  //   'clearValue',
  //   'setRangeValue',
  // ]),
  // TODO: controller 中限制注册以下属性（注册信息错误，请检查您的 options:）
  // 指定当前控件数据绑定取自哪个 prop 字段
  // valuePropName: 'value',
};
