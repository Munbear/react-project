import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';
import item4 from './images/item4.jpg';
import item5 from './images/item5.jpg';

let Foto = styled.img`
  width: 100%;
`;

let Card = styled.div`
  padding-bottom: 50px;
`;

let Review = styled.div`
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100px;

  background-color: #f9f9fa;
  color: #868e96;
`;

let Text = styled.input`
  width: 98.8%;
  height: 100px;
`;

let Container = styled.div`
  display: flex;
`;

let Button = styled.button`
  cursor: pointer;
  font-size: 18px;
`;

let Commend = styled.p`
  height: 75px;
  border-bottom: solid 1px black;
`;

function Iteminfo(props) {
  let [inputData, setInputData] = useState('');
  let [commentList, setCommentList] = useState([]);

  const onClickAddComment = () => {
    setCommentList([inputData, ...commentList]);
    setInputData('');
  };

  if (props.info === 0) {
    return (
      <div>
        <Card>
          <Foto src={item1} />
        </Card>
        <Card>
          <Foto src={item2} />
        </Card>
        <Card>
          <Foto src={item3} />
        </Card>
        <Card>
          <Foto src={item4} />
        </Card>
        <Card>
          <Foto src={item5} />
        </Card>
      </div>
    );
  } else if (props.info === 1) {
    return (
      <div>
        <Review>구매후기가 없습니다.</Review>
      </div>
    );
  } else if (props.info === 2) {
    return (
      <div>
        <Container>
          <Text
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            value={inputData}
          />
          <Button onClick={onClickAddComment}>등록</Button>
        </Container>

        <div>
          {commentList.map((value) => (
            <Commend>{value}</Commend>
          ))}
        </div>
      </div>
    );
  }
}

export default Iteminfo;