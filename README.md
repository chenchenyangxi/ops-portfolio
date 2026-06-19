# 运维开发工程师作品集

这是一个使用原生 HTML、CSS 和 JavaScript 构建的静态作品集，用于展示 Linux、阿里云、监控平台、Python / Shell 脚本、影刀 RPA、Dify 与 AI 辅助运维实践。

项目不依赖 npm，也没有前端构建步骤。页面可直接通过静态服务器预览和部署。

## 技术栈

- HTML5
- CSS3
- 原生 JavaScript
- 静态图片与 PDF
- Python 静态文件服务器（仅用于本地预览）

## 本地预览

进入项目目录：

```bash
cd /Users/chen/Desktop/github-projects/ops-portfolio
```

启动静态服务器：

```bash
python3 -m http.server 8000
```

浏览器访问：

```text
http://127.0.0.1:8000
```

停止服务器时，在运行命令的终端按 `Ctrl+C`。

本项目不需要执行 `npm install`、`npm run dev` 或 `npm run build`。

## 主要目录

```text
ops-portfolio/
├── index.html                         # 首页
├── pages/
│   ├── projects.html                 # 项目总览
│   ├── skills.html                   # 技能与项目证明
│   ├── about.html                    # 关于我
│   ├── contact.html                  # 联系方式
│   └── project-name/
│       ├── index.html                # 项目详情
│       └── records/
│           ├── index.html            # 记录索引
│           └── stage-01-topic.html   # 阶段记录
├── assets/
│   ├── css/style.css                 # 全站共享样式
│   ├── js/main.js                    # 菜单、主题切换与返回顶部
│   └── images/projects/              # 项目图片
└── templates/
    ├── project-template.html         # 项目详情页模板
    └── record-template.html          # 阶段记录页模板
```

`templates/` 是本地辅助目录，已加入 `.gitignore`。模板不会随 Git 上传，复制到 `pages/` 后生成的正式项目页面可以正常发布。

## 新增项目步骤

### 1. 确定项目目录名

目录名使用简短英文小写，单词之间使用连字符：

```text
pages/project-name/
├── index.html
└── records/
    ├── index.html
    ├── stage-01-topic.html
    └── stage-02-topic.html
```

图片目录与项目目录保持同名：

```text
assets/images/projects/project-name/
├── overview/
├── stage-01/
└── stage-02/
```

### 2. 复制本地模板

创建目录：

```bash
mkdir -p pages/project-name/records
mkdir -p assets/images/projects/project-name/overview
```

复制项目详情页模板：

```bash
cp templates/project-template.html pages/project-name/index.html
```

复制阶段记录页模板：

```bash
cp templates/record-template.html pages/project-name/records/stage-01-topic.html
```

记录索引页可以复制结构相近的现有项目，例如：

```bash
cp pages/permission-automation/records/index.html pages/project-name/records/index.html
```

复制后必须替换项目名称、Meta 描述、页面标题、面包屑、标签、指标、记录链接和图片路径。

### 3. 编写项目详情页

项目详情页使用统一结构：

1. 项目主标题和一句话介绍
2. 技术标签
3. 项目状态和真实关键指标
4. 项目摘要
   - 项目目标
   - 核心技术栈
   - 本人职责
   - 关键成果
5. 项目背景与应用场景
6. 技术链路或系统流程
7. 核心实现与运行验证
8. 阶段记录入口

项目状态统一使用：

```text
项目已完成实施并运行正常
```

指标必须来自真实记录，例如设备数量、系统数量、实施阶段、数据行数或定时任务次数。不要为增强展示效果编造数字。

### 4. 编写阶段记录

阶段记录建议保留：

1. 阶段目标
2. 环境与前置检查
3. 实施步骤
4. 截图或配置说明
5. 验证方法与实际结果
6. 实际遇到的问题和处理方式
7. 阶段结论

风险、回滚或人工确认不是固定展示栏目。只有项目确实涉及生产变更、权限修改、数据库写入或删除操作时再补充，内容保持简短并说明实际处理方式。

### 5. 添加网站入口

至少更新：

- 根目录 `index.html`
- `pages/projects.html`

如果项目能够证明某项技能，再更新：

- `pages/skills.html`

项目封面优先复用现有 `abstract-cover` 结构，并增加独立的封面主题样式，避免不同项目使用完全相同的视觉效果。

### 6. URL 更名规则

项目名称变化但目录不变时，只需更新页面文字和 Meta 信息。

项目目录需要更名时：

1. 创建新的英文目录。
2. 更新首页、项目列表、技能页和 README 中的链接。
3. 更新项目详情页与记录页的面包屑。
4. 原目录保留轻量跳转页，避免已经分享的链接失效。
5. 确认全站不再使用旧目录作为正式入口。

### 7. 图片和敏感信息

- 图片使用有意义的英文目录和顺序编号。
- 发布前检查姓名、手机号、邮箱、IP、域名、部门和账号信息。
- Cookie、Token、API Key、Secret、Webhook 和密码不得进入 Git 历史。
- 配置截图必须先脱敏，再执行 `git add`、提交或推送。
- 没有图片时可以先使用 CSS 流程图，不要引用不存在的占位图片。

## 发布前检查

- 首页、项目总览和技能页入口可以打开。
- 项目详情、记录索引和阶段记录之间的链接正确。
- 面包屑能够返回首页、项目列表、项目详情和记录索引。
- 页面标题、Meta 描述和项目名称一致。
- 图片没有 404，文字与图片顺序一致。
- 375、768、1024 和 1440 像素宽度下没有页面级横向滚动。
- 深浅色切换、移动菜单和返回顶部功能正常。
- 全站搜索旧项目名称、旧目录和敏感信息。
- 确认无误后再执行 Git 暂存、提交和推送。

## 当前项目示例

结构较完整的项目可以参考：

- `pages/zabbix-dify-ai-monitoring/`
- `pages/permission-automation/`
- `pages/rpa-billing/`
- `pages/ecs-wordpress/`
- `pages/project-k8s.html`
