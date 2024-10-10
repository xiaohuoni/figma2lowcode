import {
  commonIsAbsolutePosition,
  getCommonPositionValue,
} from '../common/commonPosition';
import { commonStroke } from '../common/commonStroke';
import { className, sliceNum } from '../common/numToAutoFixed';
import { formatWithJSX } from '../common/parseJSX';
import {
  htmlBlendMode,
  htmlOpacity,
  htmlRotation,
  htmlVisibility,
} from './builderImpl/htmlBlend';
import { htmlBorderRadius } from './builderImpl/htmlBorderRadius';
import {
  htmlColorFromFills,
  htmlGradientFromFills,
} from './builderImpl/htmlColor';
import { htmlPadding } from './builderImpl/htmlPadding';
import { htmlShadow } from './builderImpl/htmlShadow';
import { htmlSizePartial } from './builderImpl/htmlSize';

export class HtmlDefaultBuilder {
  styles: Array<string>;
  isJSX: boolean;
  visible: boolean;
  name: string = '';

  constructor(node: SceneNode, showLayerName: boolean, optIsJSX: boolean) {
    this.isJSX = optIsJSX;
    this.styles = [];
    this.visible = node.visible;
    if (showLayerName) {
      this.name = className(node.name);
    }
  }

  commonPositionStyles(
    node: SceneNode & LayoutMixin & MinimalBlendMixin,
    optimizeLayout: boolean,
  ): this {
    this.size(node, optimizeLayout);
    this.autoLayoutPadding(node, optimizeLayout);
    this.position(node, optimizeLayout);
    this.blend(node);
    return this;
  }

  commonShapeStyles(node: GeometryMixin & SceneNode): this {
    this.applyFillsToStyle(
      node.fills,
      node.type === 'TEXT' ? 'text' : 'background',
    );
    this.shadow(node);
    this.border(node);
    this.blur(node);
    return this;
  }

  addStyles = (...newStyles: string[]) => {
    this.styles.push(...newStyles.filter((style) => style));
  };

  blend(node: SceneNode & LayoutMixin & MinimalBlendMixin): this {
    this.addStyles(
      htmlVisibility(node, this.isJSX),
      ...htmlRotation(node, this.isJSX),
      htmlOpacity(node, this.isJSX),
      htmlBlendMode(node, this.isJSX),
    );
    return this;
  }

  border(node: GeometryMixin & SceneNode): this {
    this.addStyles(...htmlBorderRadius(node, this.isJSX));

    const commonBorder = commonStroke(node);
    if (!commonBorder) {
      return this;
    }

    const color = htmlColorFromFills(node.strokes);
    const borderStyle = node.dashPattern.length > 0 ? 'dotted' : 'solid';

    const consolidateBorders = (border: number): string =>
      [`${sliceNum(border)}px`, color, borderStyle].filter((d) => d).join(' ');

    if ('all' in commonBorder) {
      if (commonBorder.all === 0) {
        return this;
      }
      const weight = commonBorder.all;
      this.addStyles(
        formatWithJSX('border', this.isJSX, consolidateBorders(weight)),
      );
    } else {
      if (commonBorder.left !== 0) {
        this.addStyles(
          formatWithJSX(
            'border-left',
            this.isJSX,
            consolidateBorders(commonBorder.left),
          ),
        );
      }
      if (commonBorder.top !== 0) {
        this.addStyles(
          formatWithJSX(
            'border-top',
            this.isJSX,
            consolidateBorders(commonBorder.top),
          ),
        );
      }
      if (commonBorder.right !== 0) {
        this.addStyles(
          formatWithJSX(
            'border-right',
            this.isJSX,
            consolidateBorders(commonBorder.right),
          ),
        );
      }
      if (commonBorder.bottom !== 0) {
        this.addStyles(
          formatWithJSX(
            'border-bottom',
            this.isJSX,
            consolidateBorders(commonBorder.bottom),
          ),
        );
      }
    }
    return this;
  }

  position(node: SceneNode, optimizeLayout: boolean): this {
    if (commonIsAbsolutePosition(node, optimizeLayout)) {
      const { x, y } = getCommonPositionValue(node);

      this.addStyles(
        formatWithJSX('left', this.isJSX, x),
        formatWithJSX('top', this.isJSX, y),
        formatWithJSX('position', this.isJSX, 'absolute'),
      );
    } else {
      if (
        node.type === 'GROUP' ||
        ('layoutMode' in node &&
          ((optimizeLayout ? node.inferredAutoLayout : null) ?? node)
            ?.layoutMode === 'NONE')
      ) {
        this.addStyles(formatWithJSX('position', this.isJSX, 'relative'));
      }
    }

    return this;
  }

  applyFillsToStyle(
    paintArray: ReadonlyArray<Paint> | PluginAPI['mixed'],
    property: 'text' | 'background',
  ): this {
    if (property === 'text') {
      this.addStyles(
        formatWithJSX('text', this.isJSX, htmlColorFromFills(paintArray)),
      );
      return this;
    }

    const backgroundValues = this.buildBackgroundValues(paintArray);
    if (backgroundValues) {
      this.addStyles(formatWithJSX('background', this.isJSX, backgroundValues));
    }

    return this;
  }

  buildBackgroundValues(
    paintArray: ReadonlyArray<Paint> | PluginAPI['mixed'],
  ): string {
    if (paintArray === figma.mixed) {
      return '';
    }

    // If one fill and it's a solid, return the solid RGB color
    if (paintArray.length === 1 && paintArray[0].type === 'SOLID') {
      return htmlColorFromFills(paintArray);
    }

    // If multiple fills, deal with gradients and convert solid colors to a "dumb" linear-gradient
    const styles = paintArray.map((paint) => {
      if (paint.type === 'SOLID') {
        const color = htmlColorFromFills([paint]);
        return `linear-gradient(0deg, ${color} 0%, ${color} 100%)`;
      } else if (
        paint.type === 'GRADIENT_LINEAR' ||
        paint.type === 'GRADIENT_RADIAL' ||
        paint.type === 'GRADIENT_ANGULAR'
      ) {
        return htmlGradientFromFills([paint]);
      }

      return ''; // Handle other paint types safely
    });

    return styles.filter((value) => value !== '').join(', ');
  }

  shadow(node: SceneNode): this {
    if ('effects' in node) {
      const shadow = htmlShadow(node);
      if (shadow) {
        this.addStyles(
          formatWithJSX('box-shadow', this.isJSX, htmlShadow(node)),
        );
      }
    }
    return this;
  }

  size(node: SceneNode, optimize: boolean): this {
    const { width, height } = htmlSizePartial(node, this.isJSX, optimize);

    if (node.type === 'TEXT') {
      switch (node.textAutoResize) {
        case 'WIDTH_AND_HEIGHT':
          break;
        case 'HEIGHT':
          this.addStyles(width);
          break;
        case 'NONE':
        case 'TRUNCATE':
          this.addStyles(width, height);
          break;
      }
    } else {
      this.addStyles(width, height);
    }

    return this;
  }

  autoLayoutPadding(node: SceneNode, optimizeLayout: boolean): this {
    if ('paddingLeft' in node) {
      this.addStyles(
        ...htmlPadding(
          (optimizeLayout ? node.inferredAutoLayout : null) ?? node,
          this.isJSX,
        ),
      );
    }
    return this;
  }

  blur(node: SceneNode) {
    if ('effects' in node && node.effects.length > 0) {
      const blur = node.effects.find(
        (e) => e.type === 'LAYER_BLUR' && e.visible,
      );
      if (blur) {
        this.addStyles(
          formatWithJSX(
            'filter',
            this.isJSX,
            `blur(${sliceNum(blur.radius)}px)`,
          ),
        );
      }

      const backgroundBlur = node.effects.find(
        (e) => e.type === 'BACKGROUND_BLUR' && e.visible,
      );
      if (backgroundBlur) {
        this.addStyles(
          formatWithJSX(
            'backdrop-filter',
            this.isJSX,
            `blur(${sliceNum(backgroundBlur.radius)}px)`,
          ),
        );
      }
    }
  }

  build(additionalStyle: Array<string> = []): string {
    this.addStyles(...additionalStyle);

    const formattedStyles = this.styles.map((s) => s.trim());
    let formattedStyle = '';
    if (this.styles.length > 0) {
      if (this.isJSX) {
        formattedStyle = ` style={{${formattedStyles.join(', ')}}}`;
      } else {
        formattedStyle = ` style="${formattedStyles.join('; ')}"`;
      }
    }
    if (this.name.length > 0) {
      const classOrClassName = this.isJSX ? 'className' : 'class';
      return ` ${classOrClassName}="${this.name}"${formattedStyle}`;
    } else {
      return formattedStyle;
    }
  }
  toStyles(additionalStyle: Array<string> = [], defaultStyles: any): any {
    this.addStyles(...additionalStyle);
    let formattedStyle: any = {};
    this.styles.forEach((s) => {
      const [key, value] = s.split(':').map((item) => item.trim());
      // 去掉前后的引号
      formattedStyle[key] =
        value.startsWith("'") && value.endsWith("'")
          ? value.slice(1, -1)
          : value;
    });
    // Remove values from formattedStyle that are the same as defaultStyles
    for (const key in defaultStyles) {
      if (formattedStyle[key] === defaultStyles[key]) {
        delete formattedStyle[key];
      }
      if (defaultStyles[key] === 'delete') {
        delete formattedStyle[key];
      }
    }
    return formattedStyle;
  }
}
