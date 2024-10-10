import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export default {
  icon: 'Text',
  label: '文本',
  type: 'Text',
  compLib: 'custom',
  compType: 1,
  isBusiObjContainer: false,
  isContainer: false,
  isInlineBlock: true,
  engineApi: ['securityWithHtmlResource'],
  edEngineApi: ['securityWithHtmlResource', 'getAppFileUrlByFileCode'],
  props: {
    name: '文本',
    content: '文本',
    textType: 'span',
    basicStatus: 1,
    showHtml: false,
  },
  style: {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#1c242e',
    backgroundColor: 'rgba(255, 255, 255,0)',
    textAlign: 'left',
  },
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'content',
  },
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
    content: {
      label: '文本内容',
      type: 'TextArea',
      groupsName: '基础',
      istodoBind: true,
      props: {},
      enableI18n: true,
    },
    textType: {
      label: '文本类型',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '一级标题', value: 'h1' },
          { title: '二级标题', value: 'h2' },
          { title: '三级标题', value: 'h3' },
          { title: '四级标题', value: 'h4' },
          { title: '普通文本', value: 'span' },
          { title: '段落', value: 'p' },
        ],
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
    showHtml: {
      label: 'HTML显示',
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
    textReg: {
      label: '翻译设置',
      type: 'SettingReg',
      groupsName: '基础',
      props: {},
      enableI18n: true,
    },
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
      props: {},
      ignoreRule: ['popoverSetting'],
      enableI18n: true,
    },
  },
  setEvents: [],
  platform: 'pc',
  description: '',
  image: '',
  groupsName: '通用',
  todoActionList: [
    {
      key: 'setCompChildrenValue',
      label: '设置内容',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      hidden: true, // 后续可删除
    },
    {
      key: 'sysSetValue',
      label: '设置内容',
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
    },
    {
      key: 'getValue',
      label: '获取当前内容',
      todoCallbacks: ['callback1'],
    },
    ...getTodoActionListByKey(['setCompContentValue']),
  ],
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [],
    },
    {
      label: '双击',
      value: 'onDoubleClick',
      params: [],
    },
  ],
  todoStyles: getStyleObjectByKeys([
    'className',
    'color',
    'fontSize',
    'letterSpacing',
    'lineHeight',
    'fontWeight',
    'textAlign',
    'width',
    'padding',
    'margin',
    'backgroundColor',
    'customStyle',
    'flex',
  ]),
};
