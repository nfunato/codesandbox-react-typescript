import type { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

// App.tsx のコメントも参照
// 補足(nf)
//   JSにおいて、hogeがundefinedの状態で、
//   hoge.join(" / ")はエラー
//   hoge?.join(" / ") は undefinedになる
//   (そしておそらく、undefinedをプリントする効果は空文字列になる)
//
//   ?. 自体は TS固有でなく JSの機能らしいことに注

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
