import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  engineApi: ['historyPush'],
  icon: 'Swiper',
  label: '轮播图',
  type: 'Swiper',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 0,
  compLib: 'comm',
  isContainer: false,
  components: [],
  platform: 'pc',
  props: {
    name: '轮播图',
    autoplay: true,
    dots: true,
    arrows: false,
  },
  todoProps: {
    data: {
      label: '数据源',
      type: 'Input',
      groupsName: '数据源',
      istodoBind: true,
      props: {},
    },
    itemType: {
      label: '类型',
      type: 'Select',
      groupsName: '数据源',
      istodoBind: true,
      props: {
        inhibitBtn: true,
        options: [
          { title: '链接(link)', value: 'link' },
          // { title: '图片(img)', value: 'img' },
          // { title: '视频(video)', value: 'video' },
        ],
      },
    },
    itemValue: {
      label: '内容取值字段',
      type: 'Input',
      groupsName: '数据源',
      istodoBind: true,
    },
    itemLink: {
      label: '跳转取值字段',
      type: 'Input',
      groupsName: '数据源',
      istodoBind: true,
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
      istodoBind: true,
    },
    autoplay: {
      label: '是否自动播放',
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
    },
    arrows: {
      label: '是否展示箭头',
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
    },
    dots: {
      label: '是否显示指示点',
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
    },
    dotPosition: {
      label: '指示点方向',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        defaultValue: 'bottom',
        inhibitBtn: true,
        options: [
          { title: '顶部', value: 'top' },
          { title: '底部', value: 'bottom' },
          { title: '左侧', value: 'left' },
          { title: '右侧', value: 'right' },
        ],
      },
    },
    arrowsDisplay: {
      label: '前进后退',
      type: 'Select',
      groupsName: '基础',
      props: {
        defaultValue: 'always',
        inhibitBtn: true,
        options: [
          { title: '悬浮显示', value: 'notAlways' },
          { title: '一直显示', value: 'always' },
        ],
      },
    },
    effect: {
      label: '动画效果',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        defaultValue: 'scrollx',
        options: [
          { title: '左右滑动', value: 'scrollx' },
          { title: '渐显', value: 'fade' },
        ],
      },
    },
    speed: {
      label: '轮播速度(ms)',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        defaultValue: 3000,
      },
    },
    autoplaySpeed: {
      label: '轮播间隔时间(ms)',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        defaultValue: 1000,
      },
    },
    slidesToShow: {
      label: '每屏显示几项',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        defaultValue: 1,
      },
    },
    slidesToScroll: {
      label: '每次滚动几项',
      type: 'InputNumber',
      groupsName: '基础',
      props: {
        defaultValue: 1,
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
    extendProps: {
      groupsName: '扩展属性',
      label: '扩展属性',
      type: 'ExtendProps',
    },
  },
  style: {
    width: '100%',
    height: '200px',
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'subclassName',
    'width',
    'height',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [
    {
      label: '轮播前',
      value: 'beforeChange',
      params: [
        { title: '轮播前位置', name: 'form', value: '$form$' },
        { title: '轮播后位置', name: 'to', value: '$to$' },
      ],
    },
    {
      label: '轮播后',
      value: 'afterChange',
      params: [{ title: '轮播后位置', name: 'current', value: '$current$' }],
    },
  ],
  todoActionList: getTodoActionListByKey(['goTo', 'prev', 'next']),
};

export default config;
