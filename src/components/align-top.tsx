import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-align-top'
  })
  export class ZaneIconAlignTop {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21V5H3V3ZM8 11V21H6V11H3L7 7L11 11H8ZM18 11V21H16V11H13L17 7L21 11H18Z"/></svg></Host>;
    }
  }
  