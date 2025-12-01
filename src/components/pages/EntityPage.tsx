import { useParams } from "react-router"
import { EntityDetail } from "../parts/EntityDetail"

function EntityPage() {
    const params = useParams()

    let id: number | null = null
    if (params.id)
        id = parseInt(params.id)

    return (
        <>
            {id ? (
                <EntityDetail id={id} />
            ) : (
                <div>TODO: Handle errors nicely.</div>
            )}
        </>
    )
}

export { EntityPage }