import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'View',
  label: '普通容器',
  type: 'View',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'custom',
  isContainer: true,
  components: [],
  platform: 'pc',
  props: {
    name: '普通容器',
    basicStatus: 1,
    backgroundType: {
      type: 'cleanColor',
      color: 'rgba(255, 255, 255, 1)',
    },
  },
  engineApi: ['service.getAppFileUrlByFileCode', 'dataState'],
  edEngineApi: ['getAppFileUrlByFileCode'],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
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
          '默认false，表示隐藏的时候不占位，为true时，隐藏的时候将占位，开启后，能够获取的到子控件的值（注意：优先级最高，开启后控制显隐动作将也会判断是否隐藏占位，容器类如果内部没有子组件时候，启用该功能，请先设置容器高度,建议不要控制子控件的显隐，将会影响效果。',
      },
    },
  },
  style: {
    display: 'block',
    flexDirection: 'column',
    padding: '0px 0px 0px 0px',
    width: '100%',
    // textAlign: 'left',
  },
  todoStyles: {
    backgroundType: {
      groupsName: '背景',
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
      // 'backgroundColor',
      // 'color',
      // 'fontSize',
      // 'letterSpacing',
      // 'lineHeight',
      // 'fontWeight',
      // 'textAlign',
      'padding',
      'margin',
      'width',
      'height',
      'overflowX',
      'overflowY',
      'display',
      'borderRadius',
      'borderSetting',
      'customStyle',
      'flexDirection',
      'justifyContent',
      'alignItems',
      'flexWrap',
      'flex',
    ]),
  },
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: [
    {
      key: 'setLoading',
      label: '控制加载中',
      todoOptions: [
        {
          key: 'loading',
          label: '是否加载中',
          type: 'Select',
          props: {
            options: [
              {
                title: '是',
                value: true,
              },
              {
                title: '否',
                value: false,
              },
            ],
          },
        },
        {
          key: 'loadingText',
          label: '描述文案',
          type: 'SetExpression',
          labelTip: '部分控件加载中状态显示为骨架屏的，文案不生效',
          visibleFlag: 'loading',
          visibleFlagValue: [true],
        },
      ],
    },
  ],
});

export default config;
