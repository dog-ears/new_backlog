import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>ダッシュボード</h1>
      <p>ようこそ、{session?.user?.name}さん！</p>
      {/* ダッシュボードの内容を追加 */}
    </div>
  );
}

export default DashboardPage;
