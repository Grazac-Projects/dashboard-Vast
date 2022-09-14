import React, { useState } from "react";

function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse }
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });
  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
    }
    window.localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, setState];
}

const Form = ({ initialName = "" }) => {
  const [text, setText] = useLocalStorageState("text", initialName);

  const [count, setCount] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        {count}
      </button>
      <form>
        <label>To Do </label>
        <input type="text" id="text" onChange={handleChange} />
      </form>
      {text ? <strong>Hello {text} </strong> : "Type your name here"}
    </div>
  );
};

export default Form;
