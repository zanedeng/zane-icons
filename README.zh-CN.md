# @zanejs/icons

<div align="center">
  <a href="https://zanejs.com"><img alt="zanejs logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>


[![npm version](https://img.shields.io/npm/v/@zanejs/icons.svg)](https://www.npmjs.com/package/@zanejs/icons)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007acc?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Stencil](https://img.shields.io/badge/Stencil-2F9E44?logo=stencil&logoColor=white)](https://stenciljs.com/)


**中文** | [English](./README.md)

</div>

## 简介

一个基于 Stencil 构建的现代化原生 Web Components 图标库，包含 285+ 个精心设计的 SVG 图标，不受框架限制，运行在 JS/Vue/React/Angular 项目。

## 特性

- **285+ 图标**：涵盖常用 UI 场景的丰富图标集
- **Web Component**：原生 Custom Elements，支持所有现代框架
- **高性能**：基于 Stencil 编译器优化
- **易使用**：简单的 HTML 标签即可使用
- **可定制**：支持 CSS 自定义属性和样式覆盖
- **多格式支持**：ESM、CommonJS 和 UMD
- **TypeScript 支持**：完整的类型定义
- **响应式**：适配各种屏幕尺寸
- **双色调支持**：支持 filled 和 outline 两种风格

## 安装

### NPM

```bash
npm install @zanejs/icons
```

### PNPM

```bash
pnpm add @zanejs/icons
```

### YARN

```bash
yarn add @zanejs/icons
```

## 快速开始

### 基础用法

直接在 HTML 中使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/@zanejs/icons@1.0.1/dist/zane-icons/zane-icons.esm.js"></script>
  <title>Zane Icons Demo</title>
</head>
<body>
  <!-- 使用搜索图标 -->
  <zane-icon-search style="font-size: 32px; color: #333;"></zane-icon-search>

  <!-- 使用用户图标 -->
  <zane-icon-user style="font-size: 24px; color: #666;"></zane-icon-user>

  <!-- 使用关闭图标 -->
  <zane-icon-close-bold style="font-size: 20px; color: #999;"></zane-icon-close-bold>
</body>
</html>
```

### 在 React 中使用

```diff
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

+ import { defineCustomElements } from '@zanejs/ui/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

+ defineCustomElements();

```

```tsx
import React from 'react';

function MyComponent() {
  return (
    <div>
      <zane-icon-search style={{ fontSize: '32px', color: '#333' }} />
      <zane-icon-user style={{ fontSize: '24px', color: '#666' }} />
    </div>
  );
}

```

### 在 Vue 中使用


```diff
// src/main.ts

import { createApp } from 'vue'
import App from './App.vue';
+ import { defineCustomElements } from '@zanejs/icons/loader';

+ defineCustomElements();

createApp(App).mount('#app')
```

修改 vite.config.js，vue 编译兼容自定义元素

```diff
import { defineConfig } from 'vite';

export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
+        isCustomElement: tag => tag.startsWith('zane-')
      },
    },
  },
});
```

## 图标分类

### 箭头导航 (Arrows)
- `zane-icon-arrow-up` / `zane-icon-arrow-up-bold`
- `zane-icon-arrow-down` / `zane-icon-arrow-down-bold`
- `zane-icon-arrow-left` / `zane-icon-arrow-left-bold`
- `zane-icon-arrow-right` / `zane-icon-arrow-right-bold`
- `zane-icon-d-arrow-left`
- `zane-icon-back`
- `zane-icon-top`
- `zane-icon-bottom-left`
- `zane-icon-bottom-right`
- `zane-icon-caret-right`
- `zane-icon-fold`
- `zane-icon-expand`
- `zane-icon-pointer`

### 通用操作 (Actions)
- `zane-icon-search`
- `zane-icon-plus`
- `zane-icon-check`
- `zane-icon-close-bold`
- `zane-icon-edit`
- `zane-icon-delete`
- `zane-icon-download`
- `zane-icon-upload-filled`
- `zane-icon-share`
- `zane-icon-link`
- `zane-icon-scissor`
- `zane-icon-copy`

### 状态反馈 (Status)
- `zane-icon-success-filled`
- `zane-icon-warning` / `zane-icon-warning-filled`
- `zane-icon-info-filled`
- `zane-icon-circle-check` / `zane-icon-circle-check-filled`
- `zane-icon-remove-filled`
- `zane-icon-checked`
- `zane-icon-failed`

### 通知提醒 (Notifications)
- `zane-icon-bell` / `zane-icon-bell-filled`
- `zane-icon-mute-notification`

### 用户相关 (User)
- `zane-icon-user` / `zane-icon-user-filled`
- `zane-icon-avatar`
- `zane-icon-key`

### 位置定位 (Location)
- `zane-icon-location-filled`
- `zane-icon-map-location`
- `zane-icon-position`
- `zane-icon-place`
- `zane-icon-add-location`

### 媒体控制 (Media)
- `zane-icon-video-camera-filled`
- `zane-icon-video-pause`
- `zane-icon-microphone`
- `zane-icon-headset`
- `zane-icon-stopwatch`
- `zane-icon-watch`
- `zane-icon-alarm-clock`

### 购物商务 (Shopping & Business)
- `zane-icon-shopping-bag`
- `zane-icon-wallet`
- `zane-icon-price-tag`
- `zane-icon-discount`
- `zane-icon-postcard`
- `zane-icon-document` / `zane-icon-document-add`
- `zane-icon-briefcase`
- `zane-icon-platform`

### 工具设置 (Tools)
- `zane-icon-tools`
- `zane-icon-setting`
- `zane-icon-management`
- `zane-icon-connection`
- `zane-icon-cpu`
- `zane-icon-switch-button`

### 图表统计 (Charts)
- `zane-icon-pie-chart`
- `zane-icon-trend-charts`
- `zane-icon-histogram`
- `zane-icon-data-board`

### 体育运动 (Sports)
- `zane-icon-soccer`
- `zane-icon-baseball`
- `zane-icon-basketball`

### 食物饮料 (Food & Drink)
- `zane-icon-coffee`
- `zane-icon-mug`
- `zane-icon-cold-drink`
- `zane-icon-ice-drink`
- `zane-icon-ice-tea`
- `zane-icon-takeaway-box`
- `zane-icon-bowl`
- `zane-icon-fork-spoon`
- `zane-icon-knife-fork`
- `zane-icon-grape`
- `zane-icon-dessert`
- `zane-icon-ice-cream-square`
- `zane-icon-apple`
- `zane-icon-sugar`

### 交通出行 (Transportation)
- `zane-icon-bicycle`
- `zane-icon-ship`

### 建筑设施 (Buildings)
- `zane-icon-house`
- `zane-icon-home-filled`
- `zane-icon-school`
- `zane-icon-first-aid-kit`

### 自然科学 (Science)
- `zane-icon-magnet`
- `zane-icon-lightning`

### 休闲娱乐 (Entertainment)
- `zane-icon-trophy`
- `zane-icon-gold-medal`

### 天气相关 (Weather)
- `zane-icon-sunrise`
- `zane-icon-partly-cloudy`
- `zane-icon-umbrella`

### 健康安全 (Health & Safety)
- `zane-icon-smoking`
- `zane-icon-no-smoking`

### 其他 (Others)
- `zane-icon-star-filled`
- `zane-icon-flag`
- `zane-icon-opportunity`
- `zane-icon-present`
- `zane-icon-list`
- `zane-icon-grid`
- `zane-icon-brush` / `zane-icon-brush-filled`
- `zane-icon-picture-rounded`
- `zane-icon-calendar`
- `zane-icon-camera-filled`

> 💡 **提示**：完整的图标列表可以在运行 `npm run build` 后查看 `dist/zane-icon.md` 文件

## 自定义样式

### 修改大小

```css
/* 全局设置 */
zane-icon-search {
  font-size: 32px; /* 默认 16px */
}

/* 单独设置 */
.icon-large {
  font-size: 48px;
}
```

### 修改颜色

```css
/* 使用 currentColor */
zane-icon-user {
  color: #333;
}

/* 继承父元素颜色 */
.parent-element {
  color: #007acc;
}
.parent-element zane-icon-search {
  /* 继承 #007acc */
}

/* 使用 CSS 自定义属性 */
zane-icon-star-filled {
  --icon-color: gold;
  color: var(--icon-color);
}
```

### 自定义 SVG 属性

```html
<zane-icon-search
  style="font-size: 32px; color: #333;"
  fill="currentColor"
  stroke="none"
  aria-label="搜索图标"
  role="img"
/>
```

## 开发指南

### 环境要求

- Node.js >= 16
- pnpm (推荐) 或 npm

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动开发服务器（带监视模式）
pnpm run start

# 运行测试
pnpm run test
```

### 构建项目

```bash
# 构建生产版本
pnpm run build

# 或使用 stub 命令
pnpm run stub
```

### 生成组件

图标组件是从 SVG 文件自动生成的：

1. 将 SVG 文件放入 `svg/` 目录
2. 运行 `npm run transform` 转换图标
3. 运行 `npm run build` 构建组件

### 转换 SVG 图标

```bash
npm run transform
```

这个命令会：
- 读取 `svg/` 目录下的所有 SVG 文件
- 使用 SVGO 优化 SVG 代码
- 将优化的 SVG 转换为 Stencil 组件
- 生成到 `src/components/` 目录

## 项目结构

```
zane-icons/
├── svg/                      # 原始 SVG 图标文件
│   ├── search.svg
│   ├── user.svg
│   └── ...
├── src/                      # 源代码
│   ├── components/           # 生成的组件文件
│   │   ├── search.tsx
│   │   ├── user.tsx
│   │   └── ...
│   ├── index.ts             # 组件索引
│   └── index.html           # 示例页面
├── dist/                     # 构建输出目录
├── loader/                   # 组件加载器
├── scripts/                  # 构建脚本
│   └── transfer-svg.mjs      # SVG 转换脚本
├── stencil.config.ts         # Stencil 配置
├── package.json
└── README.md
```

## 技术栈

- **[Stencil](https://stenciljs.com/)** - 组件编译器
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全
- **[SVGO](https://github.com/svg/svgo)** - SVG 优化
- **[Jest](https://jestjs.io/)** - 单元测试
- **[Puppeteer](https://pptr.dev/)** - 端到端测试

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

### 添加新图标

1. 准备符合规范的 SVG 文件：
   - 尺寸：1024x1024
   - 颜色：使用 `currentColor` 以便继承父元素颜色
   - 最小化：去除不必要的元数据

2. 将 SVG 文件放入 `svg/` 目录

3. 运行转换命令：
   ```bash
   npm run transform
   npm run build
   ```

4. 提交生成的组件文件

## 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

## 致谢

感谢所有为这个项目做出贡献的开发者们！

---

如果这个项目对你有帮助，请给它一个星标！
