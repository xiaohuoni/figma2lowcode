import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Collapse',
  label: '折叠面板',
  type: 'Collapse',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'antd',
  isContainer: true,
  platform: 'pc',
  components: [],
  onlyChildren: ['CollapsePanel'],
  props: {
    name: '折叠面板',
    bordered: true,
    defaultActiveKey: ['1'],
    expandIconPosition: 'right',
    basicStatus: 1,
    hasIcon: true,
    cardIconType: 'middle',
    collapseType: '',
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
    collapseColumns: {
      label: '面板设置',
      type: 'CollapseColumns',
      groupsName: '基础',
      istodoBind: false,
      enableI18n: true,
    },
    defaultActiveKey: {
      groupsName: '基础',
      label: '默认展开项',
      type: 'MultiSelect',
      istodoBind: true,
      props: {
        defaultValue: [],
        description:
          '值类型为字符串数组，折叠面板中面板设置的key值，如：[1,2,3] （注意：如果是手风琴模式，接收一个key值）',
      },
    },
    headerColor: {
      groupsName: '基础',
      label: '头部背景',
      type: 'ColorPicker',
    },
    titleColor: {
      groupsName: '基础',
      label: '标题颜色',
      type: 'ColorPicker',
    },
    expandIconPosition: {
      groupsName: '基础',
      label: '图标位置',
      type: 'RadioButton',
      istodoBind: true,
      props: {
        options: [
          { title: '靠左', value: 'left' },
          { title: '靠右', value: 'right' },
        ],
        defaultValue: 'right',
      },
    },
    collapseType: {
      groupsName: '风格和样式',
      label: '面板样式',
      type: 'RadioButton',
      istodoBind: true,
      props: {
        options: [
          { title: '默认', value: '' },
          { title: '简洁', value: 'simple' },
        ],
      },
    },
    bordered: {
      label: '显示边框',
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
      props: {
        visibleFlag: 'collapseType',
        visibleFlagValue: ['', undefined, null],
      },
    },
    accordion: {
      groupsName: '风格和样式',
      label: '手风琴模式',
      type: 'Switch',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },

    size: {
      groupsName: '基础',
      label: '尺寸',
      type: 'RadioButton',
      props: {
        defaultValue: 'default',
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
    cardIconType: {
      label: '标题样式',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        options: [
          { title: '无图标', value: 'none' },
          { title: '样式一', value: 'middle' },
          { title: '样式二', value: 'left' },
          { title: '自定义', value: 'auto' },
        ],
        groupStyle: {
          width: '100%',
          display: 'flex',
        },
        style: {
          fontSize: '12px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        // visibleFlag: 'hasIcon',
        // visibleFlagValue: [true],
      },
    },
    prefixIcon: {
      groupsName: '基础',
      label: '标题图标',
      type: 'SetPrefixIcon',
      props: {
        visibleFlag: 'cardIconType',
        visibleFlagValue: ['auto'],
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
      params: [{ title: '切换面板key', value: '$key$', name: 'key' }],
    },
  ],
  todoActionList: [
    {
      key: 'setExpansionTerm',
      label: '设置展开项',
      todoOptions: [
        {
          key: 'type',
          label: '类型',
          type: 'RadioButton',
          defaultValue: '0',
          labelTip:
            '当选择切换类型时候，如当前你的折叠面板都是收起，将会全部打开，如果你只有第一项打开，其余收起，那么切换后，第一项收起，其余项打开',
          props: {
            options: [
              {
                title: '全部展开',
                value: '0',
              },
              {
                title: '全部收起',
                value: '1',
              },
              {
                title: '切换',
                value: '2',
              },
              {
                title: '自定义',
                value: '3',
              },
            ],
          },
        },
        {
          key: 'expansionkey',
          label: '展开项值',
          type: 'Input',
          labelTip:
            '值类型为字符串，折叠面板中面板设置的key值，多个就于,分割，如：1,2,3',
          props: {
            placeholder: '输入展开项key,例如：1,2,3',
          },
          visibleFlag: 'type',
          visibleFlagValue: ['3'],
        },
      ],
      remarks: [
        {
          label: '注意事项',
          content:
            '注意：当折叠面板是手风琴模式的时候，全部展开将会展开第一个面板，同时自定义的形式，只允许传入一个key值',
        },
      ],
    },
  ],
});

export default config;
