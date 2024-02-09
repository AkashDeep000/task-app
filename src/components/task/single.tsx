"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/db/schema";
import { Button } from "../ui/button";

export function TaskSingle(task: Task) {
  return (
    <div className="mt-4">
      <div className="p-4 rounded shadow grid grid-cols-[1fr_auto]">
        <div className="">
          <p className="font-semibold">{task.title}</p>
          <p className="text-sm text-muted-foreground">{task.description}</p>
        </div>
        <Button size="sm">Done</Button>
      </div>
    </div>
  );
}
