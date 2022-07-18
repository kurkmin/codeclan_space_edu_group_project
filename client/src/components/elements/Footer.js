import React from "react";

import styled from "styled-components";

const FooterBox = styled.footer`
  min-height: 10vh;
  background-color: #000;
`;

const Footer = () => {
  return (
      <FooterBox>
        <p>Footer text in here</p>
      </FooterBox>

  );
}

export default Footer;