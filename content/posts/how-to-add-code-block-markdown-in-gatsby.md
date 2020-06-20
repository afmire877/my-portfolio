---
path: "/blog/how-to-add-a-beautiful-code-block-to-a-gastby-markdown-blog"
title: How to add a beautiful Code block to a Gastby Markdown blog
date: "2020-06-20 14:28:36"
description: Add a beautiful Code block to your Gastby Blog with Syntax highlighing
status: "Published"
---


This is a guide to create a beautiful code block in Gatstby Markdown in the VScode theme of your  choice.

Some thing beautiful like this.


```js

console.log("looks soo goood 🤤");

```

In this blog post I assume you have the blog setup with [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) and the just need to add the amazing looking code block.

My setup is I am using .md files to genrate theses blog posts and parse it into HMTL.

We will be using [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) and [gatsby-remark-vscode](https://www.gatsbyjs.org/packages/gatsby-remark-vscode/) plugin. 



The setup is that we have a markdown files that have with code blocks



This is the theme and font I am using,

- Theme: Dark+ (default theme)
- Font: JetBrains Mono

## First, Setup

Install the package, gatsby-remark-vscode:

```bash
npm install --save gatsby-remark-vscode
```

We add an plugin to gastby-config.js:

```js 
// gastby-config.js

{
  // ...
  plugins: [{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
        resolve: `gatsby-remark-vscode`,
        options: {
          theme: 'Dark+ (default dark)' // Or install your favorite theme from GitHub
        }
      }]
    }
  }]
}

```

Write code examples in your markdown file as usual:

```md

    ```js
    console.log("I in a code block")

    ```

```


Ok, Now That is all working, 

We will add the the little Language tab in the top right corner.

To do this, gatsby-remark-vscode creates a data attribute called language we can use to identify what laguage the code block is.

To create the little tab, we will use wrap ```css .grvsc-container ``` the a container div with class ```css .lang-tabbed_container ```  and we put a div with class ```css .lang-tabbed-item `` with the language attribute in it.

I placed in the useEffect hook of my Blog post Template component.

```js
  useEffect(() => {
    let blogContent = document.querySelector('.blog-post-content');
    blogContent.querySelectorAll('pre.grvsc-container').forEach(item => {
      item.outerHTML = `
      <div class= "lang-tabbed_container">
        <div class="lang-tabbed-item">
          ${item.dataset.language.toUpperCase()}
        </div>
        ${item.outerHTML}
      </div>
      `;
    }
  }, []);

```

Here is the css, to place in the corner.

```css
  .lang-tabbed_container {
    position: relative;
  }
  .lang-tabbed-item {
    font-size: 0.9rem;
    height: 39px;
    width: fit-content;
    padding: 2px 8px;
    color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: #1E1E1E;
    position: absolute;
    font-family: "JetBrainsMono";
    font-weight: 700;
    top: -33px;
    right: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }  

```


Thank you for reading.😀



