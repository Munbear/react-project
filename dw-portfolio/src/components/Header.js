import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { GiShoppingCart as ShoppingCart } from 'react-icons/gi';
import {useNavigate, useParams} from "react-router-dom";
import productsData from "../Data/productsData";

const HeaderWrap = styled.header`
  background-color: black;
  display: flex;
  posistion: fixed;
  justify-content: space-around;
  top: 0;
  
  h1 {
    color: white;
    margin: 2px 5px 5px 0px;
  }
`
const InputBox = styled.input`
    width: 60%;
    height: 30px;
    margin-top: 6px;
    border-radius: 20px 20px 20px 20px;
    border: none;
    font-size: 14px;
    margin-bottom: 0px;
    outline: 0;
    padding-left: 10px;
`;


const Header = (props) => {
    const { searchItems, setSearchItems} = props;
    let navigate = useNavigate();

    let { keyword } = useParams();

    const handleOnChange = (event) => {
        setSearchItems(event.target.value);
    }


    const enterKey = (e) => {
        if(e.key == 'Enter') {
            navigate( '/result' )
        }
    }

    return(
        <>
            <HeaderWrap>
                <h1 onClick={() => {
                    navigate('/')
                }}>ReactShop</h1>
                <InputBox
                    onChange={handleOnChange}
                    onKeyPress={enterKey}
                />
                <ShoppingCart color="white" size="40px"/>
            </HeaderWrap>
        </>
    );
};

export default Header;