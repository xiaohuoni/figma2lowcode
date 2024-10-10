import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'Divider',
  label: '分割线',
  type: 'Divider',
  description: '',
  image: '',
  groupsName: '通用',
  compType: 1,
  isContainer: false,
  platform: 'pc',
  compLib: '@/component',
  props: {
    name: '分割线',
    orientation: 'center',
    dashed: false,
    type: 'horizontal',
    showTitle: false,
  },
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
    type: {
      label: '分割线方向',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '水平', value: 'horizontal' },
          { title: '垂直', value: 'vertical' },
        ],
        defaultValue: 'horizontal',
        dependProps: {
          // 除了实线、虚线其他样式只有横向样式
          dashed: (item: boolean) => [false, true].includes(item),
        },
      },
    },
    dashed: {
      label: '分割线样式',
      type: 'DividerTypeSelect',
      groupsName: '基础',
      // istodoBind: true,
      props: {
        // options: [
        //   { title: '实线', value: false },
        //   { title: '虚线', value: true },
        // ],
        defaultValue: false,
        dependProps: {
          type: 'horizontal',
        },
      },
    },
    dividerColor: {
      label: '分割线颜色',
      type: 'ColorPicker',
      groupsName: '基础',
      // props: {
      //   defaultValue: 'rgba(0,0,0,0.15)',
      // },
    },
    dashedWidth: {
      label: '虚线宽度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          dashed: true,
          type: 'horizontal',
        },
        min: 1,
        defaultValue: 4,
      },
    },
    dashedMargin: {
      label: '虚线间隔',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          dashed: true,
          type: 'horizontal',
        },
        min: 1,
        defaultValue: 4,
      },
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
        defaultValue: false,
        dependProps: {
          type: 'horizontal',
          // 除了实线、虚线其他样式都必须展示标题
          dashed: (item: boolean) => [false, true].includes(item),
        },
      },
    },

    dividerText: {
      label: '标题',
      type: 'Input',
      groupsName: '标题样式',
      props: {
        dependProps: {
          showTitle: true,
          type: 'horizontal',
        },
        placeholder: '请输入标题标题',
        defaultValue: '标题',
      },
      enableI18n: true,
    },
    orientation: {
      label: '标题位置',
      type: 'RadioButton',
      groupsName: '标题样式',
      istodoBind: true,
      props: {
        options: [
          { title: '左', value: 'left' },
          { title: '中', value: 'center' },
          { title: '右', value: 'right' },
        ],
        defaultValue: 'center',
        dependProps: {
          showTitle: true,
          type: 'horizontal',
          // 除了实线、虚线其他样式则不展示该属性,兼容旧数据
          dashed: (item: boolean) => [false, true].includes(item),
        },
        style: {
          padding: '0 16px',
          fontSize: '12px',
        },
      },
    },
    titleColor: {
      label: '字体颜色',
      type: 'ColorPicker',
      groupsName: '标题样式',
      props: {
        // defaultValue: 'rgba(28,36,46,0.75)',
        dependProps: {
          showTitle: true,
          type: 'horizontal',
        },
      },
    },
    titleFontSize: {
      label: '字体大小',
      type: 'InputNumber',
      groupsName: '标题样式',
      props: {
        unit: 'px', // 单位
        min: 12,
        max: 100,
        defaultValue: 14,
        dependProps: {
          showTitle: true,
          type: 'horizontal',
        },
      },
    },
    // 防止和分割线样式中的高度引起歧义
    // titleLineHeight: {
    //   label: '行高',
    //   type: 'HeightInput',
    //   groupsName: '标题样式',
    //   props: {
    //     defaultValue: '22px',
    //     min: 12,
    //     max: 100,
    //     dependProps: {
    //       showTitle: true,
    //       type: 'horizontal',
    //     },
    //   },
    // },
    titleFontWeight: {
      label: '字重',
      groupsName: '标题样式',
      type: 'FontWeightSelect',
      props: {
        defaultValue: 400,
        dependProps: {
          showTitle: true,
          type: 'horizontal',
        },
      },
    },
  },
  style: {
    margin: '12px 0 12px 0',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'width',
    'height',
    'customStyle',
    'flex',
  ]),
  todoEvents: [],
  todoActionList: [],
};

export default config;
