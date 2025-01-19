import Button from "./Button";
import clsx from "clsx";
import "./TodoItem.css";

export default function TodoItem({
  item,
  content,
  onConfirm: handleConfirm,
  onDelete: handleDelete,
  onDetail: handleOpenDetail,
}) {
  return (
    <li>
      <input type="checkbox" />
      <h1 className={clsx(item.completed && "completed")}>{item.title}</h1>
      <p>
        <button className="hideBtn" onClick={handleHideContent}>
          닫기
        </button>
        {content}
      </p>
      <TodoConfirmButton onClick={handleConfirm} />
      <TodoDeleteButton onClick={handleDelete} completed={item.completed} />
      <TodoDetailButton onClick={handleOpenDetail} />
    </li>
  );
}

// 완료 버튼
function TodoConfirmButton({ onClick: handleClick }) {
  // const handleClickConfirm = (e) => {
  //   e.target.parentElement.classList.toggle("done");
  // };

  return (
    <Button className="confirmBtn" onClick={handleClick}>
      완료
    </Button>
  );
}

// 삭제 버튼
function TodoDeleteButton({ onClick: handleClick, completed = false }) {
  // const handleClickDelete = (e) => {
  //   const done = e.target.parentElement.classList.contains("done");

  //   if (done) return;
  //   e.target.parentElement.remove();
  // };

  return (
    <Button disabled={completed} onClick={handleClick}>
      삭제
    </Button>
  );
}

// 자세히 보기 버튼
function TodoDetailButton({ onClick: handleClick }) {
  return <Button onClick={handleClick}>상세</Button>;
}

// 내용 닫기 버튼
function handleHideContent(e) {
  if (e.target.parentElement.parentElement.classList.contains("show")) {
    e.target.parentElement.parentElement.classList.remove("show");
  }
}
