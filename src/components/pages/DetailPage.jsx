import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const DetailPage = styled.div`
  background-color: #efececc5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  width: 500px;
  height: 500px;
`;
const IdBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid black;
  margin: 20px;
  padding: 0px 20px 10px 20px;
`;
const TitleBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TitleBox = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const BodyBox = styled.div`
  font-size: 30px;
  margin: 20px;
`;
const TitleBody = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  width: 400px;
`;
const TitleBodyText = styled.div`
  padding-top: 30px;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: 60px;
`;
const boxFade = keyframes`
  50% {
    opacity: 0;
  }
`;
const IsDoneStyle = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  & {
    animation: ${boxFade} 0.5s step-end infinite;
  }
`;

const Detail = () => {
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todoReducer.todos);

  const param = useParams();
  const todoDetail = todo.find((data) => data.id === parseInt(param.id));

  return (
    <DetailPage>
      <IdBox>
        <div>
          ID <br />
          {todoDetail.id}
        </div>
        <div>
          작성일 <br />
          {new Date(todoDetail.id + 9 * 60 * 60 * 1000).toLocaleString(
            'ko-KR',
            {
              timeZone: 'UTC',
            }
          )}
        </div>
      </IdBox>
      <TitleBodyBox>
        <TitleBox>
          <TitleBody>제목</TitleBody>{' '}
          <TitleBodyText>{todoDetail.title}</TitleBodyText>
        </TitleBox>
        <BodyBox>
          <TitleBody>내용 </TitleBody>
          <TitleBodyText>{todoDetail.body}</TitleBodyText>
        </BodyBox>
        {!todoDetail.isDone ? (
          <IsDoneStyle>To Doing...</IsDoneStyle>
        ) : (
          <IsDoneStyle>Completion!!!</IsDoneStyle>
        )}
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          뒤로가기
        </button>
      </TitleBodyBox>
    </DetailPage>
  );
};

export default Detail;
