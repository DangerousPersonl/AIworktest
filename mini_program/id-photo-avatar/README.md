# AI证件照头像制作小程序

## 项目简介

基于微信原生小程序开发的AI证件照头像制作工具，采用 **WXML + WXSS + JavaScript** 技术栈，无需任何框架依赖，轻量化、高性能、零运维。

## 技术架构

- **前端框架**：微信原生小程序（WXML + WXSS + JavaScript）
- **数据存储**：本地缓存（Storage）
- **AI能力**：第三方商用API（人像抠图、头像生成）
- **商业化**：微信流量主广告 + 付费会员

## 核心功能

### 证件照制作
- 📷 相册/相机上传人像照片
- ✂️ 智能AI抠图
- 🎨 底色切换（白色/蓝色/红色）
- 📐 标准尺寸裁切（1寸/2寸）
- 💾 免费低清保存 / 付费高清原图

### AI头像生成
- 🖼️ 图片转风格（卡通、油画、素描、3D、像素、水彩）
- ✍️ 文字生成头像
- 🎭 多风格可选

### 辅助功能
- 📋 历史记录管理
- 👤 个人中心
- 🔒 隐私政策 & 服务协议

## 项目结构

```
id-photo-avatar/
├── dist/                    # 小程序代码目录
│   ├── app.js               # 小程序入口
│   ├── app.json             # 小程序配置
│   ├── app.wxss             # 全局样式
│   ├── sitemap.json         # 站点地图
│   └── pages/               # 页面目录
│       ├── index/           # 首页
│       ├── idphoto/         # 证件照制作
│       ├── avatar/          # AI头像生成
│       ├── preview/         # 预览页面
│       ├── history/         # 历史记录
│       ├── profile/         # 个人中心
│       ├── privacy/         # 隐私政策
│       └── agreement/       # 服务协议
├── project.config.json      # 微信开发者工具配置
├── project.private.config.json  # 私有配置
├── .gitignore              # Git忽略配置
└── README.md               # 项目说明
```

## 使用说明

### 开发环境
1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开微信开发者工具，选择"导入项目"
3. 选择项目目录：`D:\AIworktest\mini_program\id-photo-avatar`
4. 点击"确定"即可预览和开发

### 广告配置
广告组件使用了占位符 `adunit-example-XXX`，上线前需替换为真实的广告单元ID：
- `adunit-example-001` - 首页广告
- `adunit-example-002` - 证件照页面广告
- `adunit-example-003` - 头像生成页面广告
- `adunit-example-004` - 个人中心广告
- `adunit-example-005` - 历史记录广告

### API配置
当前使用模拟数据，正式上线需接入第三方AI图像处理API：
- 人像抠图/证件照换底色API
- AI头像风格化生成API

## 开发规范

### 命名规范
- 页面目录使用小写字母
- 页面文件名统一使用 `index`
- 样式类名使用小写字母加连字符

### 代码风格
- WXML属性使用小写
- JS使用ES6+语法
- WXSS使用rpx单位实现响应式布局

## 合规说明

- 不收集、不泄露、不私自留存用户人像信息
- 不提供人脸换脸、篡改他人人像功能
- 严格遵守微信小程序审核规范
- 广告展示符合微信官方规范

## 维护指南

- 无需日常内容更新
- 每周检查一次API可用性
- 定期更新隐私政策和服务协议
