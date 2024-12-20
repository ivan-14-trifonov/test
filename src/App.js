import './App.css';
import { Computers, CommonDivisors, PrimeNumbers, MultTable } from "./Exercises";
import { useState } from "react";

function addForm1(setRes1) {

  function submit1(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let n = formData.get("n");
    let res = Computers(n);
    setRes1(
      <p>{res}</p>
    );
  }

  return (
    <form onSubmit={submit1}>
      <p>Введите число компьютеров:</p>
      <input name="n" type="text" className="input1" />
      <button type="submit">Вывести</button>
    </form>
  );
}

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

function addForm3(setRes3) {

  function submit3(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let min = formData.get("minPr");
    let max = formData.get("maxPr");
    let primeNumbs = PrimeNumbers(min, max);
    let res = primeNumbs.join(', ');
    setRes3(
      <p>Простые числа в заданном диапазоне: {res}</p>
    );
  }

  return (
    <form onSubmit={submit3}>
      <p>Задайте диапазон поиска простых чисел:</p>
      <input name="minPr" type="text" className="input3" />
      <input name="maxPr" type="text" className="input3" />
      <button type="submit">Вычислить</button>
    </form>
  );
}

function addForm4(setRes4) {

  function submit4(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let max = Number(formData.get("max"));
    let mult = MultTable(max);
    setRes4(
      <div className="container">
        <p>Таблица умножения:</p>
        <div>{mult}</div>
      </div>
    );
  }

  return (
    <form onSubmit={submit4}>
      <p>Задайте число, до которого будет выведена таблица умножения:</p>
      <input name="max" type="text" className="input4" />
      <button type="submit">Вывести</button>
    </form>
  );
}

function App() {

  const [res1, setRes1] = useState([]);
  let form1 = addForm1(setRes1);

  const [res2, setRes2] = useState([]);
  let form2 = addForm2(setRes2);

  const [res3, setRes3] = useState([]);
  let form3 = addForm3(setRes3);

  const [res4, setRes4] = useState([]);
  let form4 = addForm4(setRes4);

  return (
    <div className="App">
      <h2>Задание 1</h2>
      <div>
      {form1}
      {res1}
      </div>
      <h2>Задание 2</h2>
      <div>
      {form2}
      {res2}
      </div>
      <h2>Задание 3</h2>
      <div>
      {form3}
      {res3}
      </div>
      <h2>Задание 4</h2>
      <div>
      {form4}
      {res4}
      </div>
    </div>
  );
}

export default App;
