# `@oopsunome/data-uri-fns`
目标是，为 ["data" URL](https://tools.ietf.org/html/rfc2397) 提供最全面、最简单、最一致的工具集。

> 暂时仅支持 [Node.js][Node]。

## 目录

- [安装](#安装)
- [使用](#使用)
    - [`getMimeType(uri)`](#getmimetypeuri)
    - [`saveAsFile(options)`](#saveasfileoptions)
    - [`saveAsFileSync(options)`](#saveasfilesyncoptions)
- [参与开发](#参与开发)
- [贡献指南](#贡献指南)
- [证书](#证书)
- [待办](#待办)

## 安装

```shell
# 使用 NPM
npm install @oopsunome/data-uri-fns lodash

# 使用 Yarn
yarn add @oopsunome/data-uri-fns lodash
```

## 使用

#### `getMimeType(uri)`

- `uri` {String} 待操作的目标统一资源标识符
- 返回: {String} 媒体类型

从 [统一资源标识符](https://en.wikipedia.org/wiki/Uniform_resource_identifier) 中获取媒体类型。

```javascript
import { getMimeType } from '@oopsunome/data-uri-fns';

// 省略大量 base64 数据
console.log(
  getMimeType('data:image/png;base64,iVBOR...')
);

/**
 * 输出：
 * image/png
 */
```

#### `saveAsFile(options)`

- `options` {Object}
  - `dataURI` {String} 待操作的目标统一资源标识符
  - `dest` {String} 输出位置

异步方法，将 [统一资源标识符](https://en.wikipedia.org/wiki/Uniform_resource_identifier) 保存为文件。

```javascript
import { saveAsFile } from '@oopsunome/data-uri-fns';

(async () => {
  try {

    // 省略大量 base64 数据
    await saveAsFile({
      dataURI: 'data:image/png;base64,iVBOR...',
      dest: process.cwd(),
    });
  } catch (error) {
    throw new Error(error);
  }
})()
```

#### `saveAsFileSync(options)`

- `options` {Object}
  - `dataURI` {String} 待操作的目标统一资源标识符
  - `dest` {String} 输出位置

同步方法，将 [统一资源标识符](https://en.wikipedia.org/wiki/Uniform_resource_identifier) 保存为文件。

```javascript
import { saveAsFileSync } from '@oopsunome/data-uri-fns';

// 省略大量 base64 数据
saveAsFileSync({
  dataURI: 'data:image/png;base64,iVBOR...',
  dest: process.cwd(),
});
```

## 参与开发

**准备开发环境**

详细参见 [SETUP.md]()。

**安装依赖**

[`@oopsunome/data-uri-fns`][@oopsunome/data-uri-fns] 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

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

[`@oopsunome/data-uri-fns`][@oopsunome/data-uri-fns] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。

## 待办

- [X] 支持 `解构` 或 `直接引用` 2 种暴露接口的方式；
- [X] 开发的时候使用 `ES 6/7`，支持构建 `ES 5` 模式的模块；
- [X] 不将 `lodash` 等库打包；
- [X] 功能测试；
- [X] 捆绑 [Git 倒钩](https://github.com/typicode/husky)；
- [X] ESlint 检测；
- [X] 自动化生成所有依赖的开源证书；
- [ ] 修改 `saveAsFile(options)` 为 `saveAsFile(uri, dest)`
- [ ] 修改 `saveAsFileSync(options)` 为 `saveAsFileSync(uri, dest)`
- [ ] 保存成文件后输出它的位置；
- [ ] 更新日志；
- [ ] 谁在使用 [`@oopsunome/data-uri-fns`][@oopsunome/data-uri-fns]?
- [ ] 完善 [贡献指南][贡献指南]；
- [ ] 使用 [David DM][DavidDM] 实现 `依赖是否最新` 检测；
- [ ] 使用 [Travis CI][TravisCI] 实现持续集成；
- [ ] 使用 [Coveralls][Coveralls] 可视化测试用例覆盖率；
- [ ] 使用 [Codacy][Codacy] 实现代码质量检测；
- [ ] 编写 [开发环境指南][SETUP.md]；
- [ ] 文档：在哪里可以获得更多帮助？
- [ ] 文档：设计思想；
- [ ] 文档：维护策略；
- [ ] 性能测试；
- [ ] 编写 [发布流程指南][发布流程指南]；
- [ ] 编写 [Git 指南][Git指南]；
- [ ] 编写 [命名指南][命名指南]；
- [ ] 编写 [版本指南][版本指南]；
- [ ] 完善 [贡献指南][贡献指南]；
- [ ] 文档：[编码风格指南][编码风格指南]；



[编码风格指南]: #
[版本指南]: #
[命名指南]: #
[Git指南]: #
[发布流程指南]: #
[Git倒钩]: https://github.com/typicode/husky
[DavidDM]: https://david-dm.org/
[TravisCI]: https://travis-ci.org/
[Coveralls]: https://coveralls.io/
[Codacy]: https://www.codacy.com/
[SETUP.md]: #
[贡献指南]: https://github.com/iTonyYo/data-uri-fns/blob/master/CONTRIBUTING.md
[证书]: https://github.com/iTonyYo/data-uri-fns/blob/master/LICENSE.md
[Node]: https://nodejs.org/
[@oopsunome/data-uri-fns]: https://github.com/iTonyYo/data-uri-fns
