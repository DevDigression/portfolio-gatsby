import React from 'react'
import styled from 'styled-components'

const HeaderText = styled.h1`
  margin-right: 100px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0;
  }
`

const Header = props => (
  <div id={`${props.page}-header`}>
    <HeaderText>Dev Digression: A Blog</HeaderText>
  </div>
)

export default Header
