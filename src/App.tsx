import { useState } from "react";
import axios from "axios";
import "./styles.css";
import { Todo } from "./Todo";
import type { TodoType } from "./types/todo";
import { Text } from "./Text";
import type { User } from "./types/user";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "わしじゃ"
  // 以下の行をコメントアウトしたり入れたりして、
  // UserProfileの定義ののoptional chaining(hobbies?)の効果を確認する
  // (hobbies? を　hobbies にして以下の行をコメントアウトすると、
  //  TypeScriptではランタイム以前にコンパイルタイムエラーになる)
  //,hobbies: ["映画", "ゲーム"]
};

// 補足(nf)
//   JSにおいて、hogeがundefinedの状態で、
//   hoge.join(" / ")はエラー
//   hoge?.join(" / ") は undefinedになる
//   (そしておそらく、undefinedをプリントする効果は空文字列になる)
//
//   ?. 自体は TS固有でなく JSの機能らしいことに注

export const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo, i) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
