const todoStyleList: any = {
  backgroundColor: {
    label: '背景色',
    groupsName: '背景颜色',
    type: 'ColorPicker',
    props: {
      defaultColor: '#ffffff',
    },
  },
  position: {
    label: '定位',
    type: 'Select',
    groupsName: '布局',
    props: {
      allowClear: true,
      size: 'small',
      options: [
        { title: '绝对定位[absolute]', value: 'absolute' },
        { title: '绝对定位[fixed]', value: 'fixed' },
        { title: '相对定位[relative]', value: 'relative' },
        { title: '默认值[static]', value: 'static' },
        { title: '继承[inherit]', value: 'inherit' },
      ],
      children: {
        top: {
          label: '顶部边缘',
          type: 'AbsoluteInput',
          props: {
            dependProps: ['position', ['fixed', 'absolute']],
          },
        },
        right: {
          label: '右部边缘',
          type: 'AbsoluteInput',
          props: {
            dependProps: ['position', ['fixed', 'absolute']],
          },
        },
        bottom: {
          label: '底部边缘',
          type: 'AbsoluteInput',
          props: {
            dependProps: ['position', ['fixed', 'absolute']],
          },
        },
        left: {
          label: '左部边缘',
          type: 'AbsoluteInput',
          props: {
            dependProps: ['position', ['fixed', 'absolute']],
          },
        },
        zIndex: {
          label: '层级',
          type: 'InputNumber',
          props: {
            dependProps: ['position', ['fixed', 'absolute', 'relative']],
          },
        },
      },
    },
  },
  display: {
    label: '显示',
    type: 'Display',
    groupsName: '布局',
    ignoreRule: ['flexDirection', 'alignItems', 'justifyContent'], // 强校验忽略的字段名
  },
  flex: {
    label: 'flex',
    type: 'InputNumber',
    groupsName: '其他',
    props: {
      min: 0,
      visibleFlag: 'display',
      visibleFlagComp: ['View'],
      visibleFlagValue: ['flex'],
    },
  },
  padding: {
    label: '内边距',
    type: 'MarginInput',
    groupsName: '布局',
    props: {
      min: 0,
    },
  },
  margin: {
    label: '外边距',
    groupsName: '布局',
    type: 'MarginInput',
  },
  width: {
    label: '宽度',
    groupsName: '布局',
    type: 'HeightInput',
  },
  height: {
    label: '高度',
    groupsName: '布局',
    type: 'HeightInput',
  },
  borderRadius: {
    label: '圆角',
    type: 'RadiusInput',
    groupsName: '边框',
  },
  border: {
    label: '边框',
    type: 'BorderInput',
    groupsName: '边框',
  },
  borderSetting: {
    label: '边框',
    type: 'BorderInput',
    groupsName: '边框',
    ignoreRule: [
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
    ],
  },
  borderWidth: {
    label: '边框宽度',
    type: 'InputNumber',
    groupsName: '边框',
  },
  borderColor: {
    label: '边框颜色',
    type: 'ColorPicker',
    groupsName: '边框',
  },
  overflowX: {
    label: '宽度溢出',
    type: 'Select',
    groupsName: '布局',
    props: {
      allowClear: true,
      size: 'small',
      inhibitBtn: true,
      options: [
        { title: '内容可见', value: 'visible' },
        { title: '自适应滚动', value: 'auto' },
        { title: '区域隐藏', value: 'hidden' },
        { title: '区域滚动', value: 'scroll' },
      ],
    },
  },
  overflowY: {
    label: '高度溢出',
    type: 'Select',
    groupsName: '布局',
    props: {
      allowClear: true,
      size: 'small',
      inhibitBtn: true,
      options: [
        { title: '内容可见', value: 'visible' },
        { title: '自适应滚动', value: 'auto' },
        { title: '区域隐藏', value: 'hidden' },
        { title: '区域滚动', value: 'scroll' },
      ],
    },
  },
  customStyle: {
    label: '自定义当前控件样式',
    type: 'CustomStyle',
    groupsName: '自定义当前控件样式',
  },
  color: {
    label: '字体颜色',
    type: 'ColorPicker',
    groupsName: '文字',
    props: {
      defaultColor: '#1c242e',
    },
  },
  textAlign: {
    label: '文本对齐',
    type: 'Radio',
    groupsName: '文字',
    props: {
      options: [
        { title: '左对齐', value: 'left' },
        { title: '居中', value: 'center' },
        { title: '右对齐', value: 'right' },
      ],
      defaultValue: 'left',
    },
  },
  fontSize: {
    label: '文本大小',
    type: 'InputNumber',
    groupsName: '文字',
    props: {
      min: 12,
      max: 100,
    },
  },
  fontWeight: {
    label: '字重',
    groupsName: '文字',
    type: 'FontWeightSelect',
  },
  flexDirection: {
    label: '主轴方向',
    type: 'Select',
    groupsName: '布局',
    props: {
      allowClear: true,
      size: 'small',
      inhibitBtn: true,
      visibleFlag: 'display',
      visibleFlagComp: ['View'],
      visibleFlagValue: ['flex'],
      options: [
        { title: '水平', value: 'row' },
        { title: '垂直', value: 'column' },
        { title: '逆向水平', value: 'row-reverse' },
        { title: '逆向垂直', value: 'column-reverse' },
      ],
    },
  },
  flexWrap: {
    label: '换行方式',
    type: 'Select',
    groupsName: '布局',
    props: {
      size: 'small',
      inhibitBtn: true,
      options: [
        { title: '不换行', value: 'nowrap' },
        { title: '换行', value: 'wrap' },
        { title: '逆向换行', value: 'wrap-reverse' },
      ],
    },
  },
  justifyContent: {
    label: '主轴对齐',
    type: 'Select',
    groupsName: '布局',
    props: {
      size: 'small',
      allowClear: true,
      visibleFlag: 'display',
      visibleFlagComp: ['View'],
      visibleFlagValue: ['flex'],
      options: [
        { title: '起点对齐', value: 'flex-start' },
        { title: '终点对齐', value: 'flex-end' },
        { title: '居中', value: 'center' },
        { title: '两端对齐', value: 'space-between' },
        { title: '间隔对齐', value: 'space-around' },
      ],
    },
  },
  alignItems: {
    label: '交叉轴对齐',
    type: 'Select',
    groupsName: '布局',
    props: {
      allowClear: true,
      size: 'small',
      visibleFlag: 'display',
      visibleFlagComp: ['View'],
      visibleFlagValue: ['flex'],
      options: [
        { title: '起点对齐', value: 'flex-start' },
        { title: '终点对齐', value: 'flex-end' },
        { title: '居中', value: 'center' },
        { title: '基线对齐', value: 'baseline' },
        { title: '拉伸对齐', value: 'stretch' },
      ],
    },
  },
  bottom: {
    label: '底部边缘',
    type: 'AbsoluteInput',
  },
  left: {
    label: '左部边缘',
    type: 'AbsoluteInput',
  },
  top: {
    label: '顶部边缘',
    type: 'AbsoluteInput',
  },
  right: {
    label: '右部边缘',
    type: 'AbsoluteInput',
  },
  themeColor: {
    groupsName: '主题',
    label: '主题色',
    type: 'ColorPicker',
  },
  className: {
    groupsName: '样式类',
    label: '样式类名',
    type: 'Select',
    targetType: 'props',
    props: {
      allowClear: true,
      size: 'small',
      placeholder: '请选择',
      inhibitBtn: true,
      showSearch: true,
      isSaveSearchVal: true,
      requestConfig: {
        callFunName: 'queryCustomStyleVars',
      },
    },
    istodoBind: true,
  },
  subclassName: {
    groupsName: '样式类',
    label: '子面板样式类名',
    type: 'Input',
    props: {
      placeholder: '空格分隔',
    },
  },
  letterSpacing: {
    groupsName: '文字',
    label: '字体间距',
    type: 'InputNumber',
    props: {
      min: 0,
      max: 100,
    },
  },
  lineHeight: {
    groupsName: '文字',
    label: '行高',
    type: 'HeightInput', // UI要求改为带有单位
    props: {
      min: 12,
      max: 100,
    },
  },
  customClass: {
    label: '自定义内部控件样式',
    type: 'CustomClass',
    groupsName: '自定义内部控件样式',
  },
};

/**
 * 全局统一增加配置项
 */
const defaultStyleConfigList = ['customClass'];

// 通过key获取文字
const getStyleObjectByKeys = (
  styleKeyList: string[] = [],
  addDefault: boolean = true,
) => {
  const styleObj: any = {};
  let _styleKeyList: string[] = styleKeyList as string[];
  if (addDefault) {
    _styleKeyList = [...styleKeyList, ...defaultStyleConfigList];
  }
  // @ts-ignore
  _styleKeyList.forEach((styleKey) => {
    if (!styleKey) {
      return;
    }
    const style = todoStyleList[styleKey];
    if (style) {
      styleObj[styleKey] = style;
    }
  });
  return styleObj;
};

export { getStyleObjectByKeys };
