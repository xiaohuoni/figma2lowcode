import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'VerificationCode',
  label: '图形验证码',
  type: 'PictureVerifyCode',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  isInlineBlock: true,
  props: {
    name: '图形验证码',
    digit: 4, // 默认四位验证码
    basicStatus: 1,
  },
  engineApi: ['getValidateCodePicture'],
  edEngineApi: ['verifyValidateCode'],
  todoProps: {
    name: {
      label: '组件名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
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
    digit: {
      label: '验证码位数',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: false,
      props: {
        min: 1,
      },
    },
  },
  style: {
    width: '94px',
    height: '44px',
    borderRadius: '8px 8px 8px 8px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'width',
    'borderRadius',
    'height',
    'customStyle',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: getTodoActionListByKey(['refreshPictureVerifyCode']),
});

export default config;
