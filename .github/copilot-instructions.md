# Copilot 使用说明（针对本仓库）

下面的说明帮助 AI 编码代理快速在此项目中变得高效：重点说明架构、约定、常用命令和示例代码片段。

1) 项目概览
- 框架：Vue 3 + Vite（入口：`src/main.js`，主组件：`src/App.vue`）。
- 路由：使用 `vue-router`，路由定义在 `src/router/index.js`，使用懒加载（例如：component: () => import('../views/HomeView.vue')）。
- 样式：Tailwind + 局部 scoped CSS（全局样式在 `src/assets/main.css`）。
- 自动组件导入：Vite 插件 `unplugin-vue-components` 配置在 `vite.config.js`，会自动全局导入 `src/components/helper` 下的组件（dts 已开启）。
- 介绍：这个是为无任何开发经验的学生准备的Web开发项目模板，使不同背景的学生在Workshop中能够快速上手并轻松构建出他们的第一个网站。 workshop

2) 运行与构建（必须遵循）
请务必使用 pnpm 进行包管理和脚本运行：
- 开发服务器：`pnpm dev`（使用 Vite）。
- 生产构建：`pnpm build`。
- 本地预览：`pnpm preview`。
- 代码格式化：`pnpm format`（prettier，针对 `src/`）。
- package.json 在根目录，Node 引擎要求见 `package.json` 的 `engines` 字段。

3) 代码约定与模式（务必遵守）
- 小型布局/原子组件位于 `src/components/helper`，例如 `Column.vue`, `Grid.vue`, `Row.vue`。这些组件通常：
  - 使用 `defineProps` 定义简单 props（见 `Column.vue` 的 `align`）。
  - 使用 `computed` 计算样式类。
- 导航和路由链接：`src/components/Navigation.vue` 使用 `<router-link>` 并依赖路由 name/meta。（如果需要在页面标题中使用 meta，请在路由 guard 或页面组件中读取 `route.meta.title`。）
- 图标：使用 `@iconify/vue`，组件中以 `<Icon icon="solar:home-2-bold-duotone" />` 的形式使用。
- 单文件组件均使用 `<script setup>` 语法（参考 `src/views/*.vue`、`src/components/*`）。

4) 常见任务示例（具体而非笼统）
- 添加新页面：在 `src/views/` 新建 `FooView.vue`，然后在 `src/router/index.js` 添加一条路由：

  {
    path: '/foo',
    name: 'foo',
    meta: { title: 'Foo 页面' },
    component: () => import('../views/FooView.vue'),
  }

- 添加可复用小组件：把文件放 `src/components/helper/`（自动导入），可直接在任意 SFC 中引用，例如 `<Column>` 或 `<Grid cols="3">`。

5) 项目细节与陷阱（发现即可复现）
- 由于使用 `unplugin-vue-components` 自动导入 helper 下组件，请勿在 helper 目录下创建和普通组件同名导出造成冲突。
- 大多数样式通过 Tailwind 原子类完成，但 helper 组件内部也有 scoped CSS（见 `Column.vue`、`Grid.vue` 的实现）。修改布局时同时检查两处。
- 路由使用懒加载，编辑路由时注意相对路径是否正确（`../views/...`）。

6) 可快速参考的具体文件
- 入口与挂载：`src/main.js`
- 路由配置：`src/router/index.js`
- 主 App：`src/App.vue`
- 导航：`src/components/Navigation.vue`
- helper 组件：`src/components/helper/Column.vue`、`src/components/helper/Grid.vue`
- 构建/插件：`vite.config.js`
- 依赖与脚本：`package.json`

7) 不存在/未发现（避免浪费时间）
- 仓库中没有测试框架配置（例如 jest / vitest），也无 CI 配置文件。不要尝试查找不存在的测试命令。

8) 编辑器/格式化与风格
- 使用项目内的 Prettier（`npm run format`）保持风格一致。
- 代码注释与 UI 文案多为中文（参见 `src/views/HomeView.vue` 注释），生成/修改文案时优先使用中文。

如果本文件有遗漏或某些约定需要更详细的例子（比如路由守卫、页面标题管理或部署步骤），请说明我要补充的部分。谢谢！
