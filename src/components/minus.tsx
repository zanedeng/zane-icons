import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-minus'
  })
  export class ZaneIconMinus {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"/></svg></Host>;
    }
  }
  