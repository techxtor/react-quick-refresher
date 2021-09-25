import React, { useEffect, useState, useRef } from 'react';

//uncomment for version 1 

function App() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  // useEffect(() => {
  //   console.log('log from useeffect');
  //   setRenderCount(prevRenderCount => prevRenderCount + 1);
  //   console.log(renderCount);
  // })

  //! this more like  "setRenderCount(prevRenderCount => prevRenderCount + 1)"
  //Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // ? 1st time comp is rendered -> useeffect will change the state for render count (state change occurs)
  //? now again comp is re-rendered as rendercount is changed -> on that re-render as well, rendercount state is changed
  //? which again calls for rerender -> causing infinite loop
  //see error log -
  //React Hook useEffect contains a call to 'setRenderCount'. Without a list of dependencies, 
  //this can lead to an infinite chain of updates. To fix this, pass [] as a second argument to the useEffect Hook.

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}


/*
const App = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  const prevName = useRef('');

  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  // if u use state for prevName -> prevname will always be current name
  useEffect(() => {
    prevName.current = name;
  }, [name])
  // name = a ; prev = ''
  //name = ab; prev = a


  return (
    <div>
      <input ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}></input>
      <div>My name is {name} and it used to be {prevName.current}</div>
      <button onClick={focus}>Focus</button>
    </div>
  )
}
*/

export default App;
