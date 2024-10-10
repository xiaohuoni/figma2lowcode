import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  engineApi: ['sandBoxSafeRun', 'sandBoxLoadModule'],
  icon: 'TabPane',
  label: '标签子面板',
  type: 'TabPane',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  isContainer: true,
  platform: 'pc',
  components: [],
  onlyRoot: ['Tabs'],
  props: {
    name: '标签子面板',
    tab: '标题',
    basicStatus: 1,
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
      istodoBind: false,
    },
    forceRender: {
      label: '隐藏时渲染',
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
    tab: {
      label: '子标签标题',
      type: 'Input',
      istodoBind: true,
      groupsName: '其他',
      enableI18n: true,
    },
    badge: {
      label: '角标',
      type: 'Input',
      istodoBind: true,
      groupsName: '其他',
      enableI18n: true,
    },
    badgeRendering: {
      label: '自定义角标渲染',
      type: 'CustomRendering',
      groupsName: '其他',
      istodoBind: false,
      props: {
        valueKey: 'badgeRendering',
        propsName: 'badgeRendering',
        isProps: true,
        returnOrigin: false,
        isJSX: true,
      },
    },
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  style: {
    minHeight: 40,
  },
  todoStyles: getStyleObjectByKeys(['className', 'customStyle']),
  todoEvents: [],
  todoActionList: getTodoActionListByKey(['sysSetVisible', 'setBadgeValue']),
};

export default config;
