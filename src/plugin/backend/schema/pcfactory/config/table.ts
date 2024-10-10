import { defineConfig } from '@lingxiteam/types';
import { getDefaultTableColumns } from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';
// import { getTodoActionListByKey } from '../utils/todoActionList';

export const EVNET_PARAM_OBJECT_TYPE = 'object';
export const EVENT_PARAM_ARRAY_TYPE = 'array';
export const EVENT_PARAM_OBJECT_ARRAY_TYPE = 'objectArray';
export const EVENT_PARAM_NUMBER_TYPE = 'number';

// 事件参数名常量定义
export const TABLE_SORT_ASC_PARAM_VALUE = '$ascendCol$';
export const TABLE_SORT_DESC_PARAM_VALUE = '$descendCol$';
export const TABLE_PAGE_NUM_PARAM_VALUE = '$page$';
export const TABLE_PAGE_SIZE_PARAM_VALUE = '$pageSize$';
export const TABLE_ROW_PARAM_VALUE = '$row$';
export const TABLE_EXPANDED_ROW_KEYS_PARAM_VALUE = '$expandedRowKeys$';
export const TABLE_EXPANDED_STATE_PARAM_VALUE = '$expanded$';

// 硬编码：不带下级属性（即 .属性名）的参数，兼容存量
export const EVENT_PARAMS_WITHOUT_ATTR = [
  TABLE_SORT_ASC_PARAM_VALUE,
  TABLE_SORT_DESC_PARAM_VALUE,
  TABLE_PAGE_NUM_PARAM_VALUE,
  TABLE_PAGE_SIZE_PARAM_VALUE,
];
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
  icon: 'Table',
  label: '表格',
  type: 'Table',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  props: {
    tableTitle: '表格名称',
    columns: getDefaultTableColumns(),
    page: false,
    rowKeyType: 'specified',
    basicStatus: 1,
    editMode: 'single',
    bordered: 'segmentation',
    size: 'middle',
    fixedAction: false,
    rowSelection: false,
    showHead: false,
    showTotal: false,
    showSizeChanger: false,
    showQuickJumper: false,
    pageSizeOptions: '[5,10,20]',
    showCustom: {
      hasCustom: false,
      customTitle: '自定义列',
      iconPosition: 'left',
      customStyle: 'default',
    },
    extendNum: 3,
    customNum: 3,
    dataSourceLoading: false,
    summaryTotal: {
      type: 'none',
      name: '合计',
    },
  },
  group: {
    行设置: {
      subLabel: '行选择、编辑等功能设置',
      packable: true,
    },
    操作列: {
      packable: true,
    },
    行展开设置: {
      packable: true,
    },
    风格和样式: {
      packable: true,
    },
    扩展设置: {
      packable: true,
    },
    表格头部操作: {
      packable: true,
    },
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
    'renderBusiComponent',
    'sandBoxLoadModule',
    'getUserInfo',
    'customEngineApi.getFatherComId',
    'dataState',
    'securityWithUrl',
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
    // columns: {
    //   label: '选择服务',
    //   type: 'SelectService',
    //   groupsName: '服务',
    //   istodoBind: true,
    //   props: {},
    // },
    dataSourceLoading: {
      label: '加载中效果',
      type: 'Switch',
      groupsName: '数据绑定',
      istodoBind: false,
      props: {
        description: '开启后刷新数据源时，表格将显示加载中动画',
      },
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    rowKeyType: {
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
    },
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
    // visible: {
    //   label: '状态',
    //   type: 'RadioButton',
    //   groupsName: '基础',
    //   istodoBind: true,
    //   props: {
    //     options: [
    //       { title: '普通', value: true },
    //       { title: '隐藏', value: false },
    //     ],
    //     style: {
    //       padding: '3px 6px',
    //       width: 75,
    //       height: 28,
    //       lineHeight: '22px',
    //       fontSize: '12px',
    //       textAlign: 'center',
    //     },
    //   },
    // },
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
    showCustom: {
      istodoBind: true,
      label: '自定义列',
      type: 'SetTableCustomColumn',
      groupsName: '表格头部操作',
      props: {
        foldConfig: {
          packable: true,
        },
        dependProps: {
          showHead: true,
        },
      },
      enableI18n: true,
    },
    headExtends: {
      groupsName: '表格头部操作',
      label: '头部按钮',
      type: 'SettingExtras',
      istodoBind: false,
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
    },
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
    // TODO: 将配置字段由 tableColumns 改为 columns（
    // 实际上 tableColumns 并没有作为 属性key存入DSL中，如果有问题，之后再看看怎么改
    columns: {
      label: '内容列',
      type: 'TableSettingContent',
      groupsName: '内容列',
      props: {
        isLinkField: true,
        // openDeduceIsSet: true, // 是否开启推断：推断是否已设置值
        // // 注：deduceIsSet 的定义应是个函数，且返回值为 boolean，决定是否已设置值
        // deduceIsSet: (valueSetted = []) => {
        //   return !!valueSetted.length;
        // },
        inputConfig: {
          hasTitleTip: true,
          hasTitleLineNum: true,
          hsaLineNum: true,
          hasAlign: true,
          hasFixed: true,
          hasGroup: true,
          hasRowSpan: true,
          hasEditOption: true,
          hasHiddenRule: true,
          hasTranslation: true,
          hasCellContnet: true,
          hasCellTip: true,
          hasSorter: true,
          hasFilter: true,
        },

        jsxConfig: {
          // 单元格内容开启jsx编辑
          cellContnet: true,
        },
      },
      enableI18n: true,
    },
    isFlexColumn: {
      label: '列宽可拖拽',
      type: 'Switch',
      groupsName: '内容列',
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
      },
    },
    extendNum: {
      label: '最大展示数量',
      type: 'InputNumber',
      groupsName: '操作列',
      props: {
        defaultValue: 3,
        min: 0,
      },
    },
    extend: {
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
    },
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
    actionWidth: {
      label: '宽度',
      type: 'InputNumber',
      groupsName: '操作列',
      istodoBind: true,
      props: {
        min: 50,
      },
    },
    rowSelection: {
      label: '行选择',
      type: 'RadioButton',
      groupsName: '行设置',
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
    rowSelectionDisabled: {
      label: '行禁用规则',
      type: 'CustomFunctionCode',
      groupsName: '行设置',
      istodoBind: false,
      props: {
        dependProps: {
          rowSelection: (v: any) => {
            return !!v;
          },
        },
        propsName: 'rowSelectionDisabled',
      },
    },
    checkLoosed: {
      label: '父子关联选择',
      type: 'Switch',
      groupsName: '行设置',
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
    editMode: {
      label: '行编辑',
      type: 'RadioButton',
      groupsName: '行设置',
      istodoBind: true,
      props: {
        options: [
          {
            title: '单行',
            value: 'single',
          },
          {
            title: '整表',
            value: 'multiple',
          },
        ],
        style: {
          padding: '3px 6px',
          width: 75,
          height: 28,
          lineHeight: '22px',
          fontSize: '12px',
          textAlign: 'center',
        },
      },
    },
    rowEditableRule: {
      label: '行编辑规则',
      type: 'CustomFunctionCode',
      groupsName: '行设置',
      istodoBind: false,
      props: {
        propsName: 'rowEditableRule',
      },
    },
    page: {
      label: '是否分页',
      type: 'Switch',
      groupsName: '分页设置',
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
    pageSize: {
      label: '每页条数',
      type: 'InputNumber',
      groupsName: '分页设置',
      istodoBind: true,
      props: {
        dependProps: {
          page: true,
        },
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
        dependProps: {
          page: true,
        },
        defaultValue: 1,
        min: 1,
      },
      istodoBind: true,
    },
    showTotal: {
      groupsName: '分页设置',
      label: '显示总数',
      type: 'Switch',
      props: {
        dependProps: {
          page: true,
        },
      },
    },
    total: {
      groupsName: '分页设置',
      label: '总数值',
      type: 'InputNumber',
      props: {
        dependProps: {
          showTotal: true,
          page: true,
        },
        min: 0,
        placeholder: '请选择数据源',
      },
      istodoBind: true,
    },
    showSizeChanger: {
      groupsName: '分页设置',
      label: '每页条数选择',
      type: 'Switch',
      props: {
        dependProps: {
          page: true,
        },
      },
    },
    pageSizeOptions: {
      groupsName: '分页设置',
      label: '条数可选值',
      type: 'Input',
      props: {
        description:
          '当表格当前每页条数不在此配置集合里时，会额外添加当前每页条数；调整该配置时，请同步调整发送请求或数据源过滤条件里pageSize值。',
        dependProps: {
          showSizeChanger: true,
          page: true,
        },
        placeholder: '请输入例如[5,10,20]',
        regex: {
          pattern: /^(\[)((\d+,)+\d+|\d+)(\])$/,
          message: '请输入例如[5,10,20]',
        },
      },
    },
    showQuickJumper: {
      groupsName: '分页设置',
      label: '快速跳转至某页',
      type: 'Switch',
      props: {
        dependProps: {
          page: true,
        },
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
    defaultExpandedRowKeys: {
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
    },
    expandRowByClick: {
      label: '点击行展开',
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
    expandComponents: {
      groupsName: '行展开设置',
      label: '展开内容',
      type: 'SetBusiComp',
      props: {
        description:
          '选择业务组件配置行展开内容<a target="_blank" href="https://docs.iwhalecloud.com/bidjvj1/share?d=kk3#didqyoQk7q">配置帮助手册</a>',
        isLinkField: true,
        title: '展开内容',
      },
    },
    rowExpandable: {
      groupsName: '行展开设置',
      label: '生效规则',
      type: 'CustomFunctionCode',
      istodoBind: false,
      props: {
        propsName: 'rowExpandable',
      },
    },
    expandIconPositionRef: {
      groupsName: '行展开设置',
      label: '图标位置基准',
      type: 'TableExpandIconPosRef',
      props: {
        dependProps: {
          expandComponents: (v: undefined) => v !== undefined,
        },
      },
    },
    expandIconPosition: {
      groupsName: '行展开设置',
      label: '图标位置',
      type: 'RadioButton',
      props: {
        dependProps: {
          expandComponents: (v: undefined) => v !== undefined,
        },
        defaultValue: 'left',
        options: [
          {
            title: '左侧',
            value: 'left',
          },
          {
            title: '右侧',
            value: 'right',
          },
        ],
        style: {
          padding: '3px 6px',
          width: 75,
          height: 28,
          lineHeight: '22px',
          fontSize: '12px',
          textAlign: 'center',
        },
      },
    },
    summaryTotal: {
      label: '表格合计',
      groupsName: '表格合计',
      children: {
        type: {
          label: '合计类型',
          type: 'Select',
          props: {
            defaultValue: 'none',
            description: `1、在表格中针对当前页数据中的“数字”类型列进行前端求和计算，并将结果显示在最后一行；<br/>
          2、在第一列显示"合计"文字，建议添加自增序号列作为第一列；<br/>
          3、单列合计：只对所选的这列数据进行合计；<br/>
          4、多列合计：选择相邻的多个列进行所有数据的合计；`,
            options: [
              {
                title: '不合计',
                value: 'none',
              },
              {
                title: '单列合计',
                value: 'single',
              },
              {
                title: '多列合计',
                value: 'multi',
              },
            ],
          },
        },
        name: {
          label: '合计行名称',
          type: 'Input',
          props: {
            visibleFlag: 'summaryTotal.type',
            visibleFlagValue: ['single', 'multi'],
          },
        },
        col: {
          label: '合计列',
          type: 'SelectTableCol',
          props: {
            type: 'single',
            dependProps: {
              'summaryTotal.type': 'single',
            },
          },
        },
        group: {
          label: '合计分组',
          type: 'SelectTableCol',
          props: {
            type: 'multi',
            dependProps: {
              'summaryTotal.type': 'multi',
            },
          },
        },
        decimal: {
          label: '保留小数位',
          type: 'InputNumber',
          istodoBind: true,
          props: {
            description:
              '默认按数据列当前精度进行保留，配置后按小数位进行四舍五入',
            visibleFlag: 'summaryTotal.type',
            visibleFlagValue: ['single', 'multi'],
          },
        },
        background: {
          label: '合计行背景',
          type: 'ColorPicker',
          props: {
            defaultValue: '#FFFFFF',
            visibleFlag: 'summaryTotal.type',
            visibleFlagValue: ['single', 'multi'],
          },
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
    colorFormatInfo: {
      label: '单元格样式',
      type: 'TableColorFormat',
      groupsName: '风格和样式',
      props: {
        isLinkField: true,
      },
    },
    tableGroupColorInfo: {
      label: '表头样式',
      type: 'TableColorGroup',
      groupsName: '风格和样式',
      props: {
        isLinkField: true,
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
      label: '点击单元格',
      value: 'onTableCellClick',
      params: [
        {
          title: '当前行数据',
          name: 'row',
          value: '$row$',
          attrType: EVNET_PARAM_OBJECT_TYPE,
        },
        {
          title: '当前单元格数据',
          name: 'cell',
          value: '$cell$',
        },
        {
          title: '当前列编码',
          name: 'cellId',
          value: '$cellId$',
        },
        {
          title: '当前行索引',
          name: 'rowIndex',
          value: '$rowIndex$',
        },
      ],
      remarks: [
        {
          label: '场景描述',
          content:
            '当您配置了单元格点击事件，所有单元格将会增加当前事件逻辑，你也可以通过配置条件组判断如果点击了单元格某项数据才执行后续逻辑，您也可以通过，属性-内容列-单元格内容-自定义配置-增加样式-点击设置进行某个单元格的点击事件设置（注意，如果配置了内容列中的点击设置，事件中的点击行、双击行、点击单元格将不执行）',
        },
      ],
      groupsName: '分组2',
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
          attrType: EVENT_PARAM_ARRAY_TYPE,
        },
        {
          title: '表格选中行数据(单选)',
          name: 'selectedRows',
          value: '$selectedRows[0]$',
          attrType: EVNET_PARAM_OBJECT_TYPE,
        },
        {
          title: '表格选中行数据(多选)',
          name: 'selectedRows',
          value: '$selectedRows$',
          attrType: EVENT_PARAM_OBJECT_ARRAY_TYPE,
        },
      ],
      groupsName: '分组2',
    },
    {
      label: '表格排序事件',
      value: 'onSortChange',
      params: [
        // 注：用 $$ 包裹，最终在运行态解析为变量名，变量名为移除 $$ 的结果
        {
          title: '正序字段',
          name: 'ascendCol',
          value: TABLE_SORT_ASC_PARAM_VALUE,
        },
        {
          title: '倒序字段',
          name: 'descendCol',
          value: TABLE_SORT_DESC_PARAM_VALUE,
        },
        {
          title: '当前页尺寸',
          name: 'pageSize',
          value: TABLE_PAGE_SIZE_PARAM_VALUE,
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
          attrType: EVNET_PARAM_OBJECT_TYPE,
        },
      ],
      groupsName: '分组2',
      remarks: [
        {
          label: '适用场景',
          content:
            '用于配置在表格中的某一行展开或收起时触发的动作，获取当前行的展开/收起状态和当前行数据；可用于以下场景：\n' +
            '1、任务管理：页面为嵌套子表格展示数据，点击表格中的展开图标，在行数据下方用表格展示子任务列表，可根据当前行数据加载子任务进度条等；\n' +
            '2、用户管理：点击展开图标触发在行下方展示用户详细信息，展开行后，再根据当前行的用户数据在页面下半部分显示用户的角色、权限列表或其他相关信息。',
        },
      ],
    },
    {
      label: '展开行变化回调',
      value: 'onExpandedRowsChange',
      params: [
        // 注：用 $$ 包裹，最终在运行态解析为变量名，变量名为移除 $$ 的结果
        {
          title: '所有展开行的主键值',
          name: 'expandedRowKeys',
          value: TABLE_EXPANDED_ROW_KEYS_PARAM_VALUE,
        },
      ],
      groupsName: '分组2',
      remarks: [
        {
          label: '适用场景',
          content:
            '用于配置表格展开的行发生变化时触发的动作，获取当前所有展开行的主键。可用于以下场景：\n' +
            '1、多级展开：通过监听该回调来获取所有展开行ID，来加载子级数据或执行其他操作；\n' +
            '2、状态管理：可以将展开行的ID保存在状态管理中，以便在其他组件中使用或在页面刷新后保持展开状态；\n' +
            '3、数据加载优化：可能需要在展开行时异步加载相关数据，可以捕获用户展开行ID，并触发相应的数据加载操作，以优化数据的加载和渲染。',
        },
      ],
    },
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
        {
          title: '正序字段',
          name: 'ascendCol',
          value: TABLE_SORT_ASC_PARAM_VALUE,
        },
        {
          title: '倒序字段',
          name: 'descendCol',
          value: TABLE_SORT_DESC_PARAM_VALUE,
        },
      ],
      groupsName: '分组3',
    },
    {
      label: '开始行内编辑行',
      value: 'onBeforeInlineEdit',
      params: [
        {
          title: '当前编辑行数据',
          name: 'e',
          value: '$e$',
          attrType: EVNET_PARAM_OBJECT_TYPE,
        },
      ],
      groupsName: '分组3',
    },
    {
      label: '保存行内编辑行',
      value: 'onBeforeInlineSave',
      params: [
        {
          title: '当前保存行数据',
          name: 'e',
          value: '$e$',
          attrType: EVNET_PARAM_OBJECT_TYPE,
        },
        {
          title: '当前保存行id',
          name: 'rowId',
          value: '$rowId$',
        },
        {
          title: '当前保存行索引',
          name: 'index',
          value: '$index$',
        },
      ],
      groupsName: '分组3',
    },
    {
      label: '点击头部扩展按钮1',
      value: 'onHeadClickBtn1',
      params: [
        {
          title: '头部按钮1点击回调',
          value: '$e$',
          name: 'e',
          attrType: EVNET_PARAM_OBJECT_TYPE,
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
          attrType: EVNET_PARAM_OBJECT_TYPE,
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
          attrType: EVNET_PARAM_OBJECT_TYPE,
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
          attrType: EVNET_PARAM_OBJECT_TYPE,
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
          attrType: EVNET_PARAM_OBJECT_TYPE,
        },
      ],
      groupsName: '分组4',
    },
  ],
  todoActionList: [
    {
      key: 'reloadTableData',
      label: '加载数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
          labelTip: (({ DSLCore, compId }: any) => {
            let tip: any = [{ column1: '值', column2: '值' }];
            const node = DSLCore?.query(compId);
            if (node) {
              const obj: any = {};
              (node.attribute?.props?.columns || [])?.forEach((c: any) => {
                obj[c.dataIndex] = '值';
              });
              tip = [obj];
            }
            return `接收数据类型需要为数组类型: 如：${JSON.stringify(tip)}`;
          }).toString(),
        },
        {
          key: 'total',
          label: '总条数',
          type: 'SetExpression',
        },
        {
          key: 'current',
          label: '更新页码',
          type: 'SetExpression',
          aliasKey: 'curPage',
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
      key: 'reloadColServiceDataForEdit',
      label: '加载字段数据',
      todoOptions: [
        {
          key: 'colNameForEdit',
          label: '字段',
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
      key: 'getTableCurrentPageSelected',
      label: '获取当前页选中行',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group3',
    },
    {
      key: 'getTableCurrentPageSelectedKey',
      label: '获取当前页选中行主键',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group3',
    },
    {
      key: 'getTableData',
      label: '获取表格数据',
      todoCallbacks: ['callback1'],
      groupName: 'group4',
    },
    {
      key: 'getPageNum',
      label: '获取当前页码',
      todoCallbacks: ['callback1'],
      groupName: 'group4',
    },
    {
      key: 'addTableRow',
      label: '新增一行空白数据',
      todoOptions: [
        {
          key: 'inlineeditnow',
          label: '新增后启用行内编辑',
          type: 'Select',
          props: {
            inhibitBtn: true,
            options: [
              {
                title: '否',
                value: false,
              },
              {
                title: '是',
                value: true,
              },
            ],
          },
        },
      ],
      groupName: 'group5',
    },
    {
      key: 'addTableRowData',
      label: '新增一行数据',
      todoOptions: [
        {
          key: 'params',
          label: '参数赋值',
          type: 'SelectLink',
          props: {
            titleLink: [
              { title: '切换到属性', value: 'object', key: 'object' },
              { title: '切换根节点', value: '', key: 'root' },
              { title: '清空赋值', value: 'cleanValue', key: 'cleanValue' },
            ],
            valueType: 'Table',
          },
        },
      ],
      groupName: 'group5',
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
      groupName: 'group5',
    },
    {
      key: 'delTableRow',
      label: '删除指定行数据',
      todoOptions: [
        {
          key: 'params',
          label: '参数赋值',
          type: 'SetExpression',
        },
      ],
      groupName: 'group6',
    },
    {
      key: 'clearTableSelected',
      label: '清除选中数据',
      groupName: 'group6',
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
      groupName: 'group7',
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
      key: 'editInlineRow',
      label: '指定行开启行内编辑',
      todoOptions: [
        {
          key: 'inlineeditrow',
          label: '指定行id',
          type: 'SetExpression',
        },
      ],
      groupName: 'group8',
    },
    {
      key: 'saveInlineRow',
      label: '保存当前行内编辑行',
      todoOptions: [],
      groupName: 'group8',
    },
    {
      key: 'restoreInlineRow',
      label: '撤销全部行内编辑行',
      todoOptions: [],
      groupName: 'group8',
    },
    {
      key: 'validateTableData',
      label: '获取当前页数据并校验',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group9',
    },
    {
      key: 'validateTableRowData',
      label: '校验当前保存行数据',
      todoCallbacks: ['callback1', 'callback2'],
      groupName: 'group9',
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
      groupName: 'group11',
    },
    {
      key: 'clearData',
      label: '清空数据',
      groupName: 'group10',
    },
  ],
});

export default config;
