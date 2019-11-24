import theme from './theme'
import deepMerge from './deepmerge'
export default ctheme => {
  return deepMerge(theme, ctheme)
}
