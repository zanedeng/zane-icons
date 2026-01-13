import { promises as fs, readdir, readFileSync, writeFile } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import { optimize } from 'svgo';

const format = (svgFile) => {
  return optimize(svgFile, {
    plugins: [
      {
        name: 'convertColors',
        params: { currentColor: /^(?!url|none)./ },
      },
      {
        active: true,
        name: 'cleanupListOfValues',
      },
      {
        active: true,
        name: 'removeStyleElement',
      },
      {
        active: false,
        name: 'removeViewBox',
      },
      {
        active: true,
        name: 'removeDimensions',
      },
    ],
  });
};

/**
 * 使用 svgo 的 optimize 方法格式化svg 字符串
 * @param {*} svgFile
 * @returns
 */
const transferSvg = (svgFile) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(format(svgFile).data);
    } catch (error) {
      reject(error);
    }
  });
};

// 异步获取目录下的所有svg文件列表
const getSvgFiles = (dir) => {
  return new Promise((resolve, reject) => {
    readdir(dir, 'utf8', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

const camelCase = (str) => {
  const arr = str.split('-');
  return arr
    .map((c) => {
      const firstChar = c.split('').shift();
      return c.replace(/^([a-z])(.+)/i, `${firstChar?.toUpperCase() ?? ''}$2`);
    })
    .join('');
};

const renderCode = (name, ctx) => {
  const className = camelCase(name);
  return `import { Component, Host, h } from '@stencil/core';

  @Component({
    tag: '${name}'
  })
  export class ${className} {
    render() {
      return <Host class="zane-svg">${ctx}</Host>;
    }
  }
  `;
};

// 所有 icon 标签
export const swcIconTemplate = (entry, outDir) => {
  getSvgFiles(entry).then((res) => {
    const icon = res
      .map((val) => {
        const str = val.replace('.svg', '');
        return `<zane-icon-${str} style="margin-right: 10px;"></zane-icon-${str}>\n`;
      })
      .join('');

    writeFile(`${outDir}/zane-icon.md`, icon, (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

/**
 * 编译 svg 图标为 class 组件
 * @param {*} entry 解析入口目录
 * @param {*} outDir 输出目录
 */
const renderCompFile = (entry, outDir) => {
  const componentsList = [];
  getSvgFiles(entry)
    .then((res) => {
      return res.map(async (c) => {
        const svgFileContent = readFileSync(`${entry}/${c}`, 'utf8');
        const svg = await transferSvg(svgFileContent);
        const name = c.replace('.svg', '');
        componentsList.push(name);
        return {
          content: svg,
          name,
        };
      });
    })
    .then(async (res) => {
      await Promise.allSettled(res).then((arr) => {
        arr.forEach((c) => {
          if (c.value) {
            const name = c.value.name;
            const template = renderCode(`zane-icon-${name}`, c.value.content);
            writeFile(`${outDir}/components/${name}.tsx`, template, (err) => {
              if (err) {
                throw err;
              }
            });
          }
        });
        // 入口文件组件
        writeFile(
          `${outDir}/index.ts`,
          `const icons = [${componentsList.map((c) => `\n'${c}'`)}\n];\nexport default icons;`,
          (err) => {
            if (err) {
              throw err;
            }
          },
        );
      });
    });
};

const __dirname = new URL('..', import.meta.url);
const root = fileURLToPath(__dirname);

const entryDir = join(root, 'svg');
const outputDir = join(root, 'src');

(async function () {
  const items = await fs.readdir(`${outputDir}/components`);
  for (const item of items) {
    try {
      const itemPath = join(`${outputDir}/components`, item);
      await fs.rm(itemPath, { force: true, recursive: true });
    } catch {
      // console.error(
      //   `Error handling item ${item} in ${currentDir}: ${error.message}`,
      // );
    }
  }
  renderCompFile(entryDir, outputDir);
})();
