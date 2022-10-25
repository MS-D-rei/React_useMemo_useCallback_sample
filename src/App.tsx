import { useState } from 'react';
import DemoOutput from '@/components/Demo/DemoOutput';
import { StyledButton } from '@/components/UI/Button/Button';
import './App.css';

function App() {
  const [isShowParagraph, setIsShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setIsShowParagraph((prevState) => !prevState)
  }

  console.log('APP running');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput isShow={isShowParagraph} />
      <StyledButton onClick={toggleParagraphHandler}>Toggle Paragraph</StyledButton>
    </div>
  );
}

export default App;
