import { defineConfig } from '@lingxiteam/types';
import { treeArrReloadDataTip } from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const treeParentNodeEventParams = [
  {
    title: '父节点key',
    name: 'parentKey',
    value: '$parentKey$',
  },
  {
    title: '父节点数据',
    name: 'parentNodeData',
    value: '$parentNodeData$',
    attrType: 'object',
  },
];
const treeNodeEventParams = [
  {
    title: '节点key',
    name: 'key',
    value: '$key$',
  },
  {
    title: '节点数据',
    name: 'nodeData',
    value: '$nodeData$',
    attrType: 'object',
  },
  ...treeParentNodeEventParams,
  {
    title: '当前节点数据',
    name: 'currrentNode',
    value: '$currrentNode$',
    attrType: 'object',
  },
];
const config = defineConfig({
  icon: 'Tree',
  label: '树形控件',
  type: 'Tree',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  platform: 'pc',
  isContainer: false,
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  props: {
    name: '树形控件',
    defaultExpandAll: true,
    showLine: true,
    selectable: true,
    isAsync: false,
    treeData: [],
    basicStatus: 1,
    showLineIcon: false,
  },
  engineApi: [
    'sandBoxSafeRun',
    'service.commonFetch',
    'service.getAppFileUrlByFileCode',
    'sandBoxLoadModule',
  ],
  todoProps: {
    // treeColumns: {
    //   label: '服务设置',
    //   type: 'TreeService',
    //   groupsName: '服务',
    //   istodoBind: true,
    //   props: {},
    // },
    asyncColumns: {
      label: '异步服务',
      type: 'TreeService',
      groupsName: '服务',
      istodoBind: true,
      props: {
        dependProps: {
          asyncService: (v: undefined) => v !== undefined,
        },
      },
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    defaultExpandAll: {
      label: '展开所有',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    showLine: {
      label: '显示连线',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    checkable: {
      label: '是否复选',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    treeData: {
      label: '内容设置',
      type: 'TreeColumns',
      groupsName: '基础',
      props: {
        isLinkField: true,
      },
      enableI18n: true,
    },
    nodeIcons: {
      label: '操作项',
      type: 'TreeNodeAction',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    showLineIcon: {
      label: '显示图标',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    treeNodeIcon: {
      label: '节点图标',
      type: 'TreeNodeIcon',
      groupsName: '基础',
      props: {
        dependProps: {
          showLineIcon: true,
        },
      },
      istodoBind: true,
    },
    showSearch: {
      label: '是否可搜索',
      type: 'Switch',
      groupsName: '基础',
      props: {},
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
          {
            title: '普通',
            value: 1,
          },
          {
            title: '隐藏',
            value: 2,
          },
          {
            title: '禁用',
            value: 3,
          },
        ],
        defaultValue: 1,
      },
    },
    customRenderCode: {
      label: '自定义渲染',
      type: 'CustomFunctionCode',
      groupsName: '基础',
      istodoBind: false,
      props: {
        propsName: 'customRenderCode',
        dependProps: {
          showLineIcon: true,
        },
        isJSX: true,
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
    'padding',
    'customStyle',
  ]),
  todoEvents: [
    {
      label: '选中树节点',
      value: 'onSelect',
      params: [
        {
          title: '节点key(单选)',
          name: 'selectedKeys',
          value: '$selectedKeys[0]$',
        },
        {
          title: '节点keys(多选)',
          name: 'selectedKeys',
          value: '$selectedKeys$',
        },
        {
          title: '节点数据',
          name: '{ node }',
          value: '$node.props.data$',
          attrType: 'object',
        },
        ...treeParentNodeEventParams,
      ],
    },
    {
      label: '展开节点',
      value: 'onExpand',
      params: [
        {
          title: '展开节点key',
          name: 'key',
          value: '$key$',
        },
        {
          title: '展开节点的下级keys',
          name: 'childrenKeys',
          value: '$childrenKeys$',
        },
        ...treeParentNodeEventParams,
      ],
    },
    {
      label: '勾选时回调',
      value: 'onCheck',
      params: [
        {
          title: '复选框取值',
          name: 'checkedKeys',
          value: '$checkedKeys$',
        },
      ],
    },
    {
      label: '点击添加图标',
      value: 'onNodeAdd',
      params: treeNodeEventParams,
    },
    {
      label: '点击编辑图标',
      value: 'onNodeEdit',
      params: treeNodeEventParams,
    },
    {
      label: '点击删除图标',
      value: 'onNodeDelete',
      params: treeNodeEventParams,
    },
    {
      label: '右击树节点',
      value: 'onRightClickNode',
      params: [
        {
          title: '节点key',
          name: 'key',
          value: '$key$',
        },
        {
          title: '节点数据',
          name: 'nodeData',
          value: '$nodeData$',
          attrType: 'object',
        },
        {
          title: '是否已加载',
          name: 'isLoaded',
          value: '$isLoaded$',
        },
        ...treeParentNodeEventParams,
      ],
    },
    {
      label: '点击菜单子项',
      value: 'onClickMenuItem',
      params: [
        {
          title: '当前点击菜单项key',
          name: 'key',
          value: '$key$',
        },
        {
          title: '点击菜单项数据',
          name: 'menuData',
          value: '$menuData$',
          attrType: 'object',
        },
        {
          title: '菜单项层级路径',
          name: 'path',
          value: '$path$',
          attrType: 'object',
        },
      ],
    },
    {
      label: '点击扩展按钮1',
      value: 'onClickBtn1',
      params: treeNodeEventParams,
    },
  ],
  todoActionList: [
    {
      key: 'reloadData',
      label: '加载数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
          labelTip: treeArrReloadDataTip.data,
        },
        {
          key: 'labelKey',
          label: '节点名称取值字段',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.labelKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'nodeValueKey',
          label: '节点key取值字段',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.nodeValueKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'selectable',
          label: '节点可选字段编码',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.selectable,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'childrenKey',
          label: '下级列表取值字段',
          type: 'SetExpressionKey',
          labelTip: treeArrReloadDataTip.childrenKey,
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'appendTreeNode',
      label: '加载子节点数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
        },
        {
          key: 'nodeKey',
          label: '操作节点key',
          type: 'SetExpression',
        },
        {
          key: 'title',
          label: '节点名称取值字段',
          type: 'SetExpression',
          aliasKey: 'titleKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'key',
          label: '节点key取值字段',
          type: 'SetExpression',
          aliasKey: 'valueKey',
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
      ],
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'getTreeSelectedKey',
      label: '获取选中节点key',
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getSelectedData',
      label: '获取选中数据',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'setTreeSelectedKey',
      label: '设置选中节点',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'clearTreeSelectedKey',
      label: '清空选中项',
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getTreeEditingKey',
      label: '获取当前操作的节点key',
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getCheckedKey',
      label: '获取复选框选中值',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'setCheckedKey',
      label: '设置复选框选中值',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'clearTreeCheckedKey',
      label: '清空复选框选中项',
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'setSelectAll',
      label: '设置全部选中',
      todoCallbacks: ['callback1'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'appendMenuNodeData',
      label: '加载菜单子项数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
        },
        {
          key: 'title',
          label: '节点名称取值字段',
          type: 'SetExpression',
          aliasKey: 'titleKey',
          props: {
            // 选择后只回填参数key选项对应的子级数据，不回填表达式
            isFillKey: 'data',
          },
        },
        {
          key: 'key',
          label: '节点key取值字段',
          type: 'SetExpression',
          aliasKey: 'valueKey',
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
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group3', // 需求暂未分组名称
    },
    {
      key: 'setExpandedKey',
      label: '展开指定节点',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      groupName: 'group4', // 需求暂未分组名称
    },
    {
      key: 'closeExpandedKey',
      label: '收起指定节点',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      groupName: 'group4', // 需求暂未分组名称
    },
  ],
  // todoActionList: getTodoActionListByKey([
  //   'reloadData',
  //   'appendTreeNode',
  //   'getTreeSelectedKey',
  //   'getTreeEditingKey',
  //   'getSelectedData',
  //   'setTreeSelectedKey',
  //   'getCheckedKey',
  //   'setCheckedKey',
  //   'setSelectAll',
  //   'appendMenuNodeData',
  //   'clearTreeCheckedKey',
  //   'clearTreeSelectedKey',
  //   'setExpandedKey',
  //   'closeExpandedKey'
  // ]),
});

export default config;
