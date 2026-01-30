import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-font-sans-serif'
  })
  export class ZaneIconFontSansSerif {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4H19V6H10V12H18V14H10V21H7V4Z"/></svg></Host>;
    }
  }
  