import Button from "./Button";

export default function TodoRegistButton({ onClick: handleClick }) {
  return (
    // props에 전달하는 값이 true, false 인 경우
    // props 명칭만 넣거나 빼는 식으로 제어 가능
    <Button className="red" onClick={handleClick}>
      등록
    </Button>
  );
}
