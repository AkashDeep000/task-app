import { z } from "zod";
import { tasks } from "@/db/schema";
import db from "@/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function POST(req: Request, res: Response) {
  const session = await auth()
  if(!session?.user) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Not authenticated",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  const formSchema = z.object({
    title: z.string().min(2, { message: "Must be 2 or more characters long" }),
    description: z.string(),
    priority: z.enum(["low", "normal", "high"]),
  });
  try {
    const task = formSchema.parse(await req.json())

    const dbRes = await db.insert(tasks).values({
      ...task,
      isCompleted: false,
      userId: session.user.id
    })
    return Response.json({
      success: true,
      message: "Succesfully created the task."
    });
  } catch (error) {
    console.log(error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to create the task",
        error
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
