import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Row',
  label: '行容器',
  type: 'Row',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  isContainer: true,
  compLib: 'comm',
  platform: 'pc',
  deprecated: true,
  props: {
    name: '行容器',
    colSpan: 24, // 默认占满一行
    gutterHorizontal: 0,
    gutterVertical: 0,
  },
  engineApi: ['service.getAppFileUrlByFileCode'],
  edEngineApi: ['getAppFileUrlByFileCode'],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    gutterHorizontal: {
      label: '水平间距',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        min: 0,
      },
    },
    gutterVertical: {
      label: '垂直间距',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        min: 0,
      },
    },
    colSpan: {
      label: '每行列数',
      type: 'Select',
      istodoBind: true,
      groupsName: '基础',
      props: {
        typeFlag: 'compName',
        required: true,
        isProps: false,
        inhibitBtn: true,
        options: [
          {
            title: '一行一列',
            value: 24,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行两列',
            value: 12,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行三列',
            value: 8,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          {
            title: '一行四列',
            value: 6,
            type: [
              'Form',
              'SuperTableForm',
              'TripleForm',
              'Row',
              'Description',
            ],
          },
          { title: '一行六列', value: 4, type: ['Form', 'Row'] },
          { title: '一行八列', value: 3, type: ['Row'] },
          { title: '一行十二列', value: 2, type: ['Row'] },
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
    extendProps: {
      label: '扩展属性',
      groupsName: '扩展属性',
      type: 'ExtendProps',
      istodoBind: false,
    },
  },
  style: {
    backgroundColor: '#fff',
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
    ...getStyleObjectByKeys(['className', 'margin', 'customStyle', 'flex']),
  },
  todoEvents: [],
  todoActionList: [],
});

export default config;
