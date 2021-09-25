import React, { useState, useMemo, useEffect } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //! everytime theme change is clicked -> this gets triggred
  // const doubleNumber = slowFunction(number);

  // ! when Change Theme bth changes state - comp is rerendered but it checks that the value "if value is same"
  // ! if so -> slowFunction is not executed 
  const doubleNumber = useMemo(() =>
    slowFunction(number), [number]
  );

  // uncomment to see the warning
  // const themeStyle = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  // }

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed');
  }, [themeStyle])

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log('Slow Function');
  for (let i = 0; i <= 10000000000; i++) {
    return num * 2;
  }
}

// notice the empasis on "theme change" and not "num change" -> as doubler anyway needs to be called


