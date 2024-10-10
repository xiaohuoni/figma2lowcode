import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Form',
  label: '表单',
  type: 'Form',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  isContainer: true,
  platform: 'pc',
  isBusiObjContainer: true,
  components: [],
  props: {
    name: '表单',
    // header: '标题', // 这里貌似没啥用，
    colSpan: 8,
    // 默认一行3列
    colSpace: 16,
    // 列间距
    rowSpace: 16,
    // 行间距
    labelCol: 8,
    wrapperCol: 16,
    layout: 'vertical',
  },
  engineApi: ['service.getAppFileUrlByFileCode', 'getVisible', 'stateListener'],
  edEngineApi: ['getAppFileUrlByFileCode'],
  style: {
    padding: '0px 0px 0px 0px',
  },
  todoProps: {
    relationDataSource: {
      label: '关联数据源',
      type: 'TableDataSource',
      istodoBind: {
        dataBindType: 'TableDataBlind',
      },
      groupsName: '关联绑定',
      ignoreRule: ['genRuleType', 'formType'],
    },
    // columns: {
    //   label: '选择服务',
    //   type: 'SelectService',
    //   istodoBind: true,
    //   groupsName: '服务'
    // },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
    },
    formCode: {
      label: '编码',
      type: 'Input',
      istodoBind: true,
      groupsName: '基础',
    },
    colSpan: {
      label: '每行列数',
      type: 'Select',
      istodoBind: true,
      groupsName: '基础',
      props: {
        defaultValue: 8,
        isProps: false,
        typeFlag: 'compName',
        // required: true,
        inhibitBtn: true,
        options: [
          {
            title: '一行一列',
            value: 24,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行两列',
            value: 12,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行三列',
            value: 8,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行四列',
            value: 6,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行六列',
            value: 4,
            type: ['Form', 'Row'],
          },
          {
            title: '一行八列',
            value: 3,
            type: ['Row'],
          },
          {
            title: '一行十二列',
            value: 2,
            type: ['Row'],
          },
        ],
      },
    },
    colSpace: {
      label: '列间距',
      type: 'SelectAndInputNum',
      istodoBind: true,
      groupsName: '其他',
      props: {
        options: [
          {
            title: '超大(24px)',
            value: '24px',
          },
          {
            title: '大(20px)',
            value: '20px',
          },
          {
            title: '中(16px)',
            value: '16px',
          },
          {
            title: '小(12px)',
            value: '12px',
          },
          {
            title: '超小(8px)',
            value: '8px',
          },
          {
            title: '无(0px)',
            value: '0px',
          },
        ],
      },
    },
    rowSpace: {
      label: '行间距',
      type: 'SelectAndInputNum',
      istodoBind: true,
      groupsName: '其他',
      props: {
        options: [
          {
            title: '超大(24px)',
            value: '24px',
          },
          {
            title: '大(20px)',
            value: '20px',
          },
          {
            title: '中(16px)',
            value: '16px',
          },
          {
            title: '小(12px)',
            value: '12px',
          },
          {
            title: '超小(8px)',
            value: '8px',
          },
          {
            title: '无(0px)',
            value: '0px',
          },
        ],
      },
    },
    labelCol: {
      label: '标题占比',
      type: 'FormItemLabel',
      istodoBind: true,
      groupsName: '基础',
      props: {
        // options: LABEL_SPAN_DATA,
        defaultValue: '8',
      },
    },
    wrapperCol: {
      label: '内容占比',
      type: 'FormItemLabel',
      istodoBind: true,
      groupsName: '基础',
      props: {
        defaultValue: '16',
        // options: COL_WEAPPER_SPAN_DATA[8],
      },
    },
    layout: {
      label: '布局',
      type: 'RadioButton',
      istodoBind: true,
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        defaultValue: 'horizontal',
        options: [
          {
            title: '水平',
            value: 'horizontal',
          },
          {
            title: '垂直',
            value: 'vertical',
          },
        ],
      },
    },
    colon: {
      label: '显示冒号',
      type: 'Switch',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      groupsName: '基础',
      props: {
        defaultValue: true,
        dependProps: {
          layout: 'horizontal',
        },
      },
    },
    labelAlign: {
      label: '标签对齐方式',
      type: 'RadioButton',
      istodoBind: true,
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        defaultValue: 'right',
        options: [
          {
            title: '靠左',
            value: 'left',
          },
          {
            title: '靠右',
            value: 'right',
          },
        ],
      },
    },
    formColumns: {
      istodoBind: true,
      groupsName: '基础',
      label: '表单项设置',
      type: 'FormSettingContent',
      props: {
        isLinkField: true,
      },
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
        ],
        defaultValue: 1,
      },
    },
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  todoStyles: {
    backgroundType: {
      groupsName: '背景',
      label: '填充类型',
      type: 'BackgroundType',
      targetType: 'props',
      props: {
        options: [
          {
            title: '纯色填充',
            value: 'cleanColor',
          },
          {
            title: '图片填充',
            value: 'image',
          },
        ],
        selectType: 'RadioButton',
        compType: 'pc',
      },
      ignoreRule: ['backgroundColor'],
    },
    ...getStyleObjectByKeys(['className', 'padding', 'margin', 'customStyle']),
  },
  todoEvents: [
    {
      label: '表单值变化回调',
      value: 'onValuesChange',
      params: [
        {
          title: '表单当前改变字段编码',
          name: 'changedFieldName',
          value: '$changedFieldName$',
        },
        {
          title: '表单当前改变字段值',
          name: 'changedValue',
          value: '$changedValue$',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'validateForm',
      label: '表单校验并取值',
      todoCallbacks: ['callback1', 'callback2'],
      hidden: true,
    },
    {
      key: 'getFormValue',
      label: '表单取值',
      todoCallbacks: ['callback1'],
      hidden: true,
    },
    {
      key: 'setFormValues',
      label: '设置表单数据',
      todoOptions: [
        {
          key: 'params',
          label: '参数赋值',
          type: 'SetExpression',
        },
      ],
      hidden: true,
    },
    {
      key: 'validateCurrentForm',
      label: '当前表单校验并取值',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group1', // 需求暂时无组名，预留
    },
    {
      key: 'getCurrentFormValues',
      label: '当前表单取值',
      todoCallbacks: ['callback1'],
      groupName: 'group1', // 需求暂时无组名，预留
    },
    {
      key: 'setCurrentFormValues',
      label: '设置当前表单数据',
      todoOptions: [
        {
          key: 'params',
          label: '组件赋值',
          type: 'SelectLink',
          props: {
            titleLink: [
              { title: '切换到属性', value: 'object', key: 'object' },
              { title: '切换根节点', value: '', key: 'root' },
              { title: '清空赋值', value: 'cleanValue', key: 'cleanValue' },
            ],
            valueType: 'Table',
          },
        },
      ],
      groupName: 'group2',
    },
    {
      key: 'resetCurrentForm',
      label: '重置当前表单',
      groupName: 'group2',
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
  ],
});
export default config;
