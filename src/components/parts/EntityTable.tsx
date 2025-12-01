import { type Entity } from "@/models/Entity"
import { EntityTableRow } from "./EntityTableRow"

interface EntityTableProps {
    entities: Entity[]
}

function EntityTable({ entities }: EntityTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {entities.map(entity => <EntityTableRow entity={entity} />)}
            </tbody>
        </table>
    )
}

export { EntityTable }