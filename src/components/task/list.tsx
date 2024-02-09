import db from "@/db";
import { TaskSingle } from "./single";

export async function TaskList({ userId }: { userId: string }) {
  const data = await db.query.tasks.findMany({
    where: (task, { eq }) => {
      return eq(task.userId, userId);
    },
  });
  // console.log(data);

  return (
    <>
      {data.map((task) => {
        return <TaskSingle key={task.id} {...task}/>;
      })}
    </>
  );
}
