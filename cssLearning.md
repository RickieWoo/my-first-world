# CSS 
- block-level elements 
        begin on a new line, stacking one on top of the other, and occupy any available width.
        may be nested inside one another and may wrap inline-level elements.
        commonly used for larger pieces of content, such as paragraphs.
- inline-level elements
        do not begin with the new line
        only remain the width of their content
        may be nested inside one another.
        tiny content, maybe some words.
## 块级元素
<span> and <div> 非常有价值，提供了具有针对性的样式应用到一组包含内容的能力。
- <div> 
         通常识别大型内容分组，有助于构建网页和布局设计。
- <span>
        通常用于块级元素内识别文本较少的分组的行内元素。
 - 选择class和id都需谨慎，要选择一个指向元素内容的值，没必要选择外观。
-  HTML注释开头<!-- and end with -->。CSS注释开头/*和结尾*/。
- Builder
<img src="http://learn.shayhowe.com/assets/images/courses/html-css/getting-to-know-html/building-structure.png">
``
 无论是<article>和<section>元素有助于文档的结构，并有助于勾勒出一个文件。如果内容仅针对样式分组，并且不提供文档大纲的价值，请使用该<div>元素。
 如果内容添加到文档大纲，并且可以独立地重新分发或聚合，请使用该<article>元素。
 如果内容添加到文档轮廓并表示专题组的内容，请使用该<section>元素。
``
# 盒子模型
`` div{
    border: 6px solid #949599;
    height: 100px;
    margin: 20px;
    width: 400px;
}
``

<img src="http://learn.shayhowe.com/assets/images/courses/html-css/opening-the-box-model/box-model.png">

- inline-level elements will not accept the **width** and **height**
- block and inline-block will.
# 定义选择器
  - 构造选择器


        h1 em {
            只应用于h1元素中的em元素
        }


        a:link{
                属于link伪类的a元素
                伪类（Pseudo classes）是选择符的螺栓，用来指定一个或者与其相关的选择符的状态。
                它们的形式是
                selector:pseudo class { 
                    property: value; 
                    }，简单地用一个半角英文冒号（:）来隔开选择符和伪类。
                CSS很多的建议并没有得到浏览器的支持，但有四个可以安全用在超链接上的伪类。
                :link用在未访问的连接上。
                :visited用在已经访问过的连接上。
                :active用于获得焦点（比如，被点击）的连接上。
                :hover 用于鼠标光标置于其上的连接。
        }

        a[title]{
            针对所有有title属性的a元素
        }

        a[href="superwu.me"]{
            针对所有指向“superwu.me”的a元素
        }

 - 按上下文选择元素
    
        .architect > p {
            仅选择architect类元素的 **子元素**🌚
        }

        .architect p+p{
            **相邻同胞结合符**只选择直接跟在同胞p之后的元素
            应用：对除了第一个段落以外的所有段落进行缩进
        }

        li:first-child{
            选择**作为第一个元素**的第一个li子元素
            <ul>
                <li>将被选择
                <li>
            </ul>
            <span>
                <em>
                <li>不会被选中，因为不是第一个元素
            <span>
            通常用于添加一个边框
        }
        li:last-child{
            用法同上
        }

        p::first-letter{
            选择元素的第一个字母
            选择每个p元素的第一个字母
            可以实现每段首字母大写的效果
        }
        p::first-line{
            选择元素的第一行
        }
> 注意: CSS3中将 :first-letter 语法改为 ::first-letter. 目的是将伪元素(::first-letter, ::first-line，::before, ::after)与伪类（:first-child, :link, :hover 等）区分开

> 伪元素只有4个↑↑↑↑
- 按状态选择链接元素

        a:link{
            未被激活或指向
        }
        a:visited{
            用在已经访问过的连接上。    
        }
        a:focus{
            通过键盘选择并已准备好激活
        }
        a:hover{
            光标指向链接时
        }
        a:active{
            激活时
        }
        
        :visited, :focus 可选
        也可以对其他元素使用:active和:hover类
        定义时一定要按照以上顺序以免覆盖。
        顺序记忆：
        LVFHA

- 按属性选择元素

        p[class（value操作可选）]{
            选择所有具有class属性的段落
        }
        1.  ="value" : 属性值等于value的被选中
        2. ~="value" ：属性值包含value的元素（value必须为完整的单词），属性值是以空格分隔的多个单词
        3. |="value" : 属性值等于 value 或以 value- 开头的元素 ，属性值以value-打头
                       常用于 [lang|="en"] 同时匹配 lang="en"和lang="en-US"
        4. ^="value": 以value开头（完整单词或但此次的一部分）
        5. $="value": 结尾（完整单词或但此次的一部分）
        6. *="value": 至少包含value一次，不必是完整单词，属性值为指定值的子字符串。

- 指定元素组
       
        h1,
        h2{
            可以列出任意数量的单独的选择器（无论包含的是元素名称，类还是伪元素）
        }
        也可以很复杂：
        h2,
        .project p:first-letter{

        }
        单独成行便于研读

- 组合使用选择器

        .project h2[lang|="en"] + p em{
            仅选择em元素，
            他们包含在p元素中
            这样的p元素是lang属性值以en开头的h2元素的直接相邻同胞元素，且是class等于project的任何元素的子元素。
        }
    
            

## 注意事项
    - 尽量少用id选择器，多用类选择器
    - 注意代码块的注释
        /* THEME
        --------------------*/
        并统一风格
    - 驼峰命名法？

