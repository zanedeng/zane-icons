import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-sort-desc'
  })
  export class ZaneIconSortDesc {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"/></svg></Host>;
    }
  }
  