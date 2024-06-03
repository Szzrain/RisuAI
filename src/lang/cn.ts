export const languageChinese = {
	"formating": {
	  "main": "主提示词",
	  "jailbreak": "越狱提示词",
	  "chats": "过去的聊天",
	  "lorebook": "Lorebook",
	  "globalNote": "全局注释",
	  "authorNote": "作者注释",
	  "lastChat": "最后的聊天",
	  "description": "角色描述",
	  "personaPrompt": "人物提示词",
	  "plain": "基础提示",
	  "memory": "Supa/HypaMemory",
	  "postEverything": "End-Injected Prompts"
	},
	"errors": {
	  "toomuchtoken": "错误：所需的最低token数超过了最大上下文大小",
	  "unknownModel": "错误：选择了未知的模型",
	  "httpError": "错误：请求中出现错误：",
	  "noData": "档案中没有资料，或者档案已损坏",
	  "onlyOneChat": "至少必须有一条聊天记录",
	  "alreadyCharInGroup": "在该群组中已经有一个同名的角色了",
	  "noUserIcon": "你必须先设置你的头像。",
	  "emptyText": "文本为空",
	  "wrongPassword": "密码错误",
	  "networkFetch": "这发生在网络不稳定或服务器宕机时",
	  "networkFetchWeb": "这可能是一个CORS错误。这只在使用网页版本时发生，因为浏览器的限制。尝试使用桌面本地版本，或其他版本的RisuAI。",
	  "networkFetchPlain": "这可以是一个普通的抓取错误。尝试在设置中禁用强制普通抓取选项。",
	  "requestLogRemoved": "这个请求日志被移除",
	  "requestLogRemovedDesc": "这个请求日志在客户端刷新或重新加载时移除"
	},
	"showHelp": "显示帮助",
	"help": {
	  "model": "模型选项是聊天中使用的主要模型。",
	  "submodel": "辅助模型是用于分析情绪图像，自动建议等的模型。推荐使用gpt3.5。",
	  "oaiapikey": "OpenAI的API密钥。你可以在https://platform.openai.com/account/api-keys 处获取。",
	  "mainprompt": "主提示词选项设定了默认模型的行为。",
	  "jailbreak": "当角色中启动NSFW(成人模式)/越狱开关时，NSFW(成人模式)/越狱提示词选项将被激活。",
	  "globalNote": "强烈影响模型行为的全局注释，也被称为UJB。在所有角色中都起作用。",
	  "autoSuggest": "用于生成自动建议用户回应时的提示词。",
	  "formatOrder": "提示词的格式化顺序。位置越靠下的模组对模型的影响更大。",
	  "forceUrl": "如果不为空，请求将会被发送到你输入的URL。",
	  "tempature": "较低的值能够让角色紧密地遵循提示词，但它更可能像机器一样回应。\n较高的值将使回复更具创造性，但角色的回应可能更容易崩溃。",
	  "frequencyPenalty": "较高的值能够防止在回应中使用重复的单词，但角色的回应可能更容易崩溃。",
	  "presensePenalty": "较高的值能够防止在所有上下文中使用重复的单词，但角色的回应可能更容易崩溃。",
	  "sdProvider": "图像生成的提供商。",
	  "msgSound": "角色回应时播放*叮*的声音",
	  "charDesc": "角色的简要描述。这会影响角色的回应。",
	  "charFirstMessage": "角色的第一条信息。这会极大地影响角色的回应。",
	  "charNote": "强烈影响模型行为的角色注释。嵌入到当前角色中。也被称为记忆或UJB。",
	  "toggleNsfw": "启用NSFW(成人模式)/越狱",
	  "lorebook": "lorebook是用户制作的AI词典。只有当上下文中有激活关键字时，AI才会看到它。",
	  "loreName": "lorebook的名称。它不会影响AI。",
	  "loreActivationKey": "如果上下文中存在其中激活关键字，lorebook就会被激活，提示词才会介入。用逗号分隔。",
	  "loreorder": "lore插入顺序更高，它会更多地影响模型，而当激活的lorebook较多时，它会被剪裁的更少。",
	  "bias": "偏差是一种修改字符串出现概率的键值数据。\n它可以从-100到100，更高的值会更可能出现，更低的值则不太可能出现\n警告：如果分词器出错，它可能无法正常工作。",
	  "emotion": "激活情绪图像功能会使系统根据角色的情绪显示图像，该情绪是通过分析角色的回应得出的。你必须输入情绪名称作为单词 *(如 joy，happy，fear 等)*。如果存在，以**neutral**命名的情绪将成为默认情绪。必须有3个以上的图像才能正常工作。",
	  "imggen": "图像生成功能会从外部程序生成并显示图像。该图像是通过分析当前聊天生成的图像提示词生成的。\n\n图像生成功能是基于键值参数进行分析的，这些参数可以在下面配置。\n\n**'always'** 键总是应用，并且不会改变。**'negative'** 键对于图像生成始终应用负值。\n\n其他键的值将根据随着聊天的进行而改变。\n\n如果一个键的名字前面有特殊字符，它就有特殊的效果。\n- 如果键以 **|** 开始，键的值将不会改变。\n- 如果键以 **$** 开始，键的值更有可能改变。\n\n当图像首次生成时，你只能通过修改下面的'当前图像生成数据'来改变它。",
	  "regexScript": "正则表达式脚本是一个自定义脚本，它将匹配到的IN字符串替换为OUT。\n\n有四种类型的选项。\n\n- **修改输入**修改用户的输入。\n\n- **修改输出**修改字符的输出。\n\n- **更改请求数据**在发送时修改当前聊天数据。\n\n- **修改显示**只在显示时修改文本，而不修改聊天数据。\n\nIN必须是一个没有标记且开始和结束时没有斜杠的正则表达式。\n\nOUT是一个可以包含替换模式的字符串。这些是模式：\n\n- $$\n\n    - 插入$\n\n- $&\n\n    - 插入匹配的子字符串。\n\n- $`\n\n    - 插入匹配子字符串之前的字符串部分。\n\n- $1\n\n    - 插入第一个匹配的组。与其他数字如2，3等一起工作...\n\n- $(name)\n\n    - 插入命名的组\n\n如果OUT以 **@@** 开始，它不会替换字符串，而是在找到匹配字符串时产生特殊效果。\n\n- @@emo (情绪名称)\n\n    - 如果角色处于情绪图像模式，将(情绪名称)设置为情绪，并阻止默认设置。",
	  "experimental": "这是一个不稳定的实验性功能。",
	  "oogaboogaURL": "如果你的WebUI支持旧版本的api，你的url应该像*https:.../run/textgen*\n\n如果你的WebUI支持新版api，你的url应该像*https://.../api/v1/generate* 使用api服务器作为主机，并将--api添加到参数中。",
	  "exampleMessage": "影响角色输出的示例对话。它不会永久性地使用token。\n\n对话的示例格式：\n\n```\n<START>\n{{user}}: 嗨\n{{char}}: 你好\n<START>\n<user>: 嗨\nHaruhi: 你好\n```\n\n```<START>``` 标记新对话的开始。",
	  "creatorQuotes": "注意本栏中的内容会在第一条消息的上方出现。用于告知用户有关该角色的信息。它不会进入提示词中。",
	  "systemPrompt": "如果不为空，将替换设置中的主要提示词。",
	  "chatNote": "强烈影响模型行为的聊天注释。嵌入到当前聊天中。也被称为记忆或ujb。",
	  "personality": "关于角色个性的简短描述。\n\n**不建议使用此选项。改为在角色描述中进行描述。**",
	  "scenario": "关于角色情境的简短描述。\n\n**不建议使用此选项。改为在角色描述中进行描述。**",
	  "utilityBot": "启用后，它将忽略主要提示词、越狱和其他提示词。用于实用程序机器人，而不是用于角色扮演。",
	  "loreSelective": "如果切换选择性的，则激活键和次要键都应有匹配项才能激活lorebook。",
	  "loreRandomActivation": "如果启用了概率条件，那么当lorebook的其他条件都已满足时，每次发送聊天时lorebook将以“概率”设置的概率被激活。",
	  "additionalAssets": "在你的聊天中显示的额外资源。\n\n - 使用`{{raw::<asset name>}}`作为路径\n - 使用`{{img::<asset name>}}`作为图片\n - 使用`{{video::<asset name>}}`作为视频\n - 使用`{{audio::<asset name>}}` 作为音频\n    - 建议放在背景 HTML中",
	  "superMemory": "超级记忆通过给 AI 提供总结数据使你的角色记忆更多信息\n\n超级记忆模型是一个总结文本的模型。推荐使用Davinci，除非是具有超过2000个token数的高度总结能力的未经过滤模型，否则不推荐使用辅助模型。\n\n超级记忆提示决定了应发送什么提示词进行总结。如果你留空，它将使用默认提示词。建议留空。\n\n在所有设置都完成后，你可以在角色的设置中启用它。",
	  "replaceGlobalNote": "如果不为空，则将当前全局注释替换为此。",
	  "backgroundHTML": "将被注入聊天荧幕背景的Markdown/HTML数据。\n\n你也可以使用其他资源。例如，你可以使用`{{audio::<asset name}}`添加背景音乐\n\n此外，你还可以将这些数据与其他资源一起使用：\n - `{{bg::<asset name>}}`: 将背景注入资源",
	  "additionalText": "当AI认为需要时，将添加到角色描述中的文本，因此你可以在这里放置长文本。用双换行符分隔。",
	  "charjs": "角色JS是一个会与角色一起运行的Javascript代码。例如，你可以查看`https://github.com/kwaroran/RisuAI/blob/main/src/etc/example-char.js` 目前不建议使用，因为安全原因。导出将不包括此项。",
	  "romanizer": "Romanizer是一个插件，将非罗马字母字符转换为罗马字母以减少在请求数据时使用非罗马字母字符的token。这可能导致与原始模型不同的输出。当在聊天中使用罗马字母时，不建议使用此插件。",
	  "oaiRandomUser": "如果启用，将随机uuid放在用户参数上请求，并在刷新时更改。这可以用来防止AI识别用户。",
	  "inlayImages": "如果启用，图像可以嵌入到聊天中，如果AI支持，它们可以看到它。",
	  "metrica": "公制系统化器是一个插件，将公制转换为英制单位进行请求，并在输出时反向转换，以在使用英制性能时向用户显示公制系统。当在聊天中使用英制单位时，不建议使用这个插件。",
	  "lorePlus": "LoreBook+是一个实验性功能，使用vectordb而不仅仅是字符串匹配来提供更好的机器人制作体验和更好的匹配性能。",
	  "topP": "Top P是一个核心抽样概率阈值。模型考虑拥有top_p概率质量的结果。",
	  "openAIFixer": "OpenAI Fixer是一个插件，修复了OpenAI的一些问题。",
	  "sayNothing": "如果启用，当没有字符串输入时将输入'say nothing'。",
	  "showUnrecommended": "如果启用，将显示不推荐、已过时的设置。强烈建议不要使用这些设置。",
	  "imageCompression": "如果启用，将在导出角色时压缩图像。如果动画图像不起作用，请尝试禁用此选项。",
	  "useExperimental": "如果启用，将显示一些实验性功能。",
	  "forceProxyAsOpenAI": "如果启用，将在使用反向代理时强制使用OpenAI格式。",
	  "forcePlainFetch": "如果启用，将使用浏览器fetch api代替原生http请求。这可能导致CORS错误。",
	  "autoFillRequestURL": "如果启用，将自动填充请求url以匹配当前模型。",
	  "chainOfThought": "如果启用，将添加思维链提示词到提示词中。",
	  "gptVisionQuality": "此选项用于设置图像检测模型的质量。质量越高，检测越准确，但使用的token也越多。",
	  "genTimes": "此选项用于设置在支持模型上生成响应的次数。除了第一个响应外，其他响应将作为缓存重新生成。这可以降低模型的成本，但如果你在没有重新生成的情况下使用它，也可以增加成本。",
	  "requestretrys": "此选项用于设置请求失败时的重试次数。",
	  "emotionPrompt": "此选项用于设置用于检测情绪的提示词。如果它是空的，将使用默认提示词。",
	  "removePunctuationHypa": "如果启用，将在执行HypaMemory前移除标点符号。",
	  "additionalParams": "将添加到请求体的其他参数。如果你想排除一些参数，你可以将`{{none}}`放在值中。如果你想添加标头而不是体，你可以将`header::`放在键的前面，如`header::Authorization`。如果你想将值作为json，你可以将`json::`放在值的前面，如`json::{\"key\":\"value\"}`。否则，值的类型将自动确定。",
	  "antiClaudeOverload": "如果Claude过载发生，RisuAI会尝试通过继续使用相同的提示词来防止它。只适用于流式响应。这可能不适用于非官方api端点。",
	  "triggerScript": "触发脚本是一个在条件满足时运行的自定义脚本。它可以用来修改聊天数据、运行命令、更改变量等。其类型取决于它何时被触发。它还可以通过按钮运行，这可以与`{{button::Display::TriggerName}}`，或具有`risu-trigger=\"<TriggerName>\"`属性的HTML按钮一起使用。",
	  "autoContinueChat": "如果启用，将尝试继续聊天，如果它没有以标点结束。不要与不使用标点的语言一起使用。",
	  "combineTranslation": "如果启用，一个句子但由HTML标签分隔的文本将被组合在一起并翻译，然后将重新应用修改显示脚本来翻译输出。\n这有助于翻译者进行正确的翻译。\n如果在你启用此选项时UI变得奇怪，请关闭此选项并报告。"
	},
	"setup": {
	  "chooseProvider": "选择AI提供商",
	  "openaikey": "使用API密钥的OpenAI（推荐）",
	  "openaiProxy": "OpenAI反向代理",
	  "setupmodelself": "其他/我将自行设置",
	  "inputApiKey": "在此输入API密钥",
	  "apiKeyhelp": "你可以从以下地址获取API KEY：",
	  "setupSelfHelp": "欢迎界面结束后在设置中自行设置",
	  "theme": "选择你的主题",
	  "themeDescWifulike": "不适合移动设备",
	  "themeDescWifuCut": "适合移动设备",
	  "themeDescClassic": "适合所有设备",
	  "texttheme": "选择你的文字颜色",
	  "inputName": "最后，输入你的昵称。",
	  "welcome": "欢迎来到RisuAI! 在这里，我将指导你进行设置。首先，我该如何称呼你？",
	  "welcome2": "你好{username}! 在我们开始之前，我会问你一些问题。你可以稍后在设置中更改这些设置。\n\n首先选择AI提供商。",
	  "openAIProvider": "OpenAI GPT是一个高质量AI模型，但它是付费的并且被过滤。",
	  "openrouterProvider": "Openrouter拥有很多模型，其中一些未经过滤，有些是免费的，但它不如OpenAI。",
	  "hordeProvider": "Horde是一个免费提供商，但响应时间长，质量低。",
	  "setProviderLater": "还有其他提供商，但你可以稍后在设置中设定。如果你想稍后设定，请选择此选项。",
	  "setupOpenAI": "要使用OpenAI，你需要获得一个API密钥。\n1. 前往 https://beta.openai.com/ \n2. 使用你的帐号登入 \n3. 前往 https://beta.openai.com/account/api-keys \n4. 点击'创建新的API密钥'并命名你的密钥 \n5. 在网站中复制密钥。\n6. 返回RisuAI\n7. 粘贴它，并点击发送按钮。",
	  "setupOpenrouter": "要使用Openrouter，你需要获得一个API密钥。\n1. 前往 https://openrouter.ai/keys\n2. 点击'创建密钥'\n3. 设定密钥名称无论你喜欢。\n4. 在网站中复制密钥\n5. 返回RisuAI\n6. 粘贴它，并点击发送按钮。",
	  "allDone": "全部完成！请稍候片刻。"
	},
	"confirm": "确认",
	"goback": "返回",
	"botSettings": "机器人设置",
	"model": "模型",
	"apiKey": "API密钥",
	"providerURL": "请求URL",
	"providerJSON": "请求体JSON",
	"mainPrompt": "主要提示",
	"jailbreakPrompt": "越狱提示",
	"globalNote": "全局注释",
	"autoSuggest": "自动建议",
	"tokens": "tokens",
	"maxContextSize": "最大上下文大小",
	"maxResponseSize": "最大响应大小",
	"temperature": "温度",
	"frequencyPenalty": "频率惩罚",
	"presensePenalty": "存在惩罚",
	"advancedSettings": "进阶设置",
	"advancedSettingsWarn": "警告：如果你不知道该选项的作用，请不要更改它！",
	"formatingOrder": "格式化顺序",
	"authorNote": "作者注释",
	"firstMessage": "第一条消息",
	"description": "描述",
	"jailbreakToggle": "启用越狱",
	"charIcon": "角色头像",
	"characterDisplay": "角色展示",
	"viewScreen": "额外角色屏幕",
	"none": "无",
	"emotionImage": "情绪图像",
	"noImages": "没有图像",
	"noBias": "无偏差",
	"image": "图像",
	"name": "名称",
	"emotion": "情绪名称",
	"value": "值",
	"reroll": "重新生成",
	"chatList": "聊天列表",
	"removeChat": "删除这条消息？",
	"loreBook": "Lorebook",
	"character": "角色",
	"Chat": "聊天",
	"globalLoreInfo": "角色Lorebook适用于该角色的所有聊天。",
	"group": "群组",
	"groupLoreInfo": "群组Lorebook适用于该群组的所有聊天。",
	"localLoreInfo": "聊天Lorebook仅适用于当前聊天。",
	"removeConfirm": "你真的要删除： ",
	"removeConfirm2": "你真的要删除： ",
	"exportConfirm": "你想要导出这个吗？",
	"insertOrder": "插入顺序",
	"activationKeys": "激活键",
	"activationKeysInfo": "用逗号分隔",
	"prompt": "提示",
	"loreBookDepth": "Lorebook搜索深度",
	"loreBookToken": "Lorebook最大token数",
	"removeCharacter": "删除角色",
	"removeGroup": "删除群组",
	"exportCharacter": "导出角色",
	"userSetting": "用户设置",
	"username": "你的姓名",
	"userIcon": "你的头像",
	"successExport": "成功导出并下载到你的下载目录中",
	"successImport": "成功导入",
	"importedCharacter": "已导入的角色",
	"alwaysActive": "始终激活",
	"additionalPrompt": "附加提示",
	"descriptionPrefix": "描述前缀",
	"forceReplaceUrl": "反向代理",
	"emotionWarn": "辅助模型正在使用中。",
	"plugin": "插件",
	"language": "语言",
	"UiLanguage": "UI语言",
	"createfromScratch": "从头创建",
	"importCharacter": "导入角色",
	"translator": "翻译器",
	"disabled": "已禁用",
	"noPluginSelected": "已将模型设置为插件，但未选择任何插件。",
	"text": "文本",
	"UISize": "聊天文本大小",
	"newVersion": "发现更新，是否要安装？",
	"display": "显示&音频",
	"useCustomBackground": "自定义背景",
	"translateInput": "翻译输入",
	"autoTranslation": "自动翻译",
	"fullscreen": "全屏",
	"playMessage": "播放消息音频",
	"iconSize": "头像大小",
	"createGroup": "创建群组",
	"groupIcon": "群组头像",
	"single": "单个",
	"multiple": "多个",
	"useCharLorebook": "在角色中使用Lorebook",
	"selectChar": "选择角色",
	"askLoadFirstMsg": "是否加载第一条消息？",
	"theme": "主题",
	"editOrder": "编辑顺序",
	"autoMode": "自动模式",
	"submodel": "辅助模型",
	"timeOutinSec": "超时（秒）",
	"emotionPrompt": "情绪提示词",
	"singleView": "单角色视图",
	"SpacedView": "多角色视图",
	"emphasizedView": "双角色视图",
	"pluginWarn": "插件在隔离的环境中运行，但安装恶意插件可能会导致问题。",
	"createGroupImg": "生成群组头像",
	"waifuWidth": "虚拟伴侣聊天宽度",
	"savebackup": "将备份保存到Google",
	"loadbackup": "从Google加载备份",
	"files": "文件",
	"backupConfirm": "你真的想要保存备份吗？",
	"backupLoadConfirm": "你真的想要加载备份吗？所有数据将丢失！",
	"backupLoadConfirm2": "你真的，真的想要加载备份吗？所有数据将丢失！",
	"pasteAuthCode": "请从弹出窗口中复制授权代码并粘贴到此处：",
	"others": "其他",
	"presets": "预设",
	"imageGeneration": "图像生成",
	"provider": "提供商",
	"key": "键",
	"noData": "无数据",
	"currentImageGeneration": "当前图像生成数据",
	"promptPreprocess": "使用提示词预处理",
	"SwipeRegenerate": "使用滑动箭头重新生成消息",
	"instantRemove": "在删除消息时删除后续消息",
	"instantRemoveConfirm": "你是否想只删除一条消息？如果你选择否，那么它下面的消息也将被删除。",
	"textColor": "文本颜色",
	"classicRisu": "经典Risu",
	"highcontrast": "高对比度",
	"quickPreset": "你可以通过 Ctrl +（预设的索引）快速更改预设",
	"requestretrys": "请求失败时重试",
	"utilityBot": "实用机器人",
	"ShowLog": "显示请求日志",
	"waifuWidth2": "虚拟伴侣大小",
	"sayNothing": "当没有字符串输入时自动发送'say nothing'",
	"regexScript": "正则表达式",
	"type": "类型",
	"editInput": "修改输入",
	"editOutput": "修改输出",
	"editProcess": "修改请求数据",
	"loadLatest": "加载最新的备份",
	"loadOthers": "加载其他备份",
	"exampleMessage": "示例消息",
	"creatorNotes": "角色创作者的评论",
	"systemPrompt": "系统提示词",
	"characterNotes": "角色备注",
	"personality": "个性",
	"scenario": "情境",
	"alternateGreetings": "备用问候语",
	"unrecommended": "不推荐",
	"chatNotes": "聊天笔记",
	"showUnrecommended": "显示不推荐的设置",
	"altGreet": "备选问候语",
	"scripts": "脚本",
	"settings": "设置",
	"selective": "选择性的",
	"SecondaryKeys": "次要键",
	"useGlobalSettings": "使用全局设置",
	"recursiveScanning": "递归扫描",
	"creator": "创作者",
	"CharVersion": "角色版本",
	"Speech": "语音",
	"ToggleSuperMemory": "启用超级记忆",
	"SuperMemory": "超级记忆",
	"useExperimental": "启用实验性功能",
	"showMemoryLimit": "显示记忆限制",
	"roundIcons": "圆形头像",
	"streaming": "流式传输",
	"chatBot": "聊天机器人",
	"otherBots": "其他机器人",
	"user": "用户",
	"additionalAssets": "额外资源",
	"editDisplay": "修改显示",
	"community": "社区",
	"textBackgrounds": "自定义文本屏幕颜色",
	"textBorder": "文本轮廓",
	"textScreenRound": "圆角文本屏幕",
	"textScreenBorder": "文本屏幕边框",
	"ttsReadOnlyQuoted": "TTS仅阅读引号内的文本",
	"ttsStop": "停止TTS（文转语音）",
	"askRemoval": "删除消息时询问",
	"replaceGlobalNote": "替换全局注释",
	"charLoreBook": "角色LoreBook",
	"globalLoreBook": "全局LoreBook",
	"globalRegexScript": "全局正则表达式",
	"accessibility": "易访问性",
	"sendWithEnter": "用回车键发送",
	"clickToEdit": "点击文本以编辑",
	"setNodePassword": "设置你的密码以确保安全",
	"inputNodePassword": "输入你的密码。如果你不记得，请删除伺服器档案中的save/__password.txt并重新启动伺服器。",
	"simple": "简易",
	"advanced": "高级",
	"askReRollAutoSuggestions": "重新生成自动建议",
	"creatingSuggestions": "生成建议中...",
	"orderByOrder": "按顺序交谈",
	"removeFromGroup": "你真的想从群组中删除{{char}}吗？",
	"talkness": "健谈程度",
	"active": "活跃",
	"loreRandomActivation": "使用概率条件",
	"activationProbability": "概率",
	"shareCloud": "分享到RisuRealm",
	"hub": "RisuRealm",
	"tags": "标签",
	"backgroundHTML": "背景嵌入",
	"copied": "已复制",
	"useChatCopy": "使用聊天复制",
	"useChatSticker": "使用聊天贴纸",
	"useAdditionalAssetsPreview": "使用额外资源预览",
	"autoTranslateInput": "自动翻译输入",
	"enterMessageForTranslateToEnglish": "输入要翻译成英语的消息",
	"recent": "最新",
	"downloads": "下载量",
	"trending": "最热",
	"imageCompression": "图像压缩",
	"notLoggedIn": "未登录到Risu帐户",
	"googleDriveInfo": "连接到Google Drive以同步你的数据。",
	"googleDriveConnection": "Google Drive连接",
	"googleDriveConnected": "Google Drive已连接",
	"SaveDataInAccount": "在帐户中保存数据",
	"dataSavingInAccount": "在帐户中保存数据",
	"logout": "注销",
	"loadDataFromAccount": "从帐户加载数据",
	"saveCurrentDataToAccount": "将当前数据保存到帐户",
	"chatAssumed": "",
	"proxyAPIKey": "API密钥/密码",
	"proxyRequestModel": "代理请求模型",
	"officialWiki": "官方Wiki",
	"officialWikiDesc": "RisuAI的官方Wiki，随意查看。",
	"officialDiscord": "官方Discord",
	"officialDiscordDesc": "用于讨论RisuAI的官方Discord伺服器",
	"confirmRecommendedPreset": "该模型有一个推荐设置。你想将设置更改为该推荐设置吗？（你可以在易访问性设置中关闭询问）",
	"toggleConfirmRecommendedPreset": "更改模型时询问是否使用推荐设置",
	"recommendedPreset": "设置为推荐设置",
	"persona": "用户信息",
	"icon": "头像",
	"account": "帐号",
	"remove": "删除",
	"creationSuccess": "创建成功",
	"noweb": "此功能无法在Web版本上使用。",
	"createBotInternet": "使用AI从互联网创建机器人",
	"createBotInternetAlert": "请提供角色的名称和相应的系列/游戏。",
	"able": "能够",
	"assetWidth": "资源图像最大宽度",
	"animationSpeed": "动画速度",
	"screenshot": "截图",
	"screenshotSaved": "截图已保存",
	"inputBotGenerationPrompt": "输入机器人生成提示",
	"createBotAI": "使用AI创建OC机器人",
	"createBotwithAI": "使用AI创建机器人",
	"changeFolderName": "输入新文件夹名称（留空以取消）",
	"cancel": "取消",
	"renameFolder": "重命名文件夹",
	"changeFolderColor": "更改文件夹颜色",
	"fullWordMatching": "完整单词匹配",
	"botSettingAtStart": "启动时的机器人菜单",
	"triggerStart": "在聊天发送时触发",
	"triggerInput": "在用户输出时触发",
	"triggerOutput": "在角色输出时触发",
	"triggerManual": "仅手动触发",
	"triggerCondVar": "如果变量",
	"triggerCondExists": "如果聊天中存在文本",
	"triggerScript": "触发脚本",
	"triggerMatchRegex": "与正则表达式匹配",
	"triggerMatchLoose": "宽松匹配",
	"triggerMatchStrict": "严格匹配",
	"searchDepth": "搜索深度",
	"equal": "等于",
	"notEqual": "不等于",
	"greater": "大于",
	"less": "小于",
	"greaterEqual": "大于或等于",
	"lessEqual": "小于或等于",
	"triggerEffSysPrompt": "添加系统提示",
	"triggerEffSetVar": "修改变量",
	"triggerEffImperson": "发送聊天",
	"triggerEffCommand": "Run Command",
	"triggerEffRunTrigger": "Run Trigger",
	"triggerEffStop": "Stop Sending Prompt",
	"triggerEffCall": "Call Trigger",
	"varableName": "变量名",
	"role": "角色",
	"location": "位置",
	"promptstart": "提示开始",
	"promptend": "提示结束",
	"historyend": "历史结束",
	"always": "总是",
	"noEffect": "无效果",
	"invaildTriggerEffect": "此效果不适用于此触发器类型。",
	"operator": "运算符",
	"TriggerSetToVar": "设置为变量",
	"TriggerAddToVar": "添加到变量",
	"TriggerSubToVar": "从变量中减去",
	"TriggerMulToVar": "乘以变量",
	"TriggerDivToVar": "除以变量",
	"isNull": "未设置",
	"ifChatIndex": "如果聊天索引",
	"ifRandom": "如果随机",
	"ifValue": "If Value",
	"hideRealm": "隐藏RisuRealm",
	"popularityLevel": "{} 流行度",
	"colorScheme": "配色方案",
	"rangeStart": "范围开始",
	"rangeEnd": "范围结束",
	"untilChatEnd": "直到聊天结束",
	"usePromptTemplate": "使用提示模板",
	"specialType": "特殊类型",
	"noSpecialType": "无特殊类型",
	"forceProxyAsOpenAI": "强制代理格式为 OpenAI",
	"promptTemplate": "提示模板",
	"customInnerFormat": "自定义内部格式",
	"innerFormat": "内部格式",
	"HypaMemory": "HypaMemory",
	"ToggleHypaMemory": "启用HypaMemory",
	"resetPromptTemplateConfirm": "你确定要重置提示词模板吗？",
	"emotionMethod": "情绪方法",
	"continueResponse": "继续响应",
	"showMenuChatList": "显示聊天菜单列表",
	"translatorLanguage": "翻译语言",
	"translatorType": "翻译类型",
	"deeplKey": "deepl API密钥",
	"deeplFreeKey": "deepl 免费 API密钥",
	"deeplXUrl": "deepLX URL",
	"deeplXToken": "deepLX Token",
	"exportPersona": "导出角色",
	"importPersona": "导入角色",
	"export": "导出",
	"import": "导入",
	"supporterThanks": "支持者感谢",
	"supporterThanksDesc": "感谢你的支持！",
	"donatorPatreonDesc": "预设情况下，不会在列表中显示，以保护隐私。如果你想显示你的昵称，请前往RisuAI的Patreon页面并按下链接按钮。",
	"useNamePrefix": "使用名称前缀",
	"textAdventureNAI": "以NAI模式运行",
	"appendNameNAI": "在NAI上附加名称",
	"customStopWords": "自定义停用词",
	"defaultPrompt": "默认提示",
	"additionalText": "附加描述",
	"seed": "Seed",
	"charjs": "CharacterJS",
	"depthPrompt": "深度提示",
	"largePortrait": "大头像",
	"lorePlus": "LoreBook+",
	"reverseProxyOobaMode": "Ooba模式",
	"joinMultiUserRoom": "加入多用户房间",
	"exactTokens": "精确Token",
	"fixedTokens": "大约Token",
	"inlayViewScreen": "嵌入屏幕",
	"imgGenPrompt": "图像生成提示",
	"imgGenNegatives": "图像生成负面提示",
	"imgGenInstructions": "图像生成指令",
	"usePlainFetchWarn": "请在使用NovelAI时禁用此选项，因为它可能导致CORS错误。",
	"translationPrompt": "翻译提示",
	"translationResponseSize": "翻译响应大小",
	"webdeeplwarn": "此选项不推荐在网页版本中使用，因为它可能导致CORS错误。",
	"saveBackupLocal": "本地保存备份",
	"loadBackupLocal": "本地加载备份",
	"topP": "Top P",
	"genTimes": "生成选择",
	"cot": "思维链",
	"forcePlainFetch": "强制Plain Fetch",
	"autoFillRequestURL": "自动填充请求URL",
	"newOAIHandle": "新OpenAI处理",
	"oaiRandomUser": "放置OAI随机用户",
	"inlayImage": "嵌入图像功能",
	"nativeAutomark": "实验性原生自动标记",
	"assistantPrefill": "助理预填",
	"postEndInnerFormat": "帖子结束",
	"sendChatAsSystem": "以系统发送聊天",
	"sendName": "在非群组聊天中发送名称",
	"utilOverride": "实用重写",
	"template": "模板",
	"chatAsOriginalOnSystem": "作为原始角色发送",
	"exportAsDataset": "将保存导出为数据集",
	"editTranslationDisplay": "编辑翻译显示",
	"selectModel": "选择模型",
	"autoRemoveThoughtTag": "移除思维标签",
	"customChainOfThought": "自定义思维链",
	"maxThoughtTagDepth": "最大思维标签深度",
	"openrouterFallback": "Openrouter备用",
	"openrouterMiddleOut": "Openrouter中间输出",
	"geminiApiKey": "Gemini API密钥",
	"removePunctuationHypa": "移除记忆标点",
	"memoryLimitThickness": "记忆限制厚度",
	"inputCardPassword": "输入卡片密码",
	"ccv2Desc": "Character Card V2是聊天机器人程序广泛使用的一种格式。",
	"rccDesc": "Risu Refined Character Card是一种具有额外功能的格式，如密码、完整性检查等。",
	"password": "密码",
	"license": "许可证",
	"licenseDesc": "你可以为下载者选择许可证以限制你的卡片提示的使用。",
	"passwordDesc": "你可以设置一个密码来保护你的卡片免受未经授权的访问。",
	"largePersonaPortrait": "个人肖像",
	"module": "模块",
	"modules": "模块",
	"noModules": "没有安装任何模块。",
	"createModule": "创建模块",
	"basicInfo": "基本信息",
	"moduleContent": "模块内容",
	"confirmRemoveModuleFeature": "你真的想要移除这个功能吗？这个操作不能撤销。",
	"editModule": "编辑模块",
	"importModule": "导入模块",
	"download": "下载",
	"edit": "编辑",
	"enableGlobal": "全球启用",
	"chatModulesInfo": "你可以为这个聊天启用或禁用模块。",
	"sideMenuRerollButton": "侧菜单重新生成按钮",
	"persistentStorage": "持久存储",
	"persistentStorageSuccess": "存储成功持久化",
	"persistentStorageFail": "存储未持久化。你是否拒绝了请求？或者浏览器不支持？",
	"persistentStorageRecommended": "推荐持久存储",
	"persistentStorageDesc": "你的浏览器支持持久存储。这被推荐用于更好的性能和用户体验。",
	"enable": "启用",
	"postFile": "发布文件",
	"requestInfoInsideChat": "在聊天中显示请求信息",
	"inputTokens": "输入Token",
	"outputTokens": "输出Token",
	"tokenWarning": "Token计算可能不准确。建议将其用作参考。",
	"log": "日志",
	"popularityLevelDesc": "人气随着下载等的增加而增加，估计3.7的人气大约是1次下载。",
	"additionalParams": "额外参数",
	"heightMode": "高度模式",
	"useAdvancedEditor": "使用高级编辑器",
	"noWaitForTranslate": "不等待翻译",
	"updateRealm": "更新到RisuRealm",
	"updateRealmDesc": "你正试图将你的角色更新为 RisuRealm。这将会将你的角色更新为 RisuRealm，且无法恢复。",
	"antiClaudeOverload": "Anti-Claude Overload (反Claude超载)",
	"activeTabChange": "其他标签页已启用，当前标签页已停用。若要启用此标签页，请点击「确定」。",
	"maxSupaChunkSize": "最大 SupaMemory 块大小",
	"addCharacter": "新增角色",
	"importFromRealm": "从 RisuRealm 选择",
	"importFromRealmDesc": "从 RisuRealm 选择超过1000个角色",
	"random": "随机",
	"metaData": "Meta Data（元数据）",
	"autoContinueMinTokens": "目标Token数（自动继续）",
	"autoContinueChat": "反不完整回应（自动继续）",
	"removeIncompleteResponse": "移除不完整句子",
	"tokenizer": "Tokenizer（分词器）",
	"chatFormating": "聊天格式",
	"useInstructPrompt": "使用指令提示",
	"hanuraiMemory": "HanuraiMemory",
	"playground": "试验场",
	"textAreaSize": "输入区大小",
	"textAreaTextSize": "输入区文本大小",
	"sideBarSize": "侧边栏大小",
	"embedding": "嵌入",
	"syntax": "Syntax（语法）",
	"run": "运行",
	"noMessage": "输入一些文字开始聊天。",
	"combineTranslation": "合并翻译",
	"v2Warning": "警告：V2 不再受支持。它可能不包含所有数据。"
  }