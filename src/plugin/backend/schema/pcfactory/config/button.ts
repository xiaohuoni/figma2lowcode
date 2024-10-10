import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Button',
  label: '按钮',
  type: 'Button',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  isContainer: false,
  isInlineBlock: true,
  platform: 'pc',
  compLib: 'comm',
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  props: {
    name: '按钮',
    iconPosition: 'left',
    ghost: false,
    block: false,
    size: 'default',
    classification: 'default',
    type: 'default',
    // autoProcessFlow: false, // 自动推动流程流转
    // flowProcessResult: 'common', // 流程审批结果 下拉单选配置，可选项为：通过(pass) 拒绝(refuse) 转派(transfer) 通用(common)，默认为通用
    // btnIcon: 'none', // TODO: 此字段是否无用？？？？
    basicStatus: 1,
    hasIcon: false,
    shape: 'default',
    loading: false,
    btnText: '按钮',
  },
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
      enableI18n: true,
    },
    btnText: {
      label: '按钮内容',
      type: 'Input',
      props: {},
      istodoBind: true,
      groupsName: '基础',
      enableI18n: true,
    },
    basicStatus: {
      label: '状态',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
        description: '控件显隐、禁用优先级为：动作配置> 对象显示规则> 状态',
        options: [
          { title: '普通', value: 1 },
          { title: '隐藏', value: 2 },
          { title: '禁用', value: 3 },
        ],
        defaultValue: 1,
      },
    },
    type: {
      label: '按钮类型',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          { title: '主要按钮', value: 'primary' },
          { title: '次要按钮', value: 'default' },
          { title: '虚线按钮', value: 'dashed' },
          { title: '文字按钮', value: 'text' },
          // { title: 'danger', value: 'danger' },
          { title: '链接按钮', value: 'link' },
        ],
      },
    },
    shape: {
      label: '按钮形状',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '默认', value: 'default' },
          { title: '圆形', value: 'circle' },
          { title: '圆角', value: 'round' },
        ],
        style: {
          padding: '0 12px',
          fontSize: '12px',
        },
      },
    },
    size: {
      label: '按钮尺寸',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '大', value: 'large' },
          { title: '中', value: 'default' },
          { title: '小', value: 'small' },
          { title: '迷你', value: 'mini' },
        ],
        style: {
          padding: '0 10px',
          fontSize: '12px',
        },
      },
    },
    hasIcon: {
      label: '按钮图标',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        options: [
          {
            title: '无',
            value: false,
          },
          {
            title: '图标库',
            value: true,
          },
        ],
      },
    },
    icon: {
      // 字段名为icon,选择图标的面版值不会回填，一直显示default
      label: '选择图标',
      type: 'ChooseIcon',
      groupsName: '基础',
      props: {
        dependProps: {
          hasIcon: true,
        },
      },
    },
    iconPosition: {
      label: '图标位置',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '左', value: 'left' },
          { title: '右', value: 'right' },
        ],
        dependProps: {
          hasIcon: true,
        },
      },
    },
    block: {
      label: '撑满父宽度',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    danger: {
      label: '危险按钮',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    ghost: {
      label: '幽灵按钮',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    loading: {
      label: '加载状态',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
    },
    loadingText: {
      label: '加载文字',
      type: 'Input',
      groupsName: '基础',
      props: {
        dependProps: {
          loading: true,
        },
      },
      enableI18n: true,
      istodoBind: true,
    },
    popoverSetting: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
      props: {},
      enableI18n: true,
      ignoreRule: ['popoverSetting'],
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    },
  },
  style: {
    // width: 'fit-content', // 这样会影响按钮设置为撑满父宽度的情况下，样式没有生效，所以改成在代码当中设置默认值
    textAlign: 'center',
    // fontSize: 14,
    // fontWeight: 400,
    // height: '32px',
    // borderSetting: 'border 1px solid #E5E5E5',
    // border: '1px solid #E5E5E5',
    // color: '#1C242E',
    // backgroundColor: '#FFFFFF',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'backgroundColor',
    'color',
    'fontSize',
    'fontWeight',
    'textAlign',
    'margin',
    'width',
    'height',
    'borderRadius',
    'borderSetting',
    'customStyle',
  ]),
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
    {
      label: '双击',
      value: 'onDoubleClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
    {
      label: '鼠标移入',
      value: 'onMouseEnter',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: getTodoActionListByKey([
    'sysSetDisable',
    'sysSetVisible',
    'setLoading',
    'changeContent',
  ]),
});

export default config;
