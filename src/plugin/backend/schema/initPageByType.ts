// editor/src/editor/Editor/constant/pageTemplate/initPageByType.js
import createId from './createId';

const APP_PAGE_CONTAINER_TYPE = {
  PAGE: 'Page',
  MODAL: 'MobileModal',
  POPOVER: 'MobilePopover',
};

const PAGE_CONTAINER_TYPE = {
  PAGE: 'Page',
  MODAL: 'Modal',
  DRAWER: 'Drawer',
  BUSICOMP: 'BusiComp',
  POPOVER: 'Popover',
  WHALEBI: 'WhaleBI',
  MOBILEDRAWER: 'MobileModal',
  MOBILEPOPOVER: 'MobilePopover',
};

const initPageByType = (data: any, pageContainerType: string) => {
  if (!(Array.isArray(data.setEvents) && data.setEvents.length)) {
    data.setEvents = [
      {
        dataName: 'event',
        dataId: createId(),
        children: [],
        path: [],
        value: 'useEffect',
        params: [],
      },
    ];
  }
  // 根据页面容器类型初始化布局、默认事件等
  if (pageContainerType === APP_PAGE_CONTAINER_TYPE.MODAL) {
    // APP弹窗
    // bizId 业务主键（在配置“弹窗完成后”事件时，如果要通过rowId来加载数据，又要返回页面属性添加这个参数）
    // sceneCode 业务动作（用于接收业务场景）
    data.compState = [
      { name: '业务主键', code: 'bizId' },
      { name: '业务场景', code: 'sceneCode' },
    ];
  } else if (pageContainerType === PAGE_CONTAINER_TYPE.MODAL) {
    // PC弹窗
    data.layout = 'BlankLayout';
    data.setEvents.push(
      ...[
        {
          dataName: 'event',
          children: [
            {
              actionObjId: 'okCallbackData',
              actionObjName: 'system',
              children: [],
              dataName: 'action',
              options: {
                compId: 'okCallbackData',
                compName: 'system',
                id: createId(),
              },
              todoOptions: [],
              value: 'okCallbackData',
            },
            {
              actionObjId: 'closeModal',
              actionObjName: 'system',
              children: [],
              dataName: 'action',
              options: {
                compId: 'closeModal',
                compName: 'system',
                id: createId(),
              },
              todoOptions: [],
              value: 'closeModal',
            },
          ],
          path: [],
          value: 'onOk',
          params: [],
        },
        {
          dataName: 'event',
          children: [
            {
              actionObjId: 'page',
              actionObjName: 'page',
              children: [],
              dataName: 'action',
              options: { compId: 'page', compName: 'page', id: createId() },
              todoOptions: [],
              value: 'closeModal',
            },
          ],
          path: [],
          value: 'onCancel',
          params: [],
        },
      ],
    );
    // bizId 业务主键（在配置“弹窗完成后”事件时，如果要通过rowId来加载数据，又要返回页面属性添加这个参数）
    // sceneCode 业务动作（用于接收业务场景）
    data.compState = [
      { name: '业务主键', code: 'bizId' },
      { name: '业务场景', code: 'sceneCode' },
    ];
  } else if (pageContainerType === PAGE_CONTAINER_TYPE.DRAWER) {
    // 推拉门
    const cancelEventId = createId();
    data.footer = 1;
    data.width = 624;
    data.height = 300;
    data.layout = 'BlankLayout';
    data.placement = 'right';
    data.setEvents.push(
      ...[
        {
          dataName: 'event',
          children: [
            {
              actionObjId: 'okCallbackData',
              actionObjName: 'system',
              children: [],
              dataName: 'action',
              options: {
                compId: 'okCallbackData',
                compName: 'system',
                id: createId(),
              },
              todoOptions: [],
              value: 'okCallbackData',
            },
            {
              actionObjId: 'closeModal',
              actionObjName: 'system',
              children: [],
              dataName: 'action',
              options: {
                compId: 'closeModal',
                compName: 'system',
                id: createId(),
              },
              todoOptions: [],
              value: 'closeModal',
            },
          ],
          path: [],
          value: 'onOk',
          params: [],
        },
        {
          dataName: 'event',
          dataId: cancelEventId,
          children: [
            {
              actionObjId: 'page',
              actionObjName: 'page',
              children: [],
              dataId: `${cancelEventId}_1`,
              dataName: 'action',
              options: { compId: 'page', compName: 'page', id: createId() },
              path: [cancelEventId],
              todoOptions: [],
              value: 'closeModal',
            },
          ],
          path: [],
          value: 'onCancel',
          params: [],
        },
      ],
    );
    data.compState = [
      { name: '业务主键', code: 'bizId' },
      { name: '业务场景', code: 'sceneCode' },
    ];
  } else if (pageContainerType === PAGE_CONTAINER_TYPE.POPOVER) {
    // 气泡卡片
    data.layout = 'BlankLayout';
    data.placement = 'right';
    data.compState = [{ name: '业务主键', code: 'bizId' }];
  } else {
    // 页面
    data.layout = 'BaseLayout';
    data.searchParams = [
      { name: '业务主键', code: 'bizId' },
      { name: '业务场景', code: 'sceneCode' },
      { name: '业务数据', code: 'bizData' },
    ];
  }
  data.pageContainerType = pageContainerType;
  return data;
};

export default initPageByType;
