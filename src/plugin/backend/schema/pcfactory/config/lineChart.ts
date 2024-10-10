import { SERVICE_KEY } from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const defaultData = [
  {
    y0: '68',
    x: 'lw',
    y1: '76',
    y2: '88',
  },
  {
    y0: '59',
    x: 'cx',
    y1: '87',
    y2: '77',
  },
  {
    y0: '78',
    x: 'hfp',
    y1: '73',
    y2: '67',
  },
  {
    y0: '48',
    x: 'wqw',
    y1: '47',
    y2: '52',
  },
  {
    y0: '77',
    x: 'qll',
    y1: '66',
    y2: '80',
  },
  {
    y0: '79',
    x: 'hf',
    y1: '72',
    y2: '62',
  },
];
const textStyleConfig = {
  key: 'textStyle',
  label: '文字样式',
  hasParentKey: true,
  children: [
    {
      key: 'color',
      label: '字体颜色',
      type: 'ColorPicker',
      hasParentKey: true,
    },
    {
      key: 'fontStyle',
      label: '字体样式',
      type: 'Select',
      hasParentKey: true,
      inhibitBtn: true,
      options: [
        {
          title: '普通',
          value: 'normal',
        },
        {
          title: '斜体',
          value: 'italic',
        },
        {
          title: '文字倾斜',
          value: 'oblique',
        },
      ],
    },
    {
      key: 'fontWeight',
      label: '字体粗细',
      type: 'Select',
      hasParentKey: true,
      inhibitBtn: true,
      options: [
        {
          title: '普通',
          value: 'normal',
        },
        {
          title: '粗体',
          value: 'bold',
        },
        {
          title: '加粗',
          value: 'bolder',
        },
        {
          title: '细体',
          value: 'lighter',
        },
      ],
    },
    {
      key: 'fontSize',
      label: '字体大小',
      type: 'InputNumber',
      hasParentKey: true,
    },
    {
      key: 'lineHeight',
      label: '行高',
      type: 'InputNumber',
      hasParentKey: true,
    },
  ],
};
const config = {
  icon: 'LineChart',
  label: '折线图',
  type: 'LineChart',
  description: '',
  image: '',
  groupsName: '图表',
  compType: 7,
  compLib: 'comm',
  platform: 'pc',
  isContainer: false,
  deprecated: true,
  props: {
    type: 'line',
    relateDataType: '3',
    yAxisNum: 10,
    seriesNum: 10,
    data: {
      columns: [{ key: 'x' }, { key: 'y0' }],
      data: [
        { x: '2019/07', y0: 12 },
        { x: '2019/08', y0: 34 },
        { x: '2019/09', y0: 26 },
        { x: '2019/10', y0: 75 },
        { x: '2019/11', y0: 23 },
        { x: '2019/12', y0: 44 },
      ],
    },
    dataSource: [
      { x: '2019/07', y0: 12 },
      { x: '2019/08', y0: 34 },
      { x: '2019/09', y0: 26 },
      { x: '2019/10', y0: 75 },
      { x: '2019/11', y0: 23 },
      { x: '2019/12', y0: 44 },
    ],
    dataMapColumns: [
      { keyVal: 'x', attrVal: 'x' },
      { keyVal: 'y0', attrVal: 'y0' },
    ],
  },
  engineApi: ['sandBoxSafeRun'],
  todoProps: {
    relateDataType: {
      label: '数据绑定',
      type: 'Select',
      groupsName: '绑定数据',
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '数据源',
            value: '1',
          },
          {
            title: '服务',
            value: '2',
          },
          {
            title: '手动添加',
            value: '3',
          },
        ],
      },
    },
    exampleData: {
      label: '示例数据',
      type: 'DataStructureViewer',
      groupsName: '绑定数据',
      props: {
        dataSource: defaultData,
      },
    },
    chartDataSource: {
      label: '数据源',
      type: 'Input',
      groupsName: '绑定数据',
      istodoBind: true,
      props: {
        dependProps: {
          relateDataType: '1',
        },
        required: false,
        readOnly: true,
      },
    },
    columns: {
      label: '选择服务',
      type: 'SelectService',
      groupsName: '绑定数据',
      istodoBind: true,
      props: {
        dependProps: {
          relateDataType: '2',
          serviceTabs: [
            {
              key: SERVICE_KEY.STD,
              fileUpload: true,
            },
            {
              key: SERVICE_KEY.INNER,
              fileUpload: true,
            },
          ],
        },
      },
    },
    data: {
      label: '手动添加数据',
      type: 'CustomDataSource',
      groupsName: '绑定数据',
      props: {
        rows: [{ key: 'x' }, { key: 'y0' }],
        isMapPanel: true,
        dependProps: {
          relateDataType: '3',
        },
      },
    },
    isDataMap: {
      label: '是否映射数据',
      type: 'Switch',
      groupsName: '绑定数据',
    },
    dataMapColumns: {
      label: '配置映射',
      type: 'CustomDataSource',
      groupsName: '绑定数据',
      props: {
        dependProps: {
          isDataMap: true,
        },
        rows: [
          { key: 'keyVal', dataIndex: 'keyVal', title: '字段值' },
          { key: 'attrVal', dataIndex: 'attrVal', title: '映射值' },
        ],
      },
    },
    chartColor: {
      label: '颜色配置',
      type: 'Input',
      groupsName: '图表属性配置',
    },
    chartTitle: {
      label: '标题',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'show',
            label: '标题是否显示',
            type: 'Switch',
            hasParentKey: true,
          },
          {
            key: 'text',
            label: '主标题',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'subtext',
            label: '副标题',
            type: 'Input',
            hasParentKey: true,
          },
          textStyleConfig,
          {
            key: 'textAlign',
            label: '标题水平对齐',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '自动',
                value: 'auto',
              },
              {
                title: '左对齐',
                value: 'left',
              },
              {
                title: '右对齐',
                value: 'right',
              },
              {
                title: '居中对齐',
                value: 'center',
              },
            ],
          },
          {
            key: 'textVerticalAlign',
            label: '标题垂直对齐',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '自动',
                value: 'auto',
              },
              {
                title: '顶部对齐',
                value: 'top',
              },
              {
                title: '底部对齐',
                value: 'bottom',
              },
              {
                title: '居中对齐',
                value: 'middle',
              },
            ],
          },
          {
            key: 'left',
            label: '左边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'top',
            label: '上边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'right',
            label: '右边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'bottom',
            label: '下边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'backgroundColor',
            label: '背景色',
            type: 'ColorPicker',
            hasParentKey: true,
          },
        ],
      },
    },
    chartsLegend: {
      label: '图例',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'show',
            label: '图例是否显示',
            type: 'Switch',
            hasParentKey: true,
          },
          {
            key: 'orient',
            label: '布局朝向',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '垂直',
                value: 'vertical',
              },
              {
                title: '水平',
                value: 'horizontal',
              },
            ],
          },
          {
            key: 'align',
            label: '图例标记和文本的对齐',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '自动',
                value: 'auto',
              },
              {
                title: '左对齐',
                value: 'left',
              },
              {
                title: '右对齐',
                value: 'right',
              },
            ],
          },
          {
            key: 'left',
            label: '左边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'top',
            label: '上边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'right',
            label: '右边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'bottom',
            label: '下边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'icon',
            label: '图例类型',
            type: 'Select',
            defaultValue: 'roundRect',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
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
                title: '砖石',
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
            ],
          },
          {
            key: 'itemGap',
            label: '图例间距',
            type: 'InputNumber',
            defaultValue: 10,
            hasParentKey: true,
          },
          textStyleConfig,
        ],
      },
    },

    chartTooltip: {
      label: '提示框样式',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'show',
            label: '是否显示',
            type: 'Switch',
            hasParentKey: true,
          },
          {
            key: 'triggerOn',
            label: '触发条件',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '鼠标移入',
                value: 'mousemove',
              },
              {
                title: '点击',
                value: 'click',
              },
            ],
          },
          {
            key: 'trigger',
            label: '触发类型',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '数据项',
                value: 'item',
              },
              {
                title: '坐标轴',
                value: 'axis',
              },
            ],
            defaultValue: 'axis',
          },
          {
            key: 'axisPointer',
            label: '指示器',
            hasParentKey: true,
            children: [
              {
                key: 'type',
                label: '类型',
                type: 'Select',
                hasParentKey: true,
                inhibitBtn: true,
                options: [
                  {
                    title: '直线',
                    value: 'line',
                  },
                  {
                    title: '阴影',
                    value: 'shadow',
                  },
                  {
                    title: '无',
                    value: 'none',
                  },
                ],
              },
            ],
          },
          {
            key: 'position',
            label: '位置',
            type: 'Input',
            hasParentKey: true,
            defaultValue: '0,75%',
          },
          {
            key: 'backgroundColor',
            label: '背景色',
            type: 'ColorPicker',
            hasParentKey: true,
          },
          {
            key: 'borderColor',
            label: '边框色',
            type: 'ColorPicker',
            hasParentKey: true,
          },
          {
            key: 'borderWidth',
            label: '边框宽度',
            type: 'InputNumber',
            hasParentKey: true,
          },
          {
            key: 'formatter',
            label: '内容转换',
            type: 'TextArea',
            hasParentKey: true,
          },
          {
            key: 'padding',
            label: '内边距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'extraCssText',
            label: '额外样式',
            type: 'TextArea',
            hasParentKey: true,
          },
          textStyleConfig,
        ],
      },
    },
    chartGrid: {
      label: '坐标系样式',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'top',
            label: '上间距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'left',
            label: '左间距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'right',
            label: '右间距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'bottom',
            label: '下间距',
            type: 'Input',
            hasParentKey: true,
          },
        ],
      },
    },
    chartXAxis: {
      label: '横轴样式',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'type',
            label: '类目',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '名称',
                value: 'category',
              },
              {
                title: '值',
                value: 'value',
              },
            ],
          },
          {
            key: 'name',
            label: '坐标轴名称',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'axisLabel',
            label: '横坐标文字样式',
            hasParentKey: true,
            children: [
              {
                key: 'color',
                label: '颜色',
                type: 'ColorPicker',
                hasParentKey: true,
              },
              {
                key: 'rotate',
                label: '倾斜角',
                type: 'InputNumber',
                hasParentKey: true,
                props: {
                  max: 360,
                  min: 0,
                },
              },
              {
                key: 'fontSize',
                label: '字体大小',
                type: 'InputNumber',
                hasParentKey: true,
                props: {
                  max: 50,
                  min: 10,
                },
              },
              {
                key: 'interval',
                label: '标签间隔',
                type: 'InputNumber',
                hasParentKey: true,
              },
              {
                key: 'width',
                label: '文本显示宽度',
                type: 'InputNumber',
                hasParentKey: true,
              },
              {
                key: 'overflow',
                label: '是否换行',
                type: 'Select',
                hasParentKey: true,
                inhibitBtn: true,
                options: [
                  {
                    title: '截断',
                    value: 'truncate',
                  },
                  {
                    title: '换行',
                    value: 'breakAll',
                  },
                ],
              },
            ],
          },
          {
            key: 'axisLine',
            label: '横轴线样式',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '是否展示',
                type: 'Switch',
                hasParentKey: true,
              },
              {
                key: 'lineStyle',
                label: '线样式',
                hasParentKey: true,
                children: [
                  {
                    key: 'color',
                    label: '颜色',
                    type: 'ColorPicker',
                    hasParentKey: true,
                  },
                  {
                    key: 'width',
                    label: '线宽',
                    type: 'InputNumber',
                    hasParentKey: true,
                    props: {
                      max: 10,
                      min: 1,
                    },
                  },
                ],
              },
            ],
          },
          {
            key: 'axisTick',
            label: '坐标轴刻度',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '刻度是否显示',
                type: 'Switch',
                hasParentKey: true,
              },
            ],
          },
          {
            key: 'splitLine',
            label: '分割线样式',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '是否展示',
                type: 'Switch',
                hasParentKey: true,
              },
              {
                key: 'lineStyle',
                label: '线样式',
                hasParentKey: true,
                children: [
                  {
                    key: 'color',
                    label: '颜色',
                    type: 'ColorPicker',
                    hasParentKey: true,
                  },
                  {
                    key: 'width',
                    label: '线宽',
                    type: 'InputNumber',
                    hasParentKey: true,
                    props: {
                      max: 10,
                      min: 1,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    yAxisNum: {
      label: '竖轴数',
      groupsName: '图表属性配置',
      type: 'InputNumber',
      props: {
        readOnly: true,
        defaultValue: 1,
      },
    },
    chartYAxis: {
      label: '竖轴样式',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'type',
            label: '类目',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '名称',
                value: 'category',
              },
              {
                title: '值',
                value: 'value',
              },
            ],
          },
          {
            key: 'name',
            label: '坐标轴名称',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'position',
            label: 'y轴位置',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '居左',
                value: 'left',
              },
              {
                title: '居右',
                value: 'right',
              },
            ],
          },
          {
            key: 'offset',
            label: '相对距离',
            type: 'InputNumber',
            hasParentKey: true,
          },
          {
            key: 'axisLabel',
            label: '纵坐标文字样式',
            hasParentKey: true,
            children: [
              {
                key: 'formatter',
                label: '后缀',
                type: 'Input',
                hasParentKey: true,
              },
              {
                key: 'color',
                label: '颜色',
                type: 'ColorPicker',
                hasParentKey: true,
              },
              {
                key: 'fontSize',
                label: '字体大小',
                type: 'InputNumber',
                hasParentKey: true,
                props: {
                  max: 50,
                  min: 10,
                },
              },
            ],
          },
          {
            key: 'axisLine',
            label: '纵轴线样式',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '是否展示',
                type: 'Switch',
                hasParentKey: true,
              },
              {
                key: 'lineStyle',
                label: '线样式',
                hasParentKey: true,
                children: [
                  {
                    key: 'color',
                    label: '颜色',
                    type: 'ColorPicker',
                    hasParentKey: true,
                  },
                  {
                    key: 'width',
                    label: '线宽',
                    type: 'InputNumber',
                    hasParentKey: true,
                    props: {
                      max: 10,
                      min: 1,
                    },
                  },
                ],
              },
            ],
          },
          {
            key: 'axisTick',
            label: '坐标轴刻度',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '刻度是否显示',
                type: 'Switch',
                hasParentKey: true,
              },
            ],
          },
          {
            key: 'splitLine',
            label: '分割线样式',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '是否展示',
                type: 'Switch',
                hasParentKey: true,
              },
              {
                key: 'lineStyle',
                label: '线样式',
                hasParentKey: true,
                children: [
                  {
                    key: 'color',
                    label: '颜色',
                    type: 'ColorPicker',
                    hasParentKey: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    seriesNum: {
      label: '数据列表数',
      type: 'InputNumber',
      groupsName: '图表属性配置',
      props: {
        readOnly: true,
        defaultValue: 1,
      },
    },
    series: {
      label: '数据显示',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'type',
            label: '类型',
            type: 'Select',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              { title: '折线', value: 'line' },
              { title: '柱状', value: 'bar' },
            ],
            defaultValue: 'line',
          },
          {
            key: 'name',
            label: '名称',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'xAxisIndex',
            label: 'x轴编号',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'yAxisIndex',
            label: 'y轴编号',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'smooth',
            label: '平滑曲线',
            type: 'Switch',
            hasParentKey: true,
          },
          {
            key: 'lineStyle',
            label: '图表线样式',
            hasParentKey: true,
            children: [
              {
                key: 'color',
                label: '颜色',
                type: 'ColorPicker',
                hasParentKey: true,
              },
              {
                key: 'width',
                label: '线宽',
                type: 'InputNumber',
                hasParentKey: true,
              },
              {
                key: 'type',
                label: '线类型',
                type: 'Select',
                hasParentKey: true,
                inhibitBtn: true,
                options: [
                  { value: 'solid', title: '实线' },
                  { value: 'dashed', title: '虚线' },
                  { value: 'dotted', title: '点划线' },
                ],
              },
            ],
          },
          {
            key: 'barWidth',
            label: '柱宽',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'barGap',
            label: '柱间距',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'showBackground',
            label: '是否显示柱条背景色',
            type: 'Switch',
            hasParentKey: true,
          },
          {
            key: 'backgroundStyle',
            label: '背景样式',
            hasParentKey: true,
            children: [
              {
                key: 'color',
                label: '颜色',
                type: 'ColorPicker',
                hasParentKey: true,
              },
              {
                key: 'opacity',
                label: '透明度',
                type: 'InputNumber',
                hasParentKey: true,
                props: {
                  max: 360,
                  min: 0,
                },
              },
            ],
          },
          {
            key: 'stack',
            label: '数据堆叠',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'showSymbol',
            label: 'symbol是否显示',
            type: 'Switch',
            hasParentKey: true,
          },
          {
            key: 'symbolSize',
            label: 'symbol大小',
            type: 'InputNumber',
            hasParentKey: true,
          },
          {
            key: 'symbol',
            label: 'symbol形状',
            type: 'Select',
            defaultValue: 'emptyCircle',
            hasParentKey: true,
            inhibitBtn: true,
            options: [
              {
                title: '空心圆',
                value: 'emptyCircle',
              },
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
                title: '砖石',
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
            ],
          },
          {
            key: 'itemStyle',
            label: '点/柱的颜色',
            hasParentKey: true,
            children: [
              {
                key: 'color',
                label: '颜色',
                type: 'ColorPicker',
                hasParentKey: true,
              },
              {
                key: 'borderRadius',
                label: '圆角半径',
                type: 'InputNumber',
                hasParentKey: true,
              },
              {
                key: 'borderWidth',
                label: '边宽',
                type: 'InputNumber',
                hasParentKey: true,
              },
              {
                key: 'borderColor',
                label: '边框颜色',
                type: 'ColorPicker',
                hasParentKey: true,
              },
            ],
          },
          {
            key: 'areaStyle',
            label: '线区域颜色',
            hasParentKey: true,
            children: [
              {
                key: 'showColor',
                label: '是否显示块色',
                type: 'Switch',
                hasParentKey: true,
              },
              {
                key: 'color0',
                label: '0%处的色值',
                type: 'ColorPicker',
                hasParentKey: true,
              },
              {
                key: 'color1',
                label: '100%处的色值',
                type: 'ColorPicker',
                hasParentKey: true,
              },
            ],
          },
          {
            key: 'label',
            label: '标签',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '是否显示',
                type: 'Switch',
                hasParentKey: true,
              },
              {
                key: 'formatter',
                label: '标签展示格式',
                type: 'Select',
                hasParentKey: true,
                inhibitBtn: true,
                options: [
                  {
                    title: '值',
                    value: 'value',
                  },
                  {
                    title: '便签',
                    value: 'lab',
                  },
                  {
                    title: '百分比',
                    value: 'percent',
                  },
                  {
                    title: '便签值',
                    value: 'labvalue',
                  },
                ],
              },
              {
                key: 'position',
                label: '文本位置',
                type: 'Select',
                hasParentKey: true,
                inhibitBtn: true,
                options: [
                  {
                    title: '外部',
                    value: 'outside',
                  },
                  {
                    title: '内部',
                    value: 'inside',
                  },
                  {
                    title: '中心',
                    value: 'center',
                  },
                ],
              },
              {
                key: 'color',
                label: '字体颜色',
                type: 'ColorPicker',
                hasParentKey: true,
              },
              {
                key: 'fontWeight',
                label: '字体粗细',
                type: 'Select',
                hasParentKey: true,
                inhibitBtn: true,
                options: [
                  {
                    title: '普通',
                    value: 'normal',
                  },
                  {
                    title: '粗体',
                    value: 'bold',
                  },
                  {
                    title: '加粗',
                    value: 'bolder',
                  },
                  {
                    title: '细体',
                    value: 'lighter',
                  },
                ],
              },
              {
                key: 'fontSize',
                label: '字体大小',
                type: 'InputNumber',
                hasParentKey: true,
              },
            ],
          },
        ],
      },
    },
  },
  style: {
    width: '100%',
    height: '380px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'width',
    'height',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击图表',
      value: 'onChartClick',
      params: [
        { title: '点击图表值', name: 'paramsLine', value: '$paramsLine$' },
      ],
    },
  ],
  todoActionList: getTodoActionListByKey(['reloadTableData']),
};

export default config;
