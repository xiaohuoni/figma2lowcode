import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'content',
  },
  icon: 'QRCode',
  label: '二维码',
  type: 'QRCode',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 0,
  compLib: 'comm',
  isContainer: false,
  components: [],
  platform: 'pc',
  props: {
    name: '二维码',
    content: 'Hello lingxi',
    color: '#000000',
    isLogo: false,
    srcType: 'fileCode',
  },
  engineApi: ['service.getAppFileUrlByFileCode'],
  edEngineApi: ['getAppFileUrlByFileCode'],
  todoActionList: getTodoActionListByKey(['sysSetValue', 'getValue']),
  todoProps: {
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
    content: {
      label: '二维码信息',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        description:
          '设置文本或网址，即可动态生成二维码，扫描二维码时，将读取此信息',
      },
    },
    color: {
      label: '二维码颜色',
      type: 'ColorPicker',
      groupsName: '基础',
      props: {
        defaultValue: '#000000',
      },
    },
    isLogo: {
      label: '设置logo',
      type: 'Switch',
      groupsName: '基础',
      props: {},
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
        defaultValue: 'fileCode',
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
        dependProps: {
          isLogo: true,
        },
      },
    },
    src: {
      label: '资源地址',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          isLogo: true,
          srcType: 'src',
        },
        // required: true,
      },
    },
    fileCode: {
      label: '文件资源',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          isLogo: true,
          srcType: 'fileCode',
        },
        // required: true,
      },
    },
    logoSize: {
      label: 'Logo尺寸',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: false,
      props: {
        options: [
          {
            title: '大',
            value: 'large',
          },
          {
            title: '中',
            value: 'default',
          },
          {
            title: '小',
            value: 'small',
          },
        ],
        defaultValue: 'default',
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
        dependProps: {
          isLogo: true,
        },
      },
    },
  },
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [
        {
          title: '二维码图片信息',
          value: '$value$',
          name: 'value',
        },
        {
          title: '二维码内容',
          value: '$content$',
          name: 'content',
        },
      ],
    },
  ],
  todoStyles: {
    ...getStyleObjectByKeys(
      [
        'position',
        'padding',
        'margin',
        'width',
        'height',
        'borderRadius',
        'customStyle',
      ],
      false,
    ),
  },
  style: {
    width: '160px',
    height: '160px',
  },
});

export default config;
