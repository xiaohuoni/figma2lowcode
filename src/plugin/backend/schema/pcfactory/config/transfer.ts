import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  getDefaultTransferData,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';
// import { EVENT_PARAM_NUMBER_TYPE, TABLE_PAGE_NUM_PARAM_VALUE, TABLE_PAGE_SIZE_PARAM_VALUE } from './table';
// import { getTodoActionListByKey } from '../utils/todoActionList';

const config = {
  fieldProps: {
    trigger: 'onTransferChange',
    valuePropName: 'value',
  },
  engineApi: ['sandBoxLoadModule', 'dataState'],
  icon: 'Transfer',
  label: '穿梭框',
  type: 'Transfer',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  compLib: 'comm',
  platform: 'pc',
  props: {
    name: '穿梭框',
    selfSpan: '',
    labelCol: 8,
    wrapperCol: 16,
    transferWidth: 0,
    transferHeight: 200,
    showSelectAll: true,
    dataSource: getDefaultTransferData(),
    basicStatus: 1,
    page: false,
    pageSizeOptions: '[5,10,20]',
    showQuickJumper: false,
    showSizeChanger: false,
    showTotal: false,
    columns: [],
    pageSize: 10,
    current: 1,
    childrenColumnName: '',
    displayStyle: 'base',
    size: 'small',
    hideLeftSelected: false,
  },
  todoProps: {
    dataSource: {
      label: '选择数据源',
      type: 'TableDataSource',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {},
    },
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        required: false,
      },
    },
    name: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {},
    },
    fieldName: {
      label: '字段编码',
      type: 'SearchFieldName',
      groupsName: '基础',
      props: {
        required: true,
      },
      istodoBind: false,
    },
    uid: {
      label: '行主键字段',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        required: true,
      },
    },
    selfSpan: {
      label: '列占比',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '默认',
            value: '',
          },
          ...COL_SPAN_DATA,
        ],
      },
      istodoBind: false,
    },
    labelCol: {
      label: '标题占比',
      type: 'FormItemLabel',
      groupsName: '基础',
      props: {
        options: LABEL_SPAN_DATA,
      },
      istodoBind: false,
    },
    wrapperCol: {
      label: '内容占比',
      type: 'FormItemLabel',
      groupsName: '基础',
      props: {
        options: COL_WEAPPER_SPAN_DATA[8],
      },
    },
    transferLeftTitle: {
      label: '左标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
      enableI18n: true,
    },
    transferRightTitle: {
      label: '右标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
      enableI18n: true,
    },
    displayStyle: {
      label: '穿梭框样式',
      type: 'RadioButton',
      groupsName: '内容设置',
      istodoBind: true,
      props: {
        options: [
          {
            title: '基础',
            value: 'base',
          },
          {
            title: '树形',
            value: 'tree',
          },
          {
            title: '表格',
            value: 'table',
          },
        ],
        defaultValue: 1,
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    labelCode: {
      label: '取值字段',
      type: 'Input',
      groupsName: '内容设置',
      istodoBind: true,
      props: {
        required: true,
        dependProps: {
          displayStyle: ['base', 'tree'],
        },
      },
    },
    childrenColumnName: {
      label: '下级列表取值字段',
      type: 'Input',
      groupsName: '内容设置',
      istodoBind: true,
      props: {
        dependProps: {
          displayStyle: ['tree', 'table'],
        },
      },
    },
    columns: {
      label: '内容设置',
      type: 'TransferSettingContent',
      groupsName: '内容设置',
      props: {
        dependProps: {
          displayStyle: ['table'],
        },
        isJSX: true,
      },
    },
    hideLeftSelected: {
      label: '左侧选中隐藏',
      type: 'Switch',
      groupsName: '内容设置',
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
        description: '开启后，左侧内容选中到右侧后，左侧不显示选中的数据',
        dependProps: {
          displayStyle: 'base',
        },
      },
    },
    showSelectAll: {
      label: '显示全选框',
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
    showSearch: {
      label: '显示搜索框',
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
    page: {
      label: '开启分页',
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
      props: {
        dependProps: {
          displayStyle: ['table', 'base'],
        },
      },
    },
    pageSize: {
      label: '每页条数',
      type: 'InputNumber',
      groupsName: '分页设置',
      istodoBind: true,
      props: {
        dependProps: {
          page: true,
          displayStyle: ['table', 'base'],
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
          displayStyle: ['table', 'base'],
        },
        defaultValue: 1,
        min: 1,
      },
      istodoBind: true,
    },
    // 并非属性配置，只是分页设置底下的一个二级分组，key可以随便取，并不会真正存储
    paginationStyle: {
      label: '分页形式',
      groupsName: '分页设置',
      props: {
        dependProps: {
          page: true,
          displayStyle: ['table', 'base'],
        },
        isShowChildren: true,
        // 作为二级或以上的同级配置项，是否可见（目前作是否打开折叠面板使用）
        children: [
          {
            key: 'showTotal',
            label: '显示总数',
            type: 'Switch',
            props: {
              labelCol: {
                span: 8,
              },
              wrapperCol: {
                span: 16,
              },
            },
          },
          // {
          //   key: 'total',
          //   label: '总数值',
          //   type: 'InputNumber',
          //   props: {
          //     dependProps: {
          //       showTotal: true,
          //     },
          //     min: 0,
          //     placeholder: '请选择数据源',
          //     labelCol: { span: 8 },
          //     wrapperCol: { span: 16 },
          //   },
          //   istodoBind: true,
          // },
          {
            key: 'showSizeChanger',
            label: '每页条数选择',
            type: 'Switch',
            props: {
              labelCol: {
                span: 6,
              },
              wrapperCol: {
                span: 18,
                offset: 2,
              },
            },
          },
          {
            key: 'pageSizeOptions',
            label: '条数可选值',
            type: 'Input',
            props: {
              dependProps: {
                showSizeChanger: true,
              },
              placeholder: '请输入例如[5,10,20]',
              regex: {
                pattern: /^(\[)((\d+,)+\d+|\d+)(\])$/,
                message: '请输入例如[5,10,20]',
              },
              labelCol: {
                span: 8,
              },
              wrapperCol: {
                span: 16,
              },
            },
          },
          {
            key: 'showQuickJumper',
            label: '快速跳转至某页',
            type: 'Switch',
            groupsName: '分页形式',
            props: {
              labelCol: {
                span: 8,
              },
              wrapperCol: {
                span: 16,
              },
            },
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
        description: '控件显隐、禁用优先级为：动作配置> 对象显示规则> 状态',
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
    visibility: {
      label: '隐藏占位',
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
        description:
          '表单外不生效: 默认false，表示隐藏的时候不占位，为true时，隐藏的时候将占位（注意：优先级最高, 开启后控制显隐动作将也会判断是否隐藏占位）',
      },
    },
    titleTip: {
      label: '标题提示',
      type: 'SetTipType',
      groupsName: '标题提示',
      props: {
        options: [
          {
            title: '无',
            value: 'notext',
          },
          {
            title: '文本',
            value: 'text',
          },
        ],
        defaultValue: 'notext',
      },
    },
    tipIcon: {
      label: '提示图标',
      type: 'SetTipIcon',
      groupsName: '标题提示',
      props: {
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
      },
    },
    tipLocation: {
      label: '提示位置',
      type: 'SetTipIconPlacement',
      groupsName: '标题提示',
      props: {
        options: [
          {
            title: '标题前',
            value: 'before',
          },
          {
            title: '标题后',
            value: 'after',
          },
        ],
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
      },
    },
    tipContent: {
      label: '提示内容',
      type: 'Input',
      groupsName: '标题提示',
      istodoBind: true,
      props: {
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
      },
      enableI18n: true,
    },
    tipPlacement: {
      label: '提示语位置',
      type: 'SetPlacement',
      groupsName: '标题提示',
      props: {
        visibleFlag: 'titleTip',
        visibleFlagValue: ['text'],
        options: [...TIP_PLACEMENT_DATA],
      },
    },
    tipSize: {
      label: '提示框尺寸',
      type: 'SetTipSize',
      groupsName: '标题提示',
      props: {
        defaultValue: 'default',
        dependProps: {
          titleTip: 'text',
        },
        options: [
          { title: '系统默认', value: 'default' },
          { title: '自定义', value: 'custom' },
        ],
      },
    },
    tipWidth: {
      label: '最大宽度',
      type: 'HeightInput',
      groupsName: '标题提示',
      props: {
        description: '小于最大宽度时根据内容自适应宽度',
        defaultValue: '240px',
        dependProps: {
          tipSize: 'custom',
        },
      },
    },
    tipHeight: {
      label: '最大高度',
      type: 'HeightInput',
      groupsName: '标题提示',
      props: {
        description: '小于最大高度时根据内容自适应宽度',
        defaultValue: 'auto',
        dependProps: {
          tipSize: 'custom',
        },
      },
    },
    transferWidth: {
      label: '穿梭框宽度',
      type: 'InputNumber',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        min: 0,
        max: 600,
      },
    },
    transferHeight: {
      label: '穿梭框高度',
      type: 'InputNumber',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        min: 0,
        max: 600,
      },
    },
    size: {
      label: '尺寸',
      type: 'RadioButton',
      groupsName: '风格和样式',
      istodoBind: true,
      props: {
        defaultValue: 'small',
        options: [
          {
            title: '小',
            value: 'small',
          },
          {
            title: '大',
            value: 'large',
          },
        ],
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    required: {
      label: '必填',
      type: 'Switch',
      groupsName: '校验',
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
    min: {
      label: '最小个数',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {},
    },
    max: {
      label: '最大个数',
      type: 'InputNumber',
      groupsName: '校验',
      istodoBind: true,
      props: {},
    },
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
        options: getInputTypes().map((k) => ({
          title: k.label,
          value: k.compName,
        })),
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
  setEvents: [],
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '搜索',
      value: 'onSearch',
      params: [
        {
          title: '穿梭框方向',
          name: 'direction',
          value: '$direction$',
        },
        {
          title: '搜索框取值',
          name: 'value',
          value: '$value$',
        },
      ],
      dependProps: {
        showSearch: true,
      },
    },
    {
      label: '选项在两栏之间转移时回调',
      value: 'onTransferChange',
      params: [
        {
          title: '右侧列表keys',
          name: 'targetKeys',
          value: '$targetKeys$',
        },
        {
          title: '穿梭框方向',
          name: 'direction',
          value: '$direction$',
        },
        {
          title: '移动keys',
          name: 'moveKeys',
          value: '$moveKeys$',
        },
      ],
    },
    // 暂时隐藏
    // {
    //   label: '页码改变回调',
    //   value: 'onPageChange',
    //   params: [
    //     {
    //       title: '当前页码取值',
    //       name: 'page',
    //       value: TABLE_PAGE_NUM_PARAM_VALUE,
    //       attrType: EVENT_PARAM_NUMBER_TYPE,
    //     },
    //     {
    //       title: '当前页尺寸',
    //       name: 'pageSize',
    //       value: TABLE_PAGE_SIZE_PARAM_VALUE,
    //       attrType: EVENT_PARAM_NUMBER_TYPE,
    //     },
    //   ],
    // },
    // {
    //   label: '列表滚动时回调',
    //   value: 'onScroll',
    //   params: [
    //     { title: '穿梭框方向', name: 'direction', value: '$direction$' },
    //     { title: '事件对象', name: 'event', value: '$event$' },
    //   ],
    // },
    // {
    //   label: '选中行变化回调',
    //   value: 'onSelectChange',
    //   params: [
    //     { title: '源头keys', name: 'sourceSelectedKeys', value: '$sourceSelectedKeys$' },
    //     { title: '目标值keys', name: 'targetSelectedKeys', value: '$targetSelectedKeys$' },
    //   ],
    // },
  ],

  todoActionList: [
    {
      key: 'sysSetDisable',
      label: '禁用状态',
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
          key: 'compValueList',
          label: '是否禁用',
          type: 'SetBatchProps',
          props: {
            defaultValue: 'toggle',
            options: [
              {
                title: '启动',
                value: '',
              },
              {
                title: '禁用',
                value: 'true',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'sysSetRequired',
      label: '设置必填',
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
          key: 'compValueList',
          label: '是否必填',
          type: 'SetBatchProps',
          props: {
            defaultValue: 'toggle',
            options: [
              {
                title: '必填',
                value: 'true',
              },
              {
                title: '非必填',
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
      groupName: 'group1', // 需求暂未分组名称
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
          key: 'compValueList',
          label: '是否显隐',
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
      groupName: 'group1', // 需求暂未分组名称
    },
    {
      key: 'reloadTransferData',
      label: '加载数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
          labelTip: (({ DSLCore, compId }: any) => {
            const getDefaultTransferData = (
              idKey = 'id',
              titleKey = 'title',
              childrenKey = 'children',
            ) => {
              const obj: any = {};
              obj[idKey] = '1';
              obj[titleKey] = '第1项';
              const childrenObj: any = {};
              childrenObj[idKey] = '1-1';
              childrenObj[titleKey] = '子 1-1';
              obj[childrenKey] = [childrenObj];
              return obj;
            };

            let defalut = getDefaultTransferData();
            const node = DSLCore?.query(compId);
            if (node) {
              const {
                displayStyle,
                uid = 'id',
                labelCode = 'title',
                childrenColumnName = 'children',
                columns,
              } = node.attribute?.props || {};
              if (displayStyle === 'table') {
                const obj: any =
                  columns?.length > 0 ? {} : { id: '值', title: '值' };
                (columns || [])?.forEach((c: any) => {
                  obj[c.dataIndex] = '值';
                });
                obj[childrenColumnName] = [Object.assign({}, obj)];
                defalut = obj;
              } else {
                defalut = getDefaultTransferData(
                  uid,
                  labelCode,
                  childrenColumnName,
                );
              }
            }
            return `接收数据类型需要为数组类型: 如：${JSON.stringify([
              defalut,
            ])}`;
          }).toString(),
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'addTransferKeys',
      label: '设置右侧列表值',
      todoOptions: [
        {
          key: 'transferValue',
          aliasKey: 'addTransferValue',
          label: '内容',
          type: 'SetExpression',
          props: {
            placeholder: '值为数组或逗号拼接的字符串, 如 $[1,2,3]$ 或 1,2,3',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'removeTransferKeys',
      label: '删除右侧列表值',
      todoOptions: [
        {
          key: 'transferValue',
          aliasKey: 'removeTransferValue',
          label: '内容',
          type: 'SetExpression',
          props: {
            placeholder: '请输入删除值，多个用英文逗号拼接，例如：1,2,3',
          },
        },
      ],
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getValue',
      label: '获取右侧列表值',
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'clearValue',
      label: '清空右侧列表',
      todoOptions: [],
    },
    {
      key: 'setTransferLeftTitle',
      label: '设置左标题',
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
      key: 'setTransferRightTitle',
      label: '设置右标题',
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
  ],
  // todoActionList: getTodoActionListByKey([
  //   'reloadTransferData',
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'addTransferKeys',
  //   'setValue',
  //   'getValue',
  //   'clearValue',
  //   'removeTransferKeys',
  //   'setTransferLeftTitle',
  //   'setTransferRightTitle',
  // ]),
};

export default config;
