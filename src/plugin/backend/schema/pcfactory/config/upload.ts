import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  FILE_ENCODE_TIP,
  getInputTypes,
  IS_WATERMARK_TIP,
  LABEL_SPAN_DATA,
  OPTIONAL_FILE_TIP,
  SERVICE_KEY,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Upload',
  label: '上传',
  type: 'Upload',
  description: '',
  image: '',
  groupsName: '其他',
  compType: 2,
  isContainer: false,
  deprecated: true,
  compLib: 'antd',
  platform: 'pc',
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  props: {
    name: '上传',
    fileName: 'file',
    selfSpan: '',
    labelCol: 8,
    wrapperCol: 16,
    listType: 'text',
    showUploadList: true,
    downloadable: true,
    acceptType: [],
    basicStatus: 1,
    withCredentials: true,
  },
  engineApi: [
    'BannerModal',
    'previewFile',
    'service.uploadSingleFile',
    'service.qryDownloadFileInfo',
    'service.getAppFileUrlById',
  ],
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
      label: '名称',
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
    listType: {
      label: '列表类型',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '文字式',
            value: 'text',
          },
          {
            title: '图片式',
            value: 'picture',
          },
          {
            title: '图片墙',
            value: 'picture-card',
          },
        ],
      },
    },
    uploadText: {
      label: '上传按钮',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    withCredentials: {
      label: '携带cookie',
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
    precheckService: {
      label: '预校验接口',
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
    singleFileMode: {
      label: '单文件模式',
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
    numberLimit: {
      label: '文件数量',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        allowClear: true,
        disabled: false,
        min: 1,
        max: 99,
      },
    },
    fileName: {
      label: '上传文件名',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    headers: {
      label: '自定义头部',
      type: 'CustomProps',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    showUploadList: {
      label: '展示列表',
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
        defaultValue: true,
      },
    },
    downloadable: {
      label: '文件下载',
      type: 'Switch',
      groupsName: '下载',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        defaultValue: true,
      },
    },
    fileNameEncode: {
      label: '文件名编码',
      type: 'Switch',
      groupsName: '下载',
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
        description: FILE_ENCODE_TIP,
      },
    },
    isWatermark: {
      label: '添加水印',
      type: 'Switch',
      groupsName: '下载',
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
        description: IS_WATERMARK_TIP,
      },
    },
    optionalFile: {
      label: '可选择源文件',
      type: 'Switch',
      groupsName: '下载',
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
          isWatermark: true,
        },
        defaultValue: false,
        description: OPTIONAL_FILE_TIP,
      },
    },
    acceptType: {
      label: '上传类型',
      type: 'MultiSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '图片',
            value: 'image/*',
          },
          {
            title: 'PDF',
            value: '.pdf',
          },
          {
            title: '文档',
            value: '.doc,.docx',
          },
          {
            title: '音频文件',
            value: 'audio/*',
          },
          {
            title: '视频文件',
            value: 'video/*',
          },
        ],
      },
    },
    acceptExtension: {
      label: '指定后缀名',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        allowClear: true,
        placeholder: '逗号分隔,排他',
      },
    },
    draggable: {
      label: '拖拽上传',
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
    columns: {
      label: '上传服务',
      type: 'SelectService',
      groupsName: '其他',
      istodoBind: true,
      props: {
        fileUpload: true,
        serviceTabs: [SERVICE_KEY.STD, SERVICE_KEY.INNER],
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
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '文件对象',
          name: 'file',
          value: '$file$',
        },
      ],
    },
    {
      label: '文件上传完成回调',
      value: 'onFinishUpload',
      params: [
        {
          title: '文件对象',
          name: 'file',
          value: '$file$',
        },
      ],
    },
    {
      label: '下载文件时回调',
      value: 'onListenDownloading',
      params: [
        {
          title: '文件对象',
          name: 'file',
          value: '$file$',
        },
      ],
    },
    {
      label: '文件名点击事件',
      value: 'onFileNameClick',
      params: [
        {
          title: '文件对象',
          name: 'file',
          value: '$file$',
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
    {
      key: 'setUploadProps',
      label: '设置上传参数',
      todoOptions: [
        {
          key: 'url',
          label: '请求地址（URL）',
          type: 'SelectServiceUrl',
          props: {
            isRequired: true,
            valuePropName: 'url',
          },
        },
        {
          key: 'uploadProps',
          label: '上传参数',
          type: 'SelectParams',
        },
      ],
      groupName: 'group3',
      // 需求暂未分组名称
      hidden: true,
    },
    // {
    //   key: 'setUploadChange',
    //   label: '上传值改变',
    //   todoOptions: [
    //     {
    //       key: 'url',
    //       label: '请求地址（URL）',
    //       type: 'SelectServiceUrl',
    //       props: {
    //         isRequired: true,
    //         valuePropName: 'url',
    //       },
    //     },
    //   ],
    //   todoCallbacks: ['callback1', 'callback2'],
    //   groupName: 'group3', // 需求暂未分组名称
    // },
  ],
  // todoActionList: getTodoActionListByKey([
  //   'sysSetDisable',
  //   'sysSetRequired',
  //   'sysSetVisible',
  //   'setValue',
  //   'getValue',
  //   'clearValue',
  //   'setUploadProps',
  //   'setUploadChange',
  // ]),
};

export default config;
