import { useState } from "react";

export default function ApiResponseDisplay () {
    const [apiResponse, setApiResponse] = useState(null)
    async function handleClick () {
        // alert('w/e')
        const response = await fetch('https://localhost:7085/api/Discovery');
        const resolvedResponse = await response.json()
        console.log(resolvedResponse)
        const content = resolvedResponse.content;
        setApiResponse(content);
    }
    
    return <div>
        <div className="text-lg p-2 underline">Click the button to see something cray</div>
        <button className="p-5 border-2 border-dark-200" onClick={handleClick}>Click Me</button>

        {apiResponse && (
            <div className="border-green-300 border-2 rounded-lg m-5 p-2">{apiResponse}</div>
        )}
    </div>
}