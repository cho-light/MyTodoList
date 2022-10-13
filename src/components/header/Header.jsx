import React from 'react';
import styled from "styled-components";


function Header() {
    
    return (

      <StContainer>
        <h2>My Todo List</h2>
        <h3>React</h3>
      </StContainer>
    );
  }
  
  export default Header;

  const StContainer = styled.div`
    
    height: 40px;
        
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 20px;
  `