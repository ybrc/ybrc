# 常用IDA脚本开发API


<!--more-->
![IP定位](https://tool.lu/netcard/)

## 常用IDA脚本开发API

 本文所提及的api适用于IDA Pro 7.5，python3，内容来自权威指南和IDA官网，本文将其中的idc api找到了对应的python3 api，并省略了一些字符串操作函数以及文件输入输出函数，因为这些工作可以由python单独完成，故不对该类函数多做介绍。记录一下方便查阅。

### 1读取和修改数据的函数

> - `idc.get_wide_byte(addr)`，从虚拟地址addr处读取一个字节值
> - `idc.get_wide_word(addr)`，从虚拟地址addr处读取一个字（2字节）值
> - `idc.get_wide_dword(addr)`，从虚拟地址addr处读取一个双字（4字节）值
> - `idc.get_qword(addr)`，从虚拟地址addr处读取一个四字（8字节）值
> - `ida_bytes.patch_byte(addr,byte)`，设置虚拟地址addr处的一个字节值
> - `ida_bytes.patch_word(addr,word)`，设置虚拟地址addr处的一个字值
> - `ida_bytes.patch_dword(addr,dword)`，设置虚拟地址addr处的一个双字值
> - `ida_bytes.patch_qword(addr,qword)`，设置虚拟地址addr处的一个四字值
> - `ida_bytes.is_loaded(addr)`，如果addr包含有效数据，则返回1，否则返回0

### 2用户交互函数

> - `ida_kernwin.warning(string format, ...)`，在对话框中显示一条格式化消息
> - `ida_kernwin.ask_str(defval, hist, prompt)`，显示一个输入框，要求用户输入一个字符串值。defval为输入框中的默认值，hist为history id传入数字，用途不明，prompt代表输入字符串的意图。操纵成功后返回用户输入的字符串，若取消操作则返回None
> - `ida_kernwin.ask_file(saving, defval, title)`，显示一个文件选择对话框，saveing为1时为保存文件，为0时为读取文件；defval为文件名输入框中的默认值，能够起到一定的筛选格式的作用；title为对话框标题。操作成功后返回目标文件的绝对路径，否则返回None
> - `ida_kernwin.ask_yn(deflt,msg)`，弹出用户确认对话框，deflt为默认选项，1为确认，0为否认，-1为取消；msg为对话框的提示信息。返回值为用户的选项。
> - `idc.get_screen_ea()`，返回当前光标所在的虚拟地址
> - `ida_kernwin.jumpto(addr)`，跳转到反汇编窗口的addr地址所在处

  由于IDA脚本开发没有调试工具（不清楚IDA Pro 7.5有没有，至少老版本没有），所以需要使用print等函数来作为主要的调试工具。

### 3操纵数据库名称

> - `idc.get_name(ea,flag=0)`，返回与给定地址ea处有关的名称，如果没名称则返回空字符串。flag可忽略，作用不明。
> - `idc.set_name(ea,name,flag=0)`，将给定的名称分配给指定的地址，如果`name == ""`则删除已有名称。flag可忽略，作用不明。
> - `idc.get_name_ea_simple(name)`，返回指定名称所在的地址，不支持正则匹配，如果找不到则返回0xffffffffffffffff

### 4处理函数的函数

> - `idc.get_func_attr(ea,attr)`，返回ea处函数的attr属性值。attr有四个选项：`FUNCATTR_START=0`，`FUNCATTR_END=8`，`FUNCATTR_OWNER=24`，`FUNCATTR_REFQTY=32`。其中ea不一定要求是函数的开头，可以是函数内的某一个地址，这点很好用。
> - `idc.get_func_name(ea)`，返回ea处函数的名称。失败则返回空字符串。其中ea不一定要求是函数的开头，可以是函数内的某一个地址，这点很好用。
> - `idc.get_next_func(ea)`，从给定地址ea处向下寻找第一个function，并返回其虚拟地址，若找不到则返回-1
> - `idc.get_prev_func(ea)`，从给定地址ea处向上寻找第一个function，并返回其虚拟地址，若找不到则返回-1

### 5代码交叉引用函数

> - `ida_xref.get_first_cref_from(frm)`，返回给定地址向其转交控制权的第一个位置。如果没有则返回-1
> - `ida_xref.get_next_cref_from(frm, current)`，如果current已经在前一次调用Rfirst或Rnext时返回，则返回给定地址frm转交控制权的下一个位置。如果没有则返回-1
> - `idc.get_xref_type()`，返回一个常量，说明某个交叉引用查询函数（如Rfirst）返回的最后一个交叉引用的类型。对于代码交叉引用，这些常量包括fl_CN（近调用）、fl_CF（远调用）、fl_JN（近跳转）、fl_JF（远跳转）和fl_F（普通顺序流）
> - `ida_xref.get_first_cref_to(to)`，返回转交控制权到给定地址的第一个位置。如果没有则返回-1
> - `ida_xref.get_next_cref_to(to, current)`，如果current已经在前一次调用Rfirst或Rnext时返回，则返回下一个转交控制权到给定地址的第一个位置。如果没有则返回-1

### 6数据交叉引用函数

> - `ida_xref.get_first_dref_from(frm)`，返回给定地址引用一个数据值的第一个位置。如果没有则返回-1
> - `ida_xref.get_next_dref_from(frm, current)`，如果current已经在前一次调用Dfirst或Dnext时返回，则返回给定地址frm向其引用一个数据值的下一个位置。如果没有则返回-1
> - `idc.get_xref_type()`，返回一个常量，说明某个交叉引用查询函数（如Dfirst）返回的最后一个交叉引用的类型。对于数据交叉引用，这些常量包括dr_0（提供的偏移量）、dr_W（数据写入）和dr_R（数据读取）
> - `ida_xref.get_first_dref_to(to)`，返回将给定地址to作为数据引用的第一个位置。如果没有则返回-1
> - `ida_xref.get_next_dref_to(to, current)`，如果current已经在前一次调用Dfirst或Dnext时返回，则返回将给定地址to作为数据引用的下一次位置。如果没有则返回-1

### 7数据库操纵函数

> - `ida_bytes.del_items(ea,flag=0,nbytes=1,may_destroy=None)`，取消给定地址ea处的定义，其他参数可省略，意义不明。相当于按快捷键U
> - `idc.create_insn(ea)`，将目标地址解释为汇编代码，相当于按快捷键C，成功后返回True，否则返回False
> - `ida_bytes.create_data`，将目标地址识别为指定类型的数据。用法如下
>   `create_data(ea, FF_BYTE, 1, ida_idaapi.BADADDR) == MakeByte(ea)`;
>   `create_data(ea, FF_WORD, 2, ida_idaapi.BADADDR) == MakeWord(ea)`;
>   `create_data(ea, FF_DWORD, 4, ida_idaapi.BADADDR) == MakeDword(ea)`;
>   `create_data(ea, FF_QWORD, 8, ida_idaapi.BADADDR) == MakeQword(ea)`;
>   `create_data(ea, FF_OWORD, 16, ida_idaapi.BADADDR) == MakeOword(ea)`;
>   `create_data(ea, FF_YWORD, 32, ida_idaapi.BADADDR) == MakeYword(ea)`;
>   `create_data(ea, FF_FLOAT, 4, ida_idaapi.BADADDR) == MakeFloat(ea)`;
>   `create_data(ea, FF_DOUBLE, 8, ida_idaapi.BADADDR) == MakeDouble(ea)`;
>   `create_data(ea, FF_PACKREAL, 10, ida_idaapi.BADADDR) == MakePackReal(ea)`;
>   `create_data(ea, FF_TBYTE, 10, ida_idaapi.BADADDR) == MakeTbyte(ea)`;
>   `create_data(ea, FF_CUSTOM, size, dtid|((fid)<<16)) == MakeCustomData(ea, size, dtid, fid)`;
> - `idc.set_cmt(ea, cmt, isRepeatable)`，在指定地址ea处添加注释，isRepeatable表明是否可重复注释
> - `ida_funcs.add_func(ea1, ea2=BADADDR)`，在指定地址处创建函数，相当于按快捷键P

### 8数据库搜索函数

> - `ida_search.find_code(ea,flag)`，从给定的地址搜索一条指令
> - `ida_search.find_data(ea,flag)`，从给定的地址搜索一个数据项
> - `ida_search.find_binary(start_ea, y, x, binary, sflag)`，在给定的地址，从给定行的给定列搜索binary
> - `ida_search.find_text(start_ea, y, x, ustr, sflag)`，在给定的地址，从给定行的给定列搜索字符串

### 9反汇编行组件

> - `idc.generate_disasm_line(ea,flag)`，返回反汇编窗口中目标地址的代码（包括但不限于汇编代码），flag填个0就行。
> - `idc.print_insn_mnem(ea)`，返回反汇编窗口中目标地址的指令助记符部分，若非汇编代码则返回空字符串
> - `idc.print_operand(ea,index)`，返回反汇编窗口中目标地址的操作数的文本形式，index为操作数编号从0开始。
> - `idc.get_operand_type(ea,index)`，返回一个整数，指出给定地址的给定操作数的类型，具体需参考IDC文档了解操作数类型代码
> - `idc.get_operand_value(ea,index)`，返回与给定地址的给定操作数有关的整数值。返回值的性质取决于GetOpType指定的给定操作数的类型

## 参考文献

> - IDA Pro 权威指南（第二版）
> - https://hex-rays.com/products/ida/support/idapython_docs/
> - https://hex-rays.com/products/ida/support/ida74_idapython_no_bc695_porting_guide.shtml


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/17.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">

