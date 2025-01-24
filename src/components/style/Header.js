import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router";


const HeaderWrap = styled.header`
  width: 100%;
  background-color: #ffffff;
`;

const HeaderLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.6rem;
  
`;
const HeaderUI = styled.div`
  ${HeaderLayout}
`;

const HeaderInput = styled.input`
  display: block;
  height: 100%;
  background-color: #f2f2f2;
  padding: 0.7rem 4.3rem 0.7rem 1.6rem;
  border-radius: 3.2rem;
`;

const SearchDiv = styled.div`
  position: relative;
  height: 100%;
  padding: 0.8rem 0;
  & button img {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    right: 1.3rem;
  }
`;

const HeaderH2 = styled.h2`
  display: inline-block;
  position: absolute;
  margin-left: 3.8rem;
  font-weight: 500;
  font-size: ${(props) => props.theme.baseFontSize};
`;

export default function Header({
  type,
  setKeyword,
  startTransition,
  setProfileModal,
  profileModal,
}) {
  const navigate = useNavigate();
  const UI = {
    logo: (
      <HeaderUI>
        
      </HeaderUI>
    ),

  };

  return <HeaderWrap>{UI[type]}</HeaderWrap>;
}
