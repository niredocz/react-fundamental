import { React, useEffect, useRef, useState } from "react";
import Testing from "./components/testing";

export const App = () => {
  const [getLimit, setLimit] = useState(1)
  const [getMyName, setMyName] = useState('Daffa')
  const inputNameRef = useRef(getMyName)
  
  useEffect(() => {
    setMyName(inputNameRef.current.value)
  }, [getLimit])


  return (
    <>
      <Testing title="Testing Title" description="testing description" />
      <div>
        <input placeholder="Input Nama Anda" ref={inputNameRef} defaultValue={inputNameRef.current} />
        <br />
        <br />
        <button onClick={() => setLimit((prev) => prev + 1)}>Naikkan limit</button>
        <button onClick={() => setLimit((prev) => prev - 1)}>Turunkan limit</button>
        <br />
        <br />
        {getLimit}
        <br />
        {getMyName}
      </div>
    </>
  );
};

export default App;