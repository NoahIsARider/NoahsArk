# AGENTS.md

## 项目概览
复古未来主义风格的链接分组展示页面（Link Portal），采用 Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui 技术栈。

## 构建与运行
- 开发：`pnpm dev`
- 构建：`pnpm build`
- 启动：`pnpm start`
- 类型检查：`pnpm ts-check`
- Lint：`pnpm lint`

## 目录结构
```
src/
├── app/
│   ├── layout.tsx          # 根布局（dark mode, 字体配置）
│   ├── page.tsx            # 主页面（链接分组展示）
│   └── globals.css         # 全局样式（设计 tokens, 动画）
├── components/
│   ├── ui/                 # shadcn/ui 组件库
│   ├── hero-background.tsx # 全屏科幻背景组件
│   └── link-group.tsx      # 链接分组卡片组件
├── hooks/                  # 自定义 Hooks
├── lib/
│   └── utils.ts            # 通用工具函数
└── server.ts               # 自定义服务端入口
public/
├── hero-bg.jpeg            # 主背景图（复古科幻海报）
└── texture-overlay.jpeg    # 纹理叠加层
```

## 设计规范
详见 `DESIGN.md`。核心要点：
- 配色：深空黑 #0a0a0a / 猩红 #e63946 / 象牙白 #f5f0e8 / 冷灰 #6b7b8d / 琥珀 #ffb347
- 字体：Space Grotesk（标题）/ Inter（正文）
- 风格：苏联构成主义 + 包豪斯 + 复古未来主义
- 禁忌：禁止大圆角、蓝紫渐变、毛玻璃、对称布局、柔和阴影

## 数据配置
链接数据定义在 `src/app/page.tsx` 的 `linkGroups` 数组中，每个分组包含：
- `title`: 分组名称
- `index`: 编号（如 '001'）
- `links`: 链接数组，每项含 `label`、`href`、`description`
