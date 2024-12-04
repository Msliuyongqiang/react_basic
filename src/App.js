//项目的更组件
// App->App.js->public->index.html

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/reducers/counterSlice";
import { fetchChannelValue } from "./store/reducers/channelSlice";
function App() {
  //useSelector 获取redux中的数据
  const count = useSelector((state) => state.counterSlice.value);
  //dispatch 派发一个action
  const dispatch = useDispatch();

  const message = "this is message";
  // const count = 100
  function getName() {
    return "this is name";
  }
  function handlecliack(name, e) {
    console.log(name, e);
  }
  const list = [
    {
      name: "why",
      age: 18,
    },
    {
      name: "kobe",
      age: 39,
    },
  ];
  const Button = () => {
    return <button>按钮组件</button>;
  };

  //useState实现一个计算器按钮
  const [count1, setcount1] = useState(0);
  const handelClick2 = () => {
    setcount1(count1 + 1);
    console.log(count1);
  };

  return (
    <div className="App">
      {/* //使用字符串模板 */}
      {"this is message"}
      <div>
        {/* //使用JS表达式 */}
        {message}
        {count}
        {/* //使用函数 */}
        {getName()}
        {/* //使用对象 */}
        {Math.random()}
        {new Date().getTime()}
        <div style={{ color: "red" }}>{"这是一个js对象"}</div>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item.age}</li>;
        })}
      </ul>
      <button onClick={(e) => handlecliack("刘永强", e)}>按钮</button>
      <br></br>
      <button onClick={handelClick2}>{count1}</button>
      <br></br>
      <Button></Button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>'countde'{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      {/* //使用带参数的action */}
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <div>--------------------------</div>
      {/* //使用异步action */}
      <div style={{ marginTop: "0px" }}>
        <button onClick={() => dispatch(fetchChannelValue())}>
          获取频道数据
        </button>
      </div>
    </div>
  );
}

export default App;
