import './App.css';
import { CommonDivisors } from "./Exercises";
import { useState } from "react";

function addForm2(setRes2) {

  function submit2(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let numbers = formData.get("numbers");
    numbers = numbers.replace(/\s/g, '');
    const givenArr = numbers.split(',');
    let commonDiv = CommonDivisors(givenArr);
    let res = commonDiv.join(', ');
    setRes2(
      <p>Общие делители заданных чисел: {res}</p>
    );
  }

  return (
    <form onSubmit={submit2}>
      <p>Введите положительные целые числа, разделяя их запятой:</p>
      <input name="numbers" type="text" placeholder="12, 34, 56, ..." className="input2" />
      <button type="submit">Вычислить</button>
    </form>
  );
}

function App() {

  const [res2, setRes2] = useState([]);
  let form2 = addForm2(setRes2);

  return (
    <div className="App">
      <h2>Задание 2</h2>
      <div>
        {form2}
        {res2}
      </div>
    </div>
  );
}

export default App;
