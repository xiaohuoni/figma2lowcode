import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Card',
  label: '卡片',
  type: 'Card',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: '$component',
  isContainer: true,
  platform: 'pc',
  components: [],
  props: {
    name: '卡片',
    title: '标题',
    bordered: true,
    size: 'default',
    hasHeader: true,
    basicStatus: 1,
    hasIcon: true,
    cardIconType: 'left',
    extendNum: 3,
  },
  engineApi: [
    'sandBoxSafeRun',
    'service.getAppFileUrlByFileCode',
    'service.getMaterialFile',
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
    bordered: {
      label: '显示边框',
      type: 'Switch',
      groupsName: '风格和样式',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        visibleFlag: 'collapseType',
        visibleFlagValue: ['', undefined, null],
      },
    },
    size: {
      label: '尺寸',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          { title: '大', value: 'large' },
          { title: '中', value: 'default' },
          { title: '小', value: 'small' },
        ],
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
        defaultValue: 1,
      },
    },
    hasHeader: {
      groupsName: '卡片头部',
      label: '显示头部',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      type: 'Switch',
    },
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '卡片头部',
      istodoBind: true,
      enableI18n: true,
      props: {
        dependProps: {
          hasHeader: true,
        },
      },
    },
    titleColor: {
      groupsName: '卡片头部',
      label: '标题颜色',
      type: 'ColorPicker',
      props: {
        dependProps: {
          hasHeader: true,
        },
        defaultColor: '#1c242e',
      },
    },
    cardIconType: {
      label: '标题样式',
      type: 'Select',
      groupsName: '卡片头部',
      props: {
        inhibitBtn: true,
        defaultValue: 'middle',
        options: [
          { title: '无样式', value: 'none' },
          { title: '简约图标卡片', value: 'middle' },
          { title: '分隔线图标卡片', value: 'left' },
          { title: '自定义', value: 'auto' },
        ],
        groupStyle: {
          width: '100%',
          display: 'flex',
        },
        style: {
          // padding: '0 6px',
          fontSize: '12px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        dependProps: {
          hasHeader: true,
        },
      },
    },
    prefixIcon: {
      groupsName: '卡片头部',
      label: '标题图标',
      type: 'SetPrefixIcon',
      props: {
        dependProps: {
          cardIconType: 'auto',
          hasHeader: true,
        },
      },
    },
    headerColor: {
      groupsName: '卡片头部',
      label: '头部背景',
      type: 'ColorPicker',
      props: {
        dependProps: {
          hasHeader: true,
        },
        defaultColor: '#ffffff',
      },
    },
    extendNum: {
      label: '最大展示数量',
      type: 'InputNumber',
      groupsName: '卡片头部',
      props: {
        dependProps: {
          hasHeader: true,
        },
        defaultValue: 3,
        min: 0,
      },
    },
    extend: {
      groupsName: '卡片头部',
      label: '扩展按钮',
      type: 'SettingExtras',
      enableI18n: true,
      props: {
        foldConfig: {
          packable: true,
        },
        dependProps: {
          hasHeader: true,
        },
        // isLinkField: true,
      },
    },
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  style: {
    padding: '20px 20px 20px 20px',
    overflowY: 'visible',
    margin: '0 0 16px 0',
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
    ...getStyleObjectByKeys([
      'className',
      'padding',
      'margin',
      'width',
      'height',
      'overflowX',
      'overflowY',
      'customStyle',
      'flex',
    ]),
  },
  todoEvents: [
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
  todoActionList: getTodoActionListByKey(['setLoading']),
});

export default config;
