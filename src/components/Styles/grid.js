import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { display, num, px, style } from 'styled-system'

const getOffset = (n, scale) => (!num(n) || n > 1 ? px(n) : n * 100 + '%')

const offset = style({
  prop: 'marginLeft',
  alias: 'offset',
  key: 'offsets',
  transformValue: getOffset,
})

const BoxStyled = styled(Box)`
  ${offset}
  ${display}
`

const LayoutPxMx = 3

export const FixedContainer = props => (
  <Box
    {...props}
    mx="auto"
    px={LayoutPxMx}
    width={[1, '540px', '720px', '960px', '1140px']}
  />
)

export const FluidContainer = props => <Box {...props} width={1} />
export const Row = props => <Flex {...props} mx={-LayoutPxMx} />
export const Column = props => <BoxStyled {...props} px={LayoutPxMx} />
