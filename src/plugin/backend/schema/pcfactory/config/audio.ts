// import resolvePath from '../utils/resolvePath';
import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Audio',
  label: '音频',
  type: 'Audio',
  description: '',
  platform: 'pc',
  image: '',
  groupsName: '通用',
  compType: 1,
  compLib: 'comm',
  isContainer: false,
  props: {
    audioTitle: '音频',
    preloadType: 'none',
    autoPlay: false,
    streamType: 'fileCode',
    basicStatus: 1,
    hideType: 'hidden',
  },
  engineApi: ['service.getAppFileUrlByFileCode'],
  edEngineApi: ['getAppFileUrlByFileCode'],
  todoProps: {
    audioTitle: {
      label: '音频标题',
      type: 'Input',
      enableI18n: true,
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    streamType: {
      label: '文件来源',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: false,
      props: {
        options: [
          {
            title: '文件资源',
            value: 'fileCode',
          },
          {
            title: '外部资源',
            value: 'outside',
          },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    fileCode: {
      label: '文件资源',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          streamType: 'fileCode',
        },
        fileType: 'AUDIO',
      },
    },
    streamUrl: {
      label: '链接地址',
      type: 'Input',
      enableI18n: true,
      groupsName: '基础',
      istodoBind: {
        description: [
          {
            title: '配置帮助',
            des: '返回一个url地址，当为应用内文件时，可以使用getAppFileUrlById方法，传入文件id，生成url地址',
          },
        ],
      },
      props: {
        dependProps: {
          streamType: 'outside',
        },
      },
    },
    preloadType: {
      label: '预加载方式',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        options: [
          { title: '自动加载', value: 'auto' },
          // { title: '只加载元数据', value: 'metadata' }, // 和自动加载的展示相同
          { title: '不自动加载', value: 'none' },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    autoPlay: {
      label: '自动播放',
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
        options: [
          { title: '普通', value: 1 },
          { title: '隐藏', value: 2 },
        ],
        defaultValue: 1,
      },
    },
    hideType: {
      label: '隐藏方式',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '隐藏', value: 'hidden' },
          { title: '移除', value: 'remove' },
        ],
        defaultValue: 'hidden',
        dependProps: {
          basicStatus: 2,
        },
      },
    },
  },
  style: {
    padding: '12px 16px 12px 16px',
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
    },
    ...getStyleObjectByKeys([
      'className',
      'padding',
      'margin',
      'width',
      'height',
      'borderRadius',
      'borderSetting',
      'customStyle',
    ]),
  },
  todoEvents: [],
  todoActionList: getTodoActionListByKey(['mediaControl']),
});

export default config;
