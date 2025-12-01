import { Button } from "../ui/button"
import { useNavigate } from "react-router"

function LearnMore() {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div>
                    <h1 className="text-primary text-5xl xl:text-7xl font-bold">Learn More</h1>
                    <p className="m-6">Temporary page just to test that the router is working correctly.</p>
                    <Button variant="secondary" onClick={() => navigate("/")}>Home</Button>
                </div>
            </div>
        </>
    )
}

export { LearnMore }
