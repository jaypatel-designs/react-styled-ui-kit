import theme from './theme'
import deepmerge from './deepmerge'
export default ctheme => {
  return deepmerge(theme, ctheme)
}
