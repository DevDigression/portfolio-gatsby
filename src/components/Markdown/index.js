import React from 'react'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
})

const Markdown = ({ value, ...props }) => (
  <div
    dangerouslySetInnerHTML={{ __html: md.render(value || '') }}
    {...props}
  />
)

export default Markdown
