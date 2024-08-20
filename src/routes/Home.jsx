import { Link } from "react-router-dom";

export default function Home () {
    return <>
    <div className="mx-auto w-fit py-10">
        <Link to="/setup" className="btn">Goto setup</Link>
        <br className="my-10"/>
        <Link to="/discover" className="btn">Goto discover</Link>
    </div>
    </>
}