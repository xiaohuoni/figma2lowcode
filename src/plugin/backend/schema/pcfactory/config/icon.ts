import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Icon',
  label: '图标',
  type: 'Icon',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  compLib: '@/components',
  isContainer: false,
  isInlineBlock: true,
  platform: 'pc',
  props: {
    name: '图标',
    rotate: 0,
    basicStatus: 1,
    mode: 'normal',
    icon: {
      theme: 'outlined',
      type: 'smile',
      isIconFont: false,
    },
  },
  engineApi: ['service.getAppFileUrlByFileCode', 'service.getMaterialFile'],
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  todoProps: {
    name: {
      label: '组件名称',
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
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
      props: {},
      enableI18n: true,
    },

    mode: {
      label: '图标类型',
      type: 'RadioButton',
      groupsName: '图标设置',
      istodoBind: true,
      props: {
        options: [
          { title: '单个', value: 'normal' },
          { title: '自定义', value: 'custom' },
        ],
        defaultValue: 'normal',
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    icon: {
      label: '选择图标',
      type: 'ChooseIcon',
      groupsName: '图标设置',
      props: {
        dependProps: {
          mode: ['normal', undefined],
        },
      },
      istodoBind: true,
    },
    iconItems: {
      label: '图标项',
      type: 'ChooseIconItems',
      groupsName: '图标设置',
      props: {
        option: [
          {
            type: 'chooseIcon',
            key: 'icon',
            dataIndex: 'icon',
          },
          {
            type: 'chooseColor',
            key: 'color',
            dataIndex: 'color',
            width: '158px',
            isBatch: true,
          },
          {
            type: 'rule',
            key: 'rule',
            width: '200px',
          },
        ],
        dependProps: {
          mode: ['custom'],
        },
      },
      istodoBind: false,
    },
    rotate: {
      label: '旋转角度',
      groupsName: '图标设置',
      type: 'InputNumber',
      props: {
        max: 360,
        min: 0,
        defaultValue: 0,
      },
      istodoBind: true,
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    },
  },
  style: {},
  todoStyles: getStyleObjectByKeys([
    'className',
    'fontSize',
    'color',
    'customStyle',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: [
    {
      key: 'changeContent',
      label: '修改图标',
      todoOptions: [
        {
          key: 'icon',
          label: '修改图标',
          type: 'ChooseIcon',
          props: {
            placeholder: '请选择图标',
          },
        },
      ],
    },
  ],
});

export default config;
