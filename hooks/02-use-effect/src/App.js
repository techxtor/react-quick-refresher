import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  // ! //everythimg within =>{}, everytime comp renders => will be executed
  useEffect(() => {
    console.log('comp rendered');
  })

  // ! on Mount
  useEffect(() => {
    window.addEventListener('resize', handleResize); //once mounted -- this keeps listening for resize
    console.log('on mount');

    //! this is called whenever this useEffect is cleaned up [here unmounted]
    //! forget abt mound/pageload and thereafter-> cleanup fn executes 1st then the actual fn
    // everytime useeffect is ran - return cleans up what we did last time -> see useEffect in react learning
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  // ! when dependenices within [] changes => then only rendered
  useEffect(() => {
    console.log('resource type changed');
  }, [resourceType])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])


  return (
    <>
      <div>
        <p>{windowWidth}</p>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item =>
        <pre key={Math.random()}>{JSON.stringify(item)}</pre>
      )}
    </>
  );
}

export default App;

//! on mount i.e page load => stat changes from nothing to sth that is specified in useState
