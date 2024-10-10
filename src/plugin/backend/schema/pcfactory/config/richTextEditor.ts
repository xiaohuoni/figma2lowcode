import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  getInputTypes,
  LABEL_SPAN_DATA,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'QuillEditor',
  label: '富文本',
  type: 'RichTextEditor',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  compLib: 'comm',
  platform: 'pc',
  props: {
    name: '富文本编辑框',
    selfSpan: '',
    labelCol: 8,
    wrapperCol: 16,
    heightType: 'fixed',
    maximumWords: 10000,
    height: 300,
    basicStatus: 1,
    imageType: 'file',
    funcTypes: {
      accept:
        'fullscreen,undo,redo,bold,italic,underline,strikethrough,removeformat,formatmatch,forecolor,backcolor,rowspacingtop,rowspacingbottom,lineheight,paragraph,fontfamily,fontsize,link,simpleupload,insertcode,horizontal,inserttable',
      acceptExtension: '',
    },
  },
  engineApi: ['service.uploadFileByFetch', 'getAppFileUrlById'],
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        // defaultValue: '暂未绑定数据',
      },
    },
    name: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {},
      enableI18n: true,
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
    heightType: {
      label: '内容高度',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        options: [
          {
            title: '固定',
            value: 'fixed',
          },
          {
            title: '自适应',
            value: 'auto',
          },
        ],
        defaultValue: 'fixed',
      },
    },
    height: {
      label: '高度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        min: 100,
        max: 600,
        visibleFlag: 'heightType',
        visibleFlagValue: ['fixed', undefined],
      },
    },
    minHeight: {
      label: '最小高度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        visibleFlag: 'heightType',
        visibleFlagValue: ['auto'],
      },
    },
    maxHeight: {
      label: '最大高度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        visibleFlag: 'heightType',
        visibleFlagValue: ['auto'],
      },
    },
    maximumWords: {
      label: '最大字符数',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {},
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
          {
            title: '只读',
            value: 4,
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
    imageType: {
      label: '图片类型',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '文件上传',
            value: 'file',
          },
          {
            title: 'Base64',
            value: 'base64',
          },
        ],
      },
    },
    funcTypes: {
      label: '功能类型',
      groupsName: '基础',
      type: 'UploadAccepType',
      props: {
        title: '功能类型',
        placeholder: '请选择功能类型',
        hiddenCustom: true,
        width: 690,
        isShowTip: false,
        options: [
          {
            key: 'view',
            label: '视图设置',
            sameValue: 0,
            children: [
              {
                label: '全选',
                value: 'all',
                indeterminate: false,
                checked: false,
              },
              { label: '全屏', value: 'fullscreen' },
              { label: '源代码', value: 'source' },
            ],
          },
          {
            key: 'edit',
            label: '编辑操作',
            sameValue: 0,
            children: [
              {
                label: '全选',
                value: 'all',
                indeterminate: false,
                checked: false,
              },
              { label: '撤销', value: 'undo' },
              { label: '重做', value: 'redo' },
              { label: '清除格式', value: 'removeformat' },
              { label: '格式刷', value: 'formatmatch' },
              { label: '自动排版', value: 'autotypeset' },
              { label: '文档全选', value: 'selectall' },
              { label: '清空文档', value: 'cleardoc' },
            ],
          },
          {
            key: 'format',
            label: '格式设置',
            sameValue: 0,
            children: [
              {
                label: '全选',
                value: 'all',
                indeterminate: false,
                checked: false,
              },
              { label: '加粗', value: 'bold' },
              { label: '斜体', value: 'italic' },
              { label: '下划线', value: 'underline' },
              { label: '字符边框', value: 'fontborder' },
              { label: '删除线', value: 'strikethrough' },
              { label: '上标', value: 'superscript' },
              { label: '下标', value: 'subscript' },
              { label: '引用', value: 'blockquote' },
              { label: '纯文本粘贴模式', value: 'pasteplain' },
              { label: '字体颜色', value: 'forecolor' },
              { label: '背景色', value: 'backcolor' },
              { label: '段前距', value: 'rowspacingtop' },
              { label: '段后距', value: 'rowspacingbottom' },
              { label: '行间距', value: 'lineheight' },
              { label: '自定义标题', value: 'customstyle' },
              { label: '段落格式', value: 'paragraph' },
              { label: '字体', value: 'fontfamily' },
              { label: '字号', value: 'fontsize' },
              { label: '字母大写', value: 'touppercase' },
              { label: '字母小写', value: 'tolowercase' },
            ],
          },
          {
            key: 'insert',
            label: '插入元素',
            sameValue: 0,
            children: [
              {
                label: '全选',
                value: 'all',
                indeterminate: false,
                checked: false,
              },
              { label: '超链接', value: 'link' },
              { label: '取消链接', value: 'unlink' },
              { label: '锚点', value: 'anchor' },
              { label: '图片默认位置', value: 'imagenone' },
              { label: '图片左浮动', value: 'imageleft' },
              { label: '图片右浮动', value: 'imageright' },
              { label: '图片居中', value: 'imagecenter' },
              { label: '单图上传', value: 'simpleupload' },
              { label: '多图上传', value: 'insertimage' },
              { label: '视频', value: 'insertvideo' },
              { label: '音频', value: 'insertaudio' },
              { label: '附件', value: 'attachment' },
              { label: '插入Iframe', value: 'insertframe' },
              { label: '代码语言', value: 'insertcode' },
              { label: '分页', value: 'pagebreak' },
              { label: '背景', value: 'background' },
              { label: '分隔线', value: 'horizontal' },
              { label: '日期', value: 'date' },
              { label: '时间', value: 'time' },
              { label: '特殊字符', value: 'spechars' },
              { label: '插入表格', value: 'inserttable' },
              { label: '删除表格', value: 'deletetable' },
              { label: '表格前插入行', value: 'insertparagraphbeforetable' },
              { label: '前插入行', value: 'insertrow' },
              { label: '删除行', value: 'deleterow' },
              { label: '前插入列', value: 'insertcol' },
              { label: '删除列', value: 'deletecol' },
              { label: '合并多个单元格', value: 'mergecells' },
              { label: '右合并单元格', value: 'mergeright' },
              { label: '下合并单元格', value: 'mergedown' },
              { label: '完全拆分单元格', value: 'splittocells' },
              { label: '拆分成行', value: 'splittorows' },
              { label: '拆分成列', value: 'splittocols' },
            ],
          },
          {
            key: 'other',
            label: '其他功能',
            sameValue: 0,
            children: [
              {
                label: '全选',
                value: 'all',
                indeterminate: false,
                checked: false,
              },
              { label: '打印', value: 'print' },
            ],
          },
        ],
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
          titleTip: 'text',
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
          titleTip: 'text',
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
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
        inhibitBtn: true,
        options: getInputTypes().map((k) => ({
          title: k.label,
          value: k.compName,
        })),
      },
    },
  },
  style: {},
  setEvents: [],
  todoStyles: {
    ...getStyleObjectByKeys([
      'className',
      'backgroundColor',
      'margin',
      'customStyle',
      'flex',
    ]),
    toolbarColor: {
      label: '工具栏颜色',
      groupsName: '背景颜色',
      type: 'ColorPicker',
      props: {
        defaultColor: '#ffffff',
      },
    },
  },
  todoEvents: [
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '富文本框取值',
          name: 'value',
          value: '$value$',
        },
      ],
    },
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
      key: 'sysSetValue',
      label: '控件赋值',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
        },
        {
          key: 'valueList',
          label: '组件赋值',
          type: 'SetSysExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      initClose: true,
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'getValue',
      label: '获取当前值',
      todoCallbacks: ['callback1'],
      groupName: 'group2', // 需求暂未分组名称
    },
    {
      key: 'clearValue',
      label: '清空值',
      todoOptions: [],
      groupName: 'group2', // 需求暂未分组名称
    },
  ],
};

export default config;
