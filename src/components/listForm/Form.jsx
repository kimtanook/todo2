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

const InputStyle = styled.input`
  margin: 5px;
  height: 20px;
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
        <InputStyle
          onChange={onChangeTitle}
          value={title}
          type="text"
          placeholder="할 일 제목"
          maxLength={20}
        />
        <InputStyle
          onChange={onChangeBody}
          value={body}
          type="text"
          placeholder="할 일 내용"
          maxLength={20}
        />
        <button>작성완료</button>
      </form>
      <hr className="hr"></hr>
    </FormStyle>
  );
};

export default Form;
