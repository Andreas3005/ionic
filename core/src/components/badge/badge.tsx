import { Component, ComponentInterface, Prop, h } from '@stencil/core';

import { Color } from '../../interface';
import { createColorClasses } from '../../utils/theme';

/**
 * @virtualProp {'md' | 'ios'} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-badge',
  styleUrls: {
    ios: 'badge.ios.scss',
    md: 'badge.md.scss'
  },
  shadow: true
})
export class Badge implements ComponentInterface {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  hostData() {
    return {
      class: createColorClasses(this.color)
    };
  }

  render() {
    return <slot></slot>;
  }
}
