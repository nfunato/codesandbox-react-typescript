import type { VFC } from "react";
import type { TodoType } from "./types/todo";

// Pick<...> can be written as Omit<TodoType, "id">
// Omit<...> can be written as Pick<TodoType, "title" | "userId" | "completed">
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザ:${userId})`}</p>;
};
