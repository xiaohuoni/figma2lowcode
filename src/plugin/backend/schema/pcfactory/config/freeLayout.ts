import { defineConfig } from '@lingxiteam/types';
import { LayoutTypes } from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'FreeLayout',
  label: '自由布局容器',
  type: 'FreeLayout',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'custom',
  isContainer: true,
  components: [],
  platform: 'pc',
  // 暂时允许这几类控件拖入
  onlyChildren: [
    'VirtualGroup',
    'Text',
    'Icon',
    'Img',
    'PictureVerifyCode',
    'Button',
    'Audio',
    'Link',
  ],
  props: {
    name: '自由布局容器',
    basicStatus: 1,
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
    compType: {
      label: '组件类型',
      type: 'RadioButton',
      groupsName: '其他',
      props: {
        options: LayoutTypes.map((k) => ({
          title: k.label,
          value: k.compName,
        })),
        style: {
          padding: '0 20px',
        },
      },
    },
  },
  style: {
    display: 'block',
    flexDirection: 'column',
    padding: '0px 0px 0px 0px',
    width: '100%',
    height: '400px',
    textAlign: 'left',
    position: 'relative',
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
      'padding',
      'margin',
      'width',
      'height',
      'overflowX',
      'overflowY',
      'borderRadius',
      'borderSetting',
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
  todoActionList: getTodoActionListByKey(['setLoading']),
});

export default config;
