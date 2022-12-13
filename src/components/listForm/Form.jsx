import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../../redux/modules/todo';

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeBody = (event) => setBody(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === '' || body === '') {
      return;
    }
    dispatch(
      addTodo({ id: Date.now(), title: title, body: body, isDone: false })
    );
    setTitle('');
    setBody('');
  };

  return (
    <FormStyle>
      <form onSubmit={onSubmit} className="todo-form">
        <input
          onChange={onChangeTitle}
          value={title}
          type="text"
          placeholder="title"
          maxLength={20}
        />
        <input
          onChange={onChangeBody}
          value={body}
          type="text"
          placeholder="body"
          maxLength={20}
        />
        <button>Add To Do</button>
      </form>
      <hr className="hr"></hr>
    </FormStyle>
  );
};

export default Form;
