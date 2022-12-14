/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { todoActions } from '../../redux/modules/todo';

const ListStyle = styled.div`
  background-color: #efececc5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 260px;
  border: 1px solid black;
  margin: 10px 50px 10px 50px;
`;

const TitleBodyStyle = styled.div`
  width: 300px;
  min-width: 200px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleStyle = styled.div`
  width: 90%;
  padding: 5px 0 5px 0;
  text-align: center;
  margin: 5px;
  color: white;
  background-color: black;
`;
const BodyStyle = styled.div`
  width: 90%;
  border: 1px solid black;
  text-align: center;
  padding: 10px 0 10px 0;
  margin-bottom: 10px;
`;
const InputStyle = styled.input`
  width: 90%;
  border: 2px solid blue;
  text-align: center;
  padding: 10px 0 10px 0;
  margin-bottom: 10px;
`;
const EditButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const OtherButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
const Hr = styled.hr`
  width: 95%;
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
    dispatch(todoActions.confirmTodo(Number(event.target.id)));
  };

  const deleteToDo = (event) => {
    if (confirm('정말 삭제하시겠습니까?') === true) {
      dispatch(todoActions.deleteTodo(Number(event.target.id)));
      alert('삭제되었습니다.');
    }
  };
  const onEditSubmit = (event) => {
    event.preventDefault();
    dispatch(
      todoActions.editTodo({
        title: editTitle,
        body: editBody,
        id: Number(event.target.id),
      })
    );
    setEditing(false);
  };
  const editingToggle = () => {
    setEditing((prev) => !prev);
  };

  return (
    <ListStyle key={globalTodo.id}>
      <div id={globalTodo.id}>
        <div>
          <form onSubmit={onEditSubmit} id={globalTodo.id}>
            <div>
              {editing ? (
                <TitleBodyStyle>
                  <TitleStyle>제목</TitleStyle>
                  <InputStyle
                    onChange={editTitleValue}
                    type="text"
                    value={editTitle}
                    required
                  />
                  <TitleStyle>내용</TitleStyle>
                  <InputStyle
                    onChange={editBodyValue}
                    type="text"
                    value={editBody}
                    required
                  />
                </TitleBodyStyle>
              ) : (
                <TitleBodyStyle>
                  <TitleStyle>제목</TitleStyle>
                  <BodyStyle>{globalTodo.title}</BodyStyle>
                  <TitleStyle>내용</TitleStyle>
                  <BodyStyle>{globalTodo.body}</BodyStyle>
                </TitleBodyStyle>
              )}
            </div>
            {globalTodo.isDone ? null : (
              <EditButton>
                <button type="button" onClick={editingToggle}>
                  {editing ? '수정취소' : '수정하기'}
                </button>
                {editing ? <button>수정완료</button> : null}
              </EditButton>
            )}
            <Hr />
          </form>
        </div>
        <OtherButton>
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
        </OtherButton>
      </div>
    </ListStyle>
  );
};
export default List;
