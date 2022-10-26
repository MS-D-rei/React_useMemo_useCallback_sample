import React from "react";
import {StyledButton} from '@/components/UI/Button/ButtonStyle'

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({children, onClick}: ButtonProps) {
  console.log('Button running')
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

// https://reactjs.org/docs/hooks-reference.html#usecallback
// This React.memo() is useless in this case. Because onClick prop is a reference,
// old onClick === new onClick is always false, so will be re-evaluated.
// To resolve this issue, use useCallback(function, dependencies: []) in parent component.
// useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
// export default React.memo(Button);
export default React.memo(Button);