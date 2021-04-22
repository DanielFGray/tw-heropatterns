const plugin = require('tailwindcss/plugin')
const {nameClass} = require('tailwindcss/jit/pluginUtils')
const patterns = require('./heropatterns')

module.exports = plugin(function HeroPatterns({ matchUtilities, theme }) {
  matchUtilities({
    bgp: (modifier) => {
      const [name, opacity, ...colorParts] = modifier.split('-')
      const color = theme(['colors', ...colorParts])
      if (!patterns[name] || !color || !opacity) return []
      const pattern = patterns[name]({ opacity, color })
      return {
        [nameClass('bgp', modifier)]: {
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(pattern)}')`
        }
      }
    }
  })
})
