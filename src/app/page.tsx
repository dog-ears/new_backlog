import styles from "./page.module.css";
import { auth } from "@/lib/auth/auth";
import { SignIn, SignOut } from "@/lib/auth/components";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <div className={styles.page}>
      <main>
        <h1>NEW BACKLOG</h1>
        <Link href="/dashboard">ダッシュボードページへ</Link>
        {!session?.user ? <SignIn /> : <SignOut />}
      </main>
    </div>
  );
}
