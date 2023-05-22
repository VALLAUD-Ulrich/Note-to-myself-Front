import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionMenuClicked, actionDisconnect } from '../../../actions/user';

function Menu() {
  const open = useSelector((state) => state.header.menuOpen);
  const dispatch = useDispatch();
  return (

    <div className={`MENU right-0 absolute bg-darkAccentColor text-right h-full ${open ? 'w-[100vw]' : 'w-[0vw]'}  duration-700 z-20 overflow-hidden`}>
      <ul className="text-darkTextColor text-xl mt-40 absolute right-0 pr-6 w-[100vw]">

        <li className="hover:border-r-4 pr-4 border-r-[white] hover:font-bold cursor-pointer">
          <Link onClick={() => dispatch(actionMenuClicked())} to="/">
            Accueil
          </Link>
        </li>

        <li className="hover:border-r-4 pr-4 border-r-[white] mt-7 hover:font-bold cursor-pointer">
          <Link onClick={() => dispatch(actionMenuClicked())} to="/search">
            Rechercher un restaurant
          </Link>
        </li>

        <li className="hover:border-r-4 pr-4 border-r-[white] mt-7 hover:font-bold cursor-pointer">
          <Link onClick={() => dispatch(actionMenuClicked())} to="/profil">
            Voir mon profil
          </Link>
        </li>

        <li
          onClick={() => {
            dispatch(actionDisconnect()); dispatch(actionMenuClicked());
          }}
          className="hover:border-r-4 pr-4 border-r-[white] mt-7 hover:font-bold cursor-pointer"
        >
          Se déconnecter
        </li>
      </ul>

    </div>
  );
}

export default Menu;
