# 👋 我的第一个个人网站

欢迎来到个人网站 Workshop！这是一个专为零基础学员设计的项目模板，你将在 1 小时内创建属于自己的个人介绍网站。

## 📚 目录

- [开始之前](#-开始之前)
- [项目结构](#-项目结构)
- [开发指南](#-开发指南)
- [Helper 组件使用](#-helper-组件使用)
- [部署到 Vercel](#-部署到-vercel)
- [常见问题](#-常见问题)

---

## 📁 文件结构

```
my-first-site/
├── src/
│   ├── views/              # 页面文件
│   │   ├── HomeView.vue    # 首页 - 展示头像和姓名
│   │   ├── AboutView.vue   # 关于我 - 详细介绍
│   │   └── FavoriteView.vue # 兴趣爱好 - 兴趣展示
│   ├── assets/             # 静态资源（图片、CSS等）
│   ├── App.vue             # 根组件
│   └── main.js             # 入口文件
└── README.md               # 说明文档
```

## 💻 开发指南

### 修改网站内容的步骤

1. **打开对应的页面文件**
   - 首页：`src/views/HomeView.vue`
   - 关于我：`src/views/AboutView.vue`
   - 兴趣爱好：`src/views/FavoriteView.vue`

2. **阅读文件中的注释**
   - 每个文件都有详细的注释说明
   - 找到标有 `❗️` 的地方，这些是可以修改的内容

3. **修改文字和图片**
   - 直接在代码中修改文字
   - 更换图片地址或上传本地图片

4. **保存并查看效果**
   - 按 `Ctrl + S`（Windows）或 `Cmd + S`（Mac）保存
   - 浏览器会自动刷新显示新内容

### 常用的样式修改

#### 文字颜色

```html
<p class="text-blue-500">这是蓝色文字</p>
<p class="text-red-500">这是红色文字</p>
<p class="text-green-500">这是绿色文字</p>
```

#### 文字大小

```html
<p class="text-sm">小号文字</p>
<p class="text-base">普通文字</p>
<p class="text-lg">大号文字</p>
<p class="text-2xl">超大文字</p>
```

#### 字体粗细

```html
<p class="font-light">细体</p>
<p class="font-normal">正常</p>
<p class="font-bold">粗体</p>
```

---

## 🎨 Helper 组件使用

为了让零基础学员更容易理解网页布局，我们提供了三个辅助组件：

### Column 组件 - 垂直排列

**作用**：让内容从上到下排列（纵向布局）

**使用方法**：

```vue
<Column align="center">
  <div>第一项内容</div>
  <div>第二项内容</div>
  <div>第三项内容</div>
</Column>
```

**参数说明**：

- `align="left"` - 内容靠上对齐
- `align="center"` - 内容居中对齐（默认）
- `align="right"` - 内容靠下对齐
- `align="between"` - 内容两端对齐
- `align="around"` - 内容周围均匀分布
- `align="evenly"` - 内容完全均匀分布

**示例效果**：

```
┌─────────┐
│  内容1  │
│  内容2  │
│  内容3  │
└─────────┘
```

---

### Row 组件 - 水平排列

**作用**：让内容从左到右排列（横向布局）

**使用方法**：

```vue
<Row align="center">
  <div>项目1</div>
  <div>项目2</div>
  <div>项目3</div>
</Row>
```

**参数说明**：

- `align="left"` - 内容靠左对齐
- `align="center"` - 内容居中对齐（默认）
- `align="right"` - 内容靠右对齐
- `align="between"` - 内容两端对齐
- `align="around"` - 内容周围均匀分布
- `align="evenly"` - 内容完全均匀分布

**示例效果**：

```
┌─────────────────────┐
│ 内容1  内容2  内容3 │
└─────────────────────┘
```

---

### Grid 组件 - 网格布局

**作用**：创建网格布局，自动排列卡片（类似相册）

**使用方法**：

```vue
<Grid :cols="2" gap="4">
  <div>卡片1</div>
  <div>卡片2</div>
  <div>卡片3</div>
  <div>卡片4</div>
</Grid>
```

**参数说明**：

- `:cols` - 每行显示几列
  - `:cols="1"` - 每行1个（占满整行）
  - `:cols="2"` - 每行2个
  - `:cols="3"` - 每行3个
  - `:cols="4"` - 每行4个
  - 最多支持 12 列

- `gap` - 卡片之间的间距
  - `gap="2"` - 小间距
  - `gap="4"` - 中等间距
  - `gap="6"` - 大间距
  - 可选值：`"0"`, `"1"`, `"2"`, `"3"`, `"4"`, `"5"`, `"6"`, `"8"`, `"10"`

**示例效果（2列）**：

```
┌──────────┬──────────┐
│  卡片1   │  卡片2   │
├──────────┼──────────┤
│  卡片3   │  卡片4   │
└──────────┴──────────┘
```

**示例效果（3列）**：

```
┌──────┬──────┬──────┐
│ 卡片1│ 卡片2│ 卡片3│
├──────┼──────┼──────┤
│ 卡片4│ 卡片5│ 卡片6│
└──────┴──────┴──────┘
```

---

### 组件组合使用

你可以灵活组合这些组件来实现复杂的布局：

```vue
<!-- 外层垂直排列，内层水平排列 -->
<Column align="center">
  <h1>我的标题</h1>
  <Row align="center">
    <img src="photo1.jpg" />
    <img src="photo2.jpg" />
  </Row>
</Column>
```

```vue
<!-- 网格布局中嵌套其他内容 -->
<Grid :cols="2" gap="4">
  <div>
    <Row align="left">
      <span>图标</span>
      <span>标题</span>
    </Row>
    <p>描述文字</p>
  </div>
  <div>第二个卡片</div>
</Grid>
```

---

## 🚀 部署到 Vercel

完成网站开发后，你可以将它免费部署到互联网上，让全世界都能访问！

---

## 📖 学习资源

- **Vue.js 官方文档**：https://cn.vuejs.org/
- **Tailwind CSS 文档**：https://tailwindcss.com/docs
- **MDN Web 文档**：https://developer.mozilla.org/zh-CN/
- **Emoji 查找**：https://emojipedia.org/

---

## 🎉 祝贺

恭喜你完成了第一个个人网站！继续探索和学习，你可以：

- 添加更多页面和功能
- 学习更多 CSS 样式
- 添加动画效果
- 集成第三方服务（评论、统计等）

**记住：每个伟大的开发者都是从这里开始的！** 🚀

---

## 📞 需要帮助？

如果在开发过程中遇到问题：

1. 仔细阅读代码中的注释
2. 查看本文档的常见问题部分
3. 向讲师或助教寻求帮助
4. 在网上搜索相关问题（Stack Overflow、GitHub Issues）

**Happy Coding! 💻✨**
