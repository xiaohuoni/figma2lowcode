import { defineConfig, defineTodoPropsObject } from '@lingxiteam/types';
import { getDefaultTableColumns } from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export const EVNET_PARAM_OBJECT_TYPE = 'object';
export const EVENT_PARAM_ARRAY_TYPE = 'array';
export const EVENT_PARAM_OBJECT_ARRAY_TYPE = 'objectArray';
export const EVENT_PARAM_NUMBER_TYPE = 'number';
export const TABLE_EXPANDED_ROW_KEYS_PARAM_VALUE = '$expandedRowKeys$';
export const TABLE_EXPANDED_STATE_PARAM_VALUE = '$expanded$';

const tableRowEventParams = [
  {
    title: '行id',
    name: 'rowId',
    value: '$rowId$',
  },
  {
    title: '行对象',
    name: 'row',
    value: '$row$',
    attrType: EVNET_PARAM_OBJECT_TYPE,
  },
  {
    title: '行索引',
    name: 'index',
    value: '$index$',
  },
];

const config = defineConfig({
  icon: 'TreeTable',
  label: '树形表格',
  type: 'TreeTable',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  style: {},
  props: {
    tableTitle: '树形表格名称',
    columns: getDefaultTableColumns(),
    rowKeyType: 'specified',
    basicStatus: 1,
    bordered: 'segmentation',
    size: 'middle',
    fixedAction: false,
    rowSelection: false,
    showHead: false,
    extendNum: 3,
  },
  engineApi: [
    'sandBoxSafeRun',
    'historyPush',
    'historyReplace',
    'batchDownloadFileByIds',
    'getAppFileUrlById',
    'BannerModal',
    'previewFile',
    'service.getPageVersionById',
    'service.getAppFileUrlByFileCode',
    'service.getMaterialFile',
    'service.commonFetch',
    'openModal',
    'renderPopover',
    'sandBoxLoadModule',
    'getUserInfo',
    'customEngineApi.getFatherComId',
    'dataState',
  ],
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
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
    rowKeyType: defineTodoPropsObject({
      label: '行主键',
      type: 'SetRowKeyType',
      groupsName: '基础',
      istodoBind: true,
      props: {
        isLinkField: true,
        options: [
          {
            title: '指定字段',
            value: 'specified',
          },
          {
            title: '自动生成',
            value: 'auto',
          },
        ],
      },
    }),
    rowKey: {
      label: '行主键字段',
      type: 'TreeSelect',
      groupsName: '基础',
      istodoBind: false,
      props: {
        dependProps: {
          rowKeyType: 'specified',
        },
        required: true,
        visibleFlag: 'rowKeyType',
        visibleFlagValue: ['specified'],
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
        ],
        defaultValue: 1,
      },
    },
    size: {
      label: '尺寸',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '大',
            value: 'default',
          },
          {
            title: '中',
            value: 'middle',
          },
          {
            title: '小',
            value: 'small',
          },
        ],
      },
    },
    isFlexColumn: {
      label: '可拖拽列宽',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
      props: {
        defaultValue: false,
      },
    },
    columns: defineTodoPropsObject({
      label: '内容列',
      type: 'TableSettingContent',
      groupsName: '内容列',
      props: {
        isLinkField: true,
        inputConfig: {
          hasTitleTip: true,
          hasTitleLineNum: true,
          hsaLineNum: true,
          hasAlign: true,
          hasFixed: true,
          hasHiddenRule: true,
          hasCellContnet: true,
          hasCellTip: true,
          hasTranslation: true,
        },

        jsxConfig: {
          // 单元格内容开启jsx编辑
          cellContnet: true,
        },
      },
      enableI18n: true,
    }),
    extend: defineTodoPropsObject({
      label: '操作项',
      type: 'SettingExtras',
      groupsName: '操作列',
      props: {
        foldConfig: {
          packable: true,
        },
        isLinkField: true,
      },
      enableI18n: true,
    }),
    fixedAction: {
      label: '列固定',
      type: 'Switch',
      groupsName: '操作列',
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
    hiddenAction: {
      label: '隐藏操作列',
      type: 'Switch',
      groupsName: '操作列',
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
    actionWidth: defineTodoPropsObject({
      label: '宽度',
      type: 'InputNumber',
      groupsName: '操作列',
      istodoBind: true,
      props: {
        min: 50,
      },
    }),
    extendNum: {
      label: '最大展示数量',
      type: 'InputNumber',
      groupsName: '操作列',
      props: {
        defaultValue: 3,
        min: 0,
      },
    },
    rowSelection: {
      label: '选择模式',
      type: 'RadioButton',
      groupsName: '行选择器',
      istodoBind: true,
      props: {
        options: [
          {
            title: '不可选',
            value: false,
          },
          {
            title: '单选',
            value: 'radio',
          },
          {
            title: '复选',
            value: 'checkbox',
          },
        ],
        style: {
          padding: '3px 6px',
          width: 50,
          height: 28,
          lineHeight: '22px',
          fontSize: '12px',
          textAlign: 'center',
        },
      },
    },
    rowSelectionDisabled: defineTodoPropsObject({
      label: '行禁用',
      type: 'CustomFunctionCode',
      groupsName: '行选择器',
      istodoBind: false,
      props: {
        dependProps: {
          rowSelection: (v: any) => {
            return !!v;
          },
        },
        propsName: 'rowSelectionDisabled',
        isJSX: true,
      },
    }),
    checkLoosed: {
      label: '父子关联选择',
      type: 'Switch',
      groupsName: '行选择器',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        defaultValue: false,
        description:
          '开启该配置时，当树形数据中父节点被选中，该节点下所有子节点也同时被选中；当子节点全部被选中时，父节点自动被选中',
        dependProps: {
          rowSelection: 'checkbox',
        },
      },
    },
    bordered: {
      label: '显示边框',
      groupsName: '风格和样式',
      type: 'RadioButton',
      props: {
        options: [
          {
            title: '分割线',
            value: 'segmentation',
          },
          {
            title: '斑马纹',
            value: 'zebra',
          },
          {
            title: '边框线',
            value: 'border',
          },
        ],
        style: {
          padding: '3px 6px',
          width: 50,
          height: 28,
          lineHeight: '22px',
          fontSize: '12px',
          textAlign: 'center',
        },
      },
      istodoBind: true,
    },
    scroll: {
      label: '内容滚动',
      type: 'SetScroll',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        description:
          '自适应：按照“条数和列数”撑开表格的宽和高<br />自定义：按照指定的宽和高绘制，内容在内部滚动',
      },
    },
    adjustModel: {
      label: '适应方式',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: false,
      props: {
        defaultValue: 'auto',
        description: '仅“未设置高度”时，单屏适应才会生效',
        options: [
          {
            title: '内容适应',
            value: 'auto',
          },
          {
            title: '单屏适应',
            value: 'fill',
          },
        ],
        style: {
          padding: '3px 6px',
          width: 50,
          height: 28,
          lineHeight: '22px',
          fontSize: '12px',
          textAlign: 'center',
        },
      },
    },
    showHead: {
      label: '表格头部',
      type: 'Switch',
      groupsName: '表格头部操作',
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
    tableTitle: {
      istodoBind: true,
      label: '头部标题',
      type: 'Input',
      groupsName: '表格头部操作',
      props: {
        dependProps: {
          showHead: true,
        },
      },
      enableI18n: true,
    },
    headExtends: defineTodoPropsObject({
      groupsName: '表格头部操作',
      label: '头部按钮',
      type: 'SettingExtras',
      props: {
        foldConfig: {
          packable: true,
        },
        isLinkField: true,
        dependProps: {
          showHead: true,
        },
      },
      enableI18n: true,
    }),
    headBtnNum: {
      label: '最大展示数量',
      type: 'InputNumber',
      groupsName: '表格头部操作',
      props: {
        defaultValue: 3,
        dependProps: {
          showHead: true,
        },
        min: 0,
      },
    },
    expandOpenIcon: {
      label: '展开图标',
      type: 'ChooseIcon',
      groupsName: '行展开设置',
      props: {},
    },
    expandCloseIcon: {
      label: '收起图标',
      type: 'ChooseIcon',
      groupsName: '行展开设置',
      props: {},
    },
    defaultExpandAllRows: {
      label: '全部展开',
      type: 'Switch',
      groupsName: '行展开设置',
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
    defaultExpandedRowKeys: defineTodoPropsObject({
      label: '默认展开行',
      type: 'Input',
      groupsName: '行展开设置',
      istodoBind: true,
      props: {
        dependProps: {
          defaultExpandAllRows: (v: boolean) => v !== true,
        },
        placeholder: '输入行主键例如["1","2"]',
        regex: {
          pattern: /^(\[)((("[^"]+"|\d+),)+("[^"]+"|\d+)|("[^"]+"|\d+))(\])$/,
          message: '输入行主键例如["1","2"]',
        },
      },
    }),
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击行详情',
      value: 'onRowDetail',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击行编辑',
      value: 'onRowEdit',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击行删除',
      value: 'onRowDelete',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击扩展按钮1',
      value: 'onClickBtn1',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击扩展按钮2',
      value: 'onClickBtn2',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击扩展按钮3',
      value: 'onClickBtn3',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击扩展按钮4',
      value: 'onClickBtn4',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击扩展按钮5',
      value: 'onClickBtn5',
      params: tableRowEventParams,
      groupsName: '分组1',
    },
    {
      label: '点击行',
      value: 'onRowClick',
      params: tableRowEventParams,
      groupsName: '分组2',
    },
    {
      label: '双击行',
      value: 'onRowDoubleClick',
      params: tableRowEventParams,
      groupsName: '分组2',
    },
    {
      label: '选中行变化回调',
      value: 'onSelectChange',
      params: [
        {
          title: '表格选中行id(单选)',
          name: 'selectedRowKeys',
          value: '$selectedRowKeys[0]$',
        },
        {
          title: '表格选中行id(多选)',
          name: 'selectedRowKeys',
          value: '$selectedRowKeys$',
        },
        {
          title: '表格选中行数据(单选)',
          name: 'selectedRows',
          value: '$selectedRows[0]$',
        },
        {
          title: '表格选中行数据(多选)',
          name: 'selectedRows',
          value: '$selectedRows$',
        },
      ],
      groupsName: '分组2',
    },
    {
      label: '点击展开/收起',
      value: 'onExpand',
      params: [
        // 注：用 $$ 包裹，最终在运行态解析为变量名，变量名为移除 $$ 的结果
        {
          title: '行展开状态',
          name: 'expanded',
          value: TABLE_EXPANDED_STATE_PARAM_VALUE,
        },
        {
          title: '行id',
          name: 'rowId',
          value: '$rowId$',
        },
        {
          title: '行对象',
          name: 'row',
          value: '$row$',
        },
      ],
      groupsName: '分组2',
    },
    {
      label: '点击头部扩展按钮1',
      value: 'onHeadClickBtn1',
      params: [
        {
          title: '头部按钮1点击回调',
          value: '$e$',
          name: 'e',
        },
      ],
      groupsName: '分组4',
    },
    {
      label: '点击头部扩展按钮2',
      value: 'onHeadClickBtn2',
      params: [
        {
          title: '头部按钮2点击回调',
          value: '$e$',
          name: 'e',
        },
      ],
      groupsName: '分组4',
    },
    {
      label: '点击头部扩展按钮3',
      value: 'onHeadClickBtn3',
      params: [
        {
          title: '头部按钮3点击回调',
          value: '$e$',
          name: 'e',
        },
      ],
      groupsName: '分组4',
    },
    {
      label: '点击头部扩展按钮4',
      value: 'onHeadClickBtn4',
      params: [
        {
          title: '头部按钮4点击回调',
          value: '$e$',
          name: 'e',
        },
      ],
      groupsName: '分组4',
    },
    {
      label: '点击头部扩展按钮5',
      value: 'onHeadClickBtn5',
      params: [
        {
          title: '头部按钮5点击回调',
          value: '$e$',
          name: 'e',
        },
      ],
      groupsName: '分组4',
    },
  ],
  todoActionList: [
    {
      key: 'reloadTreeTableData',
      label: '加载数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          labelTip: (({ DSLCore, compId, childrenKey: _childrenKey }: any) => {
            const childrenKey = _childrenKey || 'children';
            let obj: any = { column1: '值', column2: '值' };
            const node = DSLCore?.query(compId);
            if (node) {
              obj = {};
              (node.attribute?.props?.columns || [])?.forEach((c: any) => {
                obj[c.dataIndex] = '值';
              });
            }
            obj[childrenKey] = [Object.assign({}, obj)];
            return `接收数据类型需要为数组类型: 如：${JSON.stringify([obj])}`;
          }).toString(),
        },
        {
          key: 'childrenKey',
          label: '下级列表取值字段',
          type: 'SetExpressionKey',
          labelTip:
            '使用场景：一次性查询所有数据时，需要设置下一级列表数据的取值字段；\n    示例说明：如下参数，当查询所有数据，需要标记出从children字段获取下级列表的数据；\n    {\n      "resultObject": [{\n        "children": [{\n          "children": [],\n          "parent_id": "10700",\n          "name": "2-1",\n          "id": "10900",\n        }]，\n        "parent_id": "-1",\n        "name": "第二棵",\n        "id": "10700",\n      }]\n    }\n    ',
        },
        {
          key: 'childrenSync',
          label: '子节点是否异步',
          type: 'Select',
          props: {
            options: [
              {
                title: '是',
                value: true,
              },
              {
                title: '否',
                value: false,
              },
            ],
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group1',
    },
    {
      key: 'reloadTreeTableChildData',
      label: '加载子节点数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
        },
        {
          key: 'expandRowKey',
          label: '展开行主键',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group1',
    },
    {
      key: 'reloadColServiceData',
      label: '加载字段翻译数据',
      todoOptions: [
        {
          key: 'colName',
          label: '翻译字段',
          type: 'SelectTableCol',
        },
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
        },
      ],
      groupName: 'group1',
    },
    {
      key: 'setSelectedRowKeys',
      label: '设置选中行',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group2',
    },
    {
      key: 'getTableSelected',
      label: '获取选中行',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group2',
    },
    {
      key: 'getTableSelectedKey',
      label: '获取选中行主键',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group2',
    },
    {
      key: 'getTableData',
      label: '获取树形表格数据',
      todoCallbacks: ['callback1'],
      groupName: 'group2',
    },
    {
      key: 'sysSetVisible',
      label: '控制显隐',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
          props: {
            checkable: true,
          },
        },
        {
          label: '是否显隐',
          key: 'compValueList',
          type: 'SetBatchProps',
          props: {
            defaultValue: '',
            options: [
              {
                title: '显示',
                value: 'true',
              },
              {
                title: '隐藏',
                value: '',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
      groupName: 'group3',
    },
    {
      key: 'setLoading',
      label: '控制加载中',
      todoOptions: [
        {
          key: 'loading',
          label: '是否加载中',
          type: 'Select',
          props: {
            inhibitBtn: true,
            options: [
              {
                title: '是',
                value: true,
              },
              {
                title: '否',
                value: false,
              },
            ],
          },
        },
      ],
      groupName: 'group7',
    },
    {
      key: 'expandTableData',
      label: '全部展开/收起',
      todoOptions: [
        {
          key: 'isExpand',
          label: '是否展开',
          type: 'RadioButton',
          defaultValue: 'toggle',
          props: {
            options: [
              {
                title: '展开',
                value: 'true',
              },
              {
                title: '收起',
                value: '',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
      groupName: 'group5',
    },
    {
      key: 'clearTableSelected',
      label: '清除选中数据',
      groupName: 'group4',
    },
    {
      key: 'clearData',
      label: '清空数据',
      groupName: 'group4',
    },
  ],
});

export default config;
