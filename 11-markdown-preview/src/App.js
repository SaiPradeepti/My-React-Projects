import React,{ useState } from 'react'
import ReactMarkdown from 'react-markdown'


const App = () => {
  const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?\n
------------ | ------------- | -------------\n
Your content can | be here, and it | can be here....\n
And here. | Okay. | I think we get it.\n

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
const [markdown,setMarkdown] = useState(initialText);
    return (
        <div className='container'>
            <section className='editorText'>
                <textarea value={markdown} name="editorText" id='editor'  onChange={(e) => setMarkdown(e.target.value)}></textarea>
            </section>
            <section className='previewText' >
               <div id="preview">
                   <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </section>
        </div>
    )
}

export default App
