export default function TodoItem({ title }) {
  return (
    <li>
      <h1>{title}</h1>

      <TodoConfirmButton />
      <TodoDeleteButton />
    </li>
  );
}

function TodoDeleteButton() {
  return <button>삭제</button>;
}

function TodoConfirmButton() {
  return <button>완료</button>;
}
