const plugin = require('tailwindcss/plugin')
const {nameClass} = require('tailwindcss/jit/pluginUtils')
const patterns = require('./heropatterns')

module.exports = function HeroPatterns({ matchUtilities, theme }) {
  matchUtilities({
    bgp: (modifier) => {
      const [name, opacity, ...colorParts] = modifier.split('-')
      const color = theme(`colors.${colorParts.join('.')}`)
      if (!patterns[name] || !color || !opacity) return []
      const pattern = patterns[name]({ opacity, color: color.replace('#', '%23') })
      return {
        [nameClass('bgp', modifier)]: {
          backgroundImage: `url('data:image/svg+xml,${pattern}')`
        }
      }
    }
  })
}
