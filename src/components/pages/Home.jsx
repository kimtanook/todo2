/* eslint-disable no-restricted-globals */
import Form from '../listForm/Form';
import Header from '../display/Header';
import Layout from '../display/Layout';
import List from '../listForm/List';
import { useDispatch, useSelector } from 'react-redux';
import { allDelete } from '../../redux/modules/todo';
import styled from 'styled-components';

const TodoListStyle = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  height: 300px;
  overflow: scroll;
`;

const TodoListConfirmName = styled.div`
  background-color: black;
  color: white;
  padding: 10px 40px 10px 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function TodoList() {
  const globalTodo = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const deleteTodoAll = () => {
    if (confirm('정말 전부 삭제하시겠습니까?') === true) {
      dispatch(allDelete(false));
      alert('삭제되었습니다.');
    }
  };
  const deleteConfirmAll = () => {
    if (confirm('정말 전부 삭제하시겠습니까?') === true) {
      dispatch(allDelete(true));
      alert('삭제되었습니다.');
    }
  };
  return (
    <Layout>
      <Header />
      <Form />
      <div>
        <TodoListConfirmName>
          <div>To Do List</div>
          <button onClick={deleteTodoAll}>ToDoList 전체삭제</button>
        </TodoListConfirmName>
        <TodoListStyle>
          {globalTodo.map((todo) =>
            !todo.isDone ? <List key={todo.id} globalTodo={todo} /> : null
          )}
        </TodoListStyle>
      </div>
      <div>
        <TodoListConfirmName>
          <div>Completion</div>
          <button onClick={deleteConfirmAll}>Completion 전체삭제</button>
        </TodoListConfirmName>
        <TodoListStyle>
          {globalTodo.map((todo) =>
            todo.isDone ? <List key={todo.id} globalTodo={todo} /> : null
          )}
        </TodoListStyle>
      </div>
    </Layout>
  );
}

export default TodoList;
