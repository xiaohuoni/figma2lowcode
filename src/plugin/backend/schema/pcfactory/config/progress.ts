import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  fieldProps: {
    trigger: 'onChange',
    valuePropName: 'value',
  },
  icon: 'Progress',
  label: '进度条',
  type: 'Progress',
  description: '',
  image: '',
  groupsName: '反馈',
  compType: 4,
  isContainer: false,
  compLib: 'comm',
  platform: 'pc',
  props: {
    percent: 10,
    type: 'line',
    strokeWidth: 10,
    width: 132,
    basicStatus: 1,
    placement: 'horizontal',
    strokeColor: '#4477ee',
    trailColor: 'rgba(28,36,46,0.04)',
    showTitle: true,
    title: '进度条',
    color: '#1C242E',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: '400',
    showInfo: true,
    valueColor: 'rgba(28,36,46,0.65)',
    valueFontSize: '14px',
    valueLineHeight: '22px',
    valueFontWeight: '400',
  },
  todoProps: {
    name: {
      label: '组件名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {},
    },
    percent: {
      label: '默认值',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        max: 100,
        min: 0,
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
    type: {
      label: '类型',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        defaultValue: 'line',
        options: [
          { title: '线形', value: 'line' },
          { title: '圆形', value: 'circle' },
          { title: '仪表盘', value: 'dashboard' },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    placement: {
      label: '布局',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        options: [
          { title: '水平', value: 'horizontal' },
          { title: '垂直', value: 'vertical' },
        ],
        defaultValue: 'horizontal',
        dependProps: {
          type: 'line',
        },
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    strokeWidth: {
      label: '进度条宽度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        min: 0,
      },
    },
    width: {
      label: '图形宽度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        min: 0,
        defaultValue: 132,
        dependProps: {
          type: ['circle', 'dashboard'],
        },
      },
    },
    strokeColor: {
      label: '进度条颜色',
      type: 'ColorPicker',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    trailColor: {
      label: '进度条背景颜色',
      type: 'ColorPicker',
      groupsName: '基础',
      istodoBind: true,
      props: {},
    },
    showTitle: {
      label: '显示标题',
      type: 'Switch',
      groupsName: '标题样式',
      istodoBind: {
        description: [
          {
            title: '属性值',
            des: ["开 'true'", "关 'false'"],
          },
        ],
      },
      props: {
        dependProps: {
          type: 'line',
        },
      },
    },
    title: {
      label: '标题',
      type: 'Input',
      groupsName: '标题样式',
      istodoBind: true,
      props: {
        dependProps: {
          type: 'line',
          showTitle: true,
        },
      },
      enableI18n: true,
    },
    color: {
      label: '字体颜色',
      type: 'ColorPicker',
      groupsName: '标题样式',
      props: {
        dependProps: {
          type: 'line',
          showTitle: true,
        },
      },
    },
    fontSize: {
      label: '字体大小',
      type: 'HeightInput',
      groupsName: '标题样式',
      props: {
        min: 12,
        max: 100,
        dependProps: {
          type: 'line',
          showTitle: true,
        },
      },
    },
    lineHeight: {
      label: '行高',
      type: 'HeightInput',
      groupsName: '标题样式',
      props: {
        min: 0,
        max: 100,
        dependProps: {
          type: 'line',
          showTitle: true,
        },
      },
    },
    fontWeight: {
      label: '字重',
      groupsName: '标题样式',
      type: 'Select',
      istodoBind: false,
      props: {
        inhibitBtn: true,
        options: [
          { title: '400 标准', value: '400' },
          { title: '500 适中', value: '500' },
          { title: '600 次粗', value: '600' },
          { title: '700 粗体', value: '700' },
        ],
        dependProps: {
          type: 'line',
          showTitle: true,
        },
      } as any,
    },

    showInfo: {
      label: '显示数值',
      type: 'Switch',
      groupsName: '数值样式',
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
    valueColor: {
      label: '字体颜色',
      type: 'ColorPicker',
      groupsName: '数值样式',
      props: {
        dependProps: {
          showInfo: true,
        },
      },
    },
    valueFontSize: {
      label: '字体大小',
      type: 'HeightInput',
      groupsName: '数值样式',
      props: {
        min: 12,
        max: 100,
        dependProps: {
          showInfo: true,
        },
      },
    },
    valueLineHeight: {
      label: '行高',
      type: 'HeightInput',
      groupsName: '数值样式',
      props: {
        min: 0,
        max: 100,
        dependProps: {
          showInfo: true,
        },
      },
    },
    valueFontWeight: {
      label: '字重',
      groupsName: '数值样式',
      type: 'Select',
      istodoBind: false,
      props: {
        inhibitBtn: true,
        options: [
          { title: '400 标准', value: '400' },
          { title: '500 适中', value: '500' },
          { title: '600 次粗', value: '600' },
          { title: '700 粗体', value: '700' },
        ],
        dependProps: {
          showInfo: true,
        },
      },
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
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [],
  todoActionList: getTodoActionListByKey([
    'sysSetVisible',
    'setValue',
    'getValue',
  ]),
};

export default config;
