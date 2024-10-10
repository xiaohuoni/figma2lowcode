import getDefaultConfigs from './getDefaultConfigs';

const addComponentsPath = (config: any, context: any) => {
  const { isContainer, components = [], path = [], id } = config;
  if (!isContainer) {
    return components;
  }
  return components.map((comConfig: any) => {
    const { todoActionList, todoEvents, todoProps, todoStyles, ...restConfig } =
      comConfig;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const creator = compCreator(restConfig, context);
    const comp = creator({
      id: context.createComponentIdMethod(comConfig.type),
      path: path.concat(id),
      label: comConfig.label,
    });
    return comp;
  });
};

const initSetEvents = (setEvents: any[], { createEventIdMethod }: any) => {
  const recursive = (events: any[] = [], path: any[] = []): any => {
    return events.map((it: any) => {
      const dataId = createEventIdMethod();
      return {
        ...it,
        path,
        dataId,
        children: recursive(it.children, path.concat(dataId)),
      };
    });
  };
  return recursive(setEvents, []);
};

const compCreator = (config: any = {}, context: any) => {
  const {
    compType,
    type,
    label,
    style,
    components,
    props: configProps,
    engineApi,
    edEngineApi,
    image,
    icon,
    description,
    fieldProps,
    groupsName,
    group,
    compLib,
    deprecated,
    onlyChildren,
    onlyOnce,
    ...restProps
  } = config;
  // 如果是false 删除改节点
  if (restProps.isContainer === false) {
    delete restProps.isContainer;
  }
  // 如果是false 删除改节点
  if (restProps.isBusiObjContainer === false) {
    delete restProps.isBusiObjContainer;
  }
  const { createComponentIdMethod, createEventIdMethod } = context || {};

  const opts = {
    createComponentIdMethod,
    createEventIdMethod,
  };

  return ({ props = {}, ...restConfigs }) => {
    const { id, path } = restConfigs;
    const objecomponents = config.isContainer
      ? {
          components: addComponentsPath(
            {
              isContainer: config.isContainer,
              id,
              path,
              components,
            },
            opts,
          ),
        }
      : {};

    return {
      ...getDefaultConfigs(compType, label, type, {
        ...configProps,
        ...props,
      }),
      style,
      ...restProps,
      setEvents: initSetEvents(config.setEvents, opts),
      ...objecomponents,
      ...restConfigs,
    };
  };
};

export default compCreator;
