import { signIn } from "@/lib/auth/auth";
import commonStyles from "@/app/common.module.css";
export default async function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit" className={commonStyles.btnBasic}>
        ログイン
      </button>
    </form>
  );
}
