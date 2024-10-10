import { getDefaultDescriptionColumns } from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Description',
  label: '描述列表',
  type: 'Description',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  platform: 'pc',
  isContainer: false,
  props: {
    columns: getDefaultDescriptionColumns(),
    name: '描述列表',
    bordered: true,
    labelSize: '120px',
    colSpan: 8,
    colon: true,
    labelAlign: 'left',
    basicStatus: 1,
    layout: 'horizontal',
  },
  engineApi: [
    'sandBoxSafeRun',
    'service.getPageVersionById',
    'renderPopover',
    'sandBoxLoadModule',
  ],
  todoProps: {
    dataSource: {
      label: '选择数据源',
      type: 'TableDataSource',
      groupsName: '数据绑定',
      istodoBind: {
        dataBindType: 'TableDataBlind',
      },
      props: {},
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    layout: {
      label: '布局',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        defaultValue: 'horizontal',
        options: [
          { title: '水平', value: 'horizontal' },
          { title: '垂直', value: 'vertical' },
        ],
      },
    },
    labelAlign: {
      label: '标签对齐方式',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          { title: '靠左', value: 'left' },
          { title: '靠右', value: 'right' },
        ],
      },
    },
    labelSize: {
      label: '标签宽度',
      type: 'DescriptionLabel',
      groupsName: '基础',
      istodoBind: true,
      props: {
        optionsMap: {
          pixel: {
            key: 'pixel',
            defaultValue: '120px',
          },
          grid: {
            key: 'grid',
            defaultValue: 8,
          },
          fraction: {
            key: 'fraction',
            format: /^(?!0\/0)\d+\/(?!0)\d+$/,
            label: '占比',
            unit: '',
          },
        },
        description:
          '设置控件内标题的占比，支持栅格、像素、占比，仅在布局类型为”水平“时生效',
      },
    },
    colSpan: {
      label: '每行列数',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        isProps: false,
        typeFlag: 'compName',
        required: true,
        options: [
          {
            title: '一行一列',
            value: 24,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行两列',
            value: 12,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行三列',
            value: 8,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行四列',
            value: 6,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          { title: '一行六列', value: 4, type: ['Form', 'Row', 'Description'] },
          { title: '一行八列', value: 3, type: ['Row', 'Description'] },
          { title: '一行十二列', value: 2, type: ['Row'] },
        ],
      },
    },
    bordered: {
      label: '显示边线',
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
        visibleFlag: 'collapseType',
        visibleFlagValue: ['', undefined, null],
      },
    },
    colon: {
      label: '显示冒号',
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
    columns: {
      label: '项目设置',
      type: 'DescListSettingContent',
      groupsName: '基础',
      props: {
        isLinkField: true,
        isJSX: true,
      },
      enableI18n: true,
    },
    lineBreak: {
      label: '换行符',
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
  },
  style: {},
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [],
  todoActionList: getTodoActionListByKey([
    'reloadColServiceData',
    'reloadDescData',
    'clearData',
  ]),
};

export default config;
