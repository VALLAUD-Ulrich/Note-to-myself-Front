import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionChangeLoginTab } from '../../../actions/user';
import Register from './Register/Register';
import Signin from './Signin/Signin';

function Login() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.user.activeTab);
  return (
    <div className="absolute pb-8 bottom-0 w-full bg-lightBackgroundColor dark:bg-darkBackgroundColor">
      <div className="tabs w-full flex justify-center text-lightTextColor dark:text-darkTextColor px-6 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] dark:shadow-card mt-[-2em] z-10">
        <Link
          to="#"
          onClick={() => {
            dispatch(actionChangeLoginTab('SignIn'));
          }}
          className={`mementoTab border-lightAccentColor dark:border-darkAccentColor pb-2 mr-5 ${activeTab === 'SignIn' ? 'border-b-2' : 'border-0'}`}
        >
          Se connecter
        </Link>
        <Link
          to="#"
          onClick={() => {
            dispatch(actionChangeLoginTab('Register'));
          }}
          className={`mealsTab border-lightAccentColor dark:border-darkAccentColor pb-2 mr-5 ${activeTab === 'Register' ? 'border-b-2' : 'border-0'}`}
        >
          S'enregistrer
        </Link>
      </div>

      <div className="flex flex-col flex-grow p-8 text-lightTextColor dark:text-darkTextColor ">
        { (activeTab === 'SignIn')
        && (
          <Signin />
        )}
        { (activeTab === 'Register')
        && (
          <Register />
        )}
      </div>
    </div>
  );
}

export default Login;
