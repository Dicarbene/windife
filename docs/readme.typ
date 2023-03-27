#import "template.typ": *

// Take a look at the file `template.typ` in the file panel
// to customize this template and discover how it works.
#show: project.with(
  title: "《基于Nuxt与flutter的多端可拓展个人知识软件“云舒”的设计与实现》第三次汇报",
  authors: (
    (name: "万旭杰", email: "github@Dicarbene"),
  ),
)

// We generated the example code below so you can see how
// your document will look. Go ahead and replace it with
// your own content!

= 提要
== 上周完成任务
- 前端基本页面构建完成（如文档，登录注册等）
- 数据库结构设计完成（目前完成了基本的设计）
- 引入“云舒”开源编辑器（根据(blocksuite)[https://blocksuite-toeverything.vercel.app/?init] fork）
- 完成移动端项目结构构建
== 上周预计完成任务
- 完成前端状态管理与后端协同, 初步功能实现展示
- 封装前端ui库并发布
- 修改完善文档编辑器, 并进一步完善项目设计
- 部署至服务器

= 本周任务完成情况

== 完成前端状态管理与后端协同, 初步功能实现展示

== 封装前端ui库并发布
#link("https://www.npmjs.com/package/@dicarbene/nuxt3-editorjs?activeTab=readme")
#figure(
  image("public/editorjs-module.png", width: 80%),
  caption: [
    "云舒编辑器模块化",
  ],
)

== 修改完善文档编辑器, 并进一步完善项目设计

== 部署至服务器

功能暂不完善，并未部署至服务器，目前仍然处于`local development`阶段