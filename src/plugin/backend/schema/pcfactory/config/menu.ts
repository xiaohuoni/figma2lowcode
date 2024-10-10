import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export const EVNET_PARAM_OBJECT_TYPE = 'object';
export const EVENT_PARAM_ARRAY_TYPE = 'array';
export const EVENT_PARAM_OBJECT_ARRAY_TYPE = 'objectArray';
export const EVENT_PARAM_NUMBER_TYPE = 'number';

// 事件参数名常量定义
export const TABLE_SORT_ASC_PARAM_VALUE = '$ascendCol$';
export const TABLE_SORT_DESC_PARAM_VALUE = '$descendCol$';
export const TABLE_PAGE_NUM_PARAM_VALUE = '$page$';
export const TABLE_PAGE_SIZE_PARAM_VALUE = '$pageSize$';

// 硬编码：不带下级属性（即 .属性名）的参数，兼容存量
export const EVENT_PARAMS_WITHOUT_ATTR = [
  TABLE_SORT_ASC_PARAM_VALUE,
  TABLE_SORT_DESC_PARAM_VALUE,
  TABLE_PAGE_NUM_PARAM_VALUE,
  TABLE_PAGE_SIZE_PARAM_VALUE,
];

const config = defineConfig({
  engineApi: ['service.getAppFileUrlByFileCode'],
  icon: 'Menu',
  label: '导航菜单',
  type: 'Menu',
  description: '',
  image: '',
  groupsName: '导航',
  compType: 5,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  props: {
    mode: 'inline',
    basicStatus: 1,
    treeData: [],
  },
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    mode: {
      label: '菜单类型',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '垂直', value: 'vertical' },
          { title: '水平', value: 'horizontal' },
          { title: '内嵌', value: 'inline' },
        ],
        defaultValue: 'vertical',
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    inlineCollapsed: {
      label: '是否默认缩起',
      type: 'Switch',
      groupsName: '基础',
      props: {
        dependProps: {
          mode: 'inline',
        },
        defaultValue: false,
      },
    },
    isExpanded: {
      label: '是否默认展开项',
      type: 'Switch',
      groupsName: '基础',
      props: {
        dependProps: {
          mode: 'inline',
        },
        defaultValue: false,
      },
    },
    isUsePrimary: {
      label: '是否使用主题色',
      type: 'Switch',
      groupsName: '基础',
      props: {
        defaultValue: false,
      },
    },
    color: {
      label: '图标颜色',
      type: 'ColorPicker',
      groupsName: '基础',
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
    treeData: {
      label: '项目设置',
      type: 'TreeColumns',
      groupsName: '基础',
      props: {
        isLinkField: true,
      },
      enableI18n: true,
    },
    icon: {
      label: '项目图标',
      type: 'TreeNodeIcon',
      groupsName: '基础',
      props: {
        description:
          '该图标设置只在在使用控件动作加载数据中生效（备注：加载数据中的展开时图标取值字，收起时图标取值字段 未设置）',
      },
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    },
  },
  style: {
    width: '100%',
    height: 'auto',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'width',
    'height',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [
        { title: '菜单项key', name: 'key', value: '$key$' },
        {
          title: '菜单项页面地址',
          name: 'url',
          value: '$url$',
        },
        {
          title: '菜单项数据',
          name: 'node',
          value: '$node.data$',
          attrType: 'object',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'reloadMenuData',
      label: '加载数据',
      todoOptions: [
        {
          key: 'data',
          aliasKey: 'dataSource',
          label: '内容',
          type: 'SetExpression',
        },
        {
          key: 'labelKey',
          label: '节点名称取值字段',
          type: 'SetExpressionKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'nodeValueKey',
          label: '节点key取值字段',
          type: 'SetExpressionKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'urlValueKey',
          label: '节点url取值字段',
          labelTip: '菜单路径',
          type: 'SetExpressionKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'selectable',
          label: '节点可选字段编码',
          type: 'SetExpressionKey',
          labelTip:
            "适用场景：需要控制当前节点是否能够选择，且需后端服务有字段标识出是否可选；\n    处理逻辑：当节点的字段编码值为布尔类型的false，或者字符串类型为'false'、\n    空字符串时，都认为不可选，否则认为可选。",
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'childrenKey',
          label: '下级列表取值字段',
          type: 'SetExpressionKey',
          labelTip:
            '使用场景：一次性查询所有数据时，需要设置下一级列表数据的取值字段；\n    示例说明：如下参数，当查询所有数据，需要标记出从children字段获取下级列表的数据；\n    {\n      "resultObject": [{\n        "children": [{\n          "children": [],\n          "parent_id": "10700",\n          "name": "2-1",\n          "id": "10900",\n        }]，\n        "parent_id": "-1",\n        "name": "第二棵",\n        "id": "10700",\n      }]\n    }\n    ',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'expandedIcon',
          label: '展开时图标取值字段',
          type: 'SetExpressionKey',
          labelTip: `取值为对象，格式如下 {"theme": "outlined", // 使用antd icons的图标 
                           "type": "exclamation-circle", // 图标名 
                            "fileId": "文件id形式", 
                            "fileHttp": "文件url的形式",
                            "fileCode": "文件编码形式"}`,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'closedIcon',
          label: '收起时图标取值字段',
          type: 'SetExpressionKey',
          labelTip: `取值为对象，格式如下 {"theme": "outlined", // 使用antd icons的图标 
                           "type": "exclamation-circle", // 图标名 
                            "fileId": "文件id形式", 
                            "fileHttp": "文件url的形式",
                            "fileCode": "文件编码形式"}`,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      todoCallbacks: ['callback1'],
    },
    ...getTodoActionListByKey([
      'setMenuOpenKey',
      'clearMenuOpenKey',
      'setInlineCollapsed',
    ]),
    {
      key: 'setMenuSelectedKeys',
      label: '设置选中数据',
      remarks: [
        {
          label: '配置描述',
          content:
            '请传入要选中菜单的key，支持数组和字符串，字符串多个key请用","（英文输入法逗号）隔开。',
        },
      ],
      todoOptions: [
        {
          key: 'menuSelectedKeys',
          label: '选中菜单的key',
          type: 'SetExpression',
        },
      ],
    },
  ],
});

export default config;
