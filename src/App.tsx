import { useState } from 'react';
import './App.css';
import { StyledButton } from './components/UI/Button/Button';

function App() {
  const [isShowParagraph, setIsShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setIsShowParagraph((prevState) => !prevState)
  }

  console.log('APP running');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {isShowParagraph && <p>This is new</p>}
      <StyledButton onClick={toggleParagraphHandler}>Toggle Paragraph</StyledButton>
    </div>
  );
}

export default App;
