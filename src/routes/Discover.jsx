import { useContext, useState } from "react"
import { TasteProfileContext } from "../TasteProfileContext"

export default function Discover () {

    const { tasteProfile } = useContext(TasteProfileContext);
    
    console.log(tasteProfile)

        const [apiResponse, setApiResponse] = useState(null)
        async function handleClick () {
            // alert('w/e')
            // TODO use a post request.   Post requests are for params with complex data.
            // my tasteProfile data is too substantial to pass thru URL string.
            const response = await fetch('https://localhost:7085/api/Discovery');
            const resolvedResponse = await response.json()
            console.log(resolvedResponse)
            const content = resolvedResponse.content;
            setApiResponse(content);
        }
    
    return <>
        <div>Discover Component</div>
        <button className="border-2 m-2 p-3 w-fit" onClick={handleClick}>Click me</button>

        {apiResponse && (
            <div className="border-green-300 border-2 rounded-lg m-5 p-5 overflow-scroll h-80">{apiResponse}</div>
        )}
    </> 
}