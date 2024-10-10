import { defineConfig } from '@lingxiteam/types';

const config = defineConfig({
  icon: 'RemoteComponent',
  label: '自定义组件',
  type: 'RemoteComponent',
  description: '',
  image: '',
  groupsName: '数据展示',
  compType: 3,
  compLib: 'comm',
  isContainer: false,
  platform: 'pc',
  // customEvent: true,
  props: {
    associatedType: 'file',
    type: 'React',
  },
  engineApi: [
    'getAppFileUrlByFileCode',
    'service.findRemoteCompExtInst',
    'service.getRemoteCompExtInstContent',
    'service.findRemoteCompUrlByCode',
    'resolveApiPath',
    'sandBoxSafeRun',
    'getAppFileUrlById',
    'http',
  ],
  edEngineApi: [
    'findRemoteCompSourceUrlByCode',
    'getAppFileUrlByFileCode',
    'getAppFileUrlById',
  ],
  todoProps: {
    customProps: {
      label: '自定义属性',
      type: 'CustomProps',
      groupsName: '基础',
      istodoBind: true,
      props: {
        title: '自定义属性',
      },
    },
    type: {
      label: '组件类型',
      type: 'Select',
      groupsName: '基础',
      props: {
        options: [
          { title: 'React', value: 'React' },
          { title: 'Fish', value: 'Fish' },
          { title: 'Vue', value: 'Vue' },
        ],
        description:
          '在 应用设置-功能设置-扩展框架 中开启Fish或Vue，才可在组件中使用。',
      },
    },
    associatedType: {
      label: '关联组件',
      type: 'RadioButton',
      props: {
        options: [
          { title: '选择组件', value: 'file' },
          { title: '填写地址', value: 'url' },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
      groupsName: '基础',
      istodoBind: true,
    },
    url: {
      label: '地址',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          associatedType: ['url'],
        },
      },
    },
    fileCode: {
      label: '文件资源',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          associatedType: ['file', undefined],
        },
        fileType: 'R_COMP',
      } as any,
    },
    allowExtent: {
      label: '允许扩展',
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
      props: {
        dependProps: {
          associatedType: ['file', undefined],
          remoteCompType: ['outerRemoteComp'],
        },
      },
    },
    compExtCode: {
      label: '扩展点编码',
      type: 'ExtCodeInput',
      groupsName: '基础',
      props: {
        dependProps: {
          allowExtent: true,
          associatedType: ['file', undefined],
          remoteCompType: ['outerRemoteComp'],
        },
        disabled: true,
      } as any,
    },
    compExtName: {
      label: '扩展点名称',
      type: 'Input',
      groupsName: '基础',
      props: {
        dependProps: {
          allowExtent: true,
          associatedType: ['file', undefined],
          remoteCompType: ['outerRemoteComp'],
        },
      },
    },
  },
  style: {},
  setEvents: [
    {
      dataName: 'event',
      dataId: `${Math.random()}`.slice(12),
      children: [],
      path: [],
      value: 'onMessage',
      params: [
        {
          title: '消息入参',
          name: 'msg',
          value: '$msg$',
        },
      ],
    },
  ],
  todoEvents: [
    {
      label: '接收到消息',
      value: 'onMessage',
      params: [
        {
          title: '消息入参',
          name: 'msg',
          value: '$msg$',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'setSrc',
      label: '设置资源地址',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      remarks: [
        {
          label: '注意事项',
          content:
            '设置自定义组件的资源地址，接收http开头地址的字符串，当前平台的资源编码',
        },
      ],
    },
    {
      key: 'sendMessageIframe',
      label: '给web容器发消息',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
    },
    {
      key: 'setRemoteCompProps',
      label: '给组件设置属性',
      todoOptions: [
        {
          key: 'rProps',
          label: '设置自定义组件属性',
          type: 'SelectCustomParams',
        },
      ],
    },
  ],
});

export default config;
