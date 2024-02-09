import { TaskAdd } from "@/components/task/add";
import { TaskList } from "@/components/task/list";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      {session?.user ? (
        <>
        <TaskAdd />
        <TaskList userId={session.user.id}/>
        </>
      ) : (
        <h2 className="text-lg">
          The app is in &quot;Work in progress&quot; state. Sign in to see the currently
          implimented feature.
        </h2>
      )}
    </div>
  );
}
