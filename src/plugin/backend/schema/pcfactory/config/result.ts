import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Result',
  label: '结果控件',
  type: 'Result',
  description: '',
  image: '',
  groupsName: '反馈',
  compType: 4,
  isContainer: false,
  compLib: 'comm',
  platform: 'pc',
  props: {
    basicStatus: 1,
    status: 'info',
    title: '标题',
    subTitle: '副标题',
  },
  todoProps: {
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '数据绑定',
      // 旧配置中用于指定哪个属性 prop 有绑定数据源或表达式的 </> 标志，新配置在 props中配置 istodoBind: true,
      istodoBind: true,
      props: {
        required: true,
      },
      enableI18n: true,
    },
    subTitle: {
      label: '副标题',
      type: 'Input',
      groupsName: '数据绑定',
      // 旧配置中用于指定哪个属性 prop 有绑定数据源或表达式的 </> 标志，新配置在 props中配置 istodoBind: true,
      istodoBind: true,
      props: {
        required: true,
      },
      enableI18n: true,
    },
    status: {
      label: '类型',
      type: 'Select',
      groupsName: '基础',
      props: {
        defaultValue: 'info',
        inhibitBtn: true,
        options: [
          { title: 'info', value: 'info' },
          { title: 'success', value: 'success' },
          { title: 'error', value: 'error' },
          { title: 'warning', value: 'warning' },
          { title: '404', value: '404' },
          { title: '403', value: '403' },
          { title: '500', value: '500' },
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
  style: {},
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [],
  todoActionList: [],
};

export default config;
