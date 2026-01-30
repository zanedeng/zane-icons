import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: 'zane-icon-bar-chart-horizontal-line'
  })
  export class ZaneIconBarChartHorizontalLine {
    render() {
      return <Host class="zane-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"/></svg></Host>;
    }
  }
  