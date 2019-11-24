import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import getTheme from '../../utils/getTheme'

const ThemeProviderUI = ({ theme = {}, children }) => (
  <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
)
const propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
}
ThemeProviderUI.propTypes = propTypes
export default ThemeProviderUI
