import { useLocation, Link } from 'react-router-dom';

export default function Nav () {
  const navLinkStyles = 'flex-grow text-center p-4 text-2xl';
  const selectedLinkStyles = navLinkStyles + ' underline';

  const location = useLocation().pathname;
  const setupIsSelected = location == '/setup'
  const discoverIsSelected = location == '/discover'

  return <>
    <Link to="/">Home</Link>
    <div className='my-5 flex items-stretch'>
      <div className='w-1/2 border-r-2 border-nosferatu-50 flex'>
        <Link to="/setup" className={setupIsSelected ? selectedLinkStyles : navLinkStyles} >Setup</Link>
      </div>
      <div className='w-1/2 flex'>
        <Link to="/discover" className={discoverIsSelected ? selectedLinkStyles : navLinkStyles} >Discover</Link>
      </div>
    </div>
  </>
}