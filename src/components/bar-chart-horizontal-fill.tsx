import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-bar-chart-horizontal-fill'
  })
  export class ZaneIconBarChartHorizontalFill {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3V7H3V3H12ZM16 17V21H3V17H16ZM22 10V14H3V10H22Z"/></svg></Host>;
    }
  }
  