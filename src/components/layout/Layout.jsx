import React from 'react';
import styled from "styled-components";


const Layout = (props) => {
    return <StLayout>{props.children}</StLayout>
};
  
  export default Layout;

  const StLayout = styled.div`
    background-image: url("background.webp") no-repeat center/cover, rgba(0, 0, 0, 0.5);

    min-width: 800px;
    max-width: 1200px;
    
    height: 1000px;
    margin: 0 auto 0;
  `