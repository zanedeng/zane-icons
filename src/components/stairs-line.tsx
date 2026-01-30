import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-stairs-line'
  })
  export class ZaneIconStairsLine {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 3H21V21H3V15H7V11H11V7H15V3ZM17 5V9H13V13H9V17H5V19H19V5H17Z"/></svg></Host>;
    }
  }
  