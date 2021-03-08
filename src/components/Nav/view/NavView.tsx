import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
  modelData: any[];
}

const NavView: React.FC<props> = props => {
  const [subMenuShow, setSubMenuShow] = useState<string>('model');
  const { modelData } = props;

  console.log(modelData);
  return (
    <>
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
            onMouseEnter={() => setSubMenuShow(prev => 'model')}
            onMouseLeave={() => setSubMenuShow(prev => '')}
          >
            <span>모델</span>
          </li>

          {/* 쇼핑 */}
          <li
            onMouseEnter={() => setSubMenuShow(prev => 'shopping')}
            onMouseLeave={() => setSubMenuShow(prev => '')}
          >
            <span>쇼핑</span>
          </li>

          {/* 서비스 & 에프터 세일즈 */}
          <li
            onMouseEnter={() => setSubMenuShow(prev => 'service')}
            onMouseLeave={() => setSubMenuShow(prev => '')}
          >
            <span>모델</span>
          </li>

          {/* 뉴스 */}
          <li>
            <span>뉴스</span>
          </li>

          {/* 브랜드 */}
          <li
            onMouseEnter={() => setSubMenuShow(prev => 'brand')}
            onMouseLeave={() => setSubMenuShow(prev => '')}
          >
            <span>브랜드</span>
          </li>

          {/* 인증 중고차 */}
          <li>
            <span>인증 중고차</span>
          </li>
        </NavLists>
      </Wrapper>

      {/* sub menu */}
      {subMenuShow === 'model' && (
        <SubMenuWrapper>
          <SubMenuContainer>
            {modelData.map(item => (
              <li>
                <ModelTitle>{item.name}</ModelTitle>
                <img src={item.imgUrl} alt="model" />
                <MoreBtn>
                  <Link to="">자세히 보기</Link>
                </MoreBtn>
                <MycarBtn>
                  <Link to="">내 차량 만들기</Link>
                </MycarBtn>
              </li>
            ))}
          </SubMenuContainer>
        </SubMenuWrapper>
      )}
    </>
  );
};

export default NavView;

/*** style ***/
const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  background-color: #ffffff;
  min-height: 75px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

const Logo = styled.div`
  padding: 0 60px;
  float: left;

  img {
    width: 105px;
  }
`;

const NavLists = styled.ul`
  display: flex;
  height: 75px;
  align-items: center;
  li {
    padding: 0 15px;
    letter-spacing: 0.02em;
    cursor: pointer;
    justify-items: a {
      font-size: 14px;
    }
  }
`;

const SubMenuWrapper = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
`;

const SubMenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;

  li {
    margin: 0 30px;
  }

  img {
    width: 180px;
    height: 90px;
  }
`;

const ModelTitle = styled.p`
  font-size: 20px;
  margin-bottom: 6px;
  font-family: sans-serif;
`;

const MoreBtn = styled.div`
  background-color: #fff;
  border: 1px solid #666;
  border-radius: 4px;
  color: #333;

  margin-top: 10px;
  padding: 0 15px;
  font-family: Univers57, sans-serif;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 2;
  white-space: nowrap;
`;

const MycarBtn = styled.div`
  background-color: #0c2340;
  border: 1px solid #0c2340;
  border-radius: 4px;
  color: #fff;

  margin-top: 10px;
  padding: 0 15px;
  font-family: Univers57, sans-serif;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 2;
  white-space: nowrap;
`;
