import { defineConfig } from '@lingxiteam/types';
import { getInputTypes } from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export default defineConfig({
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'VerificationCode',
  label: '验证码',
  type: 'VerificationCode',
  description: '',
  image: '',
  groupsName: '数据录入',
  compType: 2,
  isContainer: false,
  compLib: 'comm',
  platform: 'pc',
  props: {
    name: '验证码',
    // titleShow: true,
    // title: '验证码',
    placeholderText: '请输入验证码',
    // titlePosition: 'top',
    displayStyle: 'countdownStyle',
    countdownTime: 60,
    random: false,
    digit: 4,
  },
  engineApi: ['getValidateCodePicture'],
  edEngineApi: ['verifyValidateCode'],
  style: {
    borderSetting: 'border 1px solid #E5E5E5',
    border: '1px solid #E5E5E5',
    borderRadius: '4px 4px 4px 4px',
    fontSize: '14',
    color: '#4477EE',
    backgroundColor: '#ffffff',
  },
  setEvents: [
    {
      dataName: 'event',
      value: 'onChange',
      params: [
        {
          title: '事件对象',
          name: 'e',
          value: '$e$',
        },
      ],
    },
  ],

  todoActionList: getTodoActionListByKey([
    'getValue',
    'startVerificationCodeCountdown',
    'resetVerificationCodeCountdown',
    'setVerificationCodeImageUrl',
    'refreshPictureVerifyCode',
  ]),
  todoEvents: [
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [{ title: '输入框控件的值', value: '$value$', name: 'value' }],
    },
    {
      label: '点击事件',
      value: 'onClick',
      params: [],
    },
  ],
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
      props: {
        required: false,
      },
    },
    name: {
      label: '标题',
      type: 'Input',
      groupsName: '基础',
      props: {
        required: false,
      },
      enableI18n: true,
    },
    fieldName: {
      label: '字段编码',
      type: 'SearchFieldName',
      groupsName: '基础',
      props: {
        required: true,
      },
    },
    defaultValue: {
      label: '默认值',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {},
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
          '表单外不生效: 默认false，表示隐藏的时候不占位，为true时，隐藏的时候将占位（注意：优先级最高, 开启后控制显隐动作将也会判断是否隐藏占位）',
      },
    },
    placeholderText: {
      label: '占位提示',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
      },
      enableI18n: true,
    },
    required: {
      label: '必填',
      type: 'Switch',
      groupsName: '校验',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        defaultValue: false,
      },
    },
    regexp: {
      label: '校验规则',
      type: 'SetRegexp',
      groupsName: '校验',
      istodoBind: false,
      props: {},
      enableI18n: true,
    },
    displayStyle: {
      label: '展示方式',
      type: 'Select',
      groupsName: '样式类型',
      istodoBind: false,
      props: {
        required: false,
        inhibitBtn: true,
        description:
          '图片：请输入外部的图片地址 倒计时：倒计时时间 随机数：平台内置的图形验证码',
        options: [
          {
            title: '图片',
            value: 'imageStyle',
          },
          {
            title: '倒计时',
            value: 'countdownStyle',
          },
          {
            title: '随机数',
            value: 'random',
          },
        ],
      },
    },
    countdownTime: {
      label: '倒计时长',
      type: 'InputNumber',
      groupsName: '样式类型',
      istodoBind: true,
      props: {
        required: true,
        // dependProps: {
        //   displayStyle: 'countdownStyle',
        // },
        visibleFlag: 'displayStyle',
        visibleFlagValue: ['countdownStyle'],
      },
    },
    imageURL: {
      label: '图片请求地址',
      type: 'Input',
      groupsName: '样式类型',
      istodoBind: true,
      props: {
        required: false,
        // dependProps: {
        //   displayStyle: 'imageStyle',
        // },
        visibleFlag: 'displayStyle',
        visibleFlagValue: ['imageStyle'],
      },
    },
    digit: {
      label: '验证码位数',
      type: 'InputNumber',
      groupsName: '样式类型',
      istodoBind: false,
      props: {
        min: 1,
        dependProps: {
          displayStyle: 'random',
        },
      },
    },
    compType: {
      label: '组件类型',
      type: 'Select',
      groupsName: '其他',
      props: {
        // 录入型组件切换组件类型
        options: getInputTypes().map((k) => ({
          title: k.label,
          value: k.compName,
        })),
      },
    },
  },
  todoStyles: getStyleObjectByKeys([
    'width',
    'fontSize',
    'fontWeight',
    'color',
    'backgroundColor',
    'borderSetting',
    'borderRadius',
  ]),
});
