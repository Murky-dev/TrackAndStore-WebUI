import { type Entity } from "@/models/Entity"

interface EntityTableRowProps {
    entity: Entity
}

function EntityTableRow({ entity }: EntityTableRowProps) {
    return (
        <tr>
            <td>{entity.name}</td>
            <td>{entity.entity_type}</td>
            <td>{entity.description}</td>
        </tr>
    )
}

export { EntityTableRow }