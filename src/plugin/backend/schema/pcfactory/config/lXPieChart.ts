import { defineConfig, defineTodoPropsObject } from '@lingxiteam/types';
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

const defaultData = [
  { value: 1048, name: 'Search Engine' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' },
];

const defaultDes = [
  {
    title: '饼图和环形图的区别',
    desc:
      '1、饼图（Pie Chart）：饼图是一种圆形的图表，通过将整体分割成不同的扇形区域来表示不同类别的数\n' +
      '据所占的比例。每个扇形的角度大小表示该类别数据所占的比例大小。饼图适用于展示各类别数据在整体\n' +
      '中的相对比例关系，可以直观地显示百分比。\n' +
      '\n' +
      '2、环形图（Donut Chart）：环形图是在饼图的基础上加入了内部的空心圆，形成环状结构。环形图可\n' +
      '以同时显示各类别数据的相对比例关系，以及各类别数据在总体中的比例关系。环形图的内部空心圆可以\n' +
      '用来展示其他信息，例如总体数值或附加说明。与饼图相比，环形图更适合展示较少的类别，同时提供更\n' +
      '多的信息。',
  },
  {
    title: '饼图说明',
    subTitle: '名词的详细解释，见属性的注释',
    img: ['PieChartDesc', 'ProgreddPieDesc', 'NightingalePieDesc'],
  },
];

export default defineConfig({
  icon: 'PieChart',
  label: '饼图/环形图',
  type: 'LXPieChart',
  description: '',
  image: '',
  groupsName: '图表',
  compType: 7,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  props: {
    exampleData: defaultData,
    basicStatus: 1,
    name: '饼图/环形图',
    pieType: 'circlePie',
    layout: 'horizontal',
    centreIndicatorSum: 'autoSum',
    titlePosition: 'left',
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
    backgroundColor: 'light',
    progressMaxValue: 100,
    radiusSize: '75%',
    progressRadiusSize: '["40%","70%"]',
    nightingaleRadiusSize: '["0%","70%"]',
    nightingaleStyle: 'radius',
    showLegend: true,
    legendOrient: 'roundRect',
    showLabel: true,
    labelContent: '{b}: {c}',
    labelPosition: 'outside',
    hoverTips: true,
    hoverHighlight: true,
    clickDisunite: false,
    borderWidth: 0,
    borderColor: '#ffffff',
    borderRadius: 10,
    centreIndicatorStyle: 'countBottom',
  },
  todoProps: {
    configDesc: defineTodoPropsObject({
      label: '配置说明',
      type: 'ConfigDesc',
      groupsName: '使用说明',
      props: {
        dataSource: defaultDes,
      },
    }),
    exampleData: defineTodoPropsObject({
      label: '示例数据',
      type: 'DataStructureViewer',
      groupsName: '使用说明',
      props: {
        isNewChart: true,
        description: '查看业务数据示例，可修改在配置态查看效果',
      },
    }),
    name: defineTodoPropsObject({
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {
        required: false,
      },
    }),
    basicStatus: defineTodoPropsObject({
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
    }),
    pieType: defineTodoPropsObject({
      label: '图表类型',
      type: 'Select',
      groupsName: '基础',
      props: {
        options: [
          { title: '普通饼图', value: 'pie', img: 'NormalPie' },
          {
            title: '局部分离饼图',
            value: 'partExplodedPie',
            img: 'PartExplodePie',
          },
          { title: '全部分离饼图', value: 'explodedPie', img: 'ExplodedPie' },
          { title: '普通环形图', value: 'circlePie', img: 'CirclePie' },
          {
            title: '南丁格尔图',
            value: 'nightingalePie',
            img: 'NightingalePie',
          },
          { title: '半环图', value: 'halfCirclePie', img: 'HalfCirclePie' },
          { title: '进度环形图', value: 'progressPie', img: 'ProgressPie' },
        ],
      },
    }),
    layout: defineTodoPropsObject({
      label: '图表布局',
      type: 'EchartLayout',
      groupsName: '基础',
      props: {},
    }),
    dataSource: defineTodoPropsObject({
      label: '数据绑定',
      type: 'TableDataSource',
      groupsName: '基础',
      istodoBind: {
        dataBindType: 'EChartDataBind',
      },
      props: {},
    }),
    dataName: defineTodoPropsObject({
      label: '图例字段',
      type: 'TreeSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [],
        placeholder: '选择或输入图例字段',
        isOnBlur: true,
      },
    }),
    dataValue: defineTodoPropsObject({
      label: '数据字段',
      type: 'TreeSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [],
        placeholder: '选择或输入数据字段',
        isOnBlur: true,
      },
    }),
    centreIndicator: defineTodoPropsObject({
      label: '中心指标',
      type: 'Switch',
      groupsName: '基础',
      props: {
        dependProps: {
          pieType: ['circlePie', 'halfCirclePie', 'progressPie'],
        },
      },
    }),
    centreIndicatorStyle: defineTodoPropsObject({
      label: '中心样式',
      type: 'HorizontalSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          centreIndicator: true,
          pieType: ['circlePie', 'halfCirclePie', 'progressPie'],
        },
        options: [
          { img: 'PieChartStyleCountBottom', value: 'countBottom' },
          { img: 'PieCharStyleCountTop', value: 'countTop' },
          { img: 'PieChartStylePercentBottom', value: 'percentBottom' },
          { img: 'PieChartStylePercentTop', value: 'percentTop' },
        ],
        imgStyle: { width: '64px', height: '32px' },
      },
    }),
    centreIndicatorText: defineTodoPropsObject({
      label: '中心文字',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          centreIndicator: true,
          pieType: ['circlePie', 'halfCirclePie', 'progressPie'],
        },
      },
      enableI18n: true,
    }),
    centreIndicatorSum: defineTodoPropsObject({
      label: '中心数据',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          centreIndicator: true,
          pieType: ['circlePie', 'halfCirclePie', 'progressPie'],
        },
        options: [
          { title: '自动求和', value: 'autoSum' },
          { title: '平均值', value: 'average' },
          { title: '最大值', value: 'max' },
          { title: '最小值', value: 'min' },
        ],
        inhibitBtn: true,
      },
    }),
    nightingaleStyle: defineTodoPropsObject({
      label: '南丁格尔样式',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        dependProps: {
          pieType: 'nightingalePie',
        },
        style: { padding: '0 10px' },
        options: [
          { title: '圆心角不同', value: 'radius' },
          { title: '圆心角相同', value: 'area' },
        ],
        description:
          '<div>圆心角不同：扇区圆心角展现数据的百分比，半径展现数据的大小<br >圆心角相同：所有扇区圆心角相同，仅通过半径展现数据大小</div>',
      },
    }),
    progressMaxValue: defineTodoPropsObject({
      label: '最大值',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          pieType: ['halfCirclePie', 'progressPie'],
        },
        description:
          '半环图或进度环图的最大值，当只有一组数据时根据该值减去进度数据进行环状补充',
      },
    }),
    title: defineTodoPropsObject({
      label: '标题',
      type: 'Input',
      groupsName: '标题',
      istodoBind: true,
      props: {
        placeholder: '请输入标题',
      },
      enableI18n: true,
    }),
    subTitle: defineTodoPropsObject({
      label: '副标题',
      type: 'Input',
      groupsName: '标题',
      istodoBind: true,
      props: {
        placeholder: '请输入副标题',
      },
      enableI18n: true,
    }),
    titlePosition: defineTodoPropsObject({
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
    }),
    color: defineTodoPropsObject({
      label: '颜色',
      type: 'ColorSelect',
      groupsName: '图表样式',
      props: {},
    }),
    backgroundColor: defineTodoPropsObject<'RadioColorSelect'>({
      label: '背景颜色',
      type: 'RadioColorSelect',
      groupsName: '图表样式',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["深色 'dark'", "浅色 'light'", "自定义 'custom--自定义色值'"],
          },
        ],
      },
      props: {
        options: [
          { title: '浅色', value: 'light' },
          { title: '深色', value: 'dark' },
          { title: '自定义', value: 'custom' },
        ],
      },
    }),
    progressRadiusSize: defineTodoPropsObject<'ChartSizeSelect'>({
      label: '图形尺寸',
      type: 'ChartSizeSelect',
      groupsName: '图表样式',
      props: {
        dependProps: {
          pieType: ['circlePie', 'halfCirclePie', 'progressPie'],
        },
        options: [
          { title: '大["40%","70%"]', value: '["40%","70%"]' },
          { title: '中["30%","60%"]', value: '["30%","60%"]' },
          { title: '小["25%","50%"]', value: '["25%","50%"]' },
        ],
        unit: '%',
        inputNumber: 2,
      },
    }),
    nightingaleRadiusSize: defineTodoPropsObject<'ChartSizeSelect'>({
      label: '图形尺寸',
      type: 'ChartSizeSelect',
      groupsName: '图表样式',
      props: {
        dependProps: {
          pieType: 'nightingalePie',
        },
        options: [
          { title: '大["0%","70%"]', value: '["0%","70%"]' },
          { title: '中["0%","60%"]', value: '["0%","60%"]' },
          { title: '小["0%","50%"]', value: '["0%","50%"]' },
        ],
        unit: '%',
        inputNumber: 2,
      },
    }),
    radiusSize: defineTodoPropsObject<'ChartSizeSelect'>({
      label: '图形尺寸',
      type: 'ChartSizeSelect',
      groupsName: '图表样式',
      props: {
        dependProps: {
          pieType: ['pie', 'partExplodedPie', 'explodedPie'],
        },
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
    }),
    showLegend: defineTodoPropsObject({
      label: '显示图例',
      type: 'Switch',
      groupsName: '图例',
      props: {},
    }),
    legendOrient: defineTodoPropsObject({
      label: '图例类型',
      type: 'Select',
      groupsName: '图例',
      props: {
        dependProps: {
          showLegend: true,
        },
        options: [{ title: '空心圆', value: 'emptyCircle' }, ...symbolOptions],
      },
    }),
    showLabel: defineTodoPropsObject({
      label: '显示标签',
      type: 'Switch',
      groupsName: '标签',
      props: {},
    }),
    labelContent: defineTodoPropsObject({
      label: '标签内容',
      type: 'Select',
      groupsName: '标签',
      istodoBind: true,
      props: {
        options: [
          { title: '值', value: '{c}' },
          { title: '标签', value: '{b}' },
          { title: '百分比', value: '{d}%' },
          { title: '标签：值', value: '{b}: {c}' },
          { title: '标签：百分比', value: '{b}: {d}%' },
          { title: '标签：值（百分比）', value: '{b}: {c}（{d}%）' },
        ],
        inhibitBtn: true,
      },
    }),
    labelPosition: defineTodoPropsObject({
      label: '标签位置',
      type: 'RadioButton',
      groupsName: '标签',
      props: {
        options: [
          { title: '外部', value: 'outside' },
          { title: '内部', value: 'inside' },
        ],
      },
    }),
    hoverTips: defineTodoPropsObject({
      label: '移入提示',
      type: 'Switch',
      groupsName: '个性样式',
      props: {
        description: '开启后，鼠标移入扇区显示提示框',
      },
    }),
    clickDisunite: defineTodoPropsObject({
      label: '点击分离',
      type: 'Switch',
      groupsName: '个性样式',
      props: {
        dependProps: {
          pieType: [
            'pie',
            'circlePie',
            'nightingalePie',
            'halfCirclePie',
            'progressPie',
          ],
        },
        description: '开启后，点击扇区显示单个分离交互样式',
      },
    }),
    hoverHighlight: {
      label: '移入高亮',
      type: 'Switch',
      groupsName: '个性样式',
      props: {
        description: '开启后，鼠标移入扇区显示高亮',
      },
    },
    borderWidth: defineTodoPropsObject({
      label: '边线宽度',
      type: 'InputNumber',
      groupsName: '个性样式',
      istodoBind: true,
      props: {
        description: '扇区边线宽度，设置后以边线颜色进行扇区分隔',
      },
    }),
    borderColor: defineTodoPropsObject({
      label: '边线颜色',
      type: 'ColorPicker',
      groupsName: '个性样式',
      istodoBind: true,
      props: {},
    }),
    borderRadius: defineTodoPropsObject({
      label: '扇区外圆角',
      type: 'InputNumber',
      groupsName: '个性样式',
      istodoBind: true,
      props: {
        description: '扇区外圆角的半径，设置后扇区有圆角弧度',
      },
    }),
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
          name: 'paramsPie',
          value: '$paramsPie$',
        },
        {
          title: '点击项数据',
          name: 'paramsPieData',
          value: '$paramsPie?.data$',
        },
        {
          title: '点击项名称',
          name: 'paramsPieName',
          value: '$paramsPie?.name$',
        },
        {
          title: '点击项值',
          name: 'paramsPieValue',
          value: '$paramsPie?.value$',
        },
      ],
    },
  ],
  todoActionList: [],
});
