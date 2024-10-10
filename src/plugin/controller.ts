import { convertIntoNodes } from './backend';
import { schemaMain } from './backend/schema/schemaMain';

export const run = () => {
  // ignore when nothing was selected
  if (figma.currentPage.selection.length === 0) {
    figma.notify('未选择任何页面或组件');
    return;
  }

  const convertedSelection = convertIntoNodes(
    figma.currentPage.selection,
    null,
  );
  const result = schemaMain(convertedSelection);
  console.log(result);
  figma.showUI(
    `
    <span style="white-space:pre-wrap;">${JSON.stringify(result)}</span>
  `,
    { width: 500, height: 500 },
  );
};

const safeRun = () => {
  try {
    run();
  } catch (e) {
    if (e && typeof e === 'object' && 'message' in e) {
      figma.notify('error: ' + (e as any).stack);
    }
  }
};

const standardMode = () => {
  figma.on('selectionchange', () => {
    safeRun();
  });
};

standardMode();
