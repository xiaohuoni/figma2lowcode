import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'DynamicDataContainer',
  label: '动态数据容器',
  type: 'DynamicDataContainer',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  isBusiObjContainer: true,
  components: [],
  props: {
    name: '动态数据容器',
    boxSpace: '16px',
  },
  engineApi: [
    'service.batchMatchDynamicData',
    'renderDynamicPage',
    'dynamicDataUtils',
  ],
  style: {},
  todoProps: {
    engineRule: {
      label: '设置规则',
      type: 'DynamicRuleSetting',
      groupsName: '加载规则',
    },
    mockRule: {
      label: '模拟规则',
      type: 'DynamicRuleSetting',
      groupsName: '加载规则',
      props: {
        description: '通过模拟数据在配置态进行动态渲染',
        // 模拟规则，不允许写表达式
        settingType: 'mock',
      },
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
    },
    dynamicCode: {
      label: '编码',
      type: 'Input',
      istodoBind: true,
      groupsName: '基础',
      props: {
        required: true,
        defaultValue: '$selectedComp?.id$', // 用来处理当是新拖入表单控件的时候，默认表单编码是组件id 在pageZoneParseCompConfig处理
      },
    },
    basicStatus: {
      label: '状态',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
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
    scene: {
      label: '适用场景',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '编辑',
            value: 'edit',
          },
          {
            title: '只读',
            value: 'readonly',
          },
        ],
        defaultValue: 'edit',
      },
    },
    boxSpace: {
      label: '表单间距',
      type: 'SelectAndInputNum',
      istodoBind: true,
      props: {
        description: '设置多个表单间的间距',
        unitOptions: [
          {
            title: 'px',
            value: 'px',
          },
        ],
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
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  todoStyles: {
    ...getStyleObjectByKeys(['className', 'padding', 'margin', 'customStyle']),
  },
  todoEvents: [
    {
      label: '表单值变化回调',
      value: 'onValuesChange',
      params: [
        {
          title: '动态数据编码',
          name: 'formCode',
          value: '$formCode$',
        },
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
        {
          title: '所有值',
          name: 'allValues',
          value: '$allValues$',
        },
      ],
      remarks: [
        {
          label: '适用场景',
          content:
            '动态容器内表单中的值变化时触发该事件，例如选择下拉框的值时，通过该事件渲染其他的组件或执行其他操作',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'reloadDynamicData',
      label: '设置加载规则',
      todoOptions: [
        {
          key: 'rules',
          label: '规则赋值',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1', 'callback2'],
      remarks: [
        {
          label: '适用场景',
          content: '设置加载规则获取动态数据，根据动态数据进行页面渲染',
        },
        {
          label: '配置说明',
          content:
            '传入加载规则条件，条件支持多组且是对象数组格式，可参考：[{"prod_type":"paramCodeA","busi_score":"A"},{"prod_type":"paramCodeB","busi_score":"M"}]',
        },
      ],
    },
    {
      key: 'validateDynamicForm',
      label: '容器内表单校验并取值',
      todoCallbacks: ['callback1'],
      remarks: [
        {
          label: '适用场景',
          content:
            '用于收集表单容器内录入型控件的值，并对设置了校验规则、是否必填控件的值进行校验，在成功回调中可以获取到表单收集的数据。例如：获取到表单的值后，存储到数据库中',
        },
        {
          label: '配置说明',
          content: '校验表单的值后再获取表单值',
        },
      ],
      groupName: 'group1', // 需求暂时无组名，预留
    },
    {
      key: 'getDynamicDataFormValue',
      label: '容器内全部表单取值',
      todoCallbacks: ['callback1'],
      remarks: [
        {
          label: '适用场景',
          content:
            '用于收集表单容器内录入型控件的值，不进行值校验,例如：获取到表单的值后，存储到数据库中',
        },
        {
          label: '配置说明',
          content: '获取容器内所有组件的值',
        },
      ],
      groupName: 'group1', // 需求暂时无组名，预留
    },
    {
      key: 'setDynamicDataValues',
      label: '设置容器内表单数据',
      todoOptions: [
        {
          key: 'params',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      remarks: [
        {
          label: '适用场景',
          content:
            '支持为表单内控件赋值，来源一般为对象，可以是服务的返回结果，对象的变量名需要与表单内控件的属性名一一对应。例如：先发送请求获取业务数据，然后把业务数据的值设置到表单中',
        },
        {
          label: '配置说明',
          content: '设置当前表单中控件的值',
        },
      ],
    },
    {
      key: 'resetCurrentDynamicForm',
      label: '重置容器内表单',
      remarks: [
        {
          label: '适用场景',
          content:
            '适用于清空表单所有数据场景，例如：查询条件中的重置按钮，需要清除所有查询条件的内容',
        },
        {
          label: '配置说明',
          content: '清空表单的所有数据',
        },
      ],
      groupName: 'group2',
    },
  ],
});
export default config;
