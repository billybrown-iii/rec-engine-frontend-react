import { useContext } from "react"
import { TasteProfileContext } from "../TasteProfileContext"

export default function Discover () {

    const { tasteProfile } = useContext(TasteProfileContext);
    
    console.log(tasteProfile)
    
    return <div>Discover Component</div>
}