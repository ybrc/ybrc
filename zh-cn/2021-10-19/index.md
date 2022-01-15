# 重学C语言关键字


<!--more-->
# C语言关键字（C90，C99，C11）

“关键字”是对 C 编译器具有特殊含义的单词。 在翻译的第 7 和第 8 阶段中，标识符不能具有与 C 关键字相同的拼写和大小写。 有关详细信息，请参阅《预处理器参考》中的[翻译阶段](https://docs.microsoft.com/zh-cn/cpp/preprocessor/phases-of-translation?view=msvc-160)。 有关标识符的详细信息，请参阅[标识符](https://docs.microsoft.com/zh-cn/cpp/c-language/c-identifiers?view=msvc-160)。

## 标准 C 关键字

C 语言使用下列关键字：

**`auto`**
**`break`**
**`case`**
**`char`**
**`const`**
**`continue`**
**`default`**
**`do`**
**`double`**
**`else`**
**`enum`**

**`extern`**
**`float`**
**`for`**
**`goto`**
**`if`**
**`inline`** 
**`int`**
**`long`**
**`register`**
**`restrict`** 
**`return`**

**`short`**
**`signed`**
**`sizeof`**
**`static`**
**`struct`**
**`switch`**
**`typedef`**
**`union`**
**`unsigned`**
**`void`**
**`volatile`**

**`while`**
**[`_Alignas`](https://docs.microsoft.com/zh-cn/cpp/c-language/alignment-c?view=msvc-160#alignas-and-_alignas-c11)** 
**[`_Alignof`](https://docs.microsoft.com/zh-cn/cpp/c-language/alignment-c?view=msvc-160#alignof-and-_alignof-c11)** 
**`_Atomic`** 
**`_Bool`** 
**`_Complex`** 
**[`_Generic`](https://docs.microsoft.com/zh-cn/cpp/c-language/generic-selection?view=msvc-160)** 
**`_Imaginary`** 
**`_Noreturn`** 
**`_Static_assert`** 
**`_Thread_local`** 

1 ISO C99 中引入的关键字。

2 ISO C11 中引入的关键字。

a 从 Visual Studio 2019 版本 16.8 开始，如果指定了 `/std:c11` 或 `/std:c17` 编译器选项，将在编译为 C 的代码中支持这些关键字。

b 从 Visual Studio 2019 版本 16.8 开始，如果指定了 `/std:c11` 或 `/std:c17` 编译器选项，这些关键字将由编译器在编译为 C 的代码中识别，但不受支持。

不能重新定义关键字。 但是，你可以在编译前通过使用 C [预处理器指令](https://docs.microsoft.com/zh-cn/cpp/preprocessor/preprocessor-directives?view=msvc-160)指定文本来替换关键字。

## Microsoft 专用 C 关键字

ANSI 和 ISO C 标准允许为编译器实现保留带有两个前导下划线的标识符。 Microsoft 的惯例是在 Microsoft 专用关键字名称前加上双下划线。 这些单词不能用作标识符名称。 有关标识符命名规则的说明，包括双下划线的使用，请参阅[标识符](https://docs.microsoft.com/zh-cn/cpp/c-language/c-identifiers?view=msvc-160)。

下列关键字和特殊标识符由 Microsoft C 编译器识别：

**`__asm`** 
**`__based`** 
**`__cdecl`** 
**`__declspec`** 
**`__except`** 
**`__fastcall`**
**`__finally`** 

**`__inline`** 
**`__int16`** 
**`__int32`** 
**`__int64`** 
**`__int8`** 
**`__leave`** 
**`__restrict`**

**`__stdcall`** 
**`__try`** 
**`dllexport`** 
**`dllimport`** 
**`naked`** 
**`static_assert`** 
**`thread`** 

3 `__based` 关键字对 32 位和 64 位目标编译的用途有限。

4 当与 `__declspec` 一起使用时，这些关键字是特殊的标识符；它们在其他情况下的使用不受限制。

5 为了与以前的版本兼容，当启用 Microsoft 扩展时，这些关键字既可以使用两个前导下划线，也可以使用一个前导下划线。

6 如果不包括 <assert.h>，则 Microsoft Visual C 编译器会将 `static_assert` 映射到 C11 `_Static_assert` 关键字 。

默认情况下将启用 Microsoft 扩展。 为了帮助创建可移植的代码，可以在编译过程中指定 [/Za (禁用语言扩展)](https://docs.microsoft.com/zh-cn/cpp/build/reference/za-ze-disable-language-extensions?view=msvc-160) 选项来禁用 Microsoft 扩展。 如果使用此选项，将禁用某些 Microsoft 专用关键字。

启用 Microsoft 扩展时，您可在程序中使用上面列出的关键字。 为了符合语言标准一致性，其中大多数的关键字是以双下划线开头的。 `dllexport`、`dllimport`、`naked` 和 `thread` 这 4 个关键字除外，它们只与 `__declspec` 一起使用，不需要前导双下划线。 为了向后兼容，支持其余的关键字的单下划线版本。

## 请参阅

[C 的元素](https://docs.microsoft.com/zh-cn/cpp/c-language/elements-of-c?view=msvc-160)



![C关键字](https://img-blog.csdnimg.cn/20201202172038778.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3phYmNkZXI=,size_16,color_FFFFFF,t_70)关键字 ( keyword)：word or identifier that has a particular meaning to the programming language；

保留字 ( reserved word)：a reserved word is a word that cannot be used as an identifier, and a reserved word may have no meaning.

关键字是对编程语言有**特定含义**的词或标识符，保留字是不能定义为标识符的词，为系统保留，有些保留字可能并没有什么意义。例如java中的goto保留字，它并不是关键字，没有什么具体含义，仅为系统保留而已。

说了那么多，其实，，c和c++是不区分保留字和关键字的，c和c++所有的保留字都是关键字。

**c/c++关键字（摘自[cppreference.com](http://en.cppreference.com/w/c/keyword)）：**



| [`auto`](http://en.cppreference.com/w/c/keyword/auto) [`break`](http://en.cppreference.com/w/c/keyword/break) [`case`](http://en.cppreference.com/w/c/keyword/case) [`char`](http://en.cppreference.com/w/c/keyword/char) [`const`](http://en.cppreference.com/w/c/keyword/const) [`continue`](http://en.cppreference.com/w/c/keyword/continue) [`default`](http://en.cppreference.com/w/c/keyword/default) [`do`](http://en.cppreference.com/w/c/keyword/do) [`double`](http://en.cppreference.com/w/c/keyword/double) [`else`](http://en.cppreference.com/w/c/keyword/else) [`enum`](http://en.cppreference.com/w/c/keyword/enum) [`extern`](http://en.cppreference.com/w/c/keyword/extern) | [`float`](http://en.cppreference.com/w/c/keyword/float) [`for`](http://en.cppreference.com/w/c/keyword/for) [`goto`](http://en.cppreference.com/w/c/keyword/goto) [`if`](http://en.cppreference.com/w/c/keyword/if) [`inline`](http://en.cppreference.com/w/c/keyword/inline) (since C99) [`int`](http://en.cppreference.com/w/c/keyword/int) [`long`](http://en.cppreference.com/w/c/keyword/long) [`register`](http://en.cppreference.com/w/c/keyword/register) [`restrict`](http://en.cppreference.com/w/c/keyword/restrict) (since C99) [`return`](http://en.cppreference.com/w/c/keyword/return) [`short`](http://en.cppreference.com/w/c/keyword/short) | [`signed`](http://en.cppreference.com/w/c/keyword/signed) [`sizeof`](http://en.cppreference.com/w/c/keyword/sizeof) [`static`](http://en.cppreference.com/w/c/keyword/static) [`struct`](http://en.cppreference.com/w/c/keyword/struct) [`switch`](http://en.cppreference.com/w/c/keyword/switch) [`typedef`](http://en.cppreference.com/w/c/keyword/typedef) [`union`](http://en.cppreference.com/w/c/keyword/union) [`unsigned`](http://en.cppreference.com/w/c/keyword/unsigned) [`void`](http://en.cppreference.com/w/c/keyword/void) [`volatile`](http://en.cppreference.com/w/c/keyword/volatile) [`while`](http://en.cppreference.com/w/c/keyword/while) | [`_Alignas`](http://en.cppreference.com/w/c/keyword/_Alignas) (since C11) [`_Alignof`](http://en.cppreference.com/w/c/keyword/_Alignof) (since C11) [`_Atomic`](http://en.cppreference.com/w/c/keyword/_Atomic) (since C11) [`_Bool`](http://en.cppreference.com/w/c/keyword/_Bool) (since C99) [`_Complex`](http://en.cppreference.com/w/c/keyword/_Complex) (since C99) [`_Generic`](http://en.cppreference.com/w/c/keyword/_Generic) (since C11) [`_Imaginary`](http://en.cppreference.com/w/c/keyword/_Imaginary) (since C99) [`_Noreturn`](http://en.cppreference.com/w/c/keyword/_Noreturn) (since C11) [`_Static_assert`](http://en.cppreference.com/w/c/keyword/_Static_assert) (since C11) [`_Thread_local`](http://en.cppreference.com/w/c/keyword/_Thread_local) (since C11) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |

| [`alignas`](https://en.cppreference.com/w/cpp/keyword/alignas) (since C++11) [`alignof`](https://en.cppreference.com/w/cpp/keyword/alignof) (since C++11) [`and`](https://en.cppreference.com/w/cpp/keyword/and) [`and_eq`](https://en.cppreference.com/w/cpp/keyword/and_eq) [`asm`](https://en.cppreference.com/w/cpp/keyword/asm) [`atomic_cancel`](https://en.cppreference.com/w/cpp/language/transactional_memory) (TM TS) [`atomic_commit`](https://en.cppreference.com/w/cpp/language/transactional_memory) (TM TS) [`atomic_noexcept`](https://en.cppreference.com/w/cpp/language/transactional_memory) (TM TS) [`auto`](https://en.cppreference.com/w/cpp/keyword/auto)(1) [`bitand`](https://en.cppreference.com/w/cpp/keyword/bitand) [`bitor`](https://en.cppreference.com/w/cpp/keyword/bitor) [`bool`](https://en.cppreference.com/w/cpp/keyword/bool) [`break`](https://en.cppreference.com/w/cpp/keyword/break) [`case`](https://en.cppreference.com/w/cpp/keyword/case) [`catch`](https://en.cppreference.com/w/cpp/keyword/catch) [`char`](https://en.cppreference.com/w/cpp/keyword/char) [`char16_t`](https://en.cppreference.com/w/cpp/keyword/char16_t) (since C++11) [`char32_t`](https://en.cppreference.com/w/cpp/keyword/char32_t) (since C++11) [`class`](https://en.cppreference.com/w/cpp/keyword/class)(1) [`compl`](https://en.cppreference.com/w/cpp/keyword/compl) [`concept`](https://en.cppreference.com/w/cpp/keyword/concept) (since C++20) [`const`](https://en.cppreference.com/w/cpp/keyword/const) [`constexpr`](https://en.cppreference.com/w/cpp/keyword/constexpr) (since C++11) [`const_cast`](https://en.cppreference.com/w/cpp/keyword/const_cast) [`continue`](https://en.cppreference.com/w/cpp/keyword/continue) [`co_await`](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/co_await&action=edit&redlink=1) (coroutines TS) [`co_return`](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/co_return&action=edit&redlink=1) (coroutines TS) [`co_yield`](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/co_yield&action=edit&redlink=1) (coroutines TS) [`decltype`](https://en.cppreference.com/w/cpp/keyword/decltype) (since C++11) [`default`](https://en.cppreference.com/w/cpp/keyword/default)(1) [`delete`](https://en.cppreference.com/w/cpp/keyword/delete)(1) | [`do`](https://en.cppreference.com/w/cpp/keyword/do) [`double`](https://en.cppreference.com/w/cpp/keyword/double) [`dynamic_cast`](https://en.cppreference.com/w/cpp/keyword/dynamic_cast) [`else`](https://en.cppreference.com/w/cpp/keyword/else) [`enum`](https://en.cppreference.com/w/cpp/keyword/enum) [`explicit`](https://en.cppreference.com/w/cpp/keyword/explicit) [`export`](https://en.cppreference.com/w/cpp/keyword/export)(1) [`extern`](https://en.cppreference.com/w/cpp/keyword/extern)(1) [`false`](https://en.cppreference.com/w/cpp/keyword/false) [`float`](https://en.cppreference.com/w/cpp/keyword/float) [`for`](https://en.cppreference.com/w/cpp/keyword/for) [`friend`](https://en.cppreference.com/w/cpp/keyword/friend) [`goto`](https://en.cppreference.com/w/cpp/keyword/goto) [`if`](https://en.cppreference.com/w/cpp/keyword/if) [`import`](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/import&action=edit&redlink=1) (modules TS) [`inline`](https://en.cppreference.com/w/cpp/keyword/inline)(1) [`int`](https://en.cppreference.com/w/cpp/keyword/int) [`long`](https://en.cppreference.com/w/cpp/keyword/long) [`module`](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/module&action=edit&redlink=1) (modules TS) [`mutable`](https://en.cppreference.com/w/cpp/keyword/mutable)(1) [`namespace`](https://en.cppreference.com/w/cpp/keyword/namespace) [`new`](https://en.cppreference.com/w/cpp/keyword/new) [`noexcept`](https://en.cppreference.com/w/cpp/keyword/noexcept) (since C++11) [`not`](https://en.cppreference.com/w/cpp/keyword/not) [`not_eq`](https://en.cppreference.com/w/cpp/keyword/not_eq) [`nullptr`](https://en.cppreference.com/w/cpp/keyword/nullptr) (since C++11) [`operator`](https://en.cppreference.com/w/cpp/keyword/operator) [`or`](https://en.cppreference.com/w/cpp/keyword/or) [`or_eq`](https://en.cppreference.com/w/cpp/keyword/or_eq) [`private`](https://en.cppreference.com/w/cpp/keyword/private) [`protected`](https://en.cppreference.com/w/cpp/keyword/protected) [`public`](https://en.cppreference.com/w/cpp/keyword/public) | [`register`](https://en.cppreference.com/w/cpp/keyword/register)(2) [`reinterpret_cast`](https://en.cppreference.com/w/cpp/keyword/reinterpret_cast) [`requires`](https://en.cppreference.com/w/cpp/keyword/requires) (since C++20) [`return`](https://en.cppreference.com/w/cpp/keyword/return) [`short`](https://en.cppreference.com/w/cpp/keyword/short) [`signed`](https://en.cppreference.com/w/cpp/keyword/signed) [`sizeof`](https://en.cppreference.com/w/cpp/keyword/sizeof)(1) [`static`](https://en.cppreference.com/w/cpp/keyword/static) [`static_assert`](https://en.cppreference.com/w/cpp/keyword/static_assert) (since C++11) [`static_cast`](https://en.cppreference.com/w/cpp/keyword/static_cast) [`struct`](https://en.cppreference.com/w/cpp/keyword/struct)(1) [`switch`](https://en.cppreference.com/w/cpp/keyword/switch) [`synchronized`](https://en.cppreference.com/w/cpp/language/transactional_memory) (TM TS) [`template`](https://en.cppreference.com/w/cpp/keyword/template) [`this`](https://en.cppreference.com/w/cpp/keyword/this) [`thread_local`](https://en.cppreference.com/w/cpp/keyword/thread_local) (since C++11) [`throw`](https://en.cppreference.com/w/cpp/keyword/throw) [`true`](https://en.cppreference.com/w/cpp/keyword/true) [`try`](https://en.cppreference.com/w/cpp/keyword/try) [`typedef`](https://en.cppreference.com/w/cpp/keyword/typedef) [`typeid`](https://en.cppreference.com/w/cpp/keyword/typeid) [`typename`](https://en.cppreference.com/w/cpp/keyword/typename) [`union`](https://en.cppreference.com/w/cpp/keyword/union) [`unsigned`](https://en.cppreference.com/w/cpp/keyword/unsigned) [`using`](https://en.cppreference.com/w/cpp/keyword/using)(1) [`virtual`](https://en.cppreference.com/w/cpp/keyword/virtual) [`void`](https://en.cppreference.com/w/cpp/keyword/void) [`volatile`](https://en.cppreference.com/w/cpp/keyword/volatile) [`wchar_t`](https://en.cppreference.com/w/cpp/keyword/wchar_t) [`while`](https://en.cppreference.com/w/cpp/keyword/while) [`xor`](https://en.cppreference.com/w/cpp/keyword/xor) [`xor_eq`](https://en.cppreference.com/w/cpp/keyword/xor_eq) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |

上边一个表格是c关键字，下面一个表格为c++关键字

- (1) - meaning changed or new meaning added in C++11. Note: the keyword export is also used by Modules TS.
- (2) - meaning changed in C++17.



**c++关键字分类：**

数据类型：void，int，char，float，double，bool，w_char
类型定义：struct，union，enum，class，typedef
常量值：true，false
类型修饰符：long，short，singed，unsigned
类型限定符：const，volatile，restrict
存储说明符：auto，register，static，extern，thread_local，mutable
其它修饰符：inline，asm
循环控制：for，while，do
跳转控制：break，continue，return，goto
分支结构： if，else，switch，case，default
内存管理：new, delete
运算符：sizeof，and，and_eq，bitand，bitor，compl，not，not_eq，or，or_eq，xor，xor_eq
访问限定符：this，friend，virtual，mutable，explicit，operator
类访问修饰符：private，protected，public
模板：template，typename
命名空间：namespace，using
异常处理：throw，try，catch

