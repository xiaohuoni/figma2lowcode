import { commonSortChildrenWhenInferredAutoLayout } from '../common/commonChildrenOrder';
import { formatWithJSX } from '../common/parseJSX';
import { retrieveTopFill } from '../common/retrieveFill';
import { htmlAutoLayoutProps } from '../html/builderImpl/htmlAutoLayout';
import { HtmlDefaultBuilder } from '../html/htmlDefaultBuilder';
import { createBlankPage } from './createBlankPage';
import { createCompTemplate } from './createCompTemplate';
import createId from './createId';

let showLayerName = false;

const allDefaultStyles: any = {
  Button: {
    width: 'delete',
    height: 'delete',
    paddingLeft: 'delete',
    paddingRight: 'delete',
    paddingTop: 'delete',
    paddingBottom: 'delete',
    background: '#1890FF',
    boxShadow: 'delete',
    borderRadius: '2',
    border: '1px #1890FF solid',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'delete',
    display: 'inline-flex',
  },
};
const buttonProperties = (componentProperties: any) => {
  console.log('componentProperties', componentProperties);
  const defaultProps: any = {
    name: '按钮',
    iconPosition: 'left',
    ghost: false,
    block: false,
    size: 'default',
    classification: 'default',
    type: 'default',
    basicStatus: 1,
    hasIcon: false,
    shape: 'default',
    loading: false,
    btnText: '按钮',
    danger: false,
  };

  const keys = Object.keys(componentProperties);
  keys.forEach((key) => {
    // 忽略大小写
    const k = key.toLowerCase();
    const value = componentProperties[key]?.value;
    if (!value) return;
    if (k.includes('icon')) {
      defaultProps.hasIcon = value;
    } else if (k.includes('title') && !k.includes('char')) {
      console.log('Title', k);
      defaultProps.btnText = value;
    } else if (defaultProps.hasOwnProperty(k)) {
      if (typeof value === 'string') {
        if (value.toLowerCase() === 'true') {
          defaultProps[k] = true;
        } else if (value.toLowerCase() === 'false') {
          defaultProps[k] = false;
        } else {
          defaultProps[k] = value;
        }
      } else {
        defaultProps[k] = value;
      }
    }
  });
  return defaultProps;
};

export const componentProperties = (type: string, props: any) => {
  const tag = type.toLowerCase();
  console.log('tagtagtagtagtagtagtagtagtag', tag);
  switch (tag) {
    case 'button':
      return buttonProperties(props);
  }
  return {};
};

export const schemaContainerStyles = (
  node: SceneNode &
    SceneNodeMixin &
    BlendMixin &
    LayoutMixin &
    GeometryMixin &
    MinimalBlendMixin,
  additionalStyles: string[] = [],
): any => {
  const builder = new HtmlDefaultBuilder(node, showLayerName, true)
    .commonPositionStyles(node, false)
    .commonShapeStyles(node);

  if (builder.styles || additionalStyles) {
    let isImg = false;
    let src = `https://via.placeholder.com/${node.width.toFixed(
      0,
    )}x${node.height.toFixed(0)}`;
    if (retrieveTopFill(node.fills)?.type === 'IMAGE') {
      if (!('children' in node) || node.children.length === 0) {
        isImg = true;
      } else {
        builder.addStyles(formatWithJSX('background-image', true, src));
      }
    }

    const build = builder.toStyles(
      additionalStyles,
      allDefaultStyles[node?.name] || {},
    );
    const container: any = {
      style: build,
    };
    let props: any = {};

    if (isImg) {
      props.src = src;
      container.props = props;
    }
    return container;
  }
  return {};
};

export const schemaFrame = (sceneNode: SceneNode & BaseFrameMixin) => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const children = schemaWidgetGenerator(
    // @ts-ignore
    commonSortChildrenWhenInferredAutoLayout(sceneNode, false),
  );

  let rowColumn: string[] = [];
  if (sceneNode.layoutMode !== 'NONE') {
    rowColumn = htmlAutoLayoutProps(sceneNode, sceneNode, true);
  }

  let container = schemaContainerStyles(sceneNode, rowColumn);
  console.log(container);
  // >> ?? why no componentProperties??
  // @ts-ignore
  if (sceneNode.componentProperties) {
    // 表示它是一个组件？
    const comData = createCompTemplate({
      // FIXME: 这里的组件名称可能会有大小写问题
      type: sceneNode.name,
      platform: 'pc',
      extendProps: {
        // ...container,
        props: {
          ...container.props,
          // @ts-ignore
          ...componentProperties(sceneNode.name, sceneNode.componentProperties),
        },
      },
    });
    container = {
      ...comData,
      style: {
        ...comData.style,
        ...container.style,
      },
    };
  } else {
    container.name = sceneNode.name || 'emily';
    container.type = sceneNode.type || 'emily-type';
  }
  if (children) {
    container.components = children;
  }

  return container;
};

export const schemaWidgetGenerator = (sceneNode: Array<SceneNode>) => {
  let comp: any[] = [];
  // filter non visible nodes. This is necessary at this step because conversion already happened.
  const visibleSceneNode = sceneNode.filter((d) => d.visible);
  visibleSceneNode.forEach((node) => {
    // if (node.isAsset || ("isMask" in node && node.isMask === true)) {
    //   comp += htmlAsset(node, isJsx);
    // }

    switch (node.type) {
      // case "RECTANGLE":
      // case "ELLIPSE":
      //   comp += htmlContainer(node, "", []);
      //   break;
      // case "GROUP":
      //   comp += htmlGroup(node);
      //   break;
      case 'FRAME':
      case 'COMPONENT':
      case 'INSTANCE':
      case 'COMPONENT_SET':
        comp.push(schemaFrame(node));
        break;
      // case "SECTION":
      //   comp += htmlSection(node);
      //   break;
      // case "TEXT":
      //   comp += htmlText(node);
      //   break;
      // case "LINE":
      //   comp += htmlLine(node);
      //   break;
      // case "VECTOR":
      //   comp += htmlAsset(node);
    }
  });

  return comp;
};
export const schemaMain = (sceneNode: Array<SceneNode>) => {
  // 前置处理
  let result = schemaWidgetGenerator(sceneNode);
  const id = createId();
  const data = createBlankPage(id, 'Page');
  console.log(result);
  if (data?.components?.[0]?.components) {
    data.components[0].components = result;
    return data;
  }
  // 后置处理
  return result;
};
