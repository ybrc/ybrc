# Vim安装插件支持 MarkDown 语法、实时预览等

<!--more-->
![IP定位](https://tool.lu/netcard/)
# Vim安装插件支持 MarkDown 语法、实时预览等

使用 markdown-preview.vim 插件可以实时通过浏览器预览 markdown 文件

使用该插件需要 vim 支持py2/py3

##  安装

使用 [vim-plug](https://github.com/junegunn/vim-plug):

在 `.vimrc` 或 `init.vim` 配置文件中添加 `Plug 'iamcco/markdown-preview.vim'` 然后运行 `:PlugInstall` 命令

如果需要预览数学公式，还需要安装 `mathjax-support-for-mkdp` 插件：

```v
Plug 'iamcco/mathjax-support-for-mkdp'
Plug 'iamcco/markdown-preview.vim'
```

### 设置 let g:mkdp_path_to_chrome = "firefox" " 设置 chrome 浏览器的路径（或是启动 chrome（或其他现代浏览器）的命令） " 如果设置了该参数, g:mkdp_browserfunc 将被忽略  let g:mkdp_browserfunc = 'MKDP_browserfunc_default' " vim 回调函数, 参数为要打开的 url  let g:mkdp_auto_start = 1 " 设置为 1 可以在打开 markdown 文件的时候自动打开浏览器预览，只在打开 " markdown 文件的时候打开一次  let g:mkdp_auto_open = 1 " 设置为 1 在编辑 markdown 的时候检查预览窗口是否已经打开，否则自动打开预 " 览窗口  let g:mkdp_auto_close = 1 " 在切换 buffer 的时候自动关闭预览窗口，设置为 0 则在切换 buffer 的时候不 " 自动关闭预览窗口  let g:mkdp_refresh_slow = 0 " 设置为 1 则只有在保存文件，或退出插入模式的时候更新预览，默认为 0，实时 " 更新预览  let g:mkdp_command_for_global = 0 " 设置为 1 则所有文件都可以使用 MarkdownPreview 进行预览，默认只有 markdown " 文件可以使用改命令  let g:mkdp_open_to_the_world = 0 " 设置为 1, 在使用的网络中的其他计算机也能访问预览页面 " 默认只监听本地（127.0.0.1），其他计算机不能访问  nmap <silent> <F8> <Plug>MarkdownPreview    " 普通模式 imap <silent> <F8> <Plug>MarkdownPreview    " 插入模式 nmap <silent> <C-F8> <Plug>StopMarkdownPreview  " 普通模式 imap <silent> <C-F8> <Plug>StopMarkdownPreview  " 插入模式

 

也可以用插件markdown-preview-sync

https://github.com/pingao777/markdown-preview-sync.git

### 安装方式

如果你使用[pathogen](https://github.com/tpope/vim-pathogen)，将release中的`markdown-preview-sync放`到bundle文件夹即可。

### 设置

```visual basic
" Chrome和Firefox都可以，推荐使用Chrome
" 可以这样设置Chrome路径
let g:markdown_preview_sync_chrome_path = ""

" 设置Firefox浏览器路径
let g:markdown_preview_sync_firefox_path = ""

" (Optional)设置自定义CSS主题，将你的CSS文件放在autoload/java/webapp/css文件夹下，
" 以“主题名-theme.css”方式命名，然后设置如下变量
let g:markdown_preview_sync_theme = "主题名"

" 配置快捷键
autocmd filetype markdown nnoremap <F9> :MarkSyncPreview<cr>
autocmd filetype markdown nnoremap <S-F9> :MarkSyncClose<cr>
```



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/ybc6.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
