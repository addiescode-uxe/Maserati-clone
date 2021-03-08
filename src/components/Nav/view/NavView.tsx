import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ModelData } from '../model/NavModel';

interface props {
  modelData: ModelData[];
}

const NavView: React.FC<props> = props => {
  const [subMenuShow, setSubMenuShow] = useState<string>('');
  const { modelData } = props;

  return (
    <>
      <Wrapper>
        {/* header logo */}
        <Logo onMouseEnter={() => setSubMenuShow('')}>
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
          <li onMouseEnter={() => setSubMenuShow('model')}>
            <span>모델</span>
          </li>

          {/* 쇼핑 */}
          <li onMouseEnter={() => setSubMenuShow('shopping')}>
            <span>쇼핑</span>
          </li>

          {/* 프로모션 */}
          <li onMouseEnter={() => setSubMenuShow('')}>
            <span>프로모션</span>
          </li>

          {/* 서비스 & 에프터 세일즈 */}
          <li onMouseEnter={() => setSubMenuShow('service')}>
            <span>서비스 & 에프터 세일즈</span>
          </li>

          {/* 뉴스 */}
          <li>
            <span onMouseEnter={() => setSubMenuShow('')}>뉴스</span>
          </li>

          {/* 브랜드 */}
          <li onMouseEnter={() => setSubMenuShow('brand')}>
            <span>브랜드</span>
          </li>

          {/* 인증 중고차 */}
          <li>
            <span onMouseEnter={() => setSubMenuShow('')}>인증 중고차</span>
          </li>
        </NavLists>
      </Wrapper>

      {/* sub menu */}
      {subMenuShow === 'model' && (
        <SubMenuWrapper>
          <SubMenuModelContainer onMouseLeave={() => setSubMenuShow('')}>
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
          </SubMenuModelContainer>
        </SubMenuWrapper>
      )}
      {subMenuShow === 'shopping' && (
        <SubMenuWrapper>
          <SubMenuShoppingContainer onMouseLeave={() => setSubMenuShow('')}>
            <h3>구매</h3>
            <p>
              <Link to="">딜러찾기</Link>
            </p>
            <p>
              <Link to="">시승신청</Link>
            </p>
          </SubMenuShoppingContainer>
        </SubMenuWrapper>
      )}
      {subMenuShow === 'service' && (
        <SubMenuWrapper>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <SubMenuServiceContainer onMouseLeave={() => setSubMenuShow('')}>
              <h3>구매</h3>
              <p>
                <Link to="">사전 구매 유지 보수 프로그램</Link>
              </p>
              <p>
                <Link to="">연장 보증</Link>
              </p>
              <p>
                <Link to="">마세라티 고객지원</Link>
              </p>
            </SubMenuServiceContainer>
            <SubMenuServiceContainer onMouseLeave={() => setSubMenuShow('')}>
              <h3>구매</h3>
              <p>
                <Link to="">사전 구매 유지 보수 프로그램</Link>
              </p>
              <p>
                <Link to="">연장 보증</Link>
              </p>
              <p>
                <Link to="">마세라티 고객지원</Link>
              </p>
            </SubMenuServiceContainer>
          </div>
        </SubMenuWrapper>
      )}
      {subMenuShow === 'brand' && (
        <SubMenuWrapper>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <SubMenuServiceContainer onMouseLeave={() => setSubMenuShow('')}>
              <h3>구매</h3>
              <p>
                <Link to="">사전 구매 유지 보수 프로그램</Link>
              </p>
              <p>
                <Link to="">연장 보증</Link>
              </p>
              <p>
                <Link to="">마세라티 고객지원</Link>
              </p>
            </SubMenuServiceContainer>
            <SubMenuServiceContainer onMouseLeave={() => setSubMenuShow('')}>
              <h3>구매</h3>
              <p>
                <Link to="">사전 구매 유지 보수 프로그램</Link>
              </p>
              <p>
                <Link to="">연장 보증</Link>
              </p>
              <p>
                <Link to="">마세라티 고객지원</Link>
              </p>
            </SubMenuServiceContainer>
            <SubMenuServiceContainer onMouseLeave={() => setSubMenuShow('')}>
              <h3>구매</h3>
              <p>
                <Link to="">사전 구매 유지 보수 프로그램3</Link>
              </p>
              <p>
                <Link to="">연장 보증3</Link>
              </p>
              <p>
                <Link to="">마세라티 고객지원3</Link>
              </p>
            </SubMenuServiceContainer>
          </div>
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

/** 서브메뉴 area **/
const SubMenuWrapper = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
`;

/** 서브 - 모델 area **/
const SubMenuModelContainer = styled.ul`
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

/** 서브 - 쇼핑 area **/
const SubMenuShoppingContainer = styled.div`
  text-align: center;
  h3 {
    font-size: 26px;
    color: #0c2340;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: #333;
    padding: 6px 0;
    display: block;
  }
`;

/** 서브 - 서비스 area **/
const SubMenuServiceContainer = styled.div`
  h3 {
    font-size: 26px;
    color: #0c2340;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: #333;
    padding: 6px 0;
    display: block;
    text-align: left;
  }
`;
