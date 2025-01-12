export default function TodoTextarea({ value, onChange: handleChange }) {
  return <textarea value={value} onChange={handleChange} />;
}
