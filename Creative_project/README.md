# 学习助手 - AI 问答引导式学习

一个基于 Taro 框架开发的微信小程序，通过有趣的问答闯关形式帮助用户轻松学习各种知识。

## 功能特性

### 首页
- 🎯 **自定义主题**：用户可以自由输入想要学习的主题
- ✨ **快速主题选择**：内置 JavaScript、数学知识、英语单词等热门主题
- 📊 **学习统计**：展示学习次数、答题总数、平均得分等数据

### 答题页
- 📝 **问答卡片**：逐个展示题目和选项
- ✅ **即时反馈**：答题后立即显示正确答案和解析
- 📈 **进度展示**：实时显示当前答题进度
- 🏆 **结果统计**：完成答题后展示得分和详细统计

### 记录页
- 📖 **学习历史**：查看所有学习记录
- 📊 **数据概览**：展示学习数据统计

## 技术栈

- **框架**：Taro 4.x + React 18
- **语言**：TypeScript
- **状态管理**：Zustand
- **样式方案**：SCSS + CSS Modules
- **支持平台**：微信小程序、H5

## 快速开始

### 安装依赖

```bash
npm install --legacy-peer-deps
```

### 开发模式

#### 微信小程序
```bash
npm run dev:weapp
```

#### H5
```bash
npm run dev:h5
```

### 构建生产版本

#### 微信小程序
```bash
npm run build:weapp
```

#### H5
```bash
npm run build:h5
```

## 项目结构

```
Creative_project/
├── src/
│   ├── pages/           # 页面文件
│   │   ├── home/        # 首页
│   │   ├── quiz/        # 答题页
│   │   └── record/      # 记录页
│   ├── components/      # 通用组件
│   ├── store/           # 状态管理
│   ├── data/            # Mock 数据
│   ├── types/           # TypeScript 类型定义
│   ├── styles/          # 全局样式
│   ├── app.tsx          # 应用入口
│   └── app.config.ts    # 应用配置
├── config/              # Taro 配置
├── dist/                # 编译输出目录
└── package.json
```

## 页面说明

### 首页 (Home)
- 路径：`/pages/home/index`
- 功能：设置学习主题，查看学习统计

### 答题页 (Quiz)
- 路径：`/pages/quiz/index`
- 功能：闯关答题，查看解析

### 记录页 (Record)
- 路径：`/pages/record/index`
- 功能：查看学习历史记录

## 开发说明

### 新增页面
1. 在 `src/pages/` 下创建新页面目录
2. 页面文件包含：`index.tsx`、`index.module.scss`、`index.config.ts`
3. 在 `src/app.config.ts` 中配置页面路由

### 样式规范
- 使用 SCSS 变量定义主题色和间距
- 采用 CSS Modules 避免样式污染
- 遵循移动端设计规范

## License

MIT
