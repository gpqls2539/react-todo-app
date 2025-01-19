export default function Button({ children, onClick: handleClick }) {
  return <button onClick={handleClick}>{children}</button>;
}
