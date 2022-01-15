# 关于日常应用那些不得不说的事儿(0)

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)

# 关于日常应用那些不得不说的事儿(0)

Telegram已经成为我打开次数最多的APP了，新闻资讯，娱乐搞怪，学习交流，聊天水群。可以说一个telegram就能替代我手机上面很多的应用了。但是软件本身在中国大陆是无法使用的，所以需要具备突破GFW封锁的能力。正是由于这个限制，所以身边很多的亲戚还是使用着微信（微信有多烂我已经不想吐槽了）。但是我还是打算写下一些telegram的使用技巧和简单介绍，以便将来自己身边的人有机会接触到telegram的时候能够快速入门了解。

## Telegram的介绍

先对telegram进行简单的介绍，因为这个软件真的很有“故事”也很有“个性”。

### 诞生

Telegram在2013年由杜罗夫兄弟（Nikolai·Durov与Pavel·Durov）正式发布。杜罗夫兄弟同时也是俄罗斯最大的社交网络服务[VKontakte](https://zh.wikipedia.org/wiki/VKontakte)的创始者。Telegram Messenger LLP是独立的非营利公司，设立在柏林（这只是对外的说法，公司总部在哪儿没有人知道），并且承诺与VKontakte毫无关系。Nikolai为这个工具设计了加密协议和架构，同时Pavel的数字堡垒公司提供资金与基础设施，这就是Telegram，除此之外，telegram将保持公司独立运营，不受其他任何第三方势力的影响。所以，Telegram是为了隐私和安全而生的，和一些工程和产品团队开发的通讯工具不一样，它是真正由数学家主导的项目，坚实可靠，由于采用基于 256 位对称 AES 加密、2048 位 RSA 加密和 Diffie– Hellman 安全密钥交换，因此官方承诺任何人声称自己可以拦截破译telegram消息的可以获取30万美元的奖励。

关于PavelDurov的个人传奇经历，可以观看这个视频。

不得不说他是一个很有个性和想法的计算机天才和企业家。telegram这款软件也有着他个人十分鲜明的个性和特点在上面。

### 宗旨

1.提供一种适用于地球上任何地方的安全通信方式。

2.保护用户的私人对话免受窥探（如官员，雇主的伤害），保护用户的个人数据免受第三方（如营销人员，广告商的伤害）。

3.不对telegram上的内容进行审查，尊重用户的隐私和自由。

4.不接受任何广告商，任何政府机构的介入，也不接受其他公司的投资，只接受捐赠，盈利不是telegram的目标，保持公司的独立运营并且忠于自己的信仰。

5.不会使用用户数据来展示广告，只存储telegram需要作为安全且功能丰富的消息服务所需的数据。

6.用户的个人数据只属于自己，用户可以随时拿回自己的数据或者一键永久删除账户。

### 下载

telegram官方网站：[https://telegram.org/](https://telegram.org/)

官方网站可以找到所有客户端的下载入口，下载客户端请前往官方网站。

PC客户端下载也可以前往[GitHub](https://github.com/telegramdesktop/tdesktop/tags)（但是GitHub没有Android的APK文件）

### web端入口

[webk](https://webk.telegram.org/):界面美观，功能较为齐全，动画流畅，字体偏小偏粗。

[webz](https://webz.telegram.org/):功能性上和webK差不多，字体较大。

[原生web](https://web.telegram.org/):功能性上缺失较多，不推荐使用。

### 补充

官方网站需要突破GFW的封锁才能访问，但是GitHub一般可以正常访问。我个人极为不推荐使用第三方客户端，特别是因为汉化问题，很多人转向各种各样的第三方。这里再次说明，telegram不会向用户收取任何的费用，软件本身也不会有任何的广告，但凡是不符合条件的第三方都应该统统舍弃。这些承诺都在他们的用户条款里面白纸黑字的写着——[telegram privacy](https://telegram.org/privacy)

### 特点

telegram作为一款极为优秀的IM软件，本身有很多的过人之处，稍微列举几项。

1.软件本身免费开源，且没有任何广告;跨平台应用，用户可以在Android,IOS,Windows,MacOS,Linux，还有web端使用他，基本支持现在所有的操作系统平台。

2.软件里面的任何内容都将不会被审查，你有极大的自由言论空间。（所以上面也就成了一些罪犯的滋生的地方，比如著名的韩国N号房事件就是发生在上面）。

（2018年8月，Telegram修改隐私政策，如果执法调查单位能够证明特定用户的身份为恐怖分子，将配合法院要求提供该用户的IP、电话号码等资料。）

3.秘密聊天的内容全部都是以直接的[端到端加密](https://zh.wikipedia.org/wiki/%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%8A%A0%E5%AF%86)来传输。这代表只有你与秘密聊天的对方，才能读取到这些聊天消息 － 没有任何其他人可以破解它们，包含Telegram团队本身。

4.发出的消息支持无限期撤回，私密聊天支持自动删除聊天记录（GitHub有telegram desktop防撤回插件，但是Telegram Desktop 桌面版 v2.8.5 更新限制插件使用。）

5.聊天历史无缝同步到所有设备上，所有的聊天记录都保存在云端，不必保存在本地，用户也可以选择随时删除远端数据，导出数据以及直接一键永久删除账户。

6.拥有海量的表情贴纸，高清而富有趣味；支持自制表情包，并用 Emoji 调用。

7.有众多功能强大的机器人供用户管理群组和频道，也支持用户自建机器人。

8.文本输入支持Markdown语法，无限消息置顶，记忆聊天浏览记录，消息链接和外部链接内容预览，@消息的快速定位和快速回复指定消息。

9.telegram支持全局搜索聊天记录，群组和频道（中文检索稍微差一点儿，但是无关紧要）。

10.发出的消息是一个√，对方已经阅读的消息是两个√，给予用户清晰明确的反馈。

### 注册使用

telegram的下载方式前面已经说过了，去指定地址下载即可，接下来是注册使用telegram。由于遭到GFW的封锁，我们在注册账号的时候需要准备好翻墙的工具（请自行准备，不多阐述）。接下来以telegram desktop为例。

### SOCKS5代理注册

打开翻墙工具之后，打开 Telegram Desktop 桌面版客户端的代理设置，新建代理，选择 SOCKS5，地址设置为 127.0.0.1 ，端口设置为 10808 。

如果代理显示connected，表示成功，可以开始注册及正常使用。 如果一直显示connecting，表明此代理可能有问题，请尝试更换其他代理。

### MTP代理注册

打开 Telegram Desktop 桌面客户端后，点击左下角转动的圆圈来配置代理。再点击 use custom proxy 来添加自定义代理。 选择 MRProto 代理方式，依次输入 Hostname（服务器地址）、Port（端口）和 Secret（密码），最后点击 Save 保存。

如果代理显示connected，表示成功，可以开始注册及正常使用。 如果一直显示connecting，表明此代理可能有问题，请尝试更换其他代理。

更多的客户端注册使用方法请前往——[telegram教程全指南](https://www.notion.so/Telegram-95a6c23f0bb1466892b55f9ec8c755fd)

### 注意事项

1.telegram必须用电话号码才能注册，但是大陆用户我建议使用[google voice](https://zh.wikipedia.org/wiki/Google_Voice)来注册telegram。原因不过以下两个方面：

-   86号码不能主动私聊他人（这都“归功”于数字货币圈曾经大量发送spam还有疯狂拉人进群，最终导致 Telegram 官方开始限制中国大陆+86手机号的私聊功能。）如果要解除私聊就要去寻找Spam Info Bot。
-   中国手机号码是实名制而google voice是一个虚拟号码，与用户本身没有过多的信息连结，有利于进一步保护自己的隐私安全。google voice更多的介绍和使用方法请前往——[Google Voice简介及使用&保号](https://www.newlearner.site/2019/06/15/google-voice.html)

2.telegram虽说是一个较为安全的IM软件，但是我们还是需要对其中的一些方面进行设置（以下是telegram desktop设置方法，其他客户端设置方法大同小异，如果不清楚的话就参考上面的telegram教程全指南。

-   在设置-隐私和安全中把电话号码进行隐藏，任何人拉你进群聊和频道选项关闭，隐藏自己的上线时间，阻止通过转发消息寻人，启用两步验证，创建一个云端密码，降低被盗号的风险。
-   在设置-隐私和安全中，将删除账户的时间改为一年。（telegram会将指定时间内没有一次上线的账户进行销毁，默认时长是6个月）。
-   在设置-高级-自动下载媒体文件中找到私聊会话，群组，频道，禁止自动下载私聊会话，群组，频道中的文件。（起码要禁止自动下载私聊会话的文件，因为telegram存在专门针对86号码进行发送病毒文件的机器人账号）。
-   最好设置一个用户名，这样别人可以在不知道你电话号码的情况下通过用户名找你。

3.若用户在 24 小时内访问超过 200 个群组或频道的链接（点击打开就算访问，不需要加入），就会被禁止访问24 小时。禁闭期间，无法通过链接访问新的群组或频道（点击链接一直转圈而无法访问）。

4.telegram只有私密会话才是端对端加密的（在群聊中和普通的私聊中是不加密的），所以请在群聊和私聊中保护好自己的个人隐私，特别是你发送的照片中包含了大量的元数据，别有用心的人可以通过[EXIF](https://zh.wikipedia.org/zh-cn/Exif)编辑工具来轻易找到您的位置。

-   要在iPhone上启动秘密聊天，请点击“聊天”标签右上角的新消息图标，然后选择“新建秘密聊天”。 选择您要与其发起秘密聊天的联系人，然后在下一个屏幕上，它将显示您已邀请他们加入。 请注意，他们需要在您的联系人列表中才能与他们进行秘密聊天。

-   要在Android手机上启动秘密聊天，有两种方法可以解决。 对于第一种方法（下面是左侧的GIF），请点击三行的侧边栏菜单图标，然后点击“新建秘密聊天”，然后点击联系人姓名。 对于第二种方式（下面的GIF右边），点击“聊天”屏幕右下角的新消息图标，选择“新秘密聊天”，然后选择联系人的姓名。

    无论哪种方式，在下一个屏幕上，它将显示您已邀请他们加入。 请注意，他们需要在您的联系人列表中才能与他们进行秘密聊天。

关于更多加密聊天的消息可以参考——[Telegram怎样开启端到端加密（E2EE）](https://bynss.com/apps/405706.html)

5.虽然说官方不会审查telegram中任何群组和频道的任何内容，但是你一旦被他人多次举报，账户就会受到使用限制，直至封号处理。所以，请不要随意私聊他人和发送垃圾消息。

6.telegram支持传输单个最大文件为2GB，下载和传输的速度取决于你的本地网络状况（或者说你的翻墙工具）。

7.telegram上每一个用户最多可以创建10个公开的频道或者群组，最多申请创建20个机器人，一个账号可以加入的频道和超级群组数量：包括你拥有的频道和群组在内，一共可以加入最多500个。

8.telegram无法避免别人私聊你，所以如果你不想理他的话，直接点击右上角的举报+拉黑。此外，telegram也没有添加好友这一说法，因为任何人都可以私聊你。

最近6月份的telegram更新，官方增加更多的限制说明，以便于用户了解，可以参考——[已知的telegram限制](https://t.me/TGgeek/868)，或者参考[telegram info](https://limits.tginfo.me/en)

9.强烈开启telegram账号的两步验证。

目前只能在移动端开启和修改密保邮箱等操作。例如在安卓手机上，你可以在`setting-privacy and security-two step verificaation`中开启，密码设置的复杂一些。如果你觉得自己记不住太多的复杂密码的话，那么你可以去看我之前的浏览器[扩展推荐](https://aegisprogram.github.io/posts/d5f09ca9.html)中的bitwarden。而且记得给二步验证之后添加密保邮箱，建议选择安全性比较高的。例如[protonmail](https://mail.protonmail.com/)和[tutanota](https://mail.tutanota.com/)

这样有利于保护你的账号的安全。

### telegram的功能详细介绍

telegram的功能十分丰富，等你真正接触体验一段时间的telegram之后就会发现自己已经情不自禁的爱上他。而且有人已经为此做过详细的讲解和功能介绍了，我就不再赘述。若有兴趣的话我推荐前往

1.[Telegram 教程全指南](https://www.notion.so/Telegram-95a6c23f0bb1466892b55f9ec8c755fd)

2.[Telegram（电报）：新手指南、使用教程及频道推荐](https://tingtalk.me/telegram)

3.[聪聪Blog](https://congcong0806.github.io/)

这三个博客和教程总结的都很详细，到位，值得认真阅读。

### 频道推荐

我个人比较青睐于添加频道而不是群组，telegram上面有很多的优质内容的频道，在这里列举几个个人认为不错的。

1.[Durov’s Channel](https://t.me/durov) Pavel Durov（创始人）的官方频道

2.[TGgeek](https://t.me/TGgeek) 发布 Telegram 教程、技巧、资讯、更新等信息。

3.[Iyouport](https://t.me/iyouport) 自由港 新闻包和工具箱

4.[SE-索引公告板](https://t.me/zh_secretary) 发现更多优质好频道

5.[校长读报](https://t.me/XiaoZhangDuBao) 每天为你带来一篇精选的报刊内容和时事资讯

6.[Newlearnerの自留地](https://t.me/NewlearnerChannel) 不定期推送IT资讯

7.[乌鸦观察](https://t.me/bigcrowdev) 不定期推送新闻和杂谈

8.[开源社区频道](https://t.me/opencfdchannel) 科技人文资讯

9.[外媒新闻](https://t.me/twitter_subscriptions) 从可信任的外媒报道中，了解真实的中国，了解真实的世界。

10.[科学新知](https://t.me/random_knowledge_dushu) 科技 科技新知 IT 程序员 生物 物理 科学 社科

11.[今读](https://t.me/today_read) 随机文章分享

12.[少数派](https://t.me/sspai) 打造你的数字生活指南

13.[简中赛博坟场](https://t.me/cybergraveyardcn) 整理和记录从简中互联网上消失、被篡改的内容

14.[小时代](https://t.me/little_times) 分享精读好文章

15.[性别偏见与性别议题](https://t.me/daily_feminist) 搜集/讨论一些生活中性别偏见的例子，帮助大家认识到偏见的存在，发起对偏见的讨论，致力于打破父权建构，消弭偏见。

16.[黑洞资源笔记](https://t.me/tieliu) 收集优秀的开源项目，公开的学习资料。

17.[为了一种新小说](https://t.me/NouveauRoman) 频道每周五晚19:00(GMT+8)转推一篇文学作品，以短篇小说、散文诗、现代诗为主

18.[辟谣爱好者频道](https://t.me/fightdisinformation) 关于近期不实信息，待证实信息，有争议信息的调研分析汇总。希望保持公正，对信息新闻进行验证。

19.[Find Blog👁发现博客](https://t.me/FindBlog) 发现优秀的博客与创作者,不做博客推荐，不做文章推荐  
仅仅只是收录优秀博客的地方

20.[风向旗参考快讯](https://t.me/xhqcankao) 风闻奏事，遍查访知。即时发布VPS、网盘等有价值虚拟资产的新闻和交易信息，提供互联网科技新闻快讯。

当然，要是你乐意的话，你可以在我的博客首页找到我的telegram频道并加入，我会为此感到很高兴的。

### 机器人推荐

不得不说，机器人在telegram中扮演的角色也是十分的重要，使用各种bot，可以让用户更加轻松的管理群组和频道，寻找资源和服务。但是注意的是，机器人分为内联机器人和第三方机器人。内联机器人就是你在任何的频道和群组中可以直接调用而无需添加进来，第三方机器人（也称为外联机器人）的使用需要添加到频道或者群组中才能实行调用。这里推荐几个个人觉得还不错的机器人。

1.[DiscussBot](https://t.me/discussbot) 官方出的评论机器人, 可以在频道每条消息下面点击添加评论

2.[VerifyBot](https://t.me/VerifyBot) 官方认证账号的机器人

3.[SpamBot](https://t.me/SpamBot) 官方处理 spam 事务的机器人，例如解除86私聊限制

4.[Stickers](https://t.me/Stickers) 使用此机器人创建贴纸并获取贴纸的使用统计数据.

5.[这个我知道](https://t.me/keyword_reply_bot) 本机器人能够自动回复关键词对应的内容

6.[TG Downloader](https://t.me/GIFDownloader_bot) GIF和贴纸下载

7.[Creation Date](https://t.me/creationdatebot) 查询你的tg ID和注册时间

8.[zlibrary](https://t.me/zlibrarybot) 搜书机器人

9.[InstantViewBot](https://t.me/CorsaBot) 可以把文章都生成支持Instant View

10.[CommentsBot](https://t.me/CommentsBot) 留言/评论机器人

11.[storebot](https://t.me/storebot) 机器人商店,索引了各种机器人,可以寻找自己感兴趣的

12.@fanyi_bot 为全世界语言提供中英翻译。支持私聊、群组、行内请求。开源地址：[https://github.com/reycn/fanyi_bot](https://github.com/reycn/fanyi_bot)

现在telegram上机器人也是数不胜数，所以只能简单罗列几个，更多有趣好玩儿的机器人还等着你去发现和创造呢。

### telegraph神器

**Telegraph**是即时聊天软件Telegram的开发商推出的一个内容发布网站，它允许用户匿名发布文章。除此之外，telegraph还能帮助用户创建丰富的内容，同时集成照片以及各类可嵌入的流媒体内容。在输入文章标题和作者姓名之后，用户即可随意创作。我们发布文章之后，就能够获得这篇文章的独立网址。

### 特点

访问和使用Telegraph不需要注册账号与下载软件，只需在网页浏览器中访问 [https://telegra.ph/](https://telegra.ph/) 便可看到简约的界面，填入要发布的内容即可匿名发布，（支持Markdown语法和快速插入图片）。内容发布之后，只要清除浏览器的缓存，便无法再编辑文章。内容发布之后，不能追溯到文章作者和发布者。内容同样不会受到任何的审核和监视，给予用户最大的自由空间。

在telegram上我们只需要找到telegraph，然后用telegram登陆上去，就会看到你用该账号写过的所有的文章内容，而且你还可以在任何的群组和频道中调出你的文章，分享给其他人。所以如果你正在寻找一个自由，简单易用的写作的平台，那么telegraph是一个不错的选择，只需要掌握简单的Markdown语法就能驾驭它。

### 滥用和指责

Pavel Durov的初衷是打造一个自由的社交通讯软件，绕开政府和其他互联网公司的监视。但是正是因为telegram中高度的自由和隐秘，这里也就成了一些犯罪分子的“窝点”。

2015年11月，由于伊斯兰国（ISIS）相关组织使用频繁，  
Telegram移除了近250个所使用广播频道，并屏蔽其所属账号并且持续每天移除近百频道  
强调不鼓励色情内容、侵犯著作权的内容存在。  
但用户举报的色情组群、频道仅会于iOS、macOS设备（App Store版）无法观看，  
官方并不会审查或下架相关频道。  
2018年下半年至2020年3月间，韩国境内有人通过Telegram组建多个聊天室并收取费用，  
进行了有组织的、大规模的性虐待事件，即震惊韩国社会的N号房事件。  

韩国N号房事件发生之后，2018年8月，Telegram修改隐私政策，如果执法调查单位能够证明特定用户的身份为恐怖分子，将配合法院要求提供该用户的IP、电话号码等资料。

正是因为telegram极度强调自由且不受监管，容易被犯罪分子利用来传播暴力，血腥内容，世界各地的媒体对telegram纷纷进行指责。一时之间，Pavel Durov成为了众矢之的。但是Pavel Durov还是坚持自己的做法，并且他认为：恐怖主义是社会问题，通过对技术的限制并不能解决社会问题。所以他和他的团队开始了~~旅游式办公~~(流亡生活)，走到哪儿，团队就带到哪儿。就算面临着外界的舆论压力，当地政府的干预，他还是忠于自己的信仰，他始终坚信言论自由，不受其他因素的干扰是我们当今社会的人们的一项基本权利。偏执，自信，崇尚自由，富有才华，极度自律，这些都是他身上的特质，正是因为他选择让telegram公司保持独立且自由，给予大众隐私和自由的承诺，人们也就逐渐相信这个男人的想法。不可否认的是，telegram的活跃用户还在稳步上升当中，或许有一天他能够成功的超越whatsapp，成为社交软件中的龙头。

### telegram和微信

说实话，这两个东西压根不是一个层面上的。如果你使用过telegram，那么你就会很难再适应微信那种反人类的设计和操作。微信能有现在的活跃人数单纯是因为国内没有可替代的社交软件，QQ被打上小朋友的标签，钉钉办公人士使用较多，不然一般都不会接触，微博是一个娱乐饭圈平台，热搜全靠卖，其他的什么贴吧，豆瓣，小红书之类的就更别说了。

正是因为国内同时期没有可替代的产品，所以微信靠着早期QQ的引流逐渐庞大起来。这也就造成微信再社交领域的一家独大，也就越来越肆无忌惮的挑战用户的底线。发自内心的的说，我也建议我身边的人逃离微信去拥抱telegram，天下已经苦微信久矣。对于我来说微信最大的毛病主要有以下方面：

1.微信会审查所有用户的聊天内容和朋友圈信息，过滤相关信息（你以为你发出去的朋友圈其实只有你自己能看到，你以为发给对方的消息，其实也只有你自己才能看到），采取删帖和封禁用户账号的事情也就不在话下。

2.切断大部分的外部链接，形成资源信息壁垒。例如之前字节跳动就说微信封杀抖音的链接。

3.设计简陋，功能欠缺的同时臃肿不堪，专断独行，随意窃取用户的个人信息。（一次最多发9张照片，一次最大只能发送200MB文件，消息不能云端同步）。在腾讯微信软件许可及服务协议你还可以看到这么一条条款：

![image](https://cdn.jsdelivr.net/gh/ilemonEllen/image_github@master/blog_image/%E5%BE%AE%E4%BF%A1.3pbu9pfoy2i0.png)

你只有账号的使用权，所以你觉得在微信面前我们还能有自己的隐私吗？在2021年2月3号，深圳市南山法院一审判决认定：微信好友关系不属于用户隐私。

关于微信其他令人发指的方面我就不一一列举了，有兴趣的可以看看 [stay-away-from-wechat](https://github.com/TomBener/stay-away-from-wechat)，上面对于微信那些霸道的描述都比较清楚，当然这个作者可能本身有一些较为强烈的主观倾向，那么你可以看看这个——[微信十年的产品思考](https://imzm.im/my-thoughts-on-wechat-ten-years/)。

关于微信监控和隐私安全问题等方面的文章还有不少，这里再补充几篇。

1.[对于微信「隐私政策」的一点小的发现](https://nova.moe/some-finding-on-wechat-privacy-policy/)

2.[微信监控诠释](https://citizenlab.ca/2020/05/%E5%BE%AE%E4%BF%A1%E7%9B%91%E6%8E%A7%E8%AF%A0%E9%87%8A/)

3.[“未阅先焚”微信朋友圈图片过滤功能分析](https://citizenlab.ca/2018/08/%e6%9c%aa%e9%98%85%e5%85%88%e7%84%9a%ef%bc%9a%e5%be%ae%e4%bf%a1%e6%9c%8b%e5%8f%8b%e5%9c%88%e5%9b%be%e7%89%87%e8%bf%87%e6%bb%a4%e5%8a%9f%e8%83%bd%e5%88%86%e6%9e%90/)

4.[“一APP两制”微信如何区别审查中国及海外用户](https://citizenlab.ca/2016/12/%e4%b8%80app%e4%b8%a4%e5%88%b6%ef%bc%9a%e5%be%ae%e4%bf%a1%e5%a6%82%e4%bd%95%e5%8c%ba%e5%88%ab%e5%ae%a1%e6%9f%a5%e4%b8%ad%e5%9b%bd%e5%8f%8a%e6%b5%b7%e5%a4%96%e7%94%a8%e6%88%b7/)

5.[如何导出微信（包括朋友圈）数据 — 利用欧盟GDPR法案带来的权利](https://www.physixfan.com/ruhedaochuweixinbaokuopengyouquanshuju-liyongoumenggdprfaandailaidequanli/)

不少人可能会对WeChat和微信的隐私协议方面有一些的困惑，那么不妨阅读一下：[分享一下近一年的欧盟 WeChat 账号与微信账号的使用与功能区别](https://telegra.ph/%E5%88%86%E4%BA%AB%E4%B8%80%E4%B8%8B%E8%BF%91%E4%B8%80%E5%B9%B4%E7%9A%84%E6%AC%A7%E7%9B%9F-WeChat-%E8%B4%A6%E5%8F%B7%E4%B8%8E%E5%BE%AE%E4%BF%A1%E8%B4%A6%E5%8F%B7%E7%9A%84%E4%BD%BF%E7%94%A8%E4%B8%8E%E5%8A%9F%E8%83%BD%E5%8C%BA%E5%88%AB-03-08-2)

下面有一张很直观的图片说明微信和WeChat的区别  
![image](https://cdn.jsdelivr.net/gh/ilemonEllen/image_github@master/blog_image/%E5%BE%AE%E4%BF%A1%E5%92%8Cwechat.2vdgo69tszc0.jpg)

总而言之，我个人对于telegram和微信之间的选择十分的清晰，后面不及前者的百分之一。何况，微信的这些情况，telegram上都不存在。我这么说也并非是指telegram是完美无缺的产品，它也有它自身的不足。我也列举几个方面：

1.telegram只有秘密私聊才会使用端对端加密，群组和频道内容则没有，且端对端加密需要用户手动开启而非自动开启。

2.只能通过手机号码进行注册，这对于一些手机号码必须实名的国家所在用户来说简直就是噩梦。这无法保障他们的隐私安全。

3.服务器是闭源的，虽然telegram软件本身是开源的，MTP也开源，但是服务器没有开源，我们对于telegram如何保存，使用我们的数据一无所知。我们只能选择相信Pavel Durov的为人。

4.我们无法限制别人私聊自己，同时软件本身对于中文搜索支持不友好。

没有什么完美的产品，但是telegram作为一家不以盈利为目的独立运营的公司却在用行动来展示他们很关注用户的使用体验。在产品的打磨和对待用户的态度上面，微信是完全比不过的。也许telegram不是最好的选择，最安全的聊天社交软件，但是它坚持做自己，拥抱用户。如果微信不知道如何尊重用户，那么自然很难获得用户的尊重。

在telegram和微信这个板块内容中我确实夹杂了更多的主观倾向，看到这篇帖子的你或许认同，或许不认同，不管你的态度是什么，我都希望你不要急于相信我或者是否决我的观点，不妨自己去感受一下，思考一下。微信的不足是客观事实，telegram的不足也是客观事实，在客观事实的基础上自己去探索答案才是一个最好的选择。

telegram的故事还在继续，它生于“乱世”（斯诺登曝光美国监控丑闻之后当下的我们急需要一个保障我们安全，隐私的社交工具），也终将不平凡。

![image](https://cdn.jsdelivr.net/gh/ilemonEllen/image_github@master/blog_image/dimitri-karastelev-EhNLOlxlOXI-unsplash.qviu7t46c80.jpg)

### 参考文章

1.[聪聪Blog](https://congcong0806.github.io/)

2.[Telegram（电报）：新手指南、使用教程及频道推荐](https://tingtalk.me/telegram)

3.[Telegram 教程全指南](https://www.notion.so/Telegram-95a6c23f0bb1466892b55f9ec8c755fd)

4.[Google Voice简介及使用&保号](https://www.newlearner.site/2019/06/15/google-voice.html)

5.[telegram维基百科](https://zh.wikipedia.org/wiki/Telegram)

6.[微信 Is Watching You](https://www.iyouport.org/%E5%BE%AE%E4%BF%A1-is-watching-you/)

7.[Telegram FAQ](https://telegram.org/faq)

8.[telegram privacy](https://telegram.org/privacy)

9.[腾讯微信软件许可及服务协议](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=default)

10.[Telegram怎样开启端到端加密（E2EE）](https://bynss.com/apps/405706.html)


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/56.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
