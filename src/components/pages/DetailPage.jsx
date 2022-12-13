import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todoReducer.todos);

  const param = useParams();
  const todoDetail = todo.find((data) => data.id === parseInt(param.id));

  return (
    <div>
      <div>
        <div>ID {todoDetail.id}</div>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          뒤로가기
        </div>
      </div>
      <div>{todoDetail.title}</div>
      <div>{todoDetail.body}</div>
    </div>
  );
};

export default Detail;
