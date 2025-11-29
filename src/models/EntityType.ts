import { z } from "zod"

export const EntityTypeSchema = z.enum(["item", "container", "person", "location"])

export type EntityType = z.infer<typeof EntityTypeSchema>
