import { defineConfig } from '@lingxiteam/types';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const config = defineConfig({
  icon: 'Condition',
  label: '条件容器',
  type: 'Condition',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: 'comm',
  isContainer: true,
  platform: 'pc',
  components: [],
  deprecated: true,
  props: {
    name: '条件容器',
  },
  style: {
    minHeight: 40,
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
  },

  todoStyles: getStyleObjectByKeys([
    'className',
    'margin',
    'customStyle',
    'flex',
  ]),
  todoEvents: [],
  todoActionList: getTodoActionListByKey(['sysSetVisible']),
});

export default config;
