import styles from "./header.module.css";
import { auth } from "@/lib/auth/auth";
import { SignIn, SignOut } from "@/lib/auth/components";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  return (
    <header className={styles.base}>
      <div className="inner">
        <div className="logo">
          <Link href="/">NEW BACKLOG</Link>
        </div>
        {!session?.user ? <SignIn /> : <SignOut />}
      </div>
    </header>
  );
}
