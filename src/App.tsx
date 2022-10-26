import { useCallback, useState } from 'react';
import DemoOutput from '@/components/Demo/DemoOutput';
import './App.css';
import Button from '@/components/UI/Button/Button';

function App() {
  const [isShowParagraph, setIsShowParagraph] = useState(false);
  const [isAllowedToggle, setIsAllowedToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (isAllowedToggle) {
      setIsShowParagraph((prevState) => !prevState);
    }
  }, [isAllowedToggle]);

  const allowToggleHandler = () => {
    setIsAllowedToggle(true);
  }

  console.log('APP running');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* <DemoOutput isShow={isShowParagraph} /> */}
      {/* state changes => App is re-evaluated => child components is also re-evaluated */}
      <DemoOutput isShow={isShowParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
