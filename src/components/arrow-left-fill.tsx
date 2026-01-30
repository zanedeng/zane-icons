import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-arrow-left-fill'
  })
  export class ZaneIconArrowLeftFill {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13V20L4 12L12 4V11H20V13H12Z"/></svg></Host>;
    }
  }
  