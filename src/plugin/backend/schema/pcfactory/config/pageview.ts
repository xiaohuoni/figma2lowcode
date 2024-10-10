import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Pageview',
  label: '页面容器',
  type: 'Pageview',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  engineApi: ['getAppFileUrlByFileCode'],
  props: {
    pageViewCompState: {},
  },
  group: {
    组件状态: {
      groupExtra: [
        {
          label: '刷新',
          key: 'pageViewCompState',
          funName: 'refreshTableData',
          dependProps: {
            pageSrc: (val: string) => {
              if (val) return true;
              return false;
            },
          },
        },
      ],
    },
  },
  todoProps: {
    pageSrc: {
      label: '页面地址',
      type: 'SetPageSrc',
      istodoBind: true,
      groupsName: '基础',
      ignoreRule: ['pageId'],
    },
    useEffectLoading: {
      label: '加载中效果',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
      props: {
        description:
          '当开启后，页面容器加载完成（所有异步动作执行结束后，会取消loading）',
      },
    },
    pageViewCompState: {
      label: '组件状态',
      type: 'CustomParams',
      groupsName: '组件状态',
      props: {
        visibleFlag: 'pageSrc',
        visibleFlagValue: 'hasValue',
        selectUse: 'props',
        eventDataMap: { a: {} },
        todoOptionKey: 'compState',
        visible: true,
        data: {
          value: 'showCustomModal',
          path: ['a'],
        },
      },
    },
  },
  style: {
    height: 'auto',
    width: '100%',
  },
  setEvents: [],
  todoStyles: getStyleObjectByKeys([
    'margin',
    'backgroundColor',
    'customStyle',
    'width',
    'height',
    'flex',
  ]),
  todoEvents: [
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
  todoActionList: [
    ...getTodoActionListByKey(['setPageSrc', 'callCurrentFunc']),
    {
      key: 'refreshContainer',
      label: '刷新页面容器',
    },
    {
      key: 'pageViewValidateAllForm',
      label: '全部表单校验并取值',
      todoCallbacks: ['callback1', 'callback2'],
      classification: [
        {
          label: '数据设置',
          value: 'setData',
        },
      ],
    },
    {
      key: 'pageViewGetAllFormValues',
      label: '全部表单取值',
      todoCallbacks: ['callback1'],
      classification: [
        {
          label: '数据设置',
          value: 'setData',
        },
      ],
    },
  ],
};

export default config;
