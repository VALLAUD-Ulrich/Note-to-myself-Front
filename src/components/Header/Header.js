import { useDispatch, useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { MdLightMode, MdModeNight } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import flou from '../../assets/images/blur.jpg';
import Menu from './Menu/Menu';
import { actionMenuClicked, actionToggleDark } from '../../actions/user';

function Header() {
  const open = useSelector((state) => state.header.menuOpen);
  const usernameState = useSelector((state) => state.user.username);
  const profilePhotoUrl = useSelector((state) => state.user.photo_url);
  const dark = useSelector((state) => state.user.dark);
  const { REACT_APP_API_URL } = process.env;

  const dispatch = useDispatch();

  return (
    <>
      <nav className="HEADER flex items-center justify-between p-8 z-30">
        <div className="flex items-center">
          <Link to="/profil">
            <img className=" rounded-full object-cover h-12 w-12 mr-4" alt="logo" src={(profilePhotoUrl && profilePhotoUrl !== 'null') ? `${REACT_APP_API_URL}${profilePhotoUrl}` : flou} />
          </Link>
          <Link to="/profil">
            <div className="text-lightTextColor dark:text-darkTextColor">
              <p className="font-semibold text-xl tracking-tight">{usernameState}</p>
              <p>Bienvenue !</p>
            </div>
          </Link>
        </div>
        <div className={`flex items-center ${!open ? 'text-lightAccentColor ' : 'text-darkTextColor '} duration-700`}>
          <div className="pr-6">
            {!dark
              ? <MdLightMode onClick={() => dispatch(actionToggleDark(true))} className="mx-2 w-8 h-8 hover:w-10 hover:h-10 hover:mx-1" />
              : <MdModeNight onClick={() => dispatch(actionToggleDark(false))} className="mx-2 w-8 h-8 hover:w-10 hover:h-10 hover:mx-1" />}
          </div>
          <div>
            {!open
              ? <FaBars className="mx-2 w-8 h-8 hover:w-10 hover:h-10 hover:mx-1" onClick={() => dispatch(actionMenuClicked())} />
              : <RiCloseFill className="mx-2 w-8 h-8 hover:w-10 hover:h-10 hover:mx-1" onClick={() => dispatch(actionMenuClicked())} />}
          </div>
        </div>
      </nav>
      <Menu />
    </>
  );
}

export default Header;
