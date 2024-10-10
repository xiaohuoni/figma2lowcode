import { defineConfig } from '@lingxiteam/types';
import {} from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Dropdown',
  label: '下拉菜单',
  type: 'Dropdown',
  description: '',
  image: '',
  groupsName: '导航',
  compType: 5,
  isContainer: false,
  // isContainer: true,
  platform: 'pc',
  compLib: 'comm',
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  props: {
    treeData: [],
    basicStatus: 1,
    menuType: 'normal',
    clickClose: true,
    buttonType: 'default',
    placement: 'bottomLeft',
    size: 'default',
    buttonIcon: {
      isIconFont: false,
      theme: 'outlined',
      type: 'ellipsis',
    },
  },
  style: {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#1c242e',
    backgroundColor: 'rgba(255, 255, 255,0)',
    padding: '5px 5px 5px 5px',
  },
  todoProps: {
    // columns: {
    //   label: '选择服务',
    //   type: 'SelectService',
    //   groupsName: '数据绑定',
    //   istodoBind: true,
    //   props: {},
    // },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {},
    },
    menuType: {
      label: '菜单类型',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        options: [
          { title: '默认', value: 'normal' },
          { title: '按钮菜单', value: 'button' },
          { title: '右键菜单', value: 'rightClick' },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    trigger: {
      label: '触发方式',
      type: 'MultiSelect',
      groupsName: '基础',
      props: {
        defaultValue: ['hover'],
        options: [
          { title: '点击', value: 'click' },
          { title: '悬浮', value: 'hover' },
        ],
        dependProps: {
          menuType: ['button', 'normal'],
        },
      },
    },
    placement: {
      label: '弹出位置',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        options: [
          { title: '左下', value: 'bottomLeft' },
          { title: '右下', value: 'bottomRight' },
          { title: '中下', value: 'bottomCenter' },
          { title: '左上', value: 'topLeft' },
          { title: '右上', value: 'topRight' },
          { title: '中上', value: 'topCenter' },
        ],
      },
    },
    buttonType: {
      label: '按钮类型',
      type: 'Select',
      groupsName: '基础',
      props: {
        inhibitBtn: true,
        options: [
          { title: 'primary', value: 'primary' },
          { title: 'default', value: 'default' },
          { title: 'dashed', value: 'dashed' },
          { title: 'text', value: 'text' },
          { title: 'danger', value: 'danger' },
          { title: 'link', value: 'link' },
        ],
        dependProps: {
          menuType: 'button',
        },
      },
    },
    size: {
      label: '尺寸',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '大', value: 'large' },
          { title: '中', value: 'default' },
          { title: '小', value: 'small' },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
        dependProps: {
          menuType: 'button',
        },
      },
    },
    buttonIcon: {
      label: '图标',
      type: 'ChooseIcon',
      groupsName: '基础',
      props: {
        dependProps: {
          menuType: 'button',
        },
      },
    },
    rightClickWidth: {
      label: '右键范围(宽)',
      type: 'HeightInput',
      groupsName: '基础',
      props: {
        dependProps: {
          menuType: 'rightClick',
        },
      },
    },
    rightClickHeight: {
      label: '右键范围(高)',
      type: 'HeightInput',
      groupsName: '基础',
      props: {
        dependProps: {
          menuType: 'rightClick',
        },
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
          { title: '禁用', value: 3 },
        ],
        defaultValue: 1,
      },
    },
    isUsePrimary: {
      label: '是否使用主题色',
      type: 'Switch',
      groupsName: '基础',
      props: {
        defaultValue: false,
      },
    },
    color: {
      label: '图标颜色',
      type: 'ColorPicker',
      groupsName: '基础',
    },
    treeData: {
      label: '项目设置',
      type: 'TreeColumns',
      groupsName: '基础',
      props: {
        isLinkField: true,
      },
      enableI18n: true,
    },
    icon: {
      label: '项目图标',
      type: 'TreeNodeIcon',
      groupsName: '基础',
      props: {
        description:
          '该图标设置只在在使用控件动作加载数据中生效（备注：加载数据中的展开时图标取值字，收起时图标取值字段 未设置）',
      },
    },
    arrow: {
      label: '是否显示箭头',
      type: 'Switch',
      groupsName: '菜单样式',
      props: {},
    },
    selectable: {
      label: '是否显示可选样式',
      type: 'Switch',
      groupsName: '菜单样式',
      props: {},
    },
    clickClose: {
      label: '是否支持点击关闭',
      type: 'Switch',
      groupsName: '菜单样式',
      props: {
        defaultValue: true,
      },
    },
    // 该功能需要升级antd到4.21.0及以上，暂时先屏蔽
    // autoFocus: {
    //   label: '打开自动聚集下拉框',
    //   type: 'Switch',
    //   groupsName: '菜单样式',
    //   props: {},
    // },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    },
  },
  todoStyles: getStyleObjectByKeys([
    'className',
    'color',
    'fontSize',
    'letterSpacing',
    'lineHeight',
    'fontWeight',
    'width',
    'margin',
    'padding',
    'customStyle',
  ]),
  todoEvents: [
    {
      label: '展开事件',
      value: 'onVisibleChange',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
    {
      label: '子菜单项点击事件',
      value: 'onClick',
      params: [
        { title: '菜单项key', name: 'key', value: '$key$' },
        {
          title: '菜单项页面地址',
          name: 'url',
          value: '$url$',
        },
        {
          title: '菜单项数据',
          name: 'node',
          value: '$node.data$',
          attrType: 'object',
        },
      ],
    },
  ],
  todoActionList: getTodoActionListByKey(['reloadMenuData', 'setLoading']),
});

export default config;
