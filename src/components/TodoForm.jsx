function TodoForm({ children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default TodoForm;
