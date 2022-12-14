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
  overflow-y: scroll;
`;

const TodoListConfirmName = styled.div`
  background-color: black;
  box-shadow: 5px 5px 5px 5px gray;
  color: white;
  padding: 10px 40px 10px 40px;

  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function TodoList() {
  const globalTodo = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const globalTodoNotDone = globalTodo.filter((item) => item.isDone === false);
  const globalTodoDone = globalTodo.filter((item) => item.isDone === true);

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
          <div>To Do List ( {globalTodoNotDone.length}개 )</div>
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
          <div>Completion ( {globalTodoDone.length}개 )</div>
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
