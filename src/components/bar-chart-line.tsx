import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-bar-chart-line'
  })
  export class ZaneIconBarChartLine {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z"/></svg></Host>;
    }
  }
  