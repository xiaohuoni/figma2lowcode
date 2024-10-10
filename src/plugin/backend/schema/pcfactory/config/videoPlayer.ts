import { defineConfig } from '@lingxiteam/types';
import { getStyleObjectByKeys } from '../utils/todoStyle';

export default defineConfig({
  icon: 'VideoPlayer',
  platform: 'pc',
  groupsName: '通用',
  compType: 1,
  compLib: 'comm',
  isContainer: false,
  label: '视频播放器',
  type: 'VideoPlayer',
  description: '',
  image: '',
  props: {
    name: '视频播放器',
    controls: true,
    url: 'https://lingxi.iwhalecloud.com/HJB/api/lcdp/file/file/id/23405',
    speed: false,
    volume: 100,
    streamType: 'outside',
  },
  engineApi: ['service.getAppFileUrlByFileCode'],
  edEngineApi: ['getAppFileUrlByFileCode'],
  style: {
    width: '100%',
    // height: '100%',//高度默认按照16:9的比例展示
  },
  todoProps: {
    name: {
      label: '组件名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
      },
    },
    streamType: {
      label: '文件来源',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: false,
      props: {
        options: [
          {
            title: '文件资源',
            value: 'fileCode',
          },
          {
            title: '外部资源',
            value: 'outside',
          },
        ],
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
    videoCode: {
      label: '文件资源',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: true,
      props: {
        dependProps: {
          streamType: 'fileCode',
        },
        fileType: 'VIDEO',
      },
    },
    url: {
      label: '资源地址',
      type: 'Input',
      groupsName: '基础',
      istodoBind: {
        description: [
          {
            title: '配置帮助',
            des: '返回一个url地址，当为应用内文件时，可以使用getAppFileUrlById方法，传入文件id，生成url地址',
          },
        ],
      },
      props: {
        placeholder: '请输入',
        dependProps: {
          streamType: 'outside',
        },
      },
    },
    fileCode: {
      label: '视频封面',
      type: 'FileResourceSelect',
      groupsName: '基础',
      istodoBind: false,
      props: {
        placeholder: '默认第一帧为封面',
      },
    },
    controls: {
      label: '显示控制器',
      type: 'Switch',
      groupsName: '播放器设置',
      istodoBind: false,
      props: {},
    },
    speed: {
      label: '倍速播放',
      type: 'Switch',
      groupsName: '播放器设置',
      istodoBind: false,
      props: {},
    },
    playbackRate: {
      label: '默认播放倍数',
      type: 'InputNumber',
      groupsName: '播放器设置',
      istodoBind: false,
      props: {
        placeholder: '倍数参数示例：1.0/1.5/2.0',
        dependProps: {
          speed: true,
        },
        min: 0,
      },
    },
    muted: {
      label: '默认静音',
      type: 'Switch',
      groupsName: '播放器设置',
      istodoBind: false,
      props: {},
    },
    volume: {
      label: '默认音量',
      type: 'InputNumber',
      groupsName: '播放器设置',
      istodoBind: false,
      props: {
        min: 0,
        max: 100,
      },
    },
    playing: {
      label: '自动播放',
      type: 'Switch',
      groupsName: '播放器设置',
      istodoBind: false,
      props: {},
    },
    loop: {
      label: '循环播放',
      type: 'Switch',
      groupsName: '播放器设置',
      istodoBind: false,
      props: {},
    },
  },
  todoEvents: [
    {
      label: '准备播放',
      value: 'onReady',
    },
    {
      label: '开始播放[资源加载完成]',
      value: 'onStart',
    },
    {
      label: '正在播放[暂停]',
      value: 'onPlay',
    },
    {
      label: '视频总时长',
      value: 'onDuration',
      params: [
        {
          title: '视频总时长',
          value: '$VideoPlayer_totalTime$',
          name: 'VideoPlayer_totalTime',
        },
      ],
    },
    {
      label: '播放进度',
      value: 'onProgress',
      params: [
        {
          title: '播放进度信息',
          value: '$VideoPlayer_played$',
          name: 'VideoPlayer_played',
        },
      ],
      remarks: [
        {
          label: '参数说明',
          content:
            '<br />（1）played:  这个属性表示已经播放的媒体占总媒体长度的比例，取值范围在 0 到 1 之间。例如，如果整个媒体已经播放完毕，played 将等于 1。如果只播放了一半的媒体，played 将等于 0.5 <br />（2）playedSeconds: 这个属性表示已经播放的媒体的秒数，提供了以秒为单位的更精细的进度度量。<br />（3）loaded: 这个属性表示已经加载或缓冲的媒体占总媒体长度的比例，同样取值范围在 0 到 1 之间。它表示为了平滑播放而预加载的媒体的部分。<br />（4）loadedSeconds: 类似于 playedSeconds，这个属性表示已经加载或缓冲的媒体的秒数。',
        },
      ],
    },
    {
      label: '暂停播放',
      value: 'onPause',
    },
    {
      label: '播放出错',
      value: 'onError',
      params: [
        {
          title: '播放错误信息',
          value: '$VideoPlayer_error$',
          name: 'VideoPlayer_error',
        },
      ],
    },
    {
      label: '播放结束',
      value: 'onEnded',
      params: [
        {
          title: '视频总时长',
          value: '$VideoPlayer_totalTime$',
          name: 'VideoPlayer_totalTime',
        },
      ],
    },
  ],

  todoActionList: [],
  todoStyles: getStyleObjectByKeys(
    ['padding', 'margin', 'borderRadius', 'width', 'height', 'customStyle'],
    false,
  ),
});
