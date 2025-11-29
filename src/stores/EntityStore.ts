import { create } from "zustand"
import type { Entity, EntityCreateDto, EntityId, EntityUpdateDto } from "@/models/Entity"

type State = {
    entities: Entity[]
    getEntity: (id: EntityId) => Entity | undefined
    createEntity: (createEntityDto: EntityCreateDto) => void
    updateEntity: (id: EntityId, updateEntityDto: EntityUpdateDto) => void
    deleteEntity: (id: EntityId) => void
}

// TODO: Remove.  This is just for dev until we have a REST API to use.
let nextId: number = 4;
const seeds: Entity[] = [
    { id: 1, parent_id: 0, entity_type: "location", name: "Andy's Room", description: "Now with room for activities!" },
    { id: 2, parent_id: 0, entity_type: "location", name: "Boys Room", description: "No girls allowed!" },
    { id: 3, parent_id: 0, entity_type: "location", name: "Girls Room", description: "No boys allowed!" },
]

export const useEntityStore = create<State>((set, get) => ({
    entities: seeds,

    /**
     * Gets the specified entity from the store.
     * 
     * @param id The unique identifier of the entity.
     * @returns The Entity if found, otherwise undefined.  
     */
    getEntity: (id) => {
        const { entities } = get()
        return entities.find(entity => entity.id == id)
    },

    /**
     * Creates a new entity in the store.  Does not accept an id, one is generated automatically to replicate the
     * functionality a real REST API will provide.
     * 
     * @param createEntityDto The entity to add to the store.
     */
    createEntity: createEntityDto => set(state => {
        return {
            entities: [
                ...state.entities,
                { id: nextId++, ...createEntityDto}
            ]
        }
    }),

    /**
     * Update an existing entity in the store.
     * 
     * @param id The unique identifier of the entity to update.
     * @param updateEntityDto The key/values to update in the entity.
     */
    updateEntity: (id, updateEntityDto) => set(state => {
        const entities = [ ...state.entities ]
        const entityIndex = entities.findIndex(entity => entity.id == id)

        if (entityIndex >= 0)
            entities[entityIndex] = { ...entities[entityIndex], ...updateEntityDto }

        return { entities }
    }),

    /**
     * Delete the specified entity from the store.
     * 
     * @param id The unique identifier of the entity to delete.
     */
    deleteEntity: (id) => set(state => {
        const entities = [ ...state.entities ]
        const entityIndex = entities.findIndex(entity => entity.id == id)

        if (entityIndex >= 0)
            entities.splice(entityIndex, 1)

        return { entities }
    })
}))
