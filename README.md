# Reddit 自动翻译

这是一个用于 Reddit 页面内容翻译的用户脚本项目。

当前仓库只保留一套主线开发文件和一套正式发布文件：

- `Reddit 翻译器 Pro 修新.js`
- `reddit-translator-pro-auto.user.js`

另保留一个历史发布文件：

- `reddit-translator-v1_0_0.js`

脚本适用于 `Tampermonkey`、`Violentmonkey` 等用户脚本管理器，可为 Reddit 帖子、评论和动态加载内容提供单条翻译、整页翻译、缓存、历史记录、TTS、主题切换、快捷键、自动翻译等增强能力。

## 项目入口

- GitHub 仓库：
  `https://github.com/Dylan-ZQL/reddit-translator-auto`
- Greasy Fork 发布页：
  `https://greasyfork.org/zh-CN/scripts/574557-reddit-translator-pro-auto`
- Greasy Fork 同步源：
  `https://raw.githubusercontent.com/Dylan-ZQL/reddit-translator-auto/main/reddit-translator-pro-auto.user.js`

## 当前文件说明

- `Reddit 翻译器 Pro 修新.js`
  当前主开发文件，用于功能修改和调试。
- `reddit-translator-pro-auto.user.js`
  当前正式发布文件，用于 GitHub Raw 安装与 Greasy Fork 同步。
- `reddit-translator-v1_0_0.js`
  历史保留文件，不再作为当前主线维护目标。
- `README.md`
  当前仓库说明文档。
- `更新日志.md`
  当前版本线和历史演进说明。

## 来源与许可

- 本项目基于原始 Reddit Translator Pro 脚本继续修改、整理和维护。
- 当前仓库主要对发布流程、元数据、版本线结构和部分功能细节进行了持续调整。
- 许可证沿用仓库中的 `MIT` 许可文本，原版权声明保留不变。

## 安装方法

### 方式一：通过 Greasy Fork 安装

1. 安装用户脚本管理器，例如 `Tampermonkey` 或 `Violentmonkey`
2. 打开 Greasy Fork 页面：
   `https://greasyfork.org/zh-CN/scripts/574557-reddit-translator-pro-auto`
3. 点击安装并在用户脚本管理器中确认
4. 打开 `https://www.reddit.com/` 进行测试

### 方式二：通过 GitHub Raw 安装

1. 安装用户脚本管理器
2. 打开以下直链：
   `https://raw.githubusercontent.com/Dylan-ZQL/reddit-translator-auto/main/reddit-translator-pro-auto.user.js`
3. 由用户脚本管理器接管安装
4. 保存并启用脚本

## 主要功能

- Reddit 帖子和评论的单条翻译
- 当前页面整页批量翻译
- 多翻译引擎支持
- 100+ 目标语言选择
- 界面语言切换
- 双语显示模式
- TTS 文本朗读
- 翻译缓存
- 翻译历史记录
- 快捷键操作
- 自动单位转换
- 自动滚动相关增强
- 滚动触发的自动翻译
- 多主题和自定义配色
- DeepL API Key 保存、测试和额度查询

## 默认配置特点

当前主线脚本默认配置更偏中文使用场景：

- 目标语言默认是 `zh`
- 界面语言默认是 `zh`
- 默认翻译引擎是 `google`
- 默认主题是 `dark`
- 默认关闭双语模式
- 默认开启 TTS
- 默认开启自动单位转换
- 默认关闭滚动自动翻译

## 运行前提

- 浏览器需要安装用户脚本扩展
- 脚本匹配站点为 `https://www.reddit.com/*`
- 脚本会访问以下翻译服务：
  `translate.googleapis.com`
  `api.mymemory.translated.net`
  `api.deepl.com`
  `api-free.deepl.com`

如果使用 `DeepL`，还需要在脚本面板中填写可用的 API Key。

## 使用方式

- 进入 Reddit 页面后，脚本会为可翻译内容附加翻译按钮
- 可通过面板切换目标语言、界面语言、翻译引擎、语气、主题等设置
- 可使用整页翻译按钮批量处理当前页面内容
- 可在设置中启用或关闭滚动自动翻译
- 可在历史记录中查看最近翻译内容
- 可通过快捷键快速打开面板或翻译整页

当前默认快捷键为：

- 打开面板：`F2`
- 翻译整页：`Ctrl+Shift+T`

## DeepL 说明

脚本支持在设置面板中配置一个或多个 DeepL API Key，并具备以下能力：

- 多个 API Key 请使用英文 `,` 分隔
- 自动解析多个 Key
- 区分 Free 与 Pro 接口
- 测试 Key 是否可用
- 查询额度使用情况
- 在缓存中按 Key 作用域隔离结果，避免串用

## 当前版本线

- 当前开发入口：
  `Reddit 翻译器 Pro 修新.js`
- 当前发布入口：
  `reddit-translator-pro-auto.user.js`
- 当前主线版本号：
  `1.0.4`
- 当前主线命名：
  `Pro Auto`
- 当前描述元数据：
  已补充 `Google`、`MyMemory`、`DeepL`，并按语言规范化标点

## 历史说明

仓库此前曾保留 `0 / 修1 / 修2 / 修3 / 修4` 等阶段性副本文件，用于记录不同阶段的修改过程。

这些脚本现已移除，仓库当前不再保留多份并行副本，而是只维护：

- 一个主开发文件
- 一个正式发布文件
- 一个历史保留文件

如果需要了解先前阶段的演进方向，请查看 `更新日志.md` 和 Git 历史记录。

## 建议

- 日常安装优先使用 `reddit-translator-pro-auto.user.js`
- 日常开发优先修改 `Reddit 翻译器 Pro 修新.js`
- GitHub 用于版本管理，Greasy Fork 用于面向用户发布
- 如果需要为 Greasy Fork 启用脚本同步，使用上面的 GitHub Raw 链接即可
- 如果页面出现频繁请求或误翻，可检查滚动自动翻译是否开启
- 如果使用 DeepL 失败，先测试 API Key 和接口额度
