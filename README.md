# `data-uri-fns`
目标是，为 ["data" URL](https://tools.ietf.org/html/rfc2397) 提供最全面、最简单、最一致的工具集。

> 暂时仅支持 [Node.js][Node]。

## 目录

- [安装](#安装)
- [使用](#使用)
    - [`getMimeType()`](#getmimetype)
    - [`saveAsFile()`](#saveasfile)
    - [`saveAsFileSync()`](#saveasfilesync)
- [参与开发](#参与开发)
- [贡献指南](#贡献指南)
- [证书](#证书)
- [待办](#待办)

## 安装

```shell
# 使用 NPM
npm install data-uri-fns

# 使用 Yarn
yarn add data-uri-fns
```

## 使用

#### `getMimeType()`

从 [统一资源标识符](https://en.wikipedia.org/wiki/Uniform_resource_identifier) 中获取媒体类型。

```javascript
import { getMimeType } from 'data-uri-fns';

// 省略大量 base64 数据
const base64DataURI = 'data:image/png;base64,iVBOR...';

console.log(
  getMimeType(
    base64DataURI,
    'data:',
    ';base64'
  )
);

/**
 * 输出：
 * image/png
 */
```

#### `saveAsFile()`

异步方法，将 [统一资源标识符](https://en.wikipedia.org/wiki/Uniform_resource_identifier) 保存为文件。

```javascript
import { resolveApp } from './scripts/util';
import saveAsFile from './src/saveAsFile';

// 省略大量 base64 数据
const base64DataURI = 'data:image/png;base64,iVBOR...';

(async () => {
  try {
    await saveAsFile({
      dataURI: base64DataURI,
      dest: resolveApp('async.png'),
    });
  } catch (error) {
    throw new Error(error);
  }
})()
```

#### `saveAsFileSync()`

同步方法，将 [统一资源标识符](https://en.wikipedia.org/wiki/Uniform_resource_identifier) 保存为文件。

```javascript
import saveAsFileSync from './src/saveAsFileSync';
import { resolveApp } from './scripts/util';

// 省略大量 base64 数据
const base64DataURI = 'data:image/png;base64,iVBOR...';

saveAsFileSync({
  dataURI: base64DataURI,
  dest: resolveApp('sync.png'),
});
```

## 参与开发

**准备开发环境**

详细参见 [SETUP.md]()。

**安装依赖**

[`data-uri-fns`][data-uri-fns] 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

**开始开发**

```shell
yarn start
```

**生产构建**

```shell
yarn build
```

**测试**

```shell
yarn test
```

## 贡献指南

仔细查阅 [CONTRIBUTING.md][贡献指南] 以了解详情。

## 证书

[`data-uri-fns`][data-uri-fns] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。

## 待办

- [X] 支持 `解构` 或 `直接引用` 2 种暴露接口的方式；
- [X] 开发的时候使用 `ES 6/7`，支持构建 `ES 5` 模式的模块；
- [X] 不将 `lodash` 等库打包；
- [X] 功能测试；
- [X] 捆绑 [Git 倒钩](https://github.com/typicode/husky)；
- [X] ESlint 检测；
- [X] 自动化生成所有依赖的开源证书；
- [ ] 更新日志
- [ ] 谁在使用 [`data-uri-fns`][data-uri-fns]
- [ ] 完善 [贡献指南][贡献指南]
- [ ] 使用 [David DM](https://david-dm.org/) 实现 `依赖是否最新` 检测；
- [ ] 使用 [Travis CI](https://travis-ci.org/) 实现持续集成；
- [ ] 使用 [Coveralls](https://coveralls.io/) 可视化测试用例覆盖率；
- [ ] 使用 [Codacy](https://www.codacy.com/) 实现代码质量检测；
- [ ] 编写 [`SETUP.md`]()；
- [ ] 文档：在哪里可以获得更多帮助？
- [ ] 文档：设计思想
- [ ] 文档：维护策略
- [ ] 性能测试；

[贡献指南]: #
[证书]: #
[Node]: https://nodejs.org/
[data-uri-fns]: #
