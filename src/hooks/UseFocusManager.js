import React, {useRef} from 'react'

function UseFocusManager() {
  const inputRef = useRef([])
  const focus = (e) => {
    if (e.target.textContent == 'Біз жайлы'){
      inputRef.current[1].focus();
      console.log(inputRef.current[1]);
    }
    else if (e.target.textContent == 'Негізгі'){
      inputRef.current[0].focus();
      console.log(inputRef.current[0]);
    }
    else if (e.target.textContent == 'Деректер'){
      inputRef.current[2].focus();
      console.log(inputRef.current[2]);
    }
    else{
      inputRef.current[3].focus();
    }
  }
  return {inputRef, focus}
}

export default UseFocusManager;