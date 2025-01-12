function TodoInput({ value, onChange: handleChange }) {
  return <input type="text" value={value} onChange={handleChange} />;
}

export default TodoInput;
