import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Img',
  label: '图片',
  type: 'Img',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  isInlineBlock: true,
  props: {
    name: '图片',
    srcType: 'fileCode',
    // src: resolvePath('assets/images/default-img.png'),
    alt: '图片',
  },
  engineApi: [
    'service.getAppFileUrlByFileCode',
    'service.getAppFileUrlById',
    'securityWithUrl',
  ],
  edEngineApi: [
    'getAppFileUrlByFileCode',
    'getAppFileUrlById',
    'securityWithUrl',
  ],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
      },
    },
    srcType: {
      label: '文件类型',
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
            title: '自定义',
            value: 'src',
          },
        ],
        defaultValue: 'src',
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    src: {
      label: '资源地址',
      type: 'Input',
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
          srcType: 'src',
        },
        required: true,
      },
    },
    fileCode: {
      label: '文件资源',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          srcType: 'fileCode',
        },
        required: true,
      },
    },
    errorSrc: {
      label: '加载失败图',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    alt: {
      label: '替代文本',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        required: true,
      },
      enableI18n: true,
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
  },
  style: {
    width: '200px',
    height: '200px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'width',
    'height',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: getTodoActionListByKey([
    'sysSetVisible',
    'setCompFileId',
    'setSrc',
  ]),
});

export default config;
