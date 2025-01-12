import { Link } from 'react-router-dom';

export default function Home () {
    return <>
    <div className="mx-auto w-fit text-lg">
        <div className=''>Welcome!  This is an AI-powered, media recommendations engine.  It supports books, films, shows, and games.</div>
        <div className='my-2'>Here is how to use it:</div>
        <ul className='list-disc ml-5'>
            <li className='mb-2'>Go to <Link to="/setup" className='underline'>Setup</Link> and name some of your favorites.</li>
            <li>
                Go to <Link to="/discover" className='underline'>Discover</Link> to find new recommendations based on your tastes.            </li>
        </ul>
         {/* <Link to="/setup">Get started</Link> */}
    </div>
    </>
}