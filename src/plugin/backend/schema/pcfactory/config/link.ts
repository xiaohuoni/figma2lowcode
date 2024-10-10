import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Link',
  label: '超链接',
  type: 'Link',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  compLib: 'comm',
  isContainer: false,
  isInlineBlock: true,
  platform: 'pc',
  props: {
    name: '超链接',
    linkValue: '超链接',
    target: '_self',
    basicStatus: 1,
  },
  engineApi: ['service.getAppFileUrlById'],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
      },
    },
    href: {
      label: '链接地址',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    linkValue: {
      label: '链接名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        required: true,
      },
      enableI18n: true,
    },
    clickType: {
      label: '触发类型',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        defaultValue: 'open',
        options: [
          { title: '跳转', value: 'open' },
          { title: '下载', value: 'download' },
        ],
      },
      enableI18n: true,
    },
    download: {
      label: '下载文件名',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          clickType: 'download',
        },
        description:
          '注意：如果配置了下载文件名，将走下载文件的形式，跳转链接地址将会无法成功！',
      },
    },
    target: {
      label: '打开方式',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          clickType: 'open',
        },
        inhibitBtn: true,
        options: [
          { title: '自身窗口中打开', value: '_self' },
          { title: '新窗口中打开', value: '_blank' },
          { title: '父窗口中打开', value: '_parent' },
          { title: '整个窗口中打开', value: '_top' },
        ],
        defaultValue: '_self',
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
  },
  style: {},
  todoStyles: getStyleObjectByKeys([
    'className',
    'color',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: getTodoActionListByKey(['setCompFileId']),
});

export default config;
