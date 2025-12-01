import { useEntityStore } from "@/stores/EntityStore"
import { EntityTable } from "./EntityTable"

interface EntityDetailProps {
    id: number,
}

function EntityDetail({ id }: EntityDetailProps) {
    const entities = useEntityStore(state => state.entities)
    const getEntity = useEntityStore(state => state.getEntity)
    const entity = getEntity(id)

    return (
        <>
            <div>
                <h1>{entity?.name} ({entity?.entity_type})</h1>
                <p>{entity?.description}</p>
            </div>

            <EntityTable entities={entities} />
        </>
    )
}

export { EntityDetail }