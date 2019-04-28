import React from 'react'
import styled from 'styled-components'

const HeaderText = styled.h1`
  margin-right: 100px;
  text-align: center;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0;
    padding-bottom: 20px;
  }
`

const Header = props => (
  <div id={`${props.page}-header`}>
    <HeaderText>Dev Digression: A Blog</HeaderText>
  </div>
)

export default Header
