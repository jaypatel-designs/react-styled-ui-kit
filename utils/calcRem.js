// This file calculate rem value
const { flatten } = require('lodash')

// Base value of rem calculation
const BASE = 16

// Function calculating rem value
const calc = (base, ...values) =>
  flatten(values.map(value => String(value).split(/\s/gim)))
    .map(value => `${Number(value.replace('px', '')) / base}rem`)
    .join(' ')
// Export the function that calculate rem
export const calcRem = (...values) => calc(BASE, ...values)
export const calcRemWithBase = calc
