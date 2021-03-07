function Button({ text, onClick }) {
  return (
    <button className={text} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
