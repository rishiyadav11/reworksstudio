import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "server/api/trpc";
import { contacts } from "server/db/schema"; // Adjust path if needed
import { db } from "server/db"; // Ensure your db instance is correctly imported

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      await db.insert(contacts).values({
        name: input.name,
        email: input.email,
        phone: input.phone,
        message: input.message,
      });
      return { success: true };
    }),
});
