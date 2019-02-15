import { Component, ComponentInterface, Prop, getMode, h } from '@stencil/core';

import { config } from '../../global/ionic-global';
import { Color, Mode } from '../../interface';

/**
 * @virtualProp {'md' | 'ios'} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-menu-button',
  styleUrls: {
    ios: 'menu-button.ios.scss',
    md: 'menu-button.md.scss'
  },
  shadow: true
})
export class MenuButton implements ComponentInterface {

  private mode = getMode<Mode>(this);

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * Optional property that maps to a Menu's `menuId` prop. Can also be `start` or `end` for the menu side. This is used to find the correct menu to toggle
   */
  @Prop() menu?: string;

  /**
   * Automatically hides the menu button when the corresponding menu is not active
   */
  @Prop() autoHide = true;

  hostData() {
    return {
      class: {
        'button': true,  // ion-buttons target .button
        'ion-activatable': true,
      }
    };
  }

  render() {
    const menuIcon = config.get('menuIcon', 'menu');
    return (
      <ion-menu-toggle menu={this.menu} autoHide={this.autoHide}>
        <button type="button">
          <slot>
            <ion-icon icon={menuIcon} mode={this.mode} color={this.color} lazy={false} />
          </slot>
          {this.mode === 'md' && <ion-ripple-effect type="unbounded"></ion-ripple-effect>}
        </button>
      </ion-menu-toggle>
    );
  }
}
