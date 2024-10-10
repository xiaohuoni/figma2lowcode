import { defineConfig } from '@lingxiteam/types';
import { SERVICE_KEY } from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const defaultData = [
  {
    name: '数学',
    vaule: '68',
  },
  {
    name: '语文',
    value: '59',
  },
  {
    name: '英语',
    value: '78',
  },
  {
    name: '历史',
    value: '48',
  },
  {
    name: '政治',
    value: '77',
  },
  {
    name: '地理',
    value: '79',
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

const config = defineConfig({
  icon: 'PieChart',
  label: '饼状图',
  type: 'PieChart',
  description: '',
  image: '',
  groupsName: '图表',
  compType: 7,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  deprecated: true,
  props: {
    type: 'pie',
    relateDataType: '3',
    data: [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
    ],
    dataSource: [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
    ],
    dataMapColumns: [
      { keyVal: 'name', attrVal: 'name' },
      { keyVal: 'value', attrVal: 'value' },
    ],
    chartColor: '#2AADE7,#DF3927,#E2A334,#C1E469,#41C74D,#1159CF',
  },
  engineApi: ['sandBoxSafeRun'],
  todoProps: {
    relateDataType: {
      label: '数据绑定',
      type: 'Select',
      groupsName: '绑定数据',
      props: {
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
        defaultValue: '3',
      },
    },
    exampleData: {
      label: '示例数据',
      type: 'DataStructureViewer',
      groupsName: '绑定数据',
      props: {
        dataSource: defaultData,
      },
    } as any,
    chartDataSource: {
      label: '数据源',
      type: 'Input',
      groupsName: '绑定数据',
      istodoBind: true,
      props: {
        dependProps: {
          relateDataType: '1',
        },
        // defaultValue: '暂未绑定数据',
        required: false,
        readOnly: true,
      },
    } as any,
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
        rows: [{ key: 'name' }, { key: 'value' }],
        dependProps: {
          relateDataType: '3',
        },
      },
    } as any,
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
    } as any,
    chartColor: {
      label: '饼图颜色',
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
          {
            key: 'textAlign',
            label: '标题水平对齐',
            type: 'Select',
            hasParentKey: true,
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
          textStyleConfig,
        ],
      },
    } as any,
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
            hasParentKey: true,
            defaultValue: 'roundRect',
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
            hasParentKey: true,
            defaultValue: 10,
          },
          textStyleConfig,
        ],
      },
    } as any,
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
    } as any,
    pieSeries: {
      label: '值系',
      groupsName: '图表属性配置',
      props: {
        children: [
          {
            key: 'name',
            label: '悬浮标题',
            type: 'Input',
            hasParentKey: true,
          },
          {
            key: 'roseType',
            label: '南丁格尔图',
            type: 'Select',
            hasParentKey: true,
            options: [
              {
                title: '标准',
                value: false,
              },
              {
                title: '圆心角不同',
                value: 'radius',
              },
              {
                title: '圆心角相同',
                value: 'area',
              },
            ],
          },
          {
            key: 'radius',
            label: '饼图的半径',
            type: 'Input',
            hasParentKey: true,
            defaultValue: '0,75%',
          },
          {
            key: 'center',
            label: '饼图的中心坐标',
            type: 'Input',
            hasParentKey: true,
            defaultValue: '50%,50%',
          },
          {
            key: 'itemStyle',
            label: '饼图分割线样式',
            hasParentKey: true,
            children: [
              {
                key: 'borderWidth',
                label: '边线宽度',
                type: 'InputNumber',
                hasParentKey: true,
              },
              {
                key: 'borderColor',
                label: '边线颜色',
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
                  {
                    title: '便签百分比',
                    value: 'labpercent',
                  },
                ],
              },
              {
                key: 'position',
                label: '文本位置',
                type: 'Select',
                hasParentKey: true,
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
          {
            key: 'labelLine',
            label: '标签线',
            hasParentKey: true,
            children: [
              {
                key: 'show',
                label: '是否显示',
                type: 'Switch',
                hasParentKey: true,
              },
              {
                key: 'length',
                label: '第一段线长度',
                type: 'InputNumber',
                hasParentKey: true,
                defaultValue: '12',
              },
              {
                key: 'length2',
                label: '第二段线长度',
                type: 'InputNumber',
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
    } as any,
  },
  style: {
    width: '100%',
    height: '240px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'width',
    'height',
    'padding',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击图表',
      value: 'onChartClick',
      params: [
        { title: '点击图表值', name: 'paramsPie', value: '$paramsPie$' },
      ],
    },
  ],
  todoActionList: getTodoActionListByKey(['reloadTableData']),
});

export default config;
