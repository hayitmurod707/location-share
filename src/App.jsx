import styled from 'styled-components';
import Share from './Share';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 100vh;
   justify-content: center;
   width: 100%;
`;
const App = () => (
   <StyledElement>
      <Share color='#0652dd' />
   </StyledElement>
);
export default App;
