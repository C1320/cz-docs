(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{455:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("Boxx"),s._v(" "),t("h1",{attrs:{id:"git-配置-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-配置-ssh"}},[s._v("#")]),s._v(" git 配置 SSH")]),s._v(" "),t("h2",{attrs:{id:"生成秘钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成秘钥"}},[s._v("#")]),s._v(" 生成秘钥")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("ssh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keygen "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t rsa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2429120006@qq.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("按照提示完成三次回车，即可生成 ssh key。通过查看 ~/.ssh/id_rsa.pub 文件内容，获取到你的 public key")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typoraimage-20220717214506421.png",alt:"image-20220717214506421"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat ~/.ssh/id_rsa.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20220717220331840.png",alt:"image-20220717220331840"}})]),s._v(" "),t("h2",{attrs:{id:"部署公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署公钥"}},[s._v("#")]),s._v(" 部署公钥")]),s._v(" "),t("p",[s._v("复制生成后的 ssh key，通过仓库主页 "),t("strong",[s._v("「管理」->「部署公钥管理」->「添加部署公钥」")]),s._v(" ，添加生成的 public key 添加到仓库中。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20220717220727126.png",alt:"image-20220717220727126"}})]),s._v(" "),t("h2",{attrs:{id:"本地添加-ssh-信任"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地添加-ssh-信任"}},[s._v("#")]),s._v(" 本地添加 ssh 信任")]),s._v(" "),t("p",[s._v("添加后，在终端（Terminal）中输入")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ssh -T git@gitee.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("首次使用需要确认并添加主机到本机 SSH 可信列表。若返回 Hi XXX! You’ve successfully authenticated, but Gitee.com does not provide shell access. 内容，则证明添加成功。")]),s._v(" "),t("p",[s._v("https://www.php.cn/tool/git/475056.html")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);