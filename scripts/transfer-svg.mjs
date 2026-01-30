import { promises as fs, readdir, readFileSync, writeFile } from 'node:fs';
import { join, basename, dirname } from 'node:path';
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

// 异步递归获取目录下的所有svg文件路径列表和目录分类
const getSvgFiles = (dir, baseDir = dir) => {
  return new Promise((resolve, reject) => {
    readdir(dir, { withFileTypes: true }, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const promises = files.map(async (file) => {
          const filePath = join(dir, file.name);
          if (file.isDirectory()) {
            // 如果是目录，递归获取子目录中的文件
            return getSvgFiles(filePath, baseDir);
          } else if (file.name.endsWith('.svg')) {
            // 如果是svg文件，返回绝对路径和相对目录路径
            const relativePath = dirname(filePath).replace(baseDir + '/', '');
            return {
              filePath,
              category: relativePath,
              baseName: basename(filePath, '.svg')
            };
          }
        });

        Promise.all(promises)
          .then((results) => {
            // 扁平化结果
            const flatResults = results.flat();
            resolve(flatResults.filter(Boolean));
          })
          .catch(reject);
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
      .map((item) => {
        return `<zane-icon-${item.baseName} style="margin-right: 10px;"></zane-icon-${item.baseName}>\n`;
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
  const categoryMap = {}; // 用于记录分类和组件的映射关系

  getSvgFiles(entry)
    .then((res) => {
      return res.map(async (item) => {
        const svgFileContent = readFileSync(item.filePath, 'utf8');
        const svg = await transferSvg(svgFileContent);
        const name = item.baseName;
        componentsList.push(name);

        // 记录分类信息，如果category为空则归类为'root'
        const category = item.category || 'root';
        if (!categoryMap[category]) {
          categoryMap[category] = [];
        }
        categoryMap[category].push(name);

        return {
          content: svg,
          name,
          category,
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

        // 生成包含分类信息的入口文件
        const categoryExport = Object.entries(categoryMap)
          .map(([cat, icons]) => {
            return `  '${cat}': [${icons.map(icon => `\n    '${icon}'`).join(',')}\n  ],`;
          })
          .join('\n');

        writeFile(
          `${outDir}/index.ts`,
          `const icons = [${componentsList.map((c) => `\n'${c}'`)}\n];

const iconCategories = {
${categoryExport}
};

export default icons;
export { iconCategories };`,
          (err) => {
            if (err) {
              throw err;
            }
          },
        );

        // 生成一个独立的分类索引文件
        writeFile(
          `${outDir}/categories.ts`,
          `const iconCategories = {
${categoryExport}
};

export default iconCategories;`,
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
