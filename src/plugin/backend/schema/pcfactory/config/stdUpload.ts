import {
  COL_SPAN_DATA,
  COL_WEAPPER_SPAN_DATA,
  FILE_ENCODE_TIP,
  getInputTypes,
  IS_WATERMARK_TIP,
  LABEL_SPAN_DATA,
  OPTIONAL_FILE_TIP,
  SERVICE_KEY,
  TIP_PLACEMENT_DATA,
} from '../utils/constant';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'StdUpload',
  label: '文件上传',
  type: 'StdUpload',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  compLib: 'antd',
  platform: 'pc',
  props: {
    name: '文件上传',
    fileName: 'file',
    selfSpan: '',
    labelCol: 8,
    wrapperCol: 16,
    listType: 'text',
    // showUploadList: true,
    // downloadable: true,
    // acceptType: [],
    basicStatus: 1,
    // withCredentials: true, // 现在没有这个属性
    numberLimit: 5,
    singleFileMaxSize: 50,
    uploadText: '点击上传',
    uploadTimeout: 30000,
    // 文件超时时间
    deleteIcon: {
      deleteIconTheme: 'outlined',
      deleteIconType: 'delete',
      deleteIconIsIconFont: false,
      showRemoveIcon: true,
    },
    downloadIcon: {
      downloadIconTheme: 'outlined',
      downloadIconType: 'download',
      downloadIconIsIconFont: false,
      showDownloadIcon: true,
    },
    previewIcon: {
      previewIconTheme: 'outlined',
      previewIconType: 'eye',
      previewIconIsIconFont: false,
      showPreviewIcon: true,
    },
    modalWidth: 960,
    modalHeight: 648,
    synchronousDeletion: false,
  },
  engineApi: [
    'BannerModal',
    'service.uploadSingleFile',
    'service.deleteFileInfoById',
    'service.getAppFileUrlById',
    'resolveApiPath',
    'securityWithUrl',
    'security.createHttpSignWithUrl',
  ],
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        // defaultValue: '暂未绑定数据',
        description:
          '内容格式1：[{fileId: 文件唯一标识, fileName: 文件名称}]，内容格式2：[{fileName: 文件名称, fileUrl/url: 文件路径}]',
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
    uploadStyle: {
      label: '上传样式',
      type: 'RadioButton',
      groupsName: '上传详情',
      istodoBind: true,
      props: {
        defaultValue: 'click',
        options: [
          {
            title: '点击',
            value: 'click',
          },
          {
            title: '卡片',
            value: 'picture-card',
          },
          {
            title: '拖拽',
            value: 'draggable',
          },
        ],
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    listType: {
      label: '列表样式',
      type: 'RadioButton',
      groupsName: '上传详情',
      istodoBind: true,
      props: {
        options: [
          {
            title: '文字',
            value: 'text',
          },
          {
            title: '图片',
            value: 'picture',
          },
        ],
        defaultValue: 'text',
        visibleFlag: 'uploadStyle',
        visibleFlagValue: ['click'],
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    uploadText: {
      label: '按钮内容',
      type: 'Input',
      groupsName: '上传详情',
      istodoBind: true,
      props: {},
      enableI18n: true,
    },
    icon: {
      label: '按钮图标',
      type: 'ChooseIcon',
      groupsName: '上传详情',
      props: {},
    },
    synchronousDeletion: {
      label: '同步删除文件',
      type: 'Switch',
      groupsName: '上传详情',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        description: '当上传后点击删除，将同步删除文件服务器中的文件',
      },
    },
    // 并非属性配置，只是分页设置底下的一个二级分组，key可以随便取，并不会真正存储
    iconsSetting: {
      label: '操作设置',
      groupsName: '上传详情',
      props: {
        isShowChildren: true,
        // 作为二级或以上的同级配置项，是否可见（目前作是否打开折叠面板使用）
        children: [
          {
            key: 'deleteIcon',
            label: '删除图标',
            type: 'UploadChooseIcon',
            props: {
              labelCol: {
                span: 0,
              },
              wrapperCol: {
                span: 24,
              },
            },
          },
          {
            key: 'downloadIcon',
            label: '下载图标',
            type: 'UploadChooseIcon',
            props: {
              labelCol: {
                span: 0,
              },
              wrapperCol: {
                span: 24,
              },
            },
          },
          {
            key: 'previewIcon',
            label: '预览图标',
            type: 'UploadChooseIcon',
            props: {
              labelCol: {
                span: 0,
              },
              wrapperCol: {
                span: 24,
              },
            },
          },
        ],
      },
    },
    // 并非属性配置，只是分页设置底下的一个二级分组，key可以随便取，并不会真正存储
    paginationStyle: {
      label: '最大上传个数',
      groupsName: '上传详情',
      props: {
        isShowChildren: true,
        // 作为二级或以上的同级配置项，是否可见（目前作是否打开折叠面板使用）
        isShowPanel: false,
        // 控制折叠面板不能收齐
        children: [
          {
            key: 'numberLimit',
            label: '最大上传个数',
            type: 'InputNumber',
            props: {
              defaultValue: 5,
              min: 1,
              max: 99,
              labelCol: {
                span: 0,
              },
              wrapperCol: {
                span: 24,
              },
            },
          },
        ],
      },
    },
    // 并非属性配置，只是分页设置底下的一个二级分组，key可以随便取，并不会真正存储
    minSize: {
      label: '单文件最小上传大小',
      groupsName: '上传详情',
      props: {
        isShowChildren: true,
        // 作为二级或以上的同级配置项，是否可见（目前作是否打开折叠面板使用）
        isShowPanel: false,
        children: [
          {
            key: 'singleFileMinSize',
            label: '单文件最小上传大小',
            type: 'InputNumber',
            props: {
              min: 0,
              labelCol: {
                span: 0,
              },
              wrapperCol: {
                span: 24,
              },
              unit: 'MB', // 单位
              unitOptions: [
                {
                  title: 'KB',
                  value: 'KB',
                },
                {
                  title: 'MB',
                  value: 'MB',
                },
              ],
            },
          },
        ],
      },
    },
    maxSize: {
      label: '单文件最大上传大小',
      groupsName: '上传详情',
      props: {
        isShowChildren: true,
        // 作为二级或以上的同级配置项，是否可见（目前作是否打开折叠面板使用）
        isShowPanel: false,
        description:
          '单文件上传大小建议不要超过100M，如需要上传超过100M，请通过修改 nginx 配置文件的 client_max_body_size 大小和后端应用的配置项#上传文件大小限制spring.servlet.multipart.max-file-size=300MB spring.servlet.multipart.max-request-size=300MB',
        children: [
          {
            key: 'singleFileMaxSize',
            label: '单文件最大上传大小',
            type: 'InputNumber',
            props: {
              defaultValue: 50,
              min: 1,
              labelCol: {
                span: 0,
              },
              wrapperCol: {
                span: 24,
              },
              unit: 'MB', // 单位
              unitOptions: [
                {
                  title: 'KB',
                  value: 'KB',
                },
                {
                  title: 'MB',
                  value: 'MB',
                },
              ],
            },
          },
        ],
      },
    },

    // 并非属性配置，只是分页设置底下的一个二级分组，key可以随便取，并不会真正存储
    typeSetting: {
      label: '上传文件类型',
      groupsName: '上传详情',
      props: {
        isShowChildren: true,
        // 作为二级或以上的同级配置项，是否可见（目前作是否打开折叠面板使用）
        isShowPanel: false,
        children: [
          {
            key: 'uploadAccepType',
            label: '上传文件类型',
            type: 'UploadAccepType',
            props: {
              labelCol: {
                span: 0,
              },
              wrapperCol: {
                span: 24,
              },
            },
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
    viewMode: {
      label: '预览方式',
      type: 'Select',
      groupsName: '预览',
      istodoBind: true,
      props: {
        defaultValue: 'popUp',
        inhibitBtn: true,
        options: [
          { title: '页面弹窗', value: 'popUp' },
          { title: '标签页', value: 'newTab' },
          { title: '新窗口', value: 'window' },
        ],
      },
    },
    modalWidth: {
      label: '窗口宽度',
      type: 'InputNumber',
      groupsName: '预览',
      istodoBind: true,
      props: {
        visibleFlag: 'viewMode',
        visibleFlagValue: ['window'],
      },
    },
    modalHeight: {
      label: '窗口高度',
      groupsName: '预览',
      type: 'InputNumber',
      istodoBind: true,
      props: {
        visibleFlag: 'viewMode',
        visibleFlagValue: ['window'],
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
    headers: {
      label: '自定义头部',
      type: 'CustomProps',
      groupsName: '其他',
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
    columns: {
      label: '上传服务',
      type: 'SelectService',
      groupsName: '其他',
      istodoBind: true,
      props: {
        serviceTabs: [
          {
            key: SERVICE_KEY.STD,
            description: '此处仅展示勾选‘上传控件中使用’的编排服务',
            fileUpload: true,
          },
          {
            key: SERVICE_KEY.INNER,
            description: '此处仅展示勾选‘上传控件中使用’的高代码服务',
            fileUpload: true,
          },
        ],
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
      label: '文件上传完成回调',
      value: 'onFinishUpload',
      params: [
        {
          title: '文件对象',
          name: 'file',
          value: '$file$',
          attrType: 'object',
        },
        {
          title: '上传信息列表',
          name: 'fileList',
          value: '$fileList$',
        },
        {
          title: '文件列表',
          name: 'fileResponseList',
          value: '$fileResponseList$',
        },
        {
          title: '文件ID',
          name: 'fileId',
          value: '$file?.response?.resultObject?.fileId$',
        },
        {
          title: '文件大小',
          name: 'fileSize',
          value: '$file?.size$',
        },
        {
          title: '文件名称',
          name: 'fileName',
          value: '$file?.name$',
        },
        {
          title: '响应信息',
          name: 'fileResponse',
          value: '$file?.response$',
          attrType: 'object',
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
          attrType: 'object',
        },
      ],
    },
    {
      label: '删除列表文件回调',
      value: 'onFileRemove',
      params: [
        {
          title: '文件对象',
          name: 'file',
          value: '$file$',
          attrType: 'object',
        },
        {
          title: '文件列表',
          name: 'fileList',
          value: '$fileList$',
        },
        {
          title: '文件ID',
          name: 'fileId',
          value: '$file?.response?.resultObject?.fileId$',
        },
        {
          title: '文件大小',
          name: 'fileSize',
          value: '$file?.size$',
        },
        {
          title: '文件名称',
          name: 'fileName',
          value: '$file?.name$',
        },
        {
          title: '响应信息',
          name: 'fileResponse',
          value: '$file?.response$',
          attrType: 'object',
        },
      ],
    },
    {
      label: '文件列表变化时回调',
      value: 'onFileListChange',
      params: [
        {
          title: '上传信息列表',
          name: 'fileList',
          value: '$fileList$',
        },
        {
          title: '文件列表',
          name: 'fileResponseList',
          value: '$fileResponseList$',
        },
      ],
    },
    {
      label: '上传按钮点击校验',
      value: 'onCheckUpload',
      remarks: [
        {
          label: '适用场景',
          content:
            '点击“上传按钮”时，需要增加判断，当满足“业务逻辑”时，才打开“文件管理弹窗”。',
        },
        {
          label: '配置建议',
          content:
            '“当前事件”需要结合“退出事件”使用：<br />（1）需要打开“文件管理弹窗”，则“退出事件”返回类型选择：成功，同时返回内容填入1； <br />（2）不打开“文件管理弹窗”，则“退出事件”返回类型选择：失败，同时返回内容填入0；',
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
          attrType: 'object',
        },
      ],
    },
    {
      label: '监听文件上传',
      value: 'onListenUploading',
      params: [
        {
          title: '文件对象',
          name: 'file',
          value: '$file$',
          attrType: 'object',
        },
        {
          title: '上传信息列表',
          name: 'fileList',
          value: '$fileList$',
        },
        {
          title: '文件列表',
          name: 'fileResponseList',
          value: '$fileResponseList$',
        },
        {
          title: '文件ID',
          name: 'fileId',
          value: '$file?.response?.resultObject?.fileId$',
        },
        {
          title: '文件大小',
          name: 'fileSize',
          value: '$file?.size$',
        },
        {
          title: '文件名称',
          name: 'fileName',
          value: '$file?.name$',
        },
        {
          title: '响应信息',
          name: 'fileResponse',
          value: '$file?.response$',
          attrType: 'object',
        },
      ],
    },
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
};

export default config;
