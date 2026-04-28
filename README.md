# Reddit Translator Pro Auto

`Reddit Translator Pro Auto` 是一个面向 `Reddit` 页面使用的用户脚本，适用于 `Tampermonkey` 和 `Violentmonkey`。它用于翻译帖子正文、评论内容和滚动浏览中的可见文本，并提供多引擎、双语阅读、历史记录、快捷键、缓存和自动翻译控制能力。

## 当前状态

- 当前开发源：`Reddit 翻译器 Pro 修7.js`
- 当前正式发布文件：`reddit-translator-pro-auto.user.js`
- 当前正式发布版本：`v1.0.9`

仓库中的开发、发布和历史文件现在按职责分开维护：

- `Reddit 翻译器 Pro 修7.js` 用于继续开发、调试和功能迭代
- `reddit-translator-pro-auto.user.js` 用于安装、分发和对外发布
- `archive/` 用于保留旧阶段快照，不作为当前安装入口

## 功能概览

- 支持 `Google`、`MyMemory`、`DeepL` 三种翻译引擎
- 支持 100+ 目标语言
- 支持帖子正文与评论内容翻译
- 支持右下角小地球按钮一键翻译当前可见内容
- 支持双语显示与原文 / 译文切换
- 支持滚动场景中的自动翻译
- 支持长文本与多段内容自动分块翻译
- 支持请求并发、速率、单次文本长度、单次段落数限制
- 支持请求超时保护，降低网络异常导致队列卡住的概率
- 支持 `TTS`、历史记录、缓存、隐身模式
- 支持主题切换、自定义颜色和快捷键
- 支持 `DeepL API Key` 保存、测试和轮换

## 仓库结构

- `Reddit 翻译器 Pro 修7.js`
  当前开发源文件。后续功能修改优先落在这里。
- `reddit-translator-pro-auto.user.js`
  当前正式发布产物。已同步 `修7` 内容，用于安装、分发、GreasyFork 更新和版本说明。
- `archive/`
  存放 `修1` 到 `修6` 以及更早的历史快照，仅用于回溯和对照。
- `tests/`
  Playwright 冒烟测试。
- `scripts/`
  本地浏览器启动脚本。
- `更新日志.md`
  发布记录与阶段演进说明。

## 安装方式

1. 在浏览器中安装 `Tampermonkey` 或 `Violentmonkey`
2. 任选一种安装方式：
   通过 Greasy Fork 直接[安装](https://greasyfork.org/zh-CN/scripts/574557-reddit-%E7%BF%BB%E8%AF%91%E5%99%A8-pro-auto)
   或导入仓库中的 `reddit-translator-pro-auto.user.js`
3. 打开 `https://www.reddit.com/`
4. 按 `F2` 打开脚本面板并完成语言、引擎与自动翻译设置

## 发布入口

- Greasy Fork 页面地址：<https://greasyfork.org/scripts/574557-reddit-translator-pro-auto>
- GitHub 仓库地址：<https://github.com/Dylan-ZQL/reddit-translator-auto>

## 使用方法

1. 进入任意 Reddit 帖子页、评论页或首页信息流
2. 点击帖子或评论旁的翻译按钮翻译当前内容
3. 单击右下角小地球按钮 `🌐`，可批量翻译当前屏幕附近可见内容
4. 双击右下角小地球按钮 `🌐`，可打开设置面板
5. 使用右下角“显示原文 / 显示译文”按钮，可在原文和译文之间切换
6. 在设置面板中选择目标语言、翻译引擎和双语模式
7. 如需长文本稳定性，可调整请求并发、请求频率、单次字符数和单次段落数
8. 开启自动翻译后，脚本会在内容进入视口时自动尝试翻译

## 当前发布线说明

`v1.0.9` 是当前正式发布版本。发布文件已由 `Reddit 翻译器 Pro 修7.js` 同步产出，当前发布线的重点包括：

- 发布入口统一为 `reddit-translator-pro-auto.user.js`
- 默认体验偏向开箱即用，发布文件内的默认配置已针对自动翻译场景做过整理
- 请求调度、分块翻译、滚动触发、缓存和历史记录能力已进入稳定可用阶段
- 右下角小地球按钮恢复为可见内容批量翻译入口，并保留 `F2` 面板快捷键
- 网络请求加入超时保护，异常响应解析也会回落到默认结果
- `DeepL` 缓存键不再写入完整 API Key，降低本地存储暴露风险
- 发布线与历史快照分离，减少仓库根目录中的版本噪音

当前 `Reddit 翻译器 Pro 修7.js` 与 `reddit-translator-pro-auto.user.js` 已同步。后续文档、安装说明和外部链接都应以 `reddit-translator-pro-auto.user.js` 为准。

## 开发与发布约定

1. 新功能、修复和结构调整优先修改 `Reddit 翻译器 Pro 修7.js`
2. 需要对外发布时，再整理生成 `reddit-translator-pro-auto.user.js`
3. 发布版本号、README 说明和 `更新日志.md` 需要同步更新
4. 历史阶段文件不再放回根目录，继续留在 `archive/`

## 本地验证

仓库内已经保留本地验证工具：

- `npm run pw:smoke`
  运行 Playwright 冒烟测试
- `npm run browser:chrome`
  使用脚本启动 Chrome
- `npm run browser:edge`
  使用脚本启动 Edge

如果只是安装脚本给浏览器使用，不需要这些 Node.js 工具；这些内容仅用于本地验证和回归检查。

## 历史文件

- `archive/Reddit 翻译器 Pro 修1.js`
- `archive/Reddit 翻译器 Pro 修2.js`
- `archive/Reddit 翻译器 Pro 修3.js`
- `archive/Reddit 翻译器 Pro 修4.js`
- `archive/Reddit 翻译器 Pro 修5.js`
- `archive/Reddit 翻译器 Pro 修6.js`
- `archive/reddit-translator-v1_0_0.js`

这些文件用于保留脚本演进过程，不作为当前正式安装入口。

## 维护原则

- 对外发布、安装和说明，以 `reddit-translator-pro-auto.user.js` 为准
- 日常开发和调试，以 `Reddit 翻译器 Pro 修7.js` 为准
- 历史快照只做归档和对照，不再作为并行维护入口
- 变更记录请参考 [更新日志.md](./更新日志.md)
