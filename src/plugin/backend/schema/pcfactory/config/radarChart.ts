import { getStyleObjectByKeys } from '../utils/todoStyle';

// 维度数据
const defaultIndicatorDataSource = [
  { name: '基本素养', dataKey: 'basic', max: 6500, min: 0 },
  { name: '执行落地', dataKey: 'excution', max: 16000, min: 0 },
  { name: '守约记录', dataKey: 'manner', max: 30000, min: 0 },
  { name: '营销能力', dataKey: 'sale', max: 38000, min: 0 },
  { name: '服务能力', dataKey: 'service', max: 52000, min: 0 },
];

// 业务数据
const defaultDataSource = [
  {
    id: '1',
    name: '吉安县白云路惠尔佳委托经营厅',
    basic: 4200,
    excution: 3000,
    manner: 20000,
    sale: 35000,
    service: 50000,
  },
  {
    id: '2',
    name: '抚州市临川区抚临路委托经营厅',
    basic: 5000,
    excution: 14000,
    manner: 28000,
    sale: 26000,
    service: 42000,
  },
];

// 雷达图提示常在的区域
const defaultHint = {
  text: '信用',
  width: 120,
};

// 雷达图提示hover后
const defaultRadarLevelHint = [
  {
    min: 0,
    max: 1000,
    description: '一般',
  },
  {
    min: 1000,
    max: 114000,
    description: '好',
  },
  {
    min: 114000,
    max: 142500,
    description: '极好',
  },
];
// const radarLevelColumn = [
//   {
//     title: '最大值',
//     dataIndex: 'max',
//     type: 'InputNumber',
//     min: 0,
//   },
//   {
//     title: '最小值',
//     dataIndex: 'min',
//     type: 'InputNumber',
//     min: 0,
//   },
//   {
//     title: '描述',
//     dataIndex: 'description',
//     type: 'Input',
//   },
// ];
// const indicatorColumns = [
//   {
//     title: '维度名',
//     dataIndex: 'name',
//     type: 'Input',
//   },
//   {
//     title: '维度最大值',
//     dataIndex: 'max',
//     type: 'InputNumber',
//     min: 0,
//   },
//   {
//     title: '维度最小值',
//     dataIndex: 'min',
//     type: 'InputNumber',
//     min: 0,
//   },
//   {
//     title: '维度取值字段',
//     dataIndex: 'dataKey',
//     type: 'Input',
//   },
// ];

const defaultProps = {
  indicatorName: 'name',
  indicatorKey: 'dataKey',
  indicatorMax: 'max',
  indicatorMin: 'min',
  legendKey: 'name',
  radarMax: 'max',
  radarMin: 'min',
  radarDescription: 'description',
  hintName: 'text',
  hintWidth: 'width',
  showHint: true,
  showTotal: true,
};

const indicatorConfig = {
  indicatorExample: {
    label: '示例数据',
    type: 'DataStructureViewer',
    groupsName: '维度数据配置',
    props: {
      dataSource: defaultIndicatorDataSource,
    },
  },
  indicatorDataSource: {
    label: '数据',
    type: 'Input',
    groupsName: '维度数据配置',
    istodoBind: true,
    props: {
      // defaultValue: '暂未绑定数据',
      required: false,
      readOnly: true,
    },
  },
  indicatorSecondTitle: {
    label: ' ',
    type: 'SecondTitle',
    groupsName: '维度数据配置',
    props: {
      defaultValue: '字段映射',
    },
  },
  indicatorName: {
    label: '维度名',
    type: 'Input',
    groupsName: '维度数据配置',
    props: {
      defaultValue: defaultProps.indicatorName,
      required: true,
    },
  },
  indicatorKey: {
    label: '维度值',
    type: 'Input',
    groupsName: '维度数据配置',
    props: {
      defaultValue: defaultProps.indicatorKey,
      required: true,
    },
  },
  indicatorMax: {
    label: '最大值',
    type: 'Input',
    groupsName: '维度数据配置',
    props: {
      defaultValue: defaultProps.indicatorMax,
      required: true,
    },
  },
  indicatorMin: {
    label: '最小值',
    type: 'Input',
    groupsName: '维度数据配置',
    props: {
      defaultValue: defaultProps.indicatorMin,
      required: true,
    },
  },
};

const dataConfig = {
  example: {
    label: '示例数据',
    type: 'DataStructureViewer',
    groupsName: '业务数据配置',
    props: {
      dataSource: defaultDataSource,
    },
  },
  radarDataSource: {
    label: '数据',
    type: 'Input',
    groupsName: '业务数据配置',
    istodoBind: true,
    props: {
      // defaultValue: '暂未绑定数据',
      required: false,
      readOnly: true,
    },
  },
  dataSecondTitle: {
    label: ' ',
    type: 'SecondTitle',
    groupsName: '业务数据配置',
    props: {
      defaultValue: '字段映射',
    },
  },
  legendKey: {
    label: '图例字段',
    type: 'Input',
    groupsName: '业务数据配置',
    props: {
      defaultValue: defaultProps.legendKey,
      required: true,
    },
  },
};

const linkageConfig = {
  visibleFlag: 'showHint',
  visibleFlagValue: 'hasValue',
};

const hintConfig = {
  showTotal: {
    label: '显示总数',
    type: 'Switch',
    groupsName: '提示配置',
    props: {
      defaultValue: defaultProps.showTotal,
    },
  },
  showHint: {
    label: '显示提示',
    type: 'Switch',
    groupsName: '提示配置',
    props: {
      defaultValue: defaultProps.showHint,
    },
  },
  hintSecondTitle: {
    label: ' ',
    type: 'SecondTitle',
    groupsName: '提示配置',
    props: {
      defaultValue: '提示及字段映射',
      ...linkageConfig,
    },
  },
  hintExample: {
    label: '示例数据',
    type: 'DataStructureViewer',
    groupsName: '提示配置',
    props: {
      dataSource: defaultHint,
      ...linkageConfig,
    },
  },
  hint: {
    label: '数据',
    type: 'Input',
    groupsName: '提示配置',
    istodoBind: true,
    props: {
      // defaultValue: '暂未绑定数据',
      required: false,
      ...linkageConfig,
      readOnly: true,
    },
  },
  hintName: {
    label: '提示名',
    type: 'Input',
    groupsName: '提示配置',
    props: {
      defaultValue: defaultProps.hintName,
      required: true,
      ...linkageConfig,
    },
  },
  hintWidth: {
    label: '矩形宽度',
    type: 'Input',
    groupsName: '提示配置',
    props: {
      defaultValue: defaultProps.hintWidth,
      required: true,
      ...linkageConfig,
    },
  },
  levelSecondTitle: {
    label: ' ',
    type: 'SecondTitle',
    groupsName: '提示配置',
    props: {
      defaultValue: '悬停提示及字段映射',
      ...linkageConfig,
    },
  },
  hintHoverExample: {
    label: '示例数据',
    type: 'DataStructureViewer',
    groupsName: '提示配置',
    props: {
      dataSource: defaultRadarLevelHint,
      ...linkageConfig,
    },
  },
  radarLevelHint: {
    label: '数据',
    type: 'Input',
    groupsName: '提示配置',
    istodoBind: true,
    props: {
      // defaultValue: '暂未绑定数据',
      required: false,
      ...linkageConfig,
      readOnly: true,
    },
  },
  radarMax: {
    label: '最大值',
    type: 'Input',
    groupsName: '提示配置',
    props: {
      defaultValue: defaultProps.radarMax,
      ...linkageConfig,
      required: true,
    },
  },
  radarMin: {
    label: '最小值',
    type: 'Input',
    groupsName: '提示配置',
    props: {
      defaultValue: defaultProps.radarMin,
      ...linkageConfig,
      required: true,
    },
  },
  radarDescription: {
    label: '描述',
    type: 'Input',
    groupsName: '提示配置',
    props: {
      defaultValue: defaultProps.radarDescription,
      ...linkageConfig,
      required: true,
    },
  },
  // radarLevelHint: {
  //   label: '提示配置',
  //   type: 'RadarChartData',
  //   groupsName: '提示配置',
  //   props: {
  //     columns: radarLevelColumn,
  //     dataSource: radarLevelHint,
  //     modalLabel: '提示配置',
  //     ...linkageConfig
  //   },
  // },
};

const config = {
  label: '雷达图',
  type: 'RadarChart',
  description: '',
  image: '',
  platform: 'pc',
  groupsName: '图表',
  compType: 7,
  compLib: 'comm',
  deprecated: true,
  isContainer: false,
  props: {
    style: {
      width: '100%',
      height: '500px',
    },
    defaultDataSource,
    defaultIndicatorDataSource,
    defaultRadarLevelHint,
    defaultHint,
    ...defaultProps,
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
        readOnly: true,
        defautValue: '雷达图',
      },
    },
    ...indicatorConfig,
    ...dataConfig,
    ...hintConfig,
  },
  style: {
    width: '100%',
    height: '500px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'width',
    'height',
    'margin',
    'customStyle',
    'flex',
  ]),
};
export default config;
