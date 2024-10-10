import { getStyleObjectByKeys } from '../utils/todoStyle';

export const TABLE_PAGE_NUM_PARAM_VALUE = '$page$';
export const TABLE_PAGE_SIZE_PARAM_VALUE = '$pageSize$';
export const EVENT_PARAM_NUMBER_TYPE = 'number';

const config = {
  icon: 'Pagination',
  label: '分页',
  type: 'Pagination',
  description: '',
  image: '',
  groupsName: '导航',
  compType: 5,
  isContainer: true,
  platform: 'pc',
  compLib: 'antd',
  props: {
    basicStatus: 1,
    size: 'default',
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
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
          { title: '禁用', value: 3 },
        ],
        defaultValue: 1,
      },
    },
    size: {
      label: '尺寸',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '大', value: 'default' },
          { title: '小', value: 'small' },
        ],
        defaultValue: 'default',
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    simple: {
      label: '简单分页',
      type: 'Switch',
      groupsName: '分页设置',
      props: {},
    },
    pageSize: {
      label: '每页条数',
      type: 'InputNumber',
      groupsName: '分页设置',
      istodoBind: true,
      props: {
        defaultValue: 10,
        min: 1,
        max: 30,
      },
    },
    current: {
      label: '当前页码',
      type: 'InputNumber',
      groupsName: '分页设置',
      props: {
        defaultValue: 1,
        min: 1,
      },
      istodoBind: true,
    },
    showTotal: {
      label: '显示总数',
      type: 'Switch',
      groupsName: '分页设置',
      props: {
        defaultValue: false,
      },
    },
    total: {
      label: '总数值',
      type: 'InputNumber',
      groupsName: '分页设置',
      props: {
        dependProps: {
          showTotal: true,
        },
        min: 0,
        placeholder: '请选择数据源',
      },
      istodoBind: true,
    },
    showSizeChanger: {
      label: '每页条数选择',
      type: 'Switch',
      groupsName: '分页设置',
      props: {},
    },
    pageSizeOptions: {
      label: '条数可选值',
      type: 'Input',
      groupsName: '分页设置',
      props: {
        dependProps: {
          showSizeChanger: true,
        },
        placeholder: '请输入例如[5,10,20]',
        regex: {
          pattern: /^(\[)((\d+,)+\d+|\d+)(\])$/,
          message: '请输入例如[5,10,20]',
        },
      },
    },
    showQuickJumper: {
      label: '快速跳转至某页',
      type: 'Switch',
      groupsName: '分页设置',
      props: {},
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    },
  },
  style: {
    padding: '5px 5px 5px 5px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'padding',
    'customStyle',
  ]),
  todoEvents: [
    {
      label: '页码改变回调',
      value: 'onPageChange',
      params: [
        {
          title: '当前页码',
          name: 'page',
          value: TABLE_PAGE_NUM_PARAM_VALUE,
          attrType: EVENT_PARAM_NUMBER_TYPE,
        },
        {
          title: '当前每页条数',
          name: 'pageSize',
          value: TABLE_PAGE_SIZE_PARAM_VALUE,
          attrType: EVENT_PARAM_NUMBER_TYPE,
        },
      ],
    },
  ],
  todoActionList: [],
};

export default config;
