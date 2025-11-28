import { z } from "zod"
import { EntityTypeSchema } from "./EntityType"

export const EntityIdSchema = z.int()

export const EntitySchema = z.object({
    id: EntityIdSchema,
    parent_id: z.int(),
    entity_type: EntityTypeSchema,
    name: z.string(),
    description: z.string(),
})

export const EntityCreateDtoSchema = EntitySchema.omit({ id: true })
export const EntityUpdateDtoSchema = EntitySchema.partial()

export type Entity = z.infer<typeof EntitySchema>
export type EntityId = z.infer<typeof EntityIdSchema>
export type EntityCreateDto = z.infer<typeof EntityCreateDtoSchema>
export type EntityUpdateDto = z.infer<typeof EntityUpdateDtoSchema>
