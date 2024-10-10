import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Tag',
  label: '标签',
  type: 'Tag',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'antd',
  platform: 'pc',
  isContainer: false,
  props: {
    name: '标签',
    title: 'tag',
    closable: true,
    basicStatus: 1,
  },
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'title',
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    title: {
      label: '内容',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
      enableI18n: true,
    },
    tagType: {
      label: '标签样式',
      type: 'SetTagType',
      groupsName: '基础',
      istodoBind: true,
      props: {
        foldConfig: {
          packable: true,
        }, // 是否可收起和展开
      },
    },
    closable: {
      label: '是否可关闭',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
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
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    },
  },
  style: {
    minHeight: '10px',
  },
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
};

export default config;
