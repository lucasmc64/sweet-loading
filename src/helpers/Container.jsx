import styled from 'styled-components'

const DivContainer = styled.div`
  font-size: ${(props) => props.proportion ?? 'inherit'};
  width: 4em;
  height: 4em;
  padding: 0.5em;
`
export default DivContainer