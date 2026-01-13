import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-flag'
  })
  export class ZaneIconFlag {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M288 128h608L736 384l160 256H288v320h-96V64h96z"/></svg></Host>;
    }
  }
  