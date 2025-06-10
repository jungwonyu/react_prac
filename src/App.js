import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('이름을 입력하세요');
  const [liked, setLiked] = useState(true);

  const nameInput = useRef(0);

  const onIncrease = () => {
    setAge(age => age + 1);
  }

  const onDecrease = () => {
    setAge(age => age - 1);
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  
  const handleChangelike = (e) => {
    setLiked(e.target.checked);
  }

  const handleResetName = () => {
    setName('');
    nameInput.current.focus();
  }

  return (
    <div className='container'>
      <h3>useState 테스트 - onClick</h3>
      <p>Age: {age}</p>
      <div className='hstack gap10'>
        <button onClick={onIncrease}>증가</button>
        <button onClick={onDecrease}>감소</button>
      </div>

      <h3>useState 테스트 - onChange 텍스트 필드</h3>
      <input value={name} onChange={handleChangeName} />
      <p>You typed name: {name}</p>
      <button onClick={handleResetName}>Reset</button>

      <h3>useState 테스트 - onChange 체크 박스</h3>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChangelike}></input>
        좋으면 체크!
      </label>
      <p>너는 {liked ? '체크함!' : '체크 안 함'}</p>

      <h3>두 변수 사용해보기</h3>
      <div className='hstack gap10'>
        <input value={name} onChange={handleChangeName} />
        <button onClick={() => setAge(age + 1)}>나이 증가</button>
      </div>
      <p>내 이름은 {name}야!. 나는 {age} 살이야.</p>

      <h3>useRef 테스트</h3>
      <input value={name} onChange={handleChangeName} ref={nameInput} />
    </div>
  );
}

export default App;