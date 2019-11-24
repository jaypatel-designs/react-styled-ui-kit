import PropTypes from 'prop-types'
import styled from 'styled-components'

import { calcRem } from '../../utils/calcRem'

const BaseButton = styled.button`
  border-radius: ${calcRem('100')};
  border-width: ${calcRem('2')};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: ${calcRem('14')};
  font-style: normal;
  line-height: ${calcRem('40')};
  margin: ${calcRem('0', '12')};
  padding: ${calcRem('0', '40')};
  text-align: center;
  transition: 0.3s;

  &:hover,
  &:active {
    text-decoration: none;
  }
  &:focus,
  &:active,
  &:visited {
    outline: none;
  }

  ${({ size }) => {
    if (size === 'tiny') {
      return `
          font-size: ${calcRem(12)};
          line-height: ${calcRem(25)};
          padding: ${calcRem(0, 12)};
          `
    }
    if (size === 'small') {
      return `
          line-height: ${calcRem(35)};
          padding: ${calcRem(0, 35)};
          `
    }
    if (size === 'large') {
      return `
          font-size: ${calcRem(25)};
          `
    }
    if (size === 'block') {
      return `
          display: block;
          width: 100%;
          `
    }
  }}
`

const defaultProps = {
  children: null,
  disable: false,
  size: 'normal',
  onClick: null
}
const propTypes = {
  children: PropTypes.node,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['normal', 'tiny', 'small', 'large', 'block'])
}
BaseButton.defaultProps = defaultProps
BaseButton.propTypes = propTypes
export default BaseButton
