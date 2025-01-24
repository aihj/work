import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import profileImage from "../../assets/image/icon-user.png";
import profileSelectImage from "../../assets/image/icon-user-fill.png";

import { PiSquaresFour } from "react-icons/pi";
import { IoMdCard } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";

const NavBarArticle = styled.article`
  width: 100%;
  background-color: #ffffff;
  height: 6.5rem;
`;

const TabMenuUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.lightColor};
`;

const TabMenuLi = styled.li`
  margin-top: 0.9rem;
`;

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  line-height: 1.4;
  color: ${(props) => props.theme.darkLightColor};
  cursor: pointer;
`;
const SelectP = styled.p`
  color: ${(props) => props.theme.primaryColor};
`;

export default function NavBar({ type }) {

  const [page, setPage] = useState(true)
  const navigate = useNavigate();


  return (
    <NavBarArticle>
      <h3 className="sr-only">탭 메뉴</h3>
      <nav>
        <TabMenuUl>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                setPage(false)
              }}
            >
             <PiSquaresFour size={30} />
           
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                setPage(false)
              }}
            >
              <IoMdCard size={30}/>
             
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                setPage(true)
              }}
            >
              {page ? (
                <IoStatsChartSharp size={30} />
              ) : (
                <IoStatsChartOutline size={30} />
              )}
             
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                setPage(false)
              }}
            >
              <img src={profileImage}/>
              
            </TabMenuLink>
          </TabMenuLi>
        </TabMenuUl>
      </nav>
    </NavBarArticle>
  );
}
