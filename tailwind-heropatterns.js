const patterns = require('./heropatterns')

module.exports = function HeroPatterns({ matchUtilities, variants, theme }) {
  Object.keys(patterns).forEach(name => matchUtilities(
    {
      [`bgp-${name}`]: (parts) => {
        let [color, opacity = 1] = parts.split(',')
          color = theme(`colors.${color}`, color)
        const pattern = patterns[name]({ color, opacity })
        return { backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(pattern)}')` }
      },
    },
    {
      values: theme('heroPatterns.colors', {}),
      variants: variants('heroPatterns', Object.keys(patterns)),
      type: 'any',
    }
  ))
}
