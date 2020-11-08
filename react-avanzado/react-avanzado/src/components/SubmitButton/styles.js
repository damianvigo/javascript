import styled from 'styled-components'

export const Button = styled.button`
  background: linear-gradient(to left, rgb(181, 0, 181), rgb(255, 140, 0));
  border-radius: 3px;
  color: #fff;
  outline: none;
  border: none;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`