# 运行时资产目录

BD2ModManager 读取已安装的游戏版本，在现有素材库根目录同步对应的目录清单。BD2ModPreview 从同一素材库读取角色和预览配置。Manager 本体版本继续通过 GitHub Release 发布。

| 文件 | 内容 |
| --- | --- |
| `catalog-manifest.json` | 游戏版本、配置版本、文件相对路径和 SHA-256 |
| `characters.json` | 角色、服装、立绘、技能骨骼和约会编号 |
| `modmanager.json` | 原生约会入口迁移及插件默认约会配置 |
| `modpreview.json` | 背景、立绘映射、约会骨骼、技能时间轴版本以及小游戏 |
| `index.json`、`audio/*/index.json` | 资产和语音索引 |
| `audio/dating/illust_dating*.json` | 约会互动配置 |

游戏更新时，更新对应的 JSON 和素材。在 `modmanager.json` 和 `modpreview.json` 中填写相同的 `gameVersion` 与 `catalogVersion`。只修订配表时，保留游戏版本并提高配置版本。技能时间轴放在 `spine/cutscenes/timelines/<服装 ID>.r<修订号>.json`，并在 `cutsceneRevisions` 中登记修订号。Preview 打开对应技能时读取这个文件。

在仓库根目录运行 `node scripts/update-catalog-manifest.mjs`，再把清单和对应 JSON 随同当期素材一起发布。应用重新启动后读取已经同步的目录。旧游戏版本在远端没有匹配时会继续使用本地可用的配表。
