import { useState } from 'react';
import Button from './Button';

function Header({ addShow }) {
  const [inputValue, setInputValue] = useState('');
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleAdd() {
    //Math.random() return 0..1
    //Math.random()*100 return 0..100.X
    //Math.floor() return integer
    // +1 to avoid 0
    const show = {
      id: Math.floor(Math.random() * 100) + 1,
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
