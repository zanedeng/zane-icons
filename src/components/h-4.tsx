import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-h-4'
  })
  export class ZaneIconh4 {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 20H11V13H4V20H2V4H4V11H11V4H13V20ZM22 8V16H23.5V18H22V20H20V18H14.5V16.66L19.5 8H22ZM20 11.133L17.19 16H20V11.133Z"/></svg></Host>;
    }
  }
  