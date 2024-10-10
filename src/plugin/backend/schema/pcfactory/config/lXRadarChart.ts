import { lxRadarChartDefaultData } from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const symbolOptions = [
  {
    title: '圆形',
    value: 'circle',
  },
  {
    title: '矩形',
    value: 'rect',
  },
  {
    title: '圆角矩形',
    value: 'roundRect',
  },
  {
    title: '三角形',
    value: 'triangle',
  },
  {
    title: '钻石',
    value: 'diamond',
  },
  {
    title: '别针',
    value: 'pin',
  },
  {
    title: '箭头',
    value: 'arrow',
  },
  {
    title: '无',
    value: 'none',
  },
];

const defaultDes = [
  {
    title: '雷达图常用场景',
    desc:
      '雷达图（Radar Chart）是一种用于可视化多个变量之间关系的图表类型。它以一个中心点为起点，呈放\n' +
      '射状展开多个数据轴线，每个轴线代表一个指标。通过在每个轴线上标记数据点，并将它们连接起来，可\n' +
      '以形成一个闭合的多边形，用于表示不同变量之间的相对大小。\n' +
      '\n' +
      '雷达图常用于比较多个变量、评估多个维度、追踪变量变化等场景，比如：\n' +
      '1、项目管理：雷达图可以用于跟踪项目在不同方面的进展，比如进度、质量、成本等。通过雷达图，可\n' +
      '以直观地了解项目在各个方面的完成情况。\n' +
      '2、竞争分析：雷达图可以用于比较不同竞争对手在关键指标上的表现。通过绘制雷达图，可以清晰地了\n' +
      '解各个竞争对手在不同方面的优势和劣势。\n' +
      '\n' +
      '在雷达图中，每个轴线上的刻度代表该变量的取值范围，而数据点的位置则表示该变量的具体数值。通过\n' +
      '连接数据点，您可以形成一个多边形，该多边形的形状和大小反映了各个变量之间的相对关系。然而，当\n' +
      '指标较多时，雷达图可能会变得混乱和难以解读，因此在使用时需要注意图表的清晰度和易读性。',
  },
  {
    title: '名词解释',
    subTitle: '名词的详细解释，见属性的注释',
    img: 'RadarChartDesc',
  },
];

const config = {
  icon: 'RadarChart',
  label: '雷达图',
  type: 'LXRadarChart',
  description: '',
  image: '',
  groupsName: '图表',
  compType: 7,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  props: {
    type: 'circle',
    basicStatus: 1,
    name: '雷达图',
    layout: 'horizontal',
    exampleData: lxRadarChartDefaultData,
    color: [
      '#6799FC',
      '#84EAB7',
      '#FFD381',
      '#918DEC',
      '#FF8EC3',
      '#33E3F5',
      '#FFAA9A',
      '#B583F4',
      '#DF8EEA',
      '#33C3FF',
    ],
    titlePosition: 'left',
    segments: 5,
    backgroundColor: '#FFFFFF',
    radiusSize: '75%',
    showAxisTick: true,
    showSymbol: true,
    symbol: 'circle',
    symbolSize: 8,
    showLabel: false,
    showLegend: true,
    legendOrient: 'roundRect',
    hoverTips: true,
    hoverHighlight: true,
    fill: true,
  },
  todoProps: {
    configDesc: {
      label: '配置说明',
      type: 'ConfigDesc',
      groupsName: '使用说明',
      props: {
        dataSource: defaultDes,
      },
    },
    exampleData: {
      label: '示例数据',
      type: 'DataStructureViewer',
      groupsName: '使用说明',
      props: {
        isNewChart: true,
      },
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {
        required: false,
      },
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
      },
    },
    type: {
      label: '图表类型',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        inhibitBtn: false,
        style: { padding: '0 15px' },
        options: [
          { title: '普通雷达', value: 'circle' },
          { title: '多边形雷达', value: 'polygon' },
        ],
        popoverOptions: [
          { imageName: 'circleRadar' },
          { imageName: 'polygonsRadar' },
        ],
      },
    },
    layout: {
      label: '图表布局',
      type: 'EchartLayout',
      groupsName: '基础',
      props: {},
    },
    dataSource: {
      label: '数据绑定',
      type: 'TableDataSource',
      groupsName: '基础',
      istodoBind: {
        dataBindType: 'EChartDataBind',
      },
      props: {},
    },
    legendFeild: {
      label: '图例字段',
      type: 'TreeSelect',
      groupsName: '基础',
      props: {
        required: true,
        placeholder: '选择或输入图例字段',
        description: '选择作为图例的字段，也是进行统计的维度字段',
        isOnBlur: true,
      },
    },
    indicator: {
      label: '指标设置',
      type: 'ChartSettingContent',
      groupsName: '基础',
      props: {
        required: true,
      },
      enableI18n: true,
    },
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '标题',
      istodoBind: true,
      props: {
        placeholder: '请输入标题',
      },
      enableI18n: true,
    },
    subTitle: {
      label: '副标题',
      type: 'Input',
      groupsName: '标题',
      istodoBind: true,
      props: {
        placeholder: '请输入副标题',
      },
      enableI18n: true,
    },
    titlePosition: {
      label: '标题位置',
      type: 'RadioButton',
      groupsName: '标题',
      props: {
        style: { padding: '0 10px' },
        options: [
          { title: '左侧', value: 'left' },
          { title: '中间', value: 'center' },
          { title: '右侧', value: 'right' },
        ],
        dependProps: {
          // 水平布局不显示标题位置选择
          layout: (item: string) => item !== 'horizontal',
        },
      },
    },
    color: {
      label: '颜色',
      type: 'ColorSelect',
      groupsName: '图表样式',
      props: {},
    },
    backgroundColor: {
      label: '背景颜色',
      type: 'ColorPicker',
      groupsName: '图表样式',
      props: {
        description: '整个雷达图控件背景色',
      },
    },
    radiusSize: {
      label: '图形尺寸',
      type: 'ChartSizeSelect',
      groupsName: '图表样式',
      istodoBind: true,
      props: {
        options: [
          {
            title: '大(75%)',
            value: '75%',
          },
          {
            title: '中(65%)',
            value: '65%',
          },
          {
            title: '小(50%)',
            value: '50%',
          },
        ],
        unit: '%',
        inputNumber: 1,
      },
    },
    segments: {
      label: '分割段数',
      type: 'InputNumber',
      groupsName: '图表样式',
      istodoBind: true,
      props: {
        description: '各个指标轴的分割段数',
      },
    },
    showSymbol: {
      label: '显示标记',
      type: 'Switch',
      groupsName: '标记',
      props: {},
    },
    symbol: {
      label: '标记图形',
      type: 'Select',
      groupsName: '标记',
      props: {
        dependProps: {
          showSymbol: true,
        },
        options: [{ title: '空心圆', value: 'emptyCircle' }, ...symbolOptions],
      },
    },
    symbolSize: {
      label: '标记大小',
      type: 'InputNumber',
      groupsName: '标记',
      props: {
        dependProps: {
          showSymbol: true,
        },
      },
    },
    showLabel: {
      label: '显示数据标签',
      type: 'Switch',
      groupsName: '标记',
      props: {
        dependProps: {
          showSymbol: true,
        },
      },
    },
    showLegend: {
      label: '显示图例',
      type: 'Switch',
      groupsName: '图例',
      props: {},
    },
    legendOrient: {
      label: '图例类型',
      type: 'Select',
      groupsName: '图例',
      props: {
        dependProps: {
          showLegend: true,
        },
        options: [{ title: '空心圆', value: 'emptyCircle' }, ...symbolOptions],
      },
    },
    hoverTips: {
      label: '移入提示',
      type: 'Switch',
      groupsName: '个性样式',
      props: {
        description: '开启后，鼠标移入扇区显示提示框',
      },
    },
    hoverHighlight: {
      label: '移入高亮',
      type: 'Switch',
      groupsName: '个性样式',
      props: {
        description: '开启后，鼠标移入扇区显示高亮',
      },
    },
    showAxisTick: {
      label: '显示刻度',
      type: 'Switch',
      groupsName: '个性样式',
      props: {
        description: '开启后指标轴显示刻度及刻度值',
      },
    },
    fill: {
      label: '是否填充',
      type: 'Switch',
      groupsName: '个性样式',
      props: {
        description: '开启后进行图形颜色填充',
      },
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
    },
  },
  style: {
    width: '100%',
    height: '500px',
    padding: '24px 24px 24px 24px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'width',
    'height',
    'margin',
    'padding',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onChartClick',
      params: [
        {
          title: '点击图表值',
          name: 'paramsRadar',
          value: '$paramsRadar$',
        },
        {
          title: '点击项数据',
          name: 'paramsRadarData',
          value: '$paramsRadar?.data$',
        },
        {
          title: '点击项名称',
          name: 'paramsRadarName',
          value: '$paramsRadar?.name$',
        },
        {
          title: '点击项值',
          name: 'paramsRadarValue',
          value: '$paramsRadar?.value$',
        },
      ],
    },
  ],
  todoActionList: [],
};

export default config;
