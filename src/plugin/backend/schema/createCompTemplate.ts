import { compCreator } from './compCreator';
import createId from './createId';
import ViewConfig from './pcfactory/index.config';

// 合并默认值
const mergeDefaultValue = (props: Record<string, any> = {}, todo: any = {}) => {
  const finialProps: any = {};
  Object.keys(todo).forEach((key) => {
    const todoProps = todo[key]?.props || {};
    if (Object.prototype.hasOwnProperty.call(todoProps, 'defaultValue')) {
      finialProps[key] = todo[key]?.props.defaultValue;
    }
  });
  return {
    ...finialProps,
    ...props,
  };
};

export const getCompCreator = (compName: string, context: any = {}) => {
  const comp: any = ViewConfig[compName];
  if (comp) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { todoActionList, todoEvents, todoProps, todoStyles, ...restProps } =
      comp;
    const finialProps = mergeDefaultValue(comp.props, comp.todoProps);
    const finialStyles = mergeDefaultValue(comp.style, comp.todoStyles);
    return compCreator(
      {
        ...restProps,
        props: finialProps,
        style: finialStyles,
      },
      context,
    );
  }
  return null;
};

export interface CompTemplateProps {
  type: string;
  platform: 'pc' | 'h5';
  extendProps?: Record<string, unknown>;
}

export const createCompTemplate = ({
  type,
  extendProps,
}: CompTemplateProps) => {
  const comp = getCompCreator(type, {
    createComponentIdMethod: createId,
    createEventIdMethod: createId,
  });
  if (comp) {
    return comp({
      id: createId(type),
      ...(extendProps || {}),
    });
  }
  return null;
};
