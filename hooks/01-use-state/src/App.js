import React, { useState } from 'react'

function App() {
  //! not correct to put in condn.
  /*
  if(true){
    useState()
  }
  useState()
  */

  // ! this version of useState runs with the parameter/fn as parameter - everytime component is rendered
  //! this scenario works fine but if the parameter is sth that takes a lot of time - > this will result in slow app - as it would run every time state is upadated
  //const [count, setCount] = useState(4)

  // ! best practice
  /*
    const [count, setCount] = useState(() => {
    console.log('run function'); //gets rendered only for 1st load
    return 4
  })
  */

  // ! not the correct way to update state based on prev state
  /*
  function decrementCount() {
    setCount(count - 1); // => 4-1 =3
    setCount(count - 1); // => 4-1 =3
  }
  */
  //! correct way
  /*
   function decrementCount() {
     setCount((prevCount)=>prevCount - 1); // =>4-1 =3
     setCount((prevCount)=>prevCount - 1); // =>3-1 =2
   }
   */

  // ! normal version -individual state handling
  /*
  const [count, setCount] = useState(() => {
   return 4
 })

 function decrementCount() {
   setCount((prevCount) => prevCount - 1);
 }

 function incrementCount() {
   setCount((prevCount) => prevCount + 1);
 }

 return (
   <>
     <button onClick={decrementCount}>-</button>
     <span>{count}</span>
     <button onClick={incrementCount}>+</button>
   </>
 );
}
*/

  // ! obj version - multiple state handling
  const [state, setState] = useState(
    {
      count: 4,
      theme: 'blue'
    })
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      //return { count: prevState.count - 1 } //state is oberridden - i.e theme is lost
      return { ...prevState, count: prevState.count - 1 }
    });
  }

  function incrementCount() {
    setState((prevState) => {
      //return { count: prevState.count + 1 } //state is oberridden - i.e theme is lost
      return { ...prevState, count: prevState.count + 1 }
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );

}
export default App;
