import { ganttItemEventParams, SERVICE_KEY } from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Gantt',
  label: '甘特图',
  type: 'Gantt',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  deprecated: true,
  props: {
    title: '实施进度',
    basicStatus: 1,
    ganttShowTitle: true,
    ganttShowLegend: true,
    ganttShowDeadline: true,
    ganttShowEditBtn: true,
    ganttShowDetailBtn: true,
    rotate: 0,
    ganttItemMargin: 50,
  },
  todoProps: {
    columns: {
      label: '选择服务',
      type: 'SelectService',
      groupsName: '服务',
      istodoBind: true,
      props: {
        fileUpload: [SERVICE_KEY.STD, SERVICE_KEY.INNER],
        serviceTabs: [SERVICE_KEY.STD, SERVICE_KEY.INNER],
      },
    },
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
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
    ganttShowTitle: {
      label: '显示标题',
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
    },
    ganttShowLegend: {
      label: '显示图例',
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
    },
    ganttShowDeadline: {
      label: '显示截止时间',
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
    },
    ganttHideYears: {
      label: '隐藏年份',
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
    ganttShowEditBtn: {
      label: '行编辑按钮',
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
    },
    ganttShowDetailBtn: {
      label: '行详情按钮',
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
    },
    rotate: {
      label: '旋转角度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        max: 360,
        min: 0,
        defaultValue: 0,
      },
    },
    ganttItemMargin: {
      label: '项目行间距',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        min: 30,
        defaultValue: 50,
      },
    },
  },
  style: {},
  setEvents: [],
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击项目标题',
      value: 'onGanttItemTitleClick',
      params: ganttItemEventParams,
    },
    {
      label: '点击项目编辑按钮',
      value: 'onGanttItemEditClick',
      params: ganttItemEventParams,
    },
    {
      label: '点击项目详情按钮',
      value: 'onGanttItemDetailClick',
      params: ganttItemEventParams,
    },
  ],
  todoActionList: getTodoActionListByKey(['reloadGanttData']),
};

export default config;
