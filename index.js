//@ts-check
const visit = require('unist-util-visit')
const PINTORA = require('@pintora/cli')

function pintoraNodes(markdownAST, language) {
  const result = []
  visit(markdownAST, 'code', (/** @type {any} */node) => {
    if ((node.lang || '').toLowerCase() === language) {
      result.push(node)
    }
  })
  return result
}

module.exports = async (
  { markdownAST },
  { language = 'pintora', theme = 'default', backgroundColor }
) => {
  // Check if there is a match before launching anything
  let nodes = pintoraNodes(markdownAST, language)
  if (nodes.length === 0) {
    // No nodes to process
    return
  }

  PINTORA.setConfig({
    themeConfig: {
      theme,
    }
  })

  await Promise.all(
    nodes.map(async (node) => {
      node.type = 'html'
      const svgString = await PINTORA.render({
        code: node.value,
        mimeType: 'image/svg+xml',
        backgroundColor,
      })
      node.value = `<div class="pintora-diagram">${svgString}</div>`
    })
  )
}
