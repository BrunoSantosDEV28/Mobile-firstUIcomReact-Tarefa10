import React, { useState } from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  width: 250px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: max-height 0.3s ease;
  @media (min-width: 768px) {
    width: auto;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
`;

const Icon = styled.span`
  font-size: 24px;
`;

const Logo = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const OptionsContainer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  @media (min-width: 768px) {
    max-height: none;
    display: flex;
    flex-direction: row;
  }
`;

const Option = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
`;

function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <Header onClick={toggleMenu}>
        {window.innerWidth < 768 && <Icon>{isOpen ? "➖" : "➕"}</Icon>}
        <Logo>Minha Plataforma</Logo>
        <Icon>👤</Icon>
      </Header>
      <OptionsContainer isOpen={isOpen}>
        <Option>Dashboard</Option>
        <Option>Configurações</Option>
        <Option>Notificações</Option>
        <Option>Suporte</Option>
      </OptionsContainer>
    </MenuContainer>
  );
}

export default ResponsiveMenu;
