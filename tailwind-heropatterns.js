import patterns from './heropatterns.js'

function flattenColors(colors, prefix = '') {
  const result = {}
  for (const [key, value] of Object.entries(colors)) {
    const name = prefix ? `${prefix}-${key}` : key
    if (typeof value === 'string') {
      result[name] = value
    } else if (typeof value === 'object' && value !== null) {
      if (value.DEFAULT) result[name] = value.DEFAULT
      Object.assign(result, flattenColors(value, name))
    }
  }
  return result
}

export default function ({ matchUtilities, theme }) {
  const colors = flattenColors(theme('colors') ?? {})

  for (const name of Object.keys(patterns)) {
    matchUtilities(
      {
        [`bgp-${name}`]: (color, { modifier }) => {
          const opacity = modifier ? modifier / 100 : 1
          const svg = patterns[name]({ color, opacity })
          return { 'background-image': `url('data:image/svg+xml,${encodeURIComponent(svg)}')` }
        },
      },
      {
        type: 'any',
        values: colors,
        modifiers: 'any',
      },
    )
  }
}
