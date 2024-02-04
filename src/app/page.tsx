import { TaskAdd } from "@/components/task/add";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      {session ? (
        <TaskAdd />
      ) : (
        <h2 className="text-lg">
          The app is in "Work in progress" state. Sign in to see the currently
          implimented feature.
        </h2>
      )}
    </div>
  );
}
