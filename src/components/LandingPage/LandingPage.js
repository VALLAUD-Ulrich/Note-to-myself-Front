import { useDispatch, useSelector } from 'react-redux';
import { MdLightMode, MdModeNight } from 'react-icons/md';
import Bullet from './Bullet/Bullet';
import Login from './Login/Login';
import splashImage from '../../assets/images/splashImage.webp';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { actionToggleDark } from '../../actions/user';

function LandingPage() {
  const bullet = useSelector((state) => state.user.bullet);
  const dark = useSelector((state) => state.user.dark);
  const dispatch = useDispatch();
  return (
    <div className="h-full relative text-darkAccentColor">
      <img src={splashImage} alt="splashImage" className="opacity-20 object-cover h-full absolute" />
      <div className="absolute z-10 right-4 top-4">
        {!dark
          ? <MdLightMode onClick={() => dispatch(actionToggleDark(true))} className="mx-2 w-8 h-8 hover:w-10 hover:h-10 hover:mx-1 hover:-my-1" />
          : <MdModeNight onClick={() => dispatch(actionToggleDark(false))} className="mx-2 w-8 h-8 hover:w-10 hover:h-10 hover:mx-1 hover:-my-1" />}
      </div>
      <div className="flex flex-col items-center">
        <Logo className="fill-darkAccentColor w-[80%] lg:w-[50%] mt-[10vh] mx-auto opacity-90" />

        { bullet ? <Bullet /> : <Login /> }
      </div>

    </div>

  );
}

export default LandingPage;
