/**
 * @description: 获取组件默认配置
 * @param {type} compType: 组件类型  0：容器  1：通用  2：数据录入  3：数据展示 4：反馈  5：导航  6：布局   99:订阅组件
 * @param {type} label: 组件中文名称
 * @param {type} compName: 组件名称
 * @param {type} initProps: 组件默认props
 */
const getDefaultConfigs = (
  compType: string | number,
  label = '',
  compName = '',
  initProps = {},
  // compLib = 'antd',
) => ({
  label,
  compName,
  type: compName,
  compType,
  // compLib, // 'antd' 或 '$component' 或 ''
  props: {
    name: label,
    ...initProps,
  },
  style: {},
  // isContainer: false, // 是否为容器组件
  // isBusiObjContainer: false, // 是否可以放置业务对象
  // cmdgroup: ['basic'], // 用于筛选指令s分组，一个组件可以归属在多组内
});

export default getDefaultConfigs;
