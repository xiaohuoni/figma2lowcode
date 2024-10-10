import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  engineApi: ['PageView', 'sandBoxSafeRun', 'sandBoxLoadModule'],
  icon: 'Tabs',
  label: '动态标签页',
  type: 'DynamicTabs',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  compLib: 'comm',
  isContainer: false,
  components: [],
  platform: 'pc',
  props: {
    name: '动态标签页',
    animated: false,
    defaultActiveKey: '',
    tabBarGutter: 4,
    tabPosition: 'top',
    type: 'line',
    size: 'default',
    tabItems: [
      { label: '标题一', key: 'customId_1' },
      { label: '标题二', key: 'customId_2' },
    ],
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
    tabItems: {
      groupsName: '基础',
      label: '面板设置',
      type: 'CustomDataSource',
      enableI18n: true,
      istodoBind: {
        description: [
          {
            title: '值类型',
            des: '对象数组：{ label: "标题", key: "唯一标识", pagePath:"页面地址", badge: "角标", disabled: "是否禁用", isShow: "是否展示（$true$）" } 注意：在绑定的页面可用$state.tabBarItem$、$state.tabBarIndex$获取对应导航栏数据、索引, 默认选中第一个可显示的页面。',
          },
        ],
      },
      props: {
        modalWidth: 1100,
        description:
          '在绑定的页面可用$state.tabBarItem$、$state.tabBarIndex$获取对应导航栏数据、索引',
        min: 1,
        hideClearData: true,
        rows: [
          {
            key: 'label',
            title: '标题',
            isRequired: true,
            width: 80,
          },
          {
            key: 'key',
            title: '唯一标识',
            isUnique: true,
            isRequired: true,
            width: 95,
          },
          {
            key: 'pagePath',
            title: '页面地址',
            type: 'pagePath',
            description: '自定义页面时，支持$$进行表达式绑定使用',
            width: 100,
          },
          {
            key: 'badge',
            title: '角标',
            description: '支持$$进行表达式绑定使用',
            width: 80,
          },
          {
            key: 'badgeRendering',
            title: '自定义角标渲染',
            type: 'badgeRendering',
            isJSX: true,
            // description: '当选项卡样式是可编辑类型，角标和自定义渲染将会失效',
            width: 100,
          },
          {
            key: 'disabled',
            title: '是否禁用',
            type: 'disabled',
            width: 170,
          },
          {
            key: 'closable',
            title: '允许关闭',
            type: 'switch',
            width: 100,
            props: {
              defaultChecked: true,
            },
            description:
              '当动态标签页的选项卡样式为“可编辑卡片”并打开“全部关闭”时，该字段才生效。',
          },
          {
            key: 'isShow',
            title: '状态',
            description:
              '当为$true$的时候表示显示，$false$为隐藏，默认$true$，支持$$进行表达式绑定使用',
            width: 80,
          },
        ],
      },
    },
    defaultActiveKey: {
      groupsName: '基础',
      label: '默认选中项',
      type: 'Input',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        description: '请传入面板设置中的唯一标识(key)',
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
      props: {},
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
      type: 'Select',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        defaultValue: 'line',
        options: [
          { title: '基本式', value: 'line' },
          { title: '卡片式', value: 'card' },
          { title: '可编辑卡片', value: 'editable-card' },
        ],
        style: {
          width: 76,
          height: 28,
          textAlign: 'center',
          fontSize: '12px',
        },
      },
    },
    closeAll: {
      label: '全部关闭',
      type: 'Switch',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        dependProps: {
          type: 'editable-card',
          tabPosition: ['top', 'bottom'],
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
    height: '100%',
    margin: '0 0 16px 0',
    pagePadding: '20px 20px 20px 20px',
  },
  todoStyles: {
    ...getStyleObjectByKeys([
      'className',
      'width',
      'height',
      'margin',
      'customStyle',
    ]),
    pagePadding: {
      label: '内边距',
      type: 'MarginInput',
      groupsName: '布局',
      props: {
        min: 0,
      },
    },
  },
  todoEvents: [
    {
      label: '切换面板回调',
      value: 'onTabChange',
      params: [
        {
          title: '切换面板唯一标识(key)',
          name: 'activeKey',
          value: '$activeKey$',
        },
        { title: '切换面板数据(item)', name: 'item', value: '$item$' },
      ],
    },
    {
      label: '删除面板回调',
      value: 'onTabDeleteChange',
      params: [{ title: '删除面板key', name: 'key', value: '$key$' }],
      remarks: [
        {
          label: '适用场景',
          content: '当动态标签页的选项卡样式为“可编辑卡片”时，该事件才生效。',
        },
      ],
    },
    {
      label: '删除全部面板',
      value: 'onDeleteAll',
      remarks: [
        {
          label: '适用场景',
          content:
            '当动态标签页的选项卡样式为“可编辑卡片”并打开“全部关闭”时，该事件才生效。',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'dynamicTabsSetActiveKey',
      label: '设置选中面板',
      remarks: [
        {
          label: '适用场景',
          content: '设置选中哪一个标签子面板，可在设置中选择一个面板',
        },
        {
          label: '配置描述',
          content: '在设置中选择需要选中的面板',
        },
      ],
      todoOptions: [
        {
          key: 'activeKey',
          label: '选中面板的唯一标识（key）',
          type: 'SetExpression',
        },
      ],
    },
    {
      key: 'dynamicTabsAddTabs',
      label: '新增面板',
      remarks: [
        {
          label: '配置描述',
          content:
            '请传入对象数组格式数据, 对象格式：{ label: "标题（必填）", key: "唯一标识（必填且唯一）", pagePath:"页面地址", badge: "角标", disabled: "是否禁用", isShow: "是否展示" }',
        },
      ],
      todoOptions: [
        {
          key: 'tabs',
          label: '新增面板数据',
          type: 'SetExpression',
        },
      ],
    },
    {
      key: 'dynamicTabsDeleteTabs',
      label: '关闭面板',
      remarks: [
        {
          label: '配置描述',
          content:
            '请传入需要关闭的面板的唯一标识符（key），传入多个面板key时用英文逗号隔开',
        },
      ],
      todoOptions: [
        {
          key: 'tabsKey',
          label: '面板唯一标识（key）',
          type: 'SetExpression',
        },
      ],
    },
  ],
};

export default config;
