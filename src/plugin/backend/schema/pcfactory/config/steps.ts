import { defineConfig } from '@lingxiteam/types';
import {
  getDefaultIconSetting,
  getDefaultStepsOptions,
} from '../utils/constant';
import { getTodoActionListByKey } from '../utils/todoActionList';
import { getStyleObjectByKeys } from '../utils/todoStyle';

const defaultTodoOption = getTodoActionListByKey(['sysSetVisible']).map(
  (i) => ({ ...i, hidden: true }),
);

const config = defineConfig({
  engineApi: ['getAppFileUrlByFileCode'],
  icon: 'Steps',
  label: '步骤条',
  type: 'Steps',
  description: '',
  image: '',
  groupsName: '导航',
  compType: 5,
  isContainer: false,
  compLib: 'antd',
  platform: 'pc',
  edEngineApi: [
    'getMaterialFile',
    'getAppFileUrlById',
    'getAppFileUrlByFileCode',
  ],
  props: {
    basicStatus: 1,
    type: 'default', // 步骤条类型无line的下拉值
    stepsOptions: getDefaultStepsOptions(),
    alias: {
      id: 'id',
      description: 'description',
      disabled: 'disabled',
      status: 'status',
      subTitle: 'subTitle',
      title: 'title',
      icon: 'icon',
    },
  },
  todoProps: {
    dataSource: {
      label: '关联数据源',
      type: 'TableDataSource',
      istodoBind: {
        dataBindType: 'TableDataBlind',
      },
      groupsName: '数据绑定',
      props: {},
    },

    alias: {
      label: '字段绑定',
      type: 'AliasProps',
      groupsName: '数据绑定',
      istodoBind: false,
      props: {
        options: [
          {
            key: 'id',
            label: '唯一标识',
            required: true,
          },
          {
            key: 'title',
            label: '标题',
            required: true,
          },
          {
            key: 'subTitle',
            label: '子标题',
          },
          {
            key: 'description',
            label: '描述',
          },
          {
            key: 'status',
            label: '状态',
            tooltip:
              '状态的值分别是：等待:wait,处理中:process,完成:finish,错误:error',
          },
          {
            key: 'disabled',
            label: '是否禁用',
            tooltip:
              '默认步骤禁用不可点击，可设置禁用状态，true禁用，false不禁用可点击',
          },
          {
            key: 'icon',
            label: '图标',
            tooltip:
              '服务可返回每个步骤的图标地址,建议返回文件编码或带Http的图片链接',
          },
        ],
        dataSoureKey: 'dataSource',
      },
    },

    exampleData: {
      label: '示例数据',
      type: 'DataStructureViewer',
      groupsName: '数据绑定',
      props: {
        dataSource: getDefaultStepsOptions(),
        description: '非自定义数据时，配置态按示例数据渲染',
      },
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
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
    labelPlacement: {
      label: '标签位置',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        dependProps: {
          direction: ['horizontal'],
          stepStyle: ['number', 'icon'],
        },
        defaultValue: 'horizontal',
        options: [
          {
            title: '图标右侧',
            value: 'horizontal',
          },
          {
            title: '图标下方',
            value: 'vertical',
          },
        ],
        style: {
          padding: '0 8px',
        },
      },
    },
    stepStyle: {
      label: '样式',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        defaultValue: 'number',
        options: [
          {
            title: '数字',
            value: 'number',
          },
          {
            title: '图标',
            value: 'icon',
          },
          {
            title: '点状',
            value: 'dot',
          },
        ],
        style: {
          padding: '0 17px',
        },
      },
    },
    type: {
      label: '步骤条类型',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        defaultValue: 'default',
        dependProps: {
          stepStyle: ['number', 'icon'],
        },
        options: [
          {
            title: '普通型',
            value: 'default',
          },
          {
            title: '导航型',
            value: 'navigation',
          },
        ],
        style: {
          padding: '0 16px',
        },
      },
      istodoBind: true,
    },

    direction: {
      label: '方向',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        defaultValue: 'horizontal',
        options: [
          {
            title: '水平',
            value: 'horizontal',
          },
          {
            title: '垂直',
            value: 'vertical',
          },
        ],
      },
    },
    size: {
      label: '大小',
      type: 'RadioButton',
      groupsName: '基础',
      props: {
        defaultValue: 'default',
        options: [
          {
            title: '普通',
            value: 'default',
          },
          {
            title: '迷你型',
            value: 'small',
          },
        ],
        style: {
          padding: '0 20px',
        },
      },
      istodoBind: true,
    },
    stepsOptions: {
      label: '步骤设置',
      type: 'ChooseIconItems',
      groupsName: '自定义数据',
      props: {
        description:
          '优先按数据源或动作加载数据进行步骤展示，也可以自定义步骤数据',
        defaultColor: '#999999',
        needCheckIconOnCallBack: false,
        width: 1080,
        option: [
          {
            title: '标题',
            key: 'title',
            width: '150px',
            enableI18n: true,
          },
          {
            title: '子标题',
            key: 'subTitle',
            width: '120px',
            enableI18n: true,
          },
          {
            title: '描述',
            key: 'description',
            width: '120px',
            enableI18n: true,
          },
          {
            title: '状态',
            type: 'select',
            key: 'status',
            width: '100px',
            isBatch: true,
            props: {
              defaultValue: 'wait',
              options: [
                {
                  value: 'wait',
                  label: '等待',
                },
                {
                  value: 'process',
                  label: '处理中',
                },
                {
                  value: 'finish',
                  label: '完成',
                },
                {
                  value: 'error',
                  label: '错误',
                },
              ],
              onChange: (
                value: string,
                record: any,
                onChange: (value: any, valueKey: string, record: any) => void,
              ) => {
                switch (value) {
                  case 'wait':
                    onChange('#999999', 'color', record);
                    break;

                  case 'process':
                  case 'finish':
                    onChange('#4477EE', 'color', record);
                    break;

                  case 'error':
                    onChange('#FF7474', 'color', record);
                    break;

                  default:
                    break;
                }
              },
            },
          },
          {
            title: '禁用',
            type: 'switch',
            key: 'disabled',
            width: '62px',
            isBatch: true,
          },
          {
            type: 'chooseIcon',
            key: 'icon',
            dataIndex: 'icon',
            width: '130px',
          },
          {
            type: 'chooseColor',
            key: 'color',
            dataIndex: 'color',
            width: '130px',
          },
        ],
      },
      istodoBind: true,
      enableI18n: true,
    },
    iconSetting: {
      label: '图标设置',
      type: 'ChooseIconByData',
      groupsName: '基础',
      props: {
        description:
          '步骤样式为“图标”时支持更改图标及状态颜色，其它样式仅支持更改状态颜色',
        options: [
          {
            key: 'label',
            width: 100,
            props: {
              alias: 'label',
            },
          },
          {
            key: 'icon',
            width: 166,
            props: {
              disabled: (compProps: any) => compProps?.stepStyle !== 'icon',
            },
          },
          {
            key: 'color',
            width: 190,
          },
          {
            key: 'isUsePrimary',
            hiddenRule: (i: any) => ['wait', 'error'].includes(i.value),
          },
        ],
        defaultValue: getDefaultIconSetting(),
        pageViewAttr: [
          {
            type: 'Steps',
            platform: 'pc',
            attribute: {
              customClass:
                '.pcfactory-steps{margin-bottom: 16px;background: #fff;padding: 20px 40px;}',
            },
            props: {
              // stepStyle: 'icon',
              direction: 'horizontal',
              stepsOptions: getDefaultStepsOptions().map((i: any) => {
                delete i.color;
                if (i.status === 'error') {
                  return {
                    ...i,
                    status: 'wait',
                  };
                }
                return i;
              }),
            },
          },
          {
            type: 'Steps',
            platform: 'pc',
            attribute: {
              customClass:
                '.pcfactory-steps{margin-bottom: 16px;background: #fff;padding: 20px 40px;}',
            },
            props: {
              // stepStyle: 'icon',
              direction: 'horizontal',
              stepsOptions: getDefaultStepsOptions().map((i: any) => {
                delete i.color;
                if (i.status === 'process') {
                  return {
                    ...i,
                    status: 'error',
                  };
                }
                if (i.status === 'error') {
                  return {
                    ...i,
                    status: 'wait',
                  };
                }
                return i;
              }),
            },
          },
        ],
      },
    },
    extendProps: {
      label: '扩展属性',
      type: 'ExtendProps',
      groupsName: '扩展属性',
      props: {},
    },
  },
  style: {},
  todoStyles: getStyleObjectByKeys([]),
  todoEvents: [
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '当前步骤',
          name: 'current',
          value: '$current$',
        },
        {
          title: '当前步骤对象',
          name: 'stepObj',
          value: '$stepObj$',
          attrType: 'object',
        },
      ],
    },
    {
      label: '点击步骤条事件',
      value: 'onClick',
      params: [
        {
          title: '当前点击步骤',
          name: 'current',
          value: '$current$',
        },
        {
          title: '当前步骤对象',
          name: 'stepObj',
          value: '$stepObj$',
          attrType: 'object',
        },
      ],
      remarks: [
        {
          label: '配置建议',
          content:
            '当您同时配置了值变化回掉和点击事件，将不会切换步骤节点切换，您可以在点击事件中，通过步骤条动作，设置当前步骤！',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'reloadData',
      label: '加载数据',
      todoOptions: [
        {
          key: 'data',
          label: '内容',
          type: 'SetExpression',
          aliasKey: 'dataSource',
          labelTip: (({ DSLCore, compId }: any) => {
            const node = DSLCore?.query(compId);
            const obj: any = {};
            const defalutAlias = [
              'id',
              'description',
              'disabled',
              'status',
              'subTitle',
              'title',
              'icon',
            ];
            defalutAlias.forEach((c: any) => {
              obj[c] = '值';
            });
            if (node) {
              const alias: any = node.attribute?.props?.alias || {};
              Object.keys(alias).forEach((c: any) => {
                delete obj[c];
                obj[alias[c]] = '值';
              });
            }
            const tip: any = [obj];
            return `接收数据类型需要为数组类型: 如：${JSON.stringify(tip)}`;
          }).toString(),
        },
      ],
      todoCallbacks: ['callback1'],
    },
    {
      key: 'setStep',
      label: '设置指定步骤状态',
      todoOptions: [
        {
          key: 'stepSetting',
          label: '制定步骤状态',
          type: 'SetCustomParam',
          props: {
            options: [
              {
                title: '步骤值',
                width: '45%',
                dataIndex: 'step',
                type: 'input',
              },
              {
                title: '状态',
                width: '45%',
                dataIndex: 'status',
                type: 'select',
                props: {
                  options: [
                    {
                      value: 'wait',
                      label: '等待',
                    },
                    {
                      value: 'process',
                      label: '处理中',
                    },
                    {
                      value: 'finish',
                      label: '完成',
                    },
                    {
                      value: 'error',
                      label: '错误',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      todoCallbacks: ['callback1'],
    },
    ...defaultTodoOption,
    ...getTodoActionListByKey(['setStepsCurrentValue', 'getStepsCurrentValue']),
  ],
});
export default config;
