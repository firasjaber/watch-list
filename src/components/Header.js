import { useState } from 'react';
import Button from './Button';

function Header({ addShow }) {
  const [inputValue, setInputValue] = useState('');
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleAdd(e) {
    const show = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: inputValue,
      watched: false,
    };
    addShow(show);
    setInputValue('');
  }
  return (
    <header>
      <h2>My Watch List</h2>
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          placeholder='Show name...'
        />
        <Button text='Add' onClick={handleAdd} />
      </div>
    </header>
  );
}

export default Header;
