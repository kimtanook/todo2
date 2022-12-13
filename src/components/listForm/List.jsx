/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { confirmTodo, deleteTodo, editTodo } from '../../redux/modules/todo';

const ListStyle = styled.div`
  background-color: #d5d5d5c5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 50px 10px 50px;
`;

const TitleBodyStyle = styled.div`
  width: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleStyle = styled.div`
  width: 50px;
  padding: 5px;
  text-align: center;
  margin: 5px;
  color: white;
  background-color: black;
  border-radius: 5px;
`;
const BodyStyle = styled.div`
  width: 80%;
  padding: 5px;
  text-align: center;

  margin: 5px;
  color: white;
  background-color: black;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const List = ({ globalTodo }) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(globalTodo.title);
  const [editBody, setEditBody] = useState(globalTodo.body);

  const editTitleValue = (event) => {
    setEditTitle(event.target.value);
  };
  const editBodyValue = (event) => {
    setEditBody(event.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmToDo = (event) => {
    dispatch(confirmTodo(Number(event.target.id)));
  };

  const deleteToDo = (event) => {
    console.log('asd');
    dispatch(deleteTodo(Number(event.target.id)));
  };
  const onEditSubmit = (event) => {
    event.preventDefault();
    dispatch(
      editTodo({
        title: editTitle,
        body: editBody,
        id: Number(event.target.id),
      })
    );
    console.log(event.target);
    setEditing(false);
  };
  const editingToggle = () => {
    setEditing((prev) => !prev);
  };

  return (
    <ListStyle key={globalTodo.id}>
      <div id={globalTodo.id}>
        <TitleBodyStyle>
          <div>
            <form onSubmit={onEditSubmit} id={globalTodo.id}>
              {editing ? (
                <div>
                  <TitleStyle>제목</TitleStyle>
                  <input
                    onChange={editTitleValue}
                    type="text"
                    value={editTitle}
                  />
                  <BodyStyle>내용</BodyStyle>
                  <input
                    onChange={editBodyValue}
                    type="text"
                    value={editBody}
                  />
                </div>
              ) : (
                <div>
                  <TitleStyle>제목</TitleStyle>
                  <div>{globalTodo.title}</div>
                  <BodyStyle>내용</BodyStyle>
                  <div>{globalTodo.body}</div>
                </div>
              )}
              {globalTodo.isDone ? null : (
                <div>
                  <button type="button" onClick={editingToggle}>
                    {editing ? '수정취소' : '수정하기'}
                  </button>
                  {editing ? <button>수정완료</button> : null}
                </div>
              )}
            </form>
          </div>
        </TitleBodyStyle>
        <div>
          <div>
            <button
              onClick={() => {
                navigate(`/${globalTodo.id}`);
              }}
            >
              상세페이지
            </button>
          </div>
          <div>
            <button onClick={confirmToDo} id={globalTodo.id}>
              {!globalTodo.isDone ? '완료' : '취소'}
            </button>
            <button onClick={deleteToDo} id={globalTodo.id}>
              삭제
            </button>
          </div>
        </div>
      </div>
    </ListStyle>
  );
};
export default List;
