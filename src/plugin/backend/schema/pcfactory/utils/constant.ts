const COL_SPAN_DATA = [
  { title: '1/4', value: 6 },
  { title: '1/3', value: 8 },
  { title: '1/2', value: 12 },
  { title: '2/3', value: 16 },
  { title: '3/4', value: 18 },
  { title: 1, value: 24 },
];
const WRAPPER_SPAN_DATA = [
  { title: '11/12', value: 22 },
  { title: '5/6', value: 20 },
  { title: '3/4', value: 18 },
  { title: '2/3', value: 16 },
  { title: '1/2', value: 12 },
];
const COL_WEAPPER_SPAN_DATA = {
  2: [
    { title: '11/12', value: 22 },
    { title: '5/6', value: 20 },
    { title: '3/4', value: 18 },
    { title: '2/3', value: 16 },
    { title: '1/2', value: 12 },
  ],
  4: [
    { title: '5/6', value: 20 },
    { title: '3/4', value: 18 },
    { title: '2/3', value: 16 },
    { title: '1/2', value: 12 },
  ],
  6: [
    { title: '3/4', value: 18 },
    { title: '2/3', value: 16 },
    { title: '1/2', value: 12 },
  ],
  8: [
    { title: '2/3', value: 16 },
    { title: '1/2', value: 12 },
  ],
  12: [{ title: '1/2', value: 12 }],
};
const LABEL_SPAN_DATA = [
  { title: '1/12', value: 2 },
  { title: '1/6', value: 4 },
  { title: '1/4', value: 6 },
  { title: '1/3', value: 8 },
  { title: '1/2', value: 12 },
];

const getDefaultTableColumns = () => [
  {
    title: '第一列',
    dataIndex: 'column1',
    key: 'column1',
    lineNum: 1,
    titleLineNum: 1,
  },
  {
    title: '第二列',
    dataIndex: 'column2',
    key: 'column2',
    lineNum: 1,
    titleLineNum: 1,
  },
  {
    title: '第三列',
    dataIndex: 'column3',
    key: 'column3',
    lineNum: 1,
    titleLineNum: 1,
  },
  {
    title: '第四列',
    dataIndex: 'column4',
    key: 'column4',
    lineNum: 1,
    titleLineNum: 1,
  },
  {
    title: '第五列',
    dataIndex: 'column5',
    key: 'column5',
    lineNum: 1,
    titleLineNum: 1,
  },
];

const getDefaultDescriptionColumns = () => [
  { label: '第一列', dataIndex: 'column1', key: 'column1' },
  { label: '第二列', dataIndex: 'column2', key: 'column2' },
  { label: '第三列', dataIndex: 'column3', key: 'column3' },
  { label: '第四列', dataIndex: 'column4', key: 'column4' },
  { label: '第五列', dataIndex: 'column5', key: 'column5' },
  { label: '第六列', dataIndex: 'column6', key: 'column6' },
];

const getDefaultTreeOptions = () => [
  {
    title: '第一列',
    key: 'column1',
    selectable: true,
    value: 'column1',
    label: '第一列',
    $$isParent: true, // 用来拖拽时判断是否是最外层的父层级
    children: [
      {
        title: '第二列',
        key: 'column2',
        value: 'column2',
        selectable: true,
        label: '第二列',
      },
    ],
  },
];

const getDefaultStepsOptions = () => [
  {
    id: 1,
    title: '1',
    status: 'finish',
    subTitle: 'first',
    description: '第一步',
    color: '#4477EE',
  },
  {
    id: 2,
    title: '2',
    status: 'process',
    subTitle: 'second',
    description: '第二步',
    color: '#4477EE',
  },
  {
    id: 3,
    title: '3',
    status: 'wait',
    subTitle: 'third',
    description: '第三步',
    color: '#999999',
  },
  {
    id: 4,
    title: '4',
    status: 'error',
    subTitle: 'fourth',
    description: '第四步',
    color: '#FF7474',
  },
];

const getDefaultIconSetting = () => [
  {
    label: '等待状态',
    value: 'wait',
    color: '#999999',
  },
  {
    label: '处理中状态',
    value: 'process',
    color: '#4477EE',
  },
  {
    label: '完成状态',
    value: 'finish',
    color: '#4477EE',
  },
  {
    label: '错误状态',
    value: 'error',
    color: '#FF7474',
  },
];

const getDefaultTransferData = () =>
  [...new Array(4).keys()].map((key) => ({
    id: key + 1,
    key: key + 1,
    title: `第${key + 1}项`,
    children: [...new Array(4).keys()].map((childKey) => ({
      id: `${key + 1}-${childKey + 1}`,
      key: `${key + 1}-${childKey + 1}`,
      title: `子 ${key + 1}-${childKey + 1}`,
    })),
  }));

const ganttItemEventParams = [
  { title: '项目对象', name: 'plan', value: '$plan$' },
  { title: '项目计划id', name: 'planId', value: '$planId$' },
  { title: '项目计划名称', name: 'planName', value: '$planName$' },
  { title: '项目计划索引', name: 'index', value: '$index$' },
  { title: '项目计划开始时间', name: 'planStart', value: '$planStart$' },
  {
    title: '项目计划子任务列表',
    name: 'planChildren',
    value: '$planChildren$',
  },
];

const getCompListID2 = () => [
  { label: '文本', compName: 'Text' },
  { label: '按钮', compName: 'Button' },
  { label: '图标', compName: 'Icon' },
  { label: '图片', compName: 'Img' },
  { label: '超链接', compName: 'Link' },
  { label: '分割线', compName: 'Divider' },
  { label: '音频', compName: 'Audio' },
];

const getInputTypes = () => [
  { label: '输入框', compName: 'Input' },
  { label: '下拉单选', compName: 'Select' },
  { label: '下拉复选', compName: 'MultipleSelect' },
  // { label: '高级选择框', compName: 'SuperSelect' },
  { label: '日期选择', compName: 'DatePicker' },
  { label: '时间选择', compName: 'TimePicker' },
  { label: '时间段选择', compName: 'RangePicker' },
  { label: '多行输入', compName: 'TextArea' },
  { label: '数字输入', compName: 'InputNumber' },
  { label: '密码框', compName: 'Password' },
  { label: '开关', compName: 'Switch' },
  { label: '单选组', compName: 'Radio' },
  { label: '复选组', compName: 'CheckboxGroup' },
  { label: '复选框', compName: 'Checkbox' },
  { label: '树选择', compName: 'TreeSelect' },
  { label: '级联选择', compName: 'Cascader' },
  { label: '文件上传', compName: 'StdUpload' },
  { label: '穿梭框', compName: 'Transfer' },
  { label: '富文本', compName: 'RichTextEditor' },
  { label: '评分', compName: 'Rate' },
  { label: '验证码', compName: 'VerificationCode' },
  { label: '滑动输入条', compName: 'Slider' },
];

const TIP_PLACEMENT_DATA = [
  { title: '上', value: 'top' },
  { title: '下', value: 'bottom' },
  { title: '左', value: 'left' },
  { title: '右', value: 'right' },
  { title: '上左', value: 'topLeft' },
  { title: '上右', value: 'topRight' },
  { title: '下左', value: 'bottomLeft' },
  { title: '下右', value: 'bottomRight' },
  { title: '左上', value: 'leftTop' },
  { title: '左下', value: 'leftBottom' },
  { title: '右上', value: 'rightTop' },
  { title: '右下', value: 'rightBottom' },
];

const getDefaultMenuOptions = () => [
  {
    title: '菜单项',
    key: 'sub1',
    selectable: true,
    value: 'sub1',
    label: '菜单项',
    $$isParent: true, // 用来拖拽时判断是否是最外层的父层级
    children: [
      {
        title: '子菜单项一',
        key: 'item1',
        value: 'item1',
        selectable: true,
        label: '子菜单项一',
      },
      {
        title: '子菜单项二',
        key: 'item2',
        value: 'item2',
        selectable: true,
        label: '子菜单项二',
      },
    ],
  },
];

const chartSymbolOptions = [
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

const defaultChartLineXAxisData = [
  { title: 'mon', dataIndex: 'mon' },
  { title: 'tues', dataIndex: 'tues' },
  { title: 'wed', dataIndex: 'wed' },
  { title: 'thur', dataIndex: 'thur' },
];

const defaultChartLineDataField = {
  tuli: '我是图例名称',
  tubiaotype: '图表类型',
  duidietype: '堆叠判断类型',
};

const defaultChartLineData = {
  xAxisData: [
    {
      mon: '68',
      tues: '102',
      wed: '76',
      thur: '88',
      ...defaultChartLineDataField,
    },
    {
      mon: '124',
      tues: '88',
      wed: '53',
      thur: '107',
      ...defaultChartLineDataField,
    },
  ],
};

const lxRadarChartDefaultData = [
  {
    name: '预算费用',
    sales: '4200',
    administration: '3000',
    information_techology: '20000',
    customer_support: '35000',
    development: '50000',
    marketing: '18000',
  },
  {
    name: '实际支出',
    sales: '5000',
    administration: '14000',
    information_techology: '28000',
    customer_support: '26000',
    development: '42000',
    marketing: '21000',
  },
];

const lxRadarChartDefaultIndicator = [
  { name: '销售' },
  { name: '管理' },
  { name: '信息技术' },
  { name: '客服' },
  { name: '研发' },
  { name: '市场' },
];

const FILE_ENCODE_TIP =
  '下载时系统自动对文件名进行编码，编码规则为：大写英文字母+数字随机组合，长度20。';
const IS_WATERMARK_TIP =
  '点击下载时系统将自动为WORD、EXCEL、PPT和PDF等文档添加水印信息（可在应用设置-水印设置页面对水印信息进行配置），其中WORD、EXCEL、PPT等文档将自动转成PDF文档，且PDF文档为锁定不可编辑状态';
const OPTIONAL_FILE_TIP = '点击下载时可选"源文件下载" 或 "加水印下载(PDF)"';

const SERVICE_KEY = {
  QUERY: '11',
  INNER: '12',
  PLATFORM: '14',
  STD: '13',
  RHIN: '10',
  OBJECT: '2',
  SUPER: '7',
};

const LayoutTypes = [
  { label: '自由布局', compName: 'FreeLayout' },
  { label: '布局容器', compName: 'View' },
];

// 常规数据以数组格式展示的加载数据提示，如下拉框/下拉多选/复选组/单选组
const commonArrReloadDataTip = {
  data: '接收数据类型需要为数组类型: 如：[{label: 标题, value: 值 }]',
  labelKey:
    '内容的映射字段名：如内容返回时[{title: "选项1", value: "options1"}], 那么需要输入title',
  valueKey:
    '值的映射字段名：如内容返回时[{title: "选项1", value: "options1"}], 那么需要输入value',
};

// 树/树选择/级联选择加载数据提示
const treeArrReloadDataTip = {
  data: `接收数据类型需要为数组类型: 如：${JSON.stringify(
    getDefaultTreeOptions(),
  )}`,
  labelKey:
    '名称的映射字段名：如内容返回时[{title: "第一列", value: "column1"}], 那么需要输入title',
  nodeValueKey:
    'key的映射字段名：如内容返回时[{title: "第一列", value: "column1"}], 那么需要输入value',
  selectable:
    "适用场景：需要控制当前节点是否能够选择，且需后端服务有字段标识出是否可选；\n    处理逻辑：当节点的字段编码值为布尔类型的false，或者字符串类型为'false'、\n    空字符串时，都认为不可选，否则认为可选。",
  childrenKey:
    '使用场景：一次性查询所有数据时，需要设置下一级列表数据的取值字段；\n    示例说明：如下参数，当查询所有数据，需要标记出从children字段获取下级列表的数据；\n    {\n      "resultObject": [{\n        "children": [{\n          "children": [],\n          "parent_id": "10700",\n          "name": "2-1",\n          "id": "10900",\n        }]，\n        "parent_id": "-1",\n        "name": "第二棵",\n        "id": "10700",\n      }]\n    }\n    ',
};

export {
  COL_SPAN_DATA,
  WRAPPER_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  LABEL_SPAN_DATA,
  getDefaultTableColumns,
  getDefaultDescriptionColumns,
  getDefaultTreeOptions,
  getDefaultStepsOptions,
  getDefaultIconSetting,
  getDefaultTransferData,
  ganttItemEventParams,
  getCompListID2,
  getInputTypes,
  TIP_PLACEMENT_DATA,
  FILE_ENCODE_TIP,
  IS_WATERMARK_TIP,
  OPTIONAL_FILE_TIP,
  getDefaultMenuOptions,
  SERVICE_KEY,
  defaultChartLineXAxisData,
  defaultChartLineData,
  lxRadarChartDefaultData,
  lxRadarChartDefaultIndicator,
  chartSymbolOptions,
  LayoutTypes,
  commonArrReloadDataTip,
  treeArrReloadDataTip,
};
