import React from 'react'
import { useState, useEffect } from 'react'
import { marked } from 'marked';


marked.setOptions({
  breaks: true
})

const defaultMarkdown = `
# Welcome to my React Markdown Previewer App!

## This is a subheader (HTML h2)

We can add  a link [Click here](https://github.com/sasadusic)

Also we can make text _italic_ of **bold**

Inline code: \`const x = 25\`

\`\`\`
// Code block
function helloWorld() {
  console.log('Hello, world!');
}
\`\`\`

- List item
> Blockquote

![React Logo](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80
)
`;

const Markdovn = () => {
  const [text, setText] = useState(defaultMarkdown)
  
  const handleText = (e) => {
    setText(e.target.value)
  }

  const getMarkdownText = () => {
    const rawMarkup = marked.parse(text)
    return {  __html: rawMarkup}
  }

  return(
<div id='home' className='home'>

    <div id='markdovn' className="cont">
      <div className='card editor-card'>
      <h2 className='header'>Editor</h2>
  <textarea onChange={handleText} id='editor' value={text} />
      </div>
      <div className='card preview-card'>
      <h2 className='header'>Preview</h2>

  <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
  </div>
</div>
  )
}

export default Markdovn