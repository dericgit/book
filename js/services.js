angular.module('starter.services', [])

    .factory('BookListService', function () {

        var bookList = [{
            id: 0,
            name: '序言',
            lastText: '<h1>序言</h1><p>设计模式是可重用的用于解决软件设计中一般问题的方案。设计模式如此让人着迷，以至在任何编程语言中都有对其进行的探索。</p>'
            +'<p>其中一个原因是它可以让我们站在巨人的肩膀上，获得前人所有的经验，保证我们以优雅的方式组织我们的代码，满足我们解决问题所需要的条件。</p>'
            +'<p>设计模式同样也为我们描述问题提供了通用的词汇。这比我们通过代码来向别人传达语法和语义性的描述更为方便。</p>'
            +'<p>本文我们将阐述JavaScript编程语言中经典和现代的设计模式。</p>'
            +'<h2>目标受众</h2>'
            +'<p>这本书适用于专业的开发人员，希望提高他们的设计模式的知识和如何应用到JavaScript编程语言中。</p>'
            +'<p>一些所涉及的概念（闭包，原型继承）将假设读者具备一定程度的基本的预备知识和理解。如果你发现自己需要更深入的阅读这个话题，为了你的方便，我们提供了一个推荐书目清单。</p>'
            +'<p>如果你想学习如何写出漂亮的，具有结构性和组织性的代码，我相信这本书就是你想要的。</p>'
            +'<h2>致谢</h2>'
            +'<p>我非常感谢帮忙审查和改进这个本的技术人才，包括整个社会。他们带来的知识和热情简直令人惊异。官方的技术审核人员的微博和博客也是一个思想和灵感经常的来源，我诚恳的推荐并挑出它们。</p>'
            +'<ul>'
                +'<li>Nicholas Zakas (<a href="http://nczonline.net/">http://nczonline.net</a>, <a href="http://twitter.com/slicknet">@slicknet</a>)</li>'
                +'<li>Andrée Hansson (<a href="http://andreehansson.se/">http://andreehansson.se</a>, <a href="http://twitter.com/peolanha">@peolanha</a>)</li>'
                +'<li>Luke Smith (<a href="http://lucassmith.name">http://lucassmith.name</a>, <a href="http://twitter.com/ls_n">@ls_n</a>)</li>'
                +'<li>Eric Ferraiuolo (<a href="http://ericf.me/">http://ericf.me/</a>, <a href="https://twitter.com/ericf">@ericf</a>)</li>'
                +'<li>Peter Michaux (<a href="http://michaux.ca">http://michaux.ca</a>, <a href="http://twitter.com/petermichaux">@petermichaux</a>)</li>'
                +'<li>Alex Sexton (<a href="http://alexsexton.com">http://alexsexton.com</a>, <a href="http://twitter.com/slexaxton">@slexaxton</a>)</li>'
            +'</ul>'

            +'<p>我同样感谢 Rebecca Murphey (<a href="#">http://rmurphey.com</a>, <a href="#">@rmurphey</a>) 为写作此书时提供的灵感，更重要的是，继续让本书可以在GitHub上和通过O"Reilly获得。</p>'
        +'<p>最后，我也感谢我的好妻子，在我整理这本出版物时的不遗余力的支持。</p>'

            +'<h2>编写人员列表</h2>'

            +'<p>这本书里所包含的一些模式是基于个人经验而实现的，其中的许多模式以前都是由JavaScript社团所确认的。因此这项工作是许多开发者所有经验的结晶。类似于Stoyan Stefanov（在JavaScript 模式里）的防止插入编写人员列表而打断叙述这样的逻辑思路，我在参考资料部分列出了编写人员列表并且为所有内容建议了阅读材料。</p>'

            +'<p>如果任何文章或者链接没有出现在参考资料列表里，请接受我诚挚的道歉。如果你联系我的话，我将确保更新这个列表，以把你包含在这个列表里。</p>'

            +'<h2>阅读</h2>'

            +'<p>本书同时面向初学者和中级开发者，因此假设读者已掌握 Javascript 的基本知识。如果您要了解更多 Javascript 的相关知识，我很乐意为您推荐以下文章：</p>'

            +'<ul>'
                +'<li><em>JavaScript: The Definitive Guide</em> by David Flanagan</li>'
                +'<li><em>Eloquent JavaScript</em> by Marijn Haverbeke</li>'
                +'<li><em>JavaScript Patterns</em> by Stoyan Stefanov</li>'
                +'<li><em>Writing Maintainable JavaScript</em> by Nicholas Zakas</li>'
                +'<li><em>JavaScript: The Good Parts</em> by Douglas Crockford</li>'
            +'</ul>'

        }];

        return {
            all: function () {
                return bookList;
            },
            remove: function (book) {
                bookList.splice(bookList.indexOf(book), 1);
            },
            get: function (bookId) {
                for (var i = 0; i < bookList.length; i++) {
                    if (bookList[i].id === parseInt(bookId)) {
                        return bookList[i];
                    }
                }
                return null;
            }
        };
    });
