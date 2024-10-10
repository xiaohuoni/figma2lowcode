import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'FormGroup',
  label: '分组',
  type: 'FormGroup',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 0,
  compLib: 'comm',
  isContainer: true,
  platform: 'pc',
  onlyRoot: ['Form'],
  components: [],
  props: {
    name: '分组',
    title: '标题',
    iconType: 'none',
    extendNum: 3,
    selfSpan: 24,
    fold: true,
    titleStyle: 'none',
  },
  engineApi: [
    'sandBoxSafeRun',
    'service.getAppFileUrlByFileCode',
    'service.getMaterialFile',
    'getVisible',
    'stateListener',
  ],
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
      enableI18n: true,
    },
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      enableI18n: true,
    },
    fold: {
      label: '允许折叠',
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
    },
    titleStyle: {
      label: '分组样式',
      type: 'RadioButton',
      groupsName: '样式和风格',
      props: {
        defaultValue: 'none',
        options: [
          { title: '简洁', value: 'none' },
          { title: '分割线', value: 'divider' },
        ],
      },
    },
    iconType: {
      label: '标题图标',
      type: 'Select',
      groupsName: '样式和风格',
      props: {
        inhibitBtn: true,
        defaultValue: 'none',
        options: [
          { title: '无样式', value: 'none' },
          { title: '样式一', value: 'line' },
          { title: '样式二', value: 'circle' },
          { title: '自定义', value: 'auto' },
        ],
        groupStyle: {
          width: '100%',
          display: 'flex',
        },
        style: {
          fontSize: '12px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    prefixIcon: {
      groupsName: '样式和风格',
      label: '选择图标',
      type: 'SetPrefixIcon',
      props: {
        dependProps: {
          iconType: 'auto',
        },
      },
    },
    extendNum: {
      label: '最大展示数量',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        defaultValue: 3,
        min: 0,
      },
    },
    extend: {
      groupsName: '基础',
      label: '扩展按钮',
      type: 'SettingExtras',
      enableI18n: true,
      props: {
        foldConfig: {
          packable: true,
        },
      },
    },
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  style: {
    padding: '8px 8px 8px 8px',
    margin: '0 0 0 0',
    titleFontSize: 14,
    titleColor: 'rgba(41, 43, 51, 1)',
    titleLineHeight: '24px',
    titleFontWeight: 500,
    borderRadius: '8px 8px 8px 8px',
  },
  todoStyles: {
    backgroundType: {
      groupsName: '内容区域背景',
      label: '填充类型',
      type: 'BackgroundType',
      targetType: 'props',
      props: {
        options: [
          { title: '纯色填充', value: 'cleanColor' },
          { title: '图片填充', value: 'image' },
        ],
        selectType: 'RadioButton',
        compType: 'pc',
      },
      ignoreRule: ['backgroundColor'],
    },
    titleColor: {
      label: '字体颜色',
      type: 'ColorPicker',
      groupsName: '标题文字',
      props: {},
    },
    titleFontSize: {
      label: '字体大小',
      type: 'InputNumber',
      groupsName: '标题文字',
      props: {
        unit: 'px',
        // 单位
        min: 12,
      },
    },
    titleLineHeight: {
      label: '行高',
      type: 'HeightInput',
      groupsName: '标题文字',
      props: {
        unit: 'px',
        // 单位
      },
    },
    titleFontWeight: {
      label: '字重',
      groupsName: '标题文字',
      type: 'FontWeightSelect',
      props: {},
    },
    ...getStyleObjectByKeys([
      'borderRadius',
      'borderSetting',
      'className',
      'padding',
      'customStyle',
      'flex',
    ]),
  },
  todoEvents: [
    {
      label: '折叠事件',
      value: 'onFoldChange',
      params: [
        {
          title: '折叠的状态',
          value: '$value$',
          name: 'value',
        },
      ],
    },
    {
      label: '点击扩展按钮1',
      value: 'onClickBtn1',
      params: [{ title: '按钮1点击回调', value: '$e$', name: 'e' }],
    },
    {
      label: '点击扩展按钮2',
      value: 'onClickBtn2',
      params: [{ title: '按钮2点击回调', value: '$e$', name: 'e' }],
    },
    {
      label: '点击扩展按钮3',
      value: 'onClickBtn3',
      params: [{ title: '按钮3点击回调', value: '$e$', name: 'e' }],
    },
    {
      label: '点击扩展按钮4',
      value: 'onClickBtn4',
      params: [{ title: '按钮4点击回调', value: '$e$', name: 'e' }],
    },
    {
      label: '点击扩展按钮5',
      value: 'onClickBtn5',
      params: [{ title: '按钮5点击回调', value: '$e$', name: 'e' }],
    },
  ],
});

export default config;
