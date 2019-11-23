import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseButton from './BaseButton'
import { calcRem } from '../../config/calcRem'
const Button = styled(BaseButton)`
  ${({ varient, theme }) => {
    if (varient && varient === 'primary') {
      return `background-color: ${theme.palette.primary.main};
  border: ${calcRem('2')} solid ${theme.palette.primary.main};
  color: ${theme.palette.primary.alt};

  &:hover,
  &:active {
    background-color: ${theme.palette.primary.alt};
    border: ${calcRem('2')} solid ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
  }`
    }
    if (varient && varient === 'secondary') {
      return `background-color: ${theme.palette.secondary.main};
border: ${calcRem('2')} solid ${theme.palette.secondary.main};
  color: ${theme.palette.secondary.alt};
  &:hover,
  &:active {
    background-color: ${theme.palette.secondary.alt};
    border:${calcRem('2')} solid ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.main};
  }`
    }
  }}
`
const defaultProps = {
  children: null,
  disable: false,
  size: 'normal',
  varient: 'primary',
  onClick: null
}
const propTypes = {
  children: PropTypes.node,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  varient: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'outlined',
    'secondaryOutlined'
  ]),
  size: PropTypes.oneOf(['normal', 'tiny', 'small', 'large', 'block'])
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

export default Button
