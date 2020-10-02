import React from 'react';
import styled from 'styled-components';
import whiteCate from '../asset/img/흰냥.png'

function SideBar() {

  return (
    <S.Sidebar>
      <S.SidebarItemList>
        <S.SidebarItem>
          <img src={whiteCate}/>
        </S.SidebarItem>
        <S.SidebarItem>
          <img src={whiteCate}/>
        </S.SidebarItem>
        <S.SidebarItem>
          <img src={whiteCate}/>
        </S.SidebarItem>
        <S.SidebarItem>
          <img src={whiteCate}/>
        </S.SidebarItem>
        <S.SidebarItem>
          <img src={whiteCate}/>
        </S.SidebarItem>
      </S.SidebarItemList>
    </S.Sidebar>
  );
}

const Sidebar = styled.aside`
  position: absolute;
  right: 0;
  top: 20%;
  height: 60%;
  width: 100px;
`;

const SidebarItemList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const SidebarItem = styled.li`
  list-style: none;  
  > img {
  width: 100%;
  }
`;

const S = {
  Sidebar,
  SidebarItemList,
  SidebarItem
};



export default SideBar;
