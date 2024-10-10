import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'CollapsePanel',
  label: '折叠子面板',
  type: 'CollapsePanel',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  platform: 'pc',
  isContainer: true,
  components: [],
  onlyRoot: ['Collapse'],
  props: {
    name: '折叠子面板',
    header: '标题',
  },
  engineApi: ['service.getAppFileUrlByFileCode', 'service.getMaterialFile'],
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
      istodoBind: true,
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
    header: {
      label: '标题',
      type: 'Input',
      istodoBind: true,
      enableI18n: true,
    },
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  style: {
    minHeight: 40,
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
    },
    ...getStyleObjectByKeys(['className', 'customStyle']),
  },
  todoEvents: [],
  todoActionList: [],
});

export default config;
