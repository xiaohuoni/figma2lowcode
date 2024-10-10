// editor/src/editor/Editor/hooks/usePageTemplate.js
import { createCompTemplate } from './createCompTemplate';
import createId from './createId';
import { createPageTemplate } from './createPageTemplate';
import initPageByType from './initPageByType';

export const createBlankPage = (id: string, pageContainerType: any) => {
  // 根节点创建走配置表
  const data = createPageTemplate(
    {
      id,
      pageContainerType,
      components: [
        createCompTemplate({
          type: 'View',
          platform: 'pc',
          extendProps: {
            id: createId('View', `${id}_1`),
            props: {
              name: '页面',
              backgroundType: {
                type: 'cleanColor',
                color: 'rgba(255, 255, 255, 1)',
              },
            },
            style: {
              minHeight: '100%',
              display: 'flex',
              padding: '20px 20px 20px 20px',
              flexDirection: 'column',
              overflowY: 'auto',
              width: 'auto',
              height: 'auto',
            },
            path: [id],
            components: [],
          },
        }),
      ],
      pageName: '自由布局',
    },
    'pc',
  );
  return initPageByType(data, pageContainerType);
};
