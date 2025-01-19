import { useState } from "react";
import TodoApp from "./components/TodoApp";
import TodoForm from "./components/TodoForm";
import TodoInput from "./components/TodoInput";
import TodoRegistButton from "./components/TodoRegistButton";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoTextarea from "./components/TodoTextarea";
import TodoDetail from "./components/TodoDetail";
import "./App.css";

/**
 * Todo App 구현
 *
 * 1. 할 일을 등록할 수 있는 폼 필드
 *  - 힐 일 제목을 입력할 수 있는 input
 *  - 할 일 내용을 입력할 수 있는 textarea
 *  - 할 일 등록 버튼
 *
 * 2. 할 일 리스트
 *  - 할 일 제목이 표시되는 리스트
 *  - 할 일 삭제 버튼
 *  - 할 일이 완료됐는지 체크할 체크 버튼
 *
 * 3. 부가적인 기능 (고민해 볼 수준)
 *  - 할 일 내용은 자세히 보기 버튼으로 레이어를 띄워봄 250118 ok
 *  - 할 일 제목을 수정할 수 있어야 한다.
 *  - 할 일 내용 레이어에서 내용을 수정할 수 있어야 한다.
 *  - 선택 삭제 기능, 전체 선택 삭제 기능
 *  - 선택 완료 기능, 전체 선택 완료 기능
 */

/**
 * 1. 등록을 하기 위해서 필요한 것
 *  - 제목을 입력하고
 *  - 내용을 입력하고
 *  - 등록 버튼을 누른다.
 *
 * 2. 등록 버튼을 누르면
 *  - 같은 제목이 있는지 검사한다.
 *  - 같은 제목이 있다면 등록 불가, 없다면 등록
 *  - 등록 후 리스트에 추가 되어야 한다.
 *
 * 3. 리스트에서는 (숙제!)
 *  - 완료를 누르면 해당 리스트에 완료 버튼에 완료 상태로 보여야 한다. 250113 ok
 *  - 삭제를 누르면 해당 리스트는 삭제 되어야 한다. 250113 ok
 *  - 완료 상태인 리스트는 삭제 할 수 없어야 한다. 250113 ok
 */

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "할 일1", content: "내용", completed: false },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [detailContent, setDetailContent] = useState(null);

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleChangeContent = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleRegistTodo = () => {
    const duplicated = todos.some((todo) => todo.title === title);

    if (duplicated) return;
    setTodos((todos) => [
      ...todos,
      { id: todos.length + 1, title, content, completed: false },
    ]);
  };

  const handleConfirmTodo = (id) => () => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id) => () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleOpenDetail = (item) => () => {
    setModalOpen(true);
    setDetailContent(
      <ul>
        <li>{item.title}</li>
        <li>{item.completed ? "완료" : "미완료"}</li>
      </ul>
    );
  };

  const handleCloseDetail = () => {
    setModalOpen(false);
    setDetailContent(null);
  };

  // useEffect(() => {
  //   console.log("title", title);
  // }, [title]);

  // useEffect(() => {
  //   console.log("content", content);
  // }, [content]);

  return (
    <TodoApp>
      <TodoForm>
        <TodoInput value={title} onChange={handleChangeTitle} />
        <TodoTextarea value={content} onChange={handleChangeContent} />
        <TodoRegistButton onClick={handleRegistTodo} />
      </TodoForm>
      <TodoList>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            content={item.content}
            onConfirm={handleConfirmTodo(item.id)}
            onDelete={handleDeleteTodo(item.id)}
            onDetail={handleOpenDetail(item)}
          />
        ))}
      </TodoList>
      <TodoDetail
        modalOpen={modalOpen}
        content={detailContent}
        onModalClose={handleCloseDetail}
      />
    </TodoApp>
  );
}

export default App;
