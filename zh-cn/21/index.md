# vim的笔记

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript">$(document).ready(function() {$("#begin_speak").click(function () {
                let content = $("#text").text();
                let msg = new SpeechSynthesisUtterance(content);
                window.speechSynthesis.speak(msg);$("#pause_speak").show();$("#cancel_speak").show();});$("#cancel_speak").click(function () {
                window.speechSynthesis.cancel();$("#pause_speak").hide();$("#resume_speak").hide();$(this).hide();
});$("#pause_speak").click(function () {
                window.speechSynthesis.pause();$("#resume_speak").show();
            });$("#resume_speak").click(function () {
                window.speechSynthesis.resume();$(this).hide();
            });
        });
</script>
   <body>
      <div>
         <input type="button" id="begin_speak"  value="朗读本文">
         <input type="button" id="pause_speak"  style="display:none" value="暂停朗读">
         <input type="button" id="cancel_speak" style="display:none" value="停止朗读">
         <input type="button" id="resume_speak" style="display:none" value="继续朗读">
      </div>
      <div id="text">
# vim的笔记

## vim简介

略

总之就是非常好用且效率高

建议自己谷歌

## 常用简写

| 简写                                  | 原意                        |
| :------------------------------------ | :-------------------------- |
| w                                     | word                        |
| b                                     | back                        |
| ctrl+v                                | 可视                        |
| ctrl + v                              | 块模式                      |
| zz                                    | 切换成中心位置              |
| ciw/ci’                               | change in word/change in ‘’ |
| shift +i/a                            | 在行首/行尾插入             |
| (ctrl + v选中多行) +$/0 + shift + i/a | 在多行行首/行尾插入         |
| f                                     | find                        |
| d3                                    | 删除三个字符                |
| sr                                    | 打开分屏                    |
| ctrl + w + h/l                        | 切换成左/右分屏             |
| v : normal A/I                        | 对模块行首/行尾添加         |
| ctrl + o                              | 回到上一个位置              |
| :w ! sudo tee %                       | 强制保存                    |
| s                                     | 光标所在行                  |
| .,$s                                  | 光标所在行到行末            |

## 宏

简单来说,就是把需要执行的操作录制下来,交给vim

| 命令          | 含义                         |
| :------------ | :--------------------------- |
| q寄存器名     | 开始录制,并保存在某寄存器中  |
| 操作          | 被录制的操作                 |
| 次数@寄存器名 | 执行某寄存器的命令一定的次数 |

## 正则

### magic

这是一个用来规定哪些元字符需要+’\‘东西



```markdown
magic (\m)：除了$ . * ^ 之外其他元字符都要加反斜杠。
nomagic (\M)：除了 $ ^ 之外其他元字符都要加反斜杠。
```

两个例子



```
/\m.* # 查找任意字符串 
/\M.* # 查找字符串 .* （点号后面跟个星号）
```

#### v(very magic)



```
\v （very magic）：任何元字符都不用加反斜杠
\V （very nomagic）：任何元字符都必须加反斜杠
```

几个例子



```
/\v(a.c){3}$ # 查找行尾的abcaccadc 
/\m(a.c){3}$ # 查找行尾的(abc){3} 
/\M(a.c){3}$ # 查找行尾的(a.c){3} 
/\V(a.c){3}$ # 查找任意位置的(a.c){3}$
```

其实默认就好,默认为magic的设置

### 元字符

| 元字符     | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| `.`        | 匹配任意一个字符,如`p*p`可以匹配字符串`pep`, `pip`或者`pcp`  |
| `[abc]`    | 匹配方括号中的任意一个字符。可以使用-表示字符范围            |
| `[a-z0-9]` | 匹配小写字母和阿拉伯数字                                     |
| `[^abc]`   | 在方括号内开头使用`^`符号，表示匹配除方括号中字符之外的任意字符 |
| `\d`       | 匹配阿拉伯数字，等同于`[0-9]`                                |
| `\D`       | 匹配阿拉伯数字之外的任意字符，等同于`[^0-9]`                 |
| `\x`       | 匹配十六进制数字，等同于`[0-9A-Fa-f]`                        |
| `\w`       | 匹配单词字母，等同于`[0-9A-Za-z_]`                           |
| `\W`       | 匹配单词字母之外的任意字符，等同于`[^0-9A-Za-z_]`            |
| `\t`       | 匹配`<TAB>`字符                                              |
| `\s`       | 匹配空白字符，等同于`[ \t]`                                  |
| `\S`       | 匹配非空白字符，等同于`[^ \t]`                               |
| `\a`       | 所有的字母字符. 等同于`[a-zA-Z]`                             |
| `\l`       | 小写字母`[a-z]`                                              |
| `\L`       | 非小写字母`[^a-z]`                                           |
| `\u`       | 大写字母 `[A-Z]`                                             |
| `\U`       | 非大写字幕`[^A-Z]`                                           |

### 需要转义的元字符:

| 原字符 | 转意 |
| :----- | :--- |
| \*     | *    |
| \.     | .    |
| \/     | /    |
| \      | \    |
| \[     | [    |

### 量词

| 命令     | 意义                                                         |
| :------- | :----------------------------------------------------------- |
| `*`      | 匹配`0`个或多个(匹配优先)                                    |
| `\+`     | 匹配`1`个或多个(匹配优先)                                    |
| `\{n,m}` | 匹配`n`个到`m`个(匹配优先),如`\d{1, 3}`可以匹配`1`到`3`个数字,类似`11`, `1`, `333` |
| `\{n,}`  | 最少`n`个(匹配优先)                                          |
| `\{,m}`  | 最多`m`个(匹配优先)                                          |
| `\{n}`   | 恰好`n`个                                                    |

### 位置

| 字符      | 含义                                                         |
| :-------- | :----------------------------------------------------------- |
| `$`       | 匹配行尾,如`here:$`只会匹配出位于一行结尾的`here:`.          |
| `^`       | 匹配行首,如`^Part`只会匹配出位于一行开头的`Part`.            |
| `\<` `\>` | 会匹配出以某些字符开头的(`\<`)或结尾(`\>`)的单词.`\<ac`只会匹配出以`ac`开头的单词,如`action`,而`ac>/`只会匹配出以`ac`结尾的单词,如`maniac`.`\<action\>`会匹配出`action`这个单词.单词的开头和结尾,是用标点符号或空格来分隔的. |

### 贪婪匹配

默认使用贪婪匹配

可以使用”-“关闭
| 个数|贪婪模式|非贪婪模式|
|–|–|–|
|大于等于0个 | \{}，相当于 * | 非贪婪模式{-}，把0省略了|
|大于等于1个 | \{1,}， 相当于 \+ |非贪婪模式{-1,}|
|0个或1个， | \{0,1}，相当于 \= | 非贪婪模式{-,1}|

## 批量替换字符串

基本语法: `:[addr]s/src/des/[option]`

### [addr]

| 命令 | 含义             |
| :--- | :--------------- |
| 1,20 | 1到20行          |
| 1,$  | 整个文件         |
| %    | 整个文件         |
| .,$  | 当前行到文件结尾 |

### s: 表示替换操作

### [optin]

| 命令 | 含义       |
| :--- | :--------- |
| g    | 全局替换   |
| i    | 忽略大小写 |

### 特别注意

查找时`\n`代表换行
替换时`\r`代表换行
即



```
:%s/\n/\r/g
```

文件不变

## vim插件

vim最强大的地方之一在于高度可定制性

主要体现在两个方面

- vim丰富的插件
- vimrc的各类设置

其中vim插件可以通过以下命令安装



```
yay -S vim-plug
```

然后只需要在vimrc文件里的写入以下句子即可



```
call plug#begin()
# 完整的GitHub仓库地址
Plug 'https://github.com/junegunn/vim-github-dashboard.git'
# 简写形式，只写username/repo即可
Plug 'junegunn/fzf'
call plug#end()
```

然后在命令模式下输入



```
:PlugInstall
```

即可安装

此外还有插件更新操作



```
:PlugUpdate
```

## vimrc

这是一个可以规定vim操作的文件

类似于vim的设置

以下是我的vimrc(已添加注释)



```
"vim的设置

"     __     __  ___   __  __   ____     ____
"     \ \   / / |_ _| |  \/  | |  _ \   / ___|
"      \ \ / /   | |  | |\/| | | |_) | | |
"       \ V /    | |  | |  | | |  _ <  | |___
"        \_/    |___| |_|  |_| |_| \_\  \____|


"显示模式
set showmode
"共享剪贴板
set clipboard=unnamedplus
"自动语法高亮
set syntax=on
"高亮显示匹配的括号([{和}])"
set showmatch
"高亮搜索
set hlsearch
"输入的命令显示出来"
set showcmd
"显示颜色
set t_Co=256
"打开鼠标
set mouse=a
"显示相对行号
set relativenumber
"命令模式下允许自动补全命令
set wildmenu
"高亮当前行
set cursorline
"实时匹配
set incsearch
"搜索时忽略大小写
set ignorecase 
"智能大小写(输入大写时就对大小写敏感,否则不敏感)
set smartcase  
"自动切换到当前文件的目录
set autochdir
"光标移动到buffer的顶部底部保持3行
set scrolloff=3
"检测文件类型
filetype on
"显示行号
set number
"自动缩进
set smartindent
"自动缩进的空格数
set shiftwidth=4
"tab的空格数
set tabstop=4
"按下tab自动转化为空格
set expandtab
"tab被转化为共个的数目
set softtabstop=4
"vim的编码方式
set fileencodings=utf-8,gbk
"折叠方式
set foldmethod=manual
"更新时间
set updatetime=10



"plug插件管理设置
call plug#begin('~/.vim/plugged')

Plug 'mhinz/vim-startify'
Plug 'scrooloose/nerdtree', { 'on': 'NERDTreeToggle' }
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'Valloric/YouCompleteMe'
Plug 'tpope/vim-surround'
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() }, 'for': ['markdown', 'vim-plug']}

Plug 'godlygeek/tabular'
Plug 'plasticboy/vim-markdown'

call plug#end()



"自定义的快捷键

map S :w<CR>
map D :q<CR>
map Q :q!<CR>
map sr : set splitright<CR>:vsplit<CR>
map sn : set nosplitright<CR>:vsplit<CR>
map sb : set splitblow<CR>:vsplit<CR>
map tt : NERDTreeToggle<CR>
cmap w!! w !sudo tee > /dev/null %


" markdown-preview's config
"--------------start-------------
" set to 1, nvim will open the preview window after entering the markdown buffer
let g:mkdp_auto_start = 1

" set to 1, the nvim will auto close current preview window when change
let g:mkdp_auto_close = 1

" set to 1, the vim will refresh markdown when save the buffer or
let g:mkdp_refresh_slow = 1

" set to 1, the MarkdownPreview command can be use for all files,
let g:mkdp_command_for_global = 0

" set to 1, preview server available to others in your network
let g:mkdp_open_to_the_world = 0

" use custom IP to open preview page
let g:mkdp_open_ip = '127.0.0.1'

" specify browser to open preview page
" let g:mkdp_browser = 'chromium'
let g:mkdp_browser = 'google-chrome-stable'


let g:mkdp_preview_options = {
    \ 'mkit': {},
    \ 'katex': {},
    \ 'uml': {},
    \ 'maid': {},
    \ 'disable_sync_scroll': 0,
    \ 'sync_scroll_type': 'middle',
    \ 'hide_yaml_meta': 1,
    \ 'sequence_diagrams': {},
    \ 'flowchart_diagrams': {},
    \ 'content_editable': v:false,
    \ 'disable_filename': 0
    \ }

" use a custom port to start server or random for empty
let g:mkdp_port = '8080'

" preview page title
let g:mkdp_page_title = '「${name}」'

" recognized filetypes
let g:mkdp_filetypes = ['markdown']

let g:mkdp_path_to_chrome = '/usr/bin/chromium'

" Whether to enable synchronization
let g:mkdp_preview_options.disable_sync_scroll = 0

"--------------end-------------


" youcompeleteme'setting
"--------------start-------------
"let g:ycm_global_ycm_extra_conf = "~/.vim/.ycm_extra_conf.py"
"2个字符后开始补全
let g:ycm_min_num_identifier_candidate_chars = 2
"tab键不弹出函数定义
set completeopt=menu,menuone
let g:ycm_add_preview_to_completeopt = 0
set completeopt-=preview

let g:ycm_auto_hover=''



"补全列表的颜色(灰色)
highlight PMenu    ctermbg=242 ctermfg=0 guifg=black    guibg=darkgrey
highlight PMenuSel ctermfg=242 ctermbg=8 guifg=darkgrey guibg=black
"--------------end-------------


"##### auto fcitx  ###########
"--------------start-------------
let g:input_toggle = 1
function! Fcitx2en()
   let s:input_status = system("fcitx-remote")
   if s:input_status == 2
      let g:input_toggle = 1
      let l:a = system("fcitx-remote -c")
   endif
endfunction

function! Fcitx2zh()
   let s:input_status = system("fcitx-remote")
   if s:input_status != 2 && g:input_toggle == 1
      let l:a = system("fcitx-remote -o")
      let g:input_toggle = 0
   endif
endfunction

set ttimeoutlen=150
"退出插入模式
autocmd InsertLeave * call Fcitx2en()
"进入插入模式
"--------------end-------------

" vim-markdown
" 禁用折叠
let g:vim_markdown_folding_disabled=1
" latex公式高亮
let g:vim_markdown_math = 1
```

## vim插件

### vim-surround

主要用于操作成对的符号,例如`()`,` []`, `{}`,` <>`,` ‘’`, `“”`这类符号

主要命令如下

| 命令    | 含义                                               |
| :------ | :------------------------------------------------- |
| ds      | 删除一个配对符号 (delete a surrounding)            |
| cs      | 更改一个配对符号 (change a surrounding)            |
| ys      | 增加一个配对符号 (yank a surrounding)              |
| yS      | 在新的行增加一个配对符号并进行缩进                 |
| yss     | 在整行增加一个配对符号                             |
| ySs/Yss | 在整行增加一个配对符号，配对符号单独成行并进行缩进 |

### ale

vim下的自动查错工具,在写某些需要编译的语言很好用

优势如下:

- **实时检测。**为了让代码可以在编辑时进行实时的检测，ale 的运行方式是将代码做为 stdin 导入检测工具（不支持的话使用临时文件），这样做的好处是我们可以更早的发现错误。
- **并发运行。**ale 默认使用所有可用的检测工具并发执行检测，譬如说我们有时需要同时对 javascript 运行 [eslint](https://zhuanlan.zhihu.com/p/eslint.org) 以及 jscs。
- 标识栏、状态栏以及命令行消息支持。

### nerdtree

vim下的树形浏览文件工具

使用tt命令打开,效果如下

### YouCompleteMe

自动补全工具,功能强大,支持各类语言

#### 在vimrc中安装后并不能使用

还需要按照如下步骤:

##### 进入ycm目录



```
cd ~/.vim/plugged/YouCompleteMe
```

##### 给予可执行权限(任选其一)



```
chmod +x install.py
```



```
chmod +x install.sh
```

##### 安装(任选其一)



```
sudo python install.py
```



```
sudo bash install.sh
```

### markdown-preview.nvim

可以通过浏览器实时预览md文件,具有极高的自定义功能
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/98.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
<script type='text/javascript' src="//libs.cdnjs.net/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div> 
<a id="download" download="qrcode.jpg"></a>
<div id="btn" style="margin: 0 auto; text-align: center;">
<button id="save"><b>手机扫一扫</b></button>
</div>
<script type="text/javascript">
    jQuery('#qrcode').qrcode({ width: 96, height: 96, colorDark : "#000000",
	colorLight : "#ffffff", text: window.location.href });$("#save").click(function () {
        var canvas = $('#qrcode').find("canvas").get(0);
        var url = canvas.toDataURL('image/jpeg');$("#download").attr('href', url).get(0).click();
        return false;
    });
</script>
