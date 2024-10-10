import { chartSymbolOptions, defaultChartLineData } from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const defaultDes = [
  {
    title: '名词解释',
    subTitle: '名词的详细解释，见属性的注释',
    img: 'LineDesc',
  },
  {
    title: '配置思路',
    desc:
      '1.明确图表的展示结构和基础属性的配置。\n' +
      '2.X轴(横轴)固定，只能静态配置，并配置每组数据的字段编码。\n' +
      '3.绑定数据源',
  },
];

const config = {
  icon: 'ChartLine',
  label: '折线图',
  type: 'ChartLine',
  description: '',
  image: '',
  groupsName: '图表',
  compType: 7,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  engineApi: ['sandBoxSafeRun'],
  props: {
    chartType: 'basic',
    basicStatus: 1,
    layout: 'horizontal',
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
    smooth: false,
    lineType: 'solid',
    stacked: 'none',
    area: 'none',
    legendOrient: 'horizontal',
    symbol: 'emptyCircle',
    symbolSize: 4,
    markPointSymbol: 'rect',
    markPointType: 'average',
    markLineType: 'average',
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
        defaultValue: defaultChartLineData,
        tabDatas: [
          {
            key: 'xAxisData',
            title: '横轴',
          },
          {
            key: 'xAxisDataTop',
            title: '横轴(顶部)',
          },
        ],
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
    chartType: {
      label: '图表类型',
      type: 'Select',
      groupsName: '基础',
      props: {
        options: [
          { title: '基础折线图', value: 'basic', img: 'BasicLine' },
          { title: '堆叠折线图', value: 'stacked', img: 'StackedLine' },
          { title: '双X轴折线图', value: 'doubleX', img: 'DoubleXLine' },
          { title: '双Y轴折线图', value: 'doubleY', img: 'DoubleYLine' },
          {
            title: '双X双Y折线图',
            value: 'doubleXDoubleY',
            img: 'DoubleXDoubleYLine',
          },
          {
            title: '线柱混合图',
            value: 'MixedLineAndBar',
            img: 'MixedLineAndBar',
          },
        ],
      },
    },
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      props: {
        placeholder: '请输入标题',
      },
      enableI18n: true,
    },
    subTitle: {
      label: '副标题',
      type: 'Input',
      groupsName: '基础',
      props: {
        placeholder: '请输入副标题',
      },
      enableI18n: true,
    },
    titlePosition: {
      label: '标题位置',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        style: { padding: '0 10px' },
        defaultValue: 'left',
        options: [
          { title: '左侧', value: 'left' },
          { title: '中间', value: 'center' },
          { title: '右侧', value: 'right' },
        ],
        dependProps: {
          layout: [
            'top',
            'left',
            'leftTop',
            'rightTop',
            'bottom',
            'right',
            'rightBottom',
            'leftBottom',
          ],
        },
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
    xAxisTitle: {
      label: '横轴标题',
      type: 'Input',
      groupsName: '横轴',
      istodoBind: true,
      props: {
        placeholder: '请输入',
      },
      enableI18n: true,
    },
    xAxisData: {
      label: '横轴内容',
      type: 'ChartSettingContent',
      groupsName: '横轴',
      istodoBind: true,
      props: {},
      enableI18n: true,
    },
    dataSource: {
      label: '数据绑定',
      type: 'TableDataSource',
      groupsName: '横轴',
      istodoBind: {
        dataBindType: 'EChartDataBind',
      },
      props: {},
    },
    legendField: {
      label: '图例字段',
      type: 'TreeSelect',
      groupsName: '横轴',
      istodoBind: true,
      props: {
        placeholder: '选择或输入数据字段',
        isOnBlur: true,
        isGetAllChild: false,
      },
    },
    xAxisTitleTop: {
      label: '横轴标题',
      type: 'Input',
      groupsName: '横轴(顶部)',
      istodoBind: true,
      props: {
        placeholder: '请输入',
        dependProps: {
          chartType: ['doubleX', 'doubleXDoubleY'],
        },
      },
      enableI18n: true,
    },
    xAxisDataTop: {
      label: '横轴内容',
      type: 'ChartSettingContent',
      groupsName: '横轴(顶部)',
      istodoBind: true,
      props: {
        dependProps: {
          chartType: ['doubleX', 'doubleXDoubleY'],
        },
      },
      enableI18n: true,
    },
    dataSourceTop: {
      label: '数据绑定',
      type: 'TableDataSource',
      groupsName: '横轴(顶部)',
      istodoBind: {
        dataBindType: 'EChartDataBind',
      },
      props: {
        dependProps: {
          chartType: ['doubleX', 'doubleXDoubleY'],
        },
      },
    },
    legendFieldTop: {
      label: '图例字段',
      type: 'TreeSelect',
      groupsName: '横轴(顶部)',
      istodoBind: true,
      props: {
        placeholder: '选择或输入数据字段',
        dependPropsKey: 'dataSourceTop',
        isOnBlur: true,
        isGetAllChild: false,
        dependProps: {
          chartType: ['doubleX', 'doubleXDoubleY'],
        },
      },
    },
    yAxisTitle: {
      label: '纵轴标题',
      type: 'Input',
      groupsName: '纵轴',
      istodoBind: true,
      props: {
        placeholder: '请输入',
      },
      enableI18n: true,
    },
    yAxisInterval: {
      label: '纵轴间隔',
      type: 'InputNumber',
      groupsName: '纵轴',
      props: {
        placeholder: '自动计算',
      },
    },
    yAxisMin: {
      label: '刻度起始值',
      type: 'InputNumber',
      groupsName: '纵轴',
      props: {
        placeholder: '自动计算',
      },
    },
    yAxisMax: {
      label: '刻度终点值',
      type: 'InputNumber',
      groupsName: '纵轴',
      props: {
        placeholder: '自动计算',
      },
    },
    yAxisFormatter: {
      label: '刻度后缀',
      type: 'Input',
      groupsName: '纵轴',
      props: {
        placeholder: '请输入刻度后缀',
      },
      enableI18n: true,
    },
    yAxisTitleRight: {
      label: '纵轴标题',
      type: 'Input',
      groupsName: '纵轴(右侧)',
      istodoBind: true,
      props: {
        placeholder: '请输入',
        dependProps: {
          chartType: ['doubleY', 'doubleXDoubleY'],
        },
      },
      enableI18n: true,
    },
    yAxisIntervalRight: {
      label: '纵轴间隔',
      type: 'InputNumber',
      groupsName: '纵轴(右侧)',
      props: {
        placeholder: '自动计算',
        dependProps: {
          chartType: ['doubleY', 'doubleXDoubleY'],
        },
      },
    },
    yAxisMinRight: {
      label: '刻度起始值',
      type: 'InputNumber',
      groupsName: '纵轴(右侧)',
      props: {
        placeholder: '自动计算',
        dependProps: {
          chartType: ['doubleY', 'doubleXDoubleY'],
        },
      },
    },
    yAxisMaxRight: {
      label: '刻度终点值',
      type: 'InputNumber',
      groupsName: '纵轴(右侧)',
      props: {
        placeholder: '自动计算',
        dependProps: {
          chartType: ['doubleY', 'doubleXDoubleY'],
        },
      },
    },
    yAxisFormatterRight: {
      label: '刻度后缀',
      type: 'Input',
      groupsName: '纵轴(右侧)',
      props: {
        placeholder: '请输入刻度后缀',
        dependProps: {
          chartType: ['doubleY', 'doubleXDoubleY'],
        },
      },
      enableI18n: true,
    },
    yAxisIndexMap: {
      label: '纵轴映射',
      type: 'SetCondition',
      groupsName: '纵轴(右侧)',
      props: {
        title: '纵轴映射',
        resultOptions: [{ value: '1', label: '纵轴(右边)' }],
        dependProps: {
          chartType: 'doubleY',
        },
      },
    },
    color: {
      label: '颜色',
      type: 'ColorSelect',
      groupsName: '图表样式',
      props: {},
    },
    layout: {
      label: '图表布局',
      type: 'EchartLayout',
      groupsName: '图表样式',
      props: {},
    },
    smooth: {
      label: '平滑曲线',
      type: 'Switch',
      groupsName: '图表样式',
      props: {},
    },
    lineType: {
      label: '线类型',
      type: 'Select',
      groupsName: '图表样式',
      istodoBind: true,
      props: {
        options: [
          { title: '实线', value: 'solid' },
          { title: '虚线', value: 'dashed' },
          { title: '点状线', value: 'dotted' },
        ],
      },
    },
    stacked: {
      label: '数据堆叠',
      type: 'RadioButton',
      groupsName: '图表样式',
      props: {
        options: [
          { title: '无', value: 'none' },
          { title: '堆叠', value: 'stacked' },
        ],
        dependProps: {
          chartType: '',
        },
      },
    },
    area: {
      label: '色块填充',
      type: 'RadioButton',
      groupsName: '图表样式',
      props: {
        options: [
          { title: '无', value: 'none' },
          { title: '与折线同色', value: 'area' },
        ],
        popoverOptions: [{ imageName: '' }, { imageName: 'areaLine' }],
        dependProps: {
          chartType: 'stacked',
        },
        style: {
          padding: '3px 6px',
        },
      },
    },
    lineBarMap: {
      label: '柱线类型',
      type: 'SetCondition',
      groupsName: '图表样式',
      istodoBind: true,
      props: {
        resultOptions: [
          { value: 'bar', label: '柱状图' },
          { value: 'line', label: '线状图' },
        ],
        dependProps: {
          chartType: ['MixedLineAndBar', 'doubleX', 'doubleXDoubleY'],
        },
        dependPropsKey: (selectedComp: any) => {
          if (
            ['doubleX', 'doubleXDoubleY'].includes(
              selectedComp?.props?.chartType,
            )
          ) {
            return 'dataSourceTop';
          }
          return 'dataSource';
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
      label: '图例布局',
      type: 'RadioButton',
      groupsName: '图例',
      props: {
        options: [
          { title: '水平', value: 'horizontal' },
          { title: '垂直', value: 'vertical' },
        ],
        dependProps: {
          showLegend: true,
          layout: [
            'top',
            'left',
            'leftTop',
            'rightTop',
            'bottom',
            'right',
            'rightBottom',
            'leftBottom',
          ],
        },
      },
    },
    showTooltip: {
      label: '显示提示框',
      type: 'Switch',
      groupsName: '提示框',
      props: {},
    },
    tooltipFormatter: {
      label: '提示内容值后缀',
      type: 'Input',
      groupsName: '提示框',
      props: {
        placeholder: '请输入提示内容后缀',
      },
      enableI18n: true,
    },
    showLable: {
      label: '数字标签',
      type: 'Switch',
      groupsName: '标签',
      props: {},
    },
    symbol: {
      label: '标记图形',
      type: 'Select',
      groupsName: '标记',
      props: {
        options: [
          { title: '空心圆形', value: 'emptyCircle' },
          ...chartSymbolOptions,
        ],
      },
    },
    symbolSize: {
      label: '标记大小',
      type: 'InputNumber',
      groupsName: '标记',
      props: {
        min: 0,
      },
    },
    showMarkPoint: {
      label: '标注',
      type: 'Switch',
      groupsName: '标注',
      props: {},
    },
    markPointSymbol: {
      label: '标注图形',
      type: 'Select',
      groupsName: '标注',
      props: {
        options: chartSymbolOptions,
      },
    },
    markPointType: {
      label: '标注维度',
      type: 'RadioButton',
      groupsName: '标注',
      props: {
        options: [
          {
            title: '最小值',
            value: 'min',
          },
          {
            title: '最大值',
            value: 'max',
          },
          {
            title: '平均值',
            value: 'average',
          },
        ],
        style: {
          padding: '0 8px',
        },
      },
    },
    showMarkLine: {
      label: '标线',
      type: 'Switch',
      groupsName: '标线',
      props: {},
    },
    markLineType: {
      label: '标线维度',
      type: 'RadioButton',
      groupsName: '标线',
      props: {
        options: [
          {
            title: '最小值',
            value: 'min',
          },
          {
            title: '最大值',
            value: 'max',
          },
          {
            title: '平均值',
            value: 'average',
          },
        ],
        style: {
          padding: '0 8px',
        },
      },
    },
    showEmphasis: {
      label: '开启高亮效果',
      type: 'Switch',
      groupsName: '其他',
      props: {},
    },
    axisExchange: {
      label: '横纵轴调换',
      type: 'Switch',
      groupsName: '其他',
      props: {},
    },
    insideScale: {
      label: '鼠标缩放',
      type: 'Switch',
      groupsName: '其他',
      props: {
        description:
          '开启后，在图表内部可以通过鼠标滚轮进行图形放大、缩小，5组数据及以上支持点击图形放大',
      },
    },
    sliderScale: {
      label: '滑块缩放',
      type: 'Switch',
      groupsName: '其他',
      props: {
        description:
          '开启后，在图表下方显示缩放滑块组件，支持拖动滑块进行图形放大、缩小，5组数据及以上支持点击图形放大',
      },
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {
        // 放开禁用配置属性，支持设置轴标签相关设置，如标签旋转角度
        // disableProps: ['xAxis', 'yAxis'],
      },
    },
  },
  style: {
    width: '100%',
    height: '380px',
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
          name: 'paramsLine',
          value: '$paramsLine$',
        },
        {
          title: '点击项数据',
          name: 'paramsLineData',
          value: '$paramsLine?.data$',
        },
        {
          title: '点击项名称',
          name: 'paramsLineName',
          value: '$paramsLine?.name$',
        },
        {
          title: '点击项值',
          name: 'paramsLineValue',
          value: '$paramsLine?.value$',
        },
      ],
    },
  ],
  todoActionList: [],
};

export default config;
