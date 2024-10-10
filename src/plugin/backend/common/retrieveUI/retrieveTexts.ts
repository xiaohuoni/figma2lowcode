import { htmlMain } from '../../html/htmlMain';
import { retrieveTopFill } from '../retrieveFill';
import { calculateContrastRatio, deepFlatten } from './commonUI';

type exportFramework = 'html';

export const retrieveGenericUIText = (
  sceneNode: Array<SceneNode>,
  framework: exportFramework,
): Array<namedText> => {
  // convert to Node and then flatten it. Conversion is necessary because of [tailwindText]
  const selectedText = deepFlatten(sceneNode);

  const textStr: Array<namedText> = [];

  selectedText.forEach((node) => {
    if (node.type === 'TEXT') {
      let code = '';
      if (framework === 'html') {
        code = htmlMain([node]);
      }

      let style;
      // if (framework === "tailwind") {
      //   // TODO: htmlBuilder
      //   const [builder] = htmlBuilder(node, false);
      //   style = builder.build();
      // } else {
      //   const [builder] = htmlBuilder(node, false, true);
      //   style = builder.build();
      // }

      const black = {
        r: 0,
        g: 0,
        b: 0,
      };

      let contrastBlack = 21;

      const fill = retrieveTopFill(node.fills);

      if (fill && fill.type === 'SOLID') {
        contrastBlack = calculateContrastRatio(fill.color, black);
      }

      textStr.push({
        name: node.name,
        style,
        code,
        contrastBlack,
      });
    }
  });

  // retrieve only unique texts (attr + name)
  // from https://stackoverflow.com/a/18923480/4418073
  const unique: Record<string, boolean> = {};
  const distinct: Array<namedText> = [];
  textStr.forEach((x) => {
    if (!unique[x.code + x.name]) {
      distinct.push(x);
      unique[x.code + x.name] = true;
    }
  });

  return distinct;
};

type namedText = {
  name: string;
  code: string;
  style: string;
  contrastBlack: number;
};
