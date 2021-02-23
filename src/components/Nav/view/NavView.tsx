import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavView: React.FC = () => {
  const [subMenuShow, setSubMenuShow] = useState<boolean>(false);
  console.log(subMenuShow);
  return (
    <Wrapper>
      {/* header logo */}
      <Logo>
        <Link to="/home">
          <img
            src="https://www.maserati.com/content/dam/maserati/international/logo/maserati_logo_original.svg"
            alt="logo"
          />
        </Link>
      </Logo>

      {/* header menu */}
      <NavLists>
        {/* 모델 */}
        <li
          onMouseEnter={() => setSubMenuShow(prev => !prev)}
          onMouseLeave={() => setSubMenuShow(prev => !prev)}
        >
          <span>모델</span>
          <TitleArrowImg />
          {subMenuShow && <SubMenu></SubMenu>}
        </li>

        {/* 쇼핑 */}
        <li
          onMouseEnter={() => setSubMenuShow(prev => !prev)}
          onMouseLeave={() => setSubMenuShow(prev => !prev)}
        >
          <span>쇼핑</span>
          <TitleArrowImg />
          {subMenuShow && <SubMenu></SubMenu>}
        </li>

        {/* 서비스 & 에프터 세일즈 */}
        <li
          onMouseEnter={() => setSubMenuShow(prev => !prev)}
          onMouseLeave={() => setSubMenuShow(prev => !prev)}
        >
          <span>모델</span>
          <TitleArrowImg />
          {subMenuShow && <SubMenu></SubMenu>}
        </li>

        {/* 뉴스 */}
        <li>
          <span>뉴스</span>
        </li>

        {/* 브랜드 */}
        <li
          onMouseEnter={() => setSubMenuShow(prev => !prev)}
          onMouseLeave={() => setSubMenuShow(prev => !prev)}
        >
          <span>브랜드</span>
          <TitleArrowImg />
          {subMenuShow && <SubMenu></SubMenu>}
        </li>

        {/* 인증 중고차 */}
        <li>
          <span>인증 중고차</span>
        </li>
      </NavLists>
    </Wrapper>
  );
};

export default NavView;

/*** style ***/
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: fixed;
  z-index: 999;
  background-color: #ffffff;
  min-height: 75px;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

const Logo = styled.div`
  padding: 0 60px;
  flex-grow: 1;

  img {
    width: 105px;
  }
`;

const NavLists = styled.ul`
  display: flex;
  flex-grow: 60;
  width: auto;
  height: 75px;

  li {
    padding: 0 15px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    cursor: pointer;

    &:hover {
      border-bottom: 2px #0c2340 solid;
      box-sizing: border-box;
    }

    a {
      font-family: $g-font-style;
      font-size: 14px;
    }
  }
`;

const TitleArrowImg = styled.span`
  display: inline-block;
  content: '';
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='114.5' height='89' viewBox='0 0 114.5 89'%3E%3Cpath fill='none' stroke='%23666' stroke-width='6' stroke-miterlimit='10' d='M101.455 67.405L57.113 23.062l-7.48 7.474-38.629 38.632'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  width: 10px;
  height: 10px;
  margin-left: 3px;
  vertical-align: bottom;
`;

const SubMenu = styled.div``;
