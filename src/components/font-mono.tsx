import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-font-mono'
  })
  export class ZaneIconFontMono {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4H19V6H8V12H18V14H8V21H6V4Z"/></svg></Host>;
    }
  }
  