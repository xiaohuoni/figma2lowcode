import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Webview',
  label: 'web容器',
  type: 'Webview',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  props: {},
  todoProps: {
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    src: {
      label: '链接地址',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
  },
  style: {
    height: '320px',
    width: '100%',
    border: 'none',
  },
  setEvents: [
    {
      dataName: 'event',
      dataId: `${Math.random()}`.slice(12),
      children: [],
      path: [],
      value: 'onMessage',
      params: [
        {
          title: '消息入参',
          name: 'data',
          value: '$data$',
        },
      ],
    },
  ],
  todoStyles: getStyleObjectByKeys([
    'className',
    'backgroundColor',
    'margin',
    'customStyle',
    'width',
    'height',
    'flex',
  ]),
  todoEvents: [
    {
      label: '页面加载完成',
      value: 'onLoad',
    },
    {
      label: '页面加载失败',
      value: 'onError',
    },
    {
      label: '页面卸载完成',
      value: 'onUnload',
    },
    {
      label: '接收到消息',
      value: 'onMessage',
      params: [
        {
          title: '消息入参',
          name: 'msg',
          value: '$msg$',
        },
      ],
    },
  ],
  todoActionList: [
    ...getTodoActionListByKey(['setSrc', 'sendMessageIframe']),
    {
      key: 'refreshContainer',
      label: '刷新web容器',
    },
  ],
};

export default config;
