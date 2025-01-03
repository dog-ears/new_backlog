import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <main className={styles.base}>
      <div className="inner">
        <h1>ダッシュボード</h1>
        <p>ようこそ、{session?.user?.name}さん！</p>
        {/* ダッシュボードの内容を追加 */}
      </div>
    </main>
  );
}

export default DashboardPage;
