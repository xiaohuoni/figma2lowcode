import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export default defineConfig({
  icon: 'BOFramer',
  compLib: '@/components',
  compType: 4,
  type: 'BOFramer',
  platform: 'pc',
  label: '业务组件',
  alias: 'BOFramer',
  props: {
    name: '业务组件',
    basicStatus: 1,
  },
  style: {
    margin: '0 0 12px 0',
  },
  description: '',
  image: '',
  groupsName: '容器',
  group: {
    方法: {
      groupExtra: [
        { label: '刷新', key: 'busiCompFuncs', funName: 'refreshCompFunc' },
      ],
    },
  },
  setEvents: [],
  todoEvents: [
    {
      label: '表单值变化回调',
      value: 'onValuesChange',
      params: [
        {
          title: '表单变化值',
          name: 'changedValues',
          value: '$changedValues$',
          attrType: 'object',
        },
        {
          title: '表单所有值',
          name: 'allValues',
          value: '$allValues$',
          attrType: 'object',
        },
      ],
    },
    {
      value: 'usePageEndRequest',
      label: '页面加载请求结束',
      remarks: [
        {
          label: '场景描述',
          content:
            '在页面加载完成事件中，所有的事件执行结束后进行回掉（包含页面加载完成事件中的异步请求（注意：定时器相关动作不计算回掉时间））',
        },
        {
          label: '适用场景',
          content:
            '在复杂的表单页面中，你可以在页面加载完成事件中进行页面loading的动作设置，在页面加载完成请求结束事件中取消loading，保障在复杂请求中，因异步导致数据未能及时回填，用户提交错误数据问题。',
        },
      ],
    },
  ],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      enableI18n: true,
      props: {},
    },
    useEffectLoading: {
      label: '加载中效果',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
      props: {
        description:
          '当开启后，业务组件加载完成（所有异步动作执行结束后，会取消loading）',
      },
    },
    basicStatus: {
      label: '状态',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '普通', value: 1 },
          { title: '隐藏', value: 2 },
        ],
        defaultValue: 1,
      },
    },
    busiCompStates: {
      label: '组件状态',
      type: 'SetBusiCompStates',
      groupsName: '组件状态',
      props: {
        terminal: ['pc'],
      },
    },
    busiCompFuncs: {
      label: '方法',
      type: 'SetBusiCompFuncs',
      groupsName: '方法',
    },
  },
  todoStyles: getStyleObjectByKeys(['margin']),
  todoActionList: getTodoActionListByKey([
    'validateForm',
    'getFormValue',
    'setFormValues',
    'resetForm',
    'setCompState',
    'callCurrentFunc',
  ]),
});
