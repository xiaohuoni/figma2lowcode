import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'TlrView',
  label: '上左右布局',
  type: 'TlrView',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 6,
  isContainer: true,
  compLib: 'custom',
  platform: 'pc',
  props: {
    name: '上左右布局',
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
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
  style: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    padding: '0px 0px 0px 0px',
    textAlign: 'left',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'backgroundColor',
    'color',
    'fontSize',
    'letterSpacing',
    'lineHeight',
    'fontWeight',
    'textAlign',
    'padding',
    'margin',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'display',
    'customStyle',
    'flexDirection',
    'justifyContent',
    'alignItems',
    'flexWrap',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: [],
};

export default config;
