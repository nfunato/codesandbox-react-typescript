import type { TodoType } from "./types/todo";

export const Todo = (
  // Pick<...> can be written as Omit<TodoType, "id">
  props: Pick<TodoType, "title" | "userId" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザ:${userId})`}</p>;
};
