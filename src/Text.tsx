import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// v17までのFCは、childrenが暗黙定義で、必要ないとき渡してもエラーにならない
// v18のFCは、必要ないときにchildrenを渡すとエラーになる(破壊的変更)

// v17で必要ないchildrenを渡したときにエラーにしたければ、VFCを使う
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
