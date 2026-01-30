import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-upload-fill'
  })
  export class ZaneIconUploadFill {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z"/></svg></Host>;
    }
  }
  