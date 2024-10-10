const config = {
  icon: 'VirtualGroup',
  label: '分组',
  type: 'VirtualGroup',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'custom',
  isContainer: true,
  components: [],
  onlyRoot: {
    onlyRootTypes: ['VirtualGroup', 'FreeLayout'],
    description: '请先取消分组。',
  },
  platform: 'pc',
  props: {
    name: '分组',
  },
  engineApi: [],
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
  },
  style: {},
  todoStyles: {},
  todoEvents: [],
  todoActionList: [],
};

export default config;
