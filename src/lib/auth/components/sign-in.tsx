import { auth, signIn, signOut } from "@/lib/auth/auth";

export default async function SignIn() {
  const session = await auth();

  if (session?.user) {
    // ログインしているとき
    return (
      <>
        <div>ログインしています。（名前：{session.user.name}）</div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">ログアウト</button>
        </form>
      </>
    );
  } else {
    // ログインしていないとき
    return (
      <>
        <div>ログインしていません。</div>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="submit">ログイン</button>
        </form>
      </>
    );
  }
}
