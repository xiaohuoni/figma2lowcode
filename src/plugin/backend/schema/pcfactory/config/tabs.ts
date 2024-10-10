import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  engineApi: [],
  icon: 'Tabs',
  label: '静态标签页',
  type: 'Tabs',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  isContainer: true,
  components: [],
  platform: 'pc',
  onlyChildren: ['TabPane'],
  props: {
    name: '静态标签页',
    animated: false,
    defaultActiveKey: '1',
    tabBarGutter: '4px',
    tabPosition: 'top',
    size: 'default',
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
      istodoBind: true,
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
    size: {
      groupsName: '基础',
      label: '尺寸',
      type: 'RadioButton',
      props: {
        options: [
          { title: '大', value: 'large' },
          { title: '中', value: 'default' },
          { title: '小', value: 'small' },
        ],
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    collapseColumns: {
      groupsName: '基础',
      label: '面板设置',
      type: 'CollapseColumns',
      enableI18n: true,
      props: {
        isJSX: true,
      },
    },
    defaultActiveKey: {
      groupsName: '基础',
      label: '默认选中项',
      type: 'Select',
      istodoBind: true,
      props: {
        inhibitBtn: true,
      },
    },
    tabPosition: {
      label: '选项卡位置',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          { title: '顶部', value: 'top' },
          { title: '底部', value: 'bottom' },
          { title: '左侧', value: 'left' },
          { title: '右侧', value: 'right' },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    animated: {
      label: '开启动画',
      type: 'Switch',
      groupsName: '风格和样式',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    tabBarGutter: {
      groupsName: '风格和样式',
      label: '选项卡间隙',
      type: 'InputNumber',
      istodoBind: true,
      props: {
        min: 0,
        max: 30,
      },
    },

    type: {
      label: '选项卡样式',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        defaultValue: 'line',
        options: [
          { title: '基本式', value: 'line' },
          { title: '卡片式', value: 'card' },
        ],
        style: {
          width: 76,
          height: 28,
          textAlign: 'center',
          fontSize: '12px',
        },
      },
    },
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  style: {
    width: '100%',
    margin: '0 0 16px 0',
    padding: '20px 20px 20px 20px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'width',
    'padding',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '切换面板回调',
      value: 'onChange',
      params: [
        { title: '切换面板key', name: 'activeKey', value: '$activeKey$' },
      ],
    },
  ],
  todoActionList: getTodoActionListByKey([
    'setActiveTabPane',
    'sysSetVisible',
    'getValue',
    // 'setSubTabsData',
    'setTabsData',
  ]),
};

export default config;
