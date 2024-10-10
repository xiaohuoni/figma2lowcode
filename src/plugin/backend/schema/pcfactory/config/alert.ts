import { defineConfig, defineTodoPropsObject } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Alert',
  label: '警告提示',
  type: 'Alert',
  description: '',
  platform: 'pc',
  image: '',
  groupsName: '反馈',
  compType: 4,
  isContainer: false,
  compLib: 'comm',
  props: {
    message: '提示文字',
    showIcon: true,
    type: 'info',
    basicStatus: 1,
  },
  todoProps: {
    name: defineTodoPropsObject<'Input'>({
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {},
    }),
    message: defineTodoPropsObject({
      label: '提示',
      type: 'Input' as const,
      groupsName: '基础',
      istodoBind: true,
      enableI18n: true,
      props: {
        required: true,
      },
    }),
    banner: defineTodoPropsObject({
      label: '是否顶部公告',
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
    }),
    description: defineTodoPropsObject({
      label: '描述',
      enableI18n: true,
      type: 'TextArea',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    }),
    type: defineTodoPropsObject({
      label: '警告样式',
      type: 'Select',
      groupsName: '基础',
      props: {
        defaultValue: 'info',
        inhibitBtn: true,
        options: [
          { title: '通知', value: 'info' },
          { title: '成功', value: 'success' },
          { title: '错误', value: 'error' },
          { title: '警告', value: 'warning' },
        ],
      },
    }),
    showIcon: defineTodoPropsObject({
      label: '展示图标',
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
        defaultValue: true,
      },
    }),
    closable: defineTodoPropsObject({
      label: '是否可关闭',
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
    }),
    basicStatus: defineTodoPropsObject({
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
    }),
    extendProps: defineTodoPropsObject({
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    }),
  },
  style: {},
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '关闭时回调',
      value: 'onClose',
      params: [{ title: '事件对象', name: 'e', value: '$e$' }],
    },
  ],
  todoActionList: [],
});

export default config;
