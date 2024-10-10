import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

/**
 * 创建动画项
 * @returns
 */
const createAnimationItem = () => {
  return {
    style: {
      left: '50vw',
    },
    type: 'to',
    duration: 450,
    delay: 0,
    repeat: 0,
    yoyo: true,
    ease: 'linear',
    appearTo: null,
  };
};
const config = defineConfig({
  label: '动画容器',
  type: 'Animation',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: '@/components',
  isContainer: true,
  components: [],
  platform: 'pc',
  props: {
    autoPlay: true,
    effect: 'move',
    repeat: 0,
    yoyo: true,
    ease: 'linear',
    repeatCustom: 3,
    duration: 500,
    repeatDelay: 0,
    left: '100%',
    top: '100%',
  },
  engineApi: ['service.getAppFileUrlByFileCode'],
  edEngineApi: ['getAppFileUrlByFileCode'],
  // todoProps部分属性切换避免造成不必要的dsl数据，已经在useExportFieldChange处理
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      enableI18n: true,
      props: {},
    },
    basicStatus: {
      label: '状态',
      type: 'SetBasicStatus',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '普通',
            value: 1,
          },
          {
            title: '隐藏',
            value: 2,
          },
        ],
        defaultValue: 1,
      },
    },
    effect: {
      label: '效果',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        options: [
          {
            title: '移动',
            value: 'move',
          },
          {
            title: '淡入淡出',
            value: 'opacity',
          },
          {
            title: '缩放',
            value: 'scale',
          },
          {
            title: '旋转',
            value: 'rotate',
          },
          {
            title: '自定义动画组',
            value: 'custom',
          },
        ],
      },
    },
    left: {
      label: '水平位置',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        dependProps: {
          effect: ['move'],
        },
        options: [
          {
            title: '屏幕左侧',
            value: '0',
          },
          {
            title: '屏幕右侧',
            value: '100%',
          },
          {
            title: '自定义',
            value: 'custom',
          },
        ],
      },
    },
    xCustom: {
      label: '距离左侧位置',
      type: 'HeightInput',
      groupsName: '基础',
      props: {
        dependProps: {
          left: ['custom'],
        },
        option: [
          {
            label: 'px',
            value: 'px',
          },
          {
            label: '%',
            value: '%',
          },
          {
            label: 'vw',
            value: 'vw',
          },
        ],
      },
    },
    top: {
      label: '垂直位置',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        dependProps: {
          effect: ['move'],
        },
        options: [
          {
            title: '屏幕顶端',
            value: '0',
          },
          {
            title: '屏幕底端',
            value: '100%',
          },
          {
            title: '自定义',
            value: 'custom',
          },
        ],
      },
    },
    yCustom: {
      label: '距离顶部位置',
      type: 'HeightInput',
      groupsName: '基础',
      props: {
        dependProps: {
          top: ['custom'],
        },
        option: [
          {
            label: 'px',
            value: 'px',
          },
          {
            label: '%',
            value: '%',
          },
          {
            label: 'vh',
            value: 'vh',
          },
        ],
      },
    },
    opacity: {
      label: '透明度',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        dependProps: {
          effect: ['opacity'],
        },
        max: 1,
        min: 0,
      },
    },
    scale: {
      label: '缩放倍率',
      type: 'Input',
      groupsName: '基础',
      enableI18n: true,
      props: {
        dependProps: {
          effect: ['scale'],
        },
        max: 1,
        min: 0,
      },
    },
    rotate: {
      label: '旋转角度',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        dependProps: {
          effect: ['rotate'],
        },
        max: 360,
        min: 0,
      },
    },
    animation: {
      label: '动画组',
      type: 'CustomDataSource',
      groupsName: '基础',
      props: {
        dependProps: {
          effect: ['custom'],
        },
        rows: [
          {
            key: 'style',
            title: '效果',
            type: 'EditorModal',
            props: {
              helpProps: {
                hidden: false,
                text: '使用帮助',
                link: 'https://docs.iwhalecloud.com/bidjvj1/index#/didq4DTvgD',
              },
              title: '动画效果',
            },
          },
          {
            key: 'type',
            title: '播放类型',
            type: 'select',
            options: [
              {
                value: 'to',
                label: '正常播放',
              },
              {
                value: 'from',
                label: '反向播放',
              },
            ],
            props: {
              size: 'small',
            },
          },
          {
            key: 'duration',
            title: '动画间隔',
            type: 'number',
            props: {
              size: 'small',
            },
          },
          {
            key: 'delay',
            title: '动画延时',
            type: 'number',
            props: {
              size: 'small',
            },
          },
          {
            key: 'repeat',
            title: '循环次数',
            type: 'number',
            props: {
              size: 'small',
            },
          },
          {
            key: 'ease',
            title: '移动方式',
            type: 'select',
            options: [
              {
                value: 'linear',
                label: '匀速',
              },
              {
                value: 'easeOutCubic',
                label: '先快后慢',
              },
              {
                value: 'easeInCubic',
                label: '先慢后快',
              },
              {
                value: 'easeInOutCubic',
                label: '两侧缓动',
              },
              {
                value: 'easeOutBounce',
                label: '弹簧效果',
              },
            ],
            props: {
              size: 'small',
            },
          },
          {
            key: 'appearTo',
            title: '开始时间',
            type: 'number',
            props: {
              size: 'small',
            },
          },
        ],
        addRowDefaultValue: createAnimationItem(),
      },
    },
    repeat: {
      label: '循环',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        dependProps: {
          effect: ['move', 'opacity', 'scale', 'rotate'],
        },
        options: [
          {
            title: '不循环',
            value: 0,
          },
          {
            title: '无限循环',
            value: -1,
          },
          {
            title: '自定义',
            value: 'custom',
          },
        ],
      },
    },
    repeatCustom: {
      label: '播放次数',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        dependProps: {
          repeat: ['custom'],
        },
      },
    },
    repeatDelay: {
      label: '循环间隔',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        dependProps: {
          effect: ['move', 'opacity', 'scale', 'rotate'],
        },
        addonAfter: 'ms',
      },
    },
    duration: {
      label: '动画时长',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        dependProps: {
          effect: ['move', 'opacity', 'scale', 'rotate'],
        },
        addonAfter: 'ms',
      },
    },
    yoyo: {
      label: '倒放动画',
      type: 'Switch',
      groupsName: '基础',
      props: {
        dependProps: {
          effect: ['move', 'opacity', 'scale', 'rotate'],
        },
      },
    },
    ease: {
      label: '移动方式',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        dependProps: {
          effect: ['move', 'opacity', 'scale', 'rotate'],
        },
        options: [
          {
            title: '匀速',
            value: 'linear',
          },
          {
            title: '先快后慢',
            value: 'easeOutCubic',
          },
          {
            title: '先慢后快',
            value: 'easeInCubic',
          },
          {
            title: '两侧缓动',
            value: 'easeInOutCubic',
          },
          {
            title: '弹簧效果',
            value: 'easeOutBounce',
          },
        ],
      },
    },
    autoPlay: {
      label: '自动播放',
      type: 'Switch',
      groupsName: '基础',
    },
  },
  style: {
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: '0px 0px 0px 0px',
    border: '0px',
    left: '0px',
    top: '0px',
    width: '300px',
    height: '300px',
    zIndex: 1,
  },
  todoStyles: {
    backgroundType: {
      groupsName: '背景',
      label: '填充类型',
      type: 'BackgroundType',
      targetType: 'props',
      props: {
        options: [
          {
            title: '纯色填充',
            value: 'cleanColor',
          },
          {
            title: '图片填充',
            value: 'image',
          },
        ],
        selectType: 'RadioButton',
        compType: 'pc',
      },
      ignoreRule: ['backgroundColor'],
    },
    ...getStyleObjectByKeys([
      'position',
      'className',
      'color',
      'fontSize',
      'letterSpacing',
      'lineHeight',
      'fontWeight',
      'textAlign',
      'padding',
      'margin',
      'width',
      'height',
      'overflowX',
      'overflowY',
      'display',
      'borderRadius',
      'borderSetting',
      'customStyle',
      'flexDirection',
      'justifyContent',
      'alignItems',
      'flexWrap',
      'flex',
    ]),
  },
  todoEvents: [
    {
      label: '动画开始时',
      value: 'onStart',
      params: [
        {
          title: '动画对象',
          value: '$animation$',
          name: 'animation',
        },
      ],
    },
    {
      label: '动画结束时',
      value: 'onEnd',
      params: [
        {
          title: '动画对象',
          value: '$animation$',
          name: 'animation',
        },
      ],
    },
    {
      label: '动画更新时',
      value: 'onChange',
      params: [
        {
          title: '动画对象',
          value: '$animation$',
          name: 'animation',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'mediaControl',
      label: '动画控制',
      todoOptions: [
        {
          key: 'updateMediaState',
          label: '状态设置',
          type: 'RadioButton',
          defaultValue: 'play',
          props: {
            options: [
              {
                title: '播放',
                value: 'play',
              },
              {
                title: '暂停',
                value: 'pasue',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
    },
  ],
  icon: 'Animation',
});
export default config;
