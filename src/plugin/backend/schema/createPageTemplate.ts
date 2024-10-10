import PageConfig from '@lingxiteam/assets/es/rootConfig/pc/page';
import createId from './createId';

export type PageType =
  | 'Page'
  | 'Modal'
  | 'MobileModal'
  | 'BusiComp'
  | 'MobilePopover'
  | 'Drawer'
  | 'Popover';

export interface PageTemplateProps {
  /**
   * 页面路径
   */
  pagePath?: string;

  /**
   * 页面名称
   */
  pageName?: string;

  /**
   * 平台
   */
  terminalType?: 'APP' | 'PC';

  /**
   * 页面类型
   * @default Page
   */
  pageContainerType?: PageType;

  [key: string]: any;
}

export interface ComponentDSLType {
  id: string;
  label: string;
  compName?: string;
  type: string;
  components?: ComponentDSLType[];
  props?: unknown;
  style?: unknown;
  setEvents: any[];
  compLib: string;
  isContainer?: boolean;
  isBusiObjContainer?: boolean;
  platform: 'h5' | 'pc' | 'web';
  groupsName: string;
  customStyle?: any;
  path?: string[];
}

export interface PageDSLType extends PageTemplateProps {
  id: string;
  components: ComponentDSLType[];
  events: any[];
  actions: any[];
  setEvents: any[];
}

export const createPageTemplate = (
  {
    pagePath,
    pageName,
    terminalType,
    pageContainerType = 'Page',
    ...otherProps
  }: PageTemplateProps,
  platform?: string,
) => {
  if (platform) {
    // 只支持 pc
    // @ts-ignore
    const config = PageConfig;
    if (config) {
      const { style, props = {}, setEvents = [] } = config;
      return {
        id: createId(),
        pageContainerType,
        components: [],
        events: [], // 页面事件
        actions: [], // 页面里面所有组件的指令集合
        pageName,
        pagePath,
        ...props,
        style,
        setEvents,
        ...otherProps,
      };
    }
  }
  const data = {
    id: createId(),
    pageContainerType,
    pageName,
    pagePath,
    components: [],
    events: [], // 页面事件
    actions: [], // 页面里面所有组件的指令集合
    setEvents: [
      {
        dataName: 'event',
        dataId: createId(),
        children: [],
        path: [],
        value: 'useEffect',
        label: '页面加载完成',
        params: [],
      },
    ],
    dataSource: [],
    terminalType,
    ...otherProps,
  } as PageDSLType;
  return data;
};
