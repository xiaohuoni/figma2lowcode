/*
 * @Author: wulili wu.lili@iwhalecloud.com
 * @Date: 2023-08-11 15:26:16
 * @LastEditors: wulili wu.lili@iwhalecloud.com
 * @LastEditTime: 2023-08-11 15:29:14
 * @FilePath: /lcdp-editor/packages/pcFactory/src/config/layout.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = {
  icon: 'HorizontalView',
  label: '布局容器',
  type: 'Layout',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  isContainer: true,
  platform: 'pc',
  compLib: 'custom',
  onlyChildren: ['View'],
  props: {
    name: '布局容器',
    basicStatus: 1,
    layoutOptions: {
      grid: 12,
      colSpan: '12:9:3',
      colSpace: '16px',
      rowSpace: '16px',
    },
  },
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
    layoutOptions: {
      label: '布局栅格',
      type: 'Layout',
      groupsName: '布局',
      props: {
        labelCol: {
          span: 0,
        },
        wrapperCol: {
          span: 24,
        },
      },
    },
  },
  style: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
  },
  todoStyles: {
    flexDirection: {
      label: '主轴方向',
      type: 'Select',
      groupsName: '其他',
      props: {
        inhibitBtn: true,
        options: [
          { title: '行', value: 'row' },
          { title: '列', value: 'column' },
          { title: '水平主轴，项目从右到左排列', value: 'row-reverse' },
          { title: '垂直主轴，项目从下到上排列', value: 'column-reverse' },
        ],
      },
    },
    justifyContent: {
      label: '主轴对齐',
      type: 'Select',
      groupsName: '其他',
      props: {
        inhibitBtn: true,
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
      groupsName: '其他',
      props: {
        inhibitBtn: true,
        options: [
          { title: '起点对齐', value: 'flex-start' },
          { title: '终点对齐', value: 'flex-end' },
          { title: '居中', value: 'center' },
          { title: '基线对齐', value: 'baseline' },
          { title: '拉伸对齐', value: 'stretch' },
        ],
      },
    },
    ...getStyleObjectByKeys([
      'backgroundColor',
      'className',
      'padding',
      'margin',
      'width',
      'height',
      'overflowX',
      'overflowY',
      'flex',
      'borderRadius',
      'borderSetting',
    ]),
  },
  todoEvents: [],
  todoActionList: [],
};

export default config;
