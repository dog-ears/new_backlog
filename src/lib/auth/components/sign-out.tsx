import { signOut } from "@/lib/auth/auth";
import commonStyles from "@/app/common.module.css";

export default async function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className={commonStyles.btnBasic}>
        ログアウト
      </button>
    </form>
  );
}
