import React, { useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import { IoMdArrowBack } from 'react-icons/io';
import { AiFillPushpin } from 'react-icons/ai';
import product5 from './images/product5.jpg';
import ItemInfo from './ItemInfo.js';
import Modal from './Modal.js';
import { GlobalStyle } from './globalStyles';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 550px;
  background-color: black;
`;

const Btn = styled.div`
  border none;
  color : white;
`;

const Paybtn = styled.button`
  width: 495px;
  color: white;
  background: black;
  font-size: 50px;
  border: none;
  cursor: pointer;
`;

const Footer = styled.footer`
  width: 550px;
  display: flex;
  position: fixed;
  bottom: 0;
`;

const Pin = styled.div`
  background-color: lightgray;
  width: 55px;
  height: 65px;
`;

const Price = styled.p`
  font-size: 50px;
  font-weight: bold;
`;

const Title = styled.p`
  font-size: 20px;
`;

function Detail(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  let { id } = useParams();
  let history = useHistory();
  let [info, setInfo] = useState(0);

  let findItem = props.product.find((x) => x.id == id);
  return (
    <div>
      <Header>
        <Btn>
          <IoMdArrowBack
            onClick={() => {
              history.push('/');
            }}
            size='24'
            color='white'
          />
        </Btn>
      </Header>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        priceValue={findItem.price}
      />

      <div>
        <img src={product5} width='100%' />
      </div>
      <div>
        <Title>{findItem.title}</Title>
        <Price>{findItem.price}</Price>
      </div>
      <nav className='btn__menu'>
        <button
          className='btn pointOn'
          onClick={() => {
            setInfo(0);
          }}
        >
          상품정보
        </button>
        <button
          className='btn pointOn'
          onClick={() => {
            setInfo(1);
          }}
        >
          리뷰
        </button>
        <button
          className='btn pointOn'
          onClick={() => {
            setInfo(2);
          }}
        >
          Q&A
        </button>
      </nav>
      <ItemInfo info={info} />
      <GlobalStyle />

      <Footer>
        <Pin>
          <AiFillPushpin color='white' size='55' />
        </Pin>
        <Paybtn onClick={openModal}>구매하기</Paybtn>
      </Footer>
    </div>
  );
}

export default Detail;
