import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-cross-fill'
  })
  export class ZaneIconCrossFill {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z"/></svg></Host>;
    }
  }
  