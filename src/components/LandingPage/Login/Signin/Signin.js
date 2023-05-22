import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsKeyFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { actionCheckLogin } from '../../../../actions/user';
import { actionChangeInputValue, actionChangeIsHidden } from '../../../../actions/field';
import Button from '../../../Button/Button';
import Field from '../../../Field/Field';

function Signin() {
  const email = useSelector((state) => state.field.email);
  const password = useSelector((state) => state.field.password);
  const errorLogin = useSelector((state) => state.user.errorLogin);
  const isHidden = useSelector((state) => state.field.isHidden);

  const dispatch = useDispatch();

  function checkLogin(event) {
    event.preventDefault();
    dispatch(actionCheckLogin());
  }

  return (
    <div className="signin">

      <form
        autoComplete="off"
        className="login-form-element flex flex-col items-center"
        onSubmit={(event) => {
          checkLogin(event);
        }}
      >
        {errorLogin && <div className="text-[red]">Adresse email ou mot de passe incorrect</div>}
        <div className="relative">
          <HiOutlineUserCircle className="text-darkAccentColor text-3xl absolute left-10 z-10 h-10 top-2" />
          <Field
            type="email"
            name="email"
            classname="drop-shadow-md mb-4 bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor py-4 w-80 mx-8 pl-12"
            placeholder="Adresse Email"
            value={email}
            onChange={(newValue, name) => dispatch(actionChangeInputValue(newValue, name))}
          />
        </div>

        <div className="relative">
          <Field
            type={isHidden ? 'password' : 'text'}
            name="password"
            classname="drop-shadow-md  mb-4 bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor py-4 w-80 mx-8 pl-12"
            placeholder="Mot de passe"
            value={password}
            onChange={(newValue, name) => dispatch(actionChangeInputValue(newValue, name))}
          />
          <div className="text-darkAccentColor text-3xl pointer-events-none w-full absolute bottom-2 h-full flex justify-between items-center px-11">
            <BsKeyFill className="" />
            {isHidden ? <AiFillEye className="pointer-events-auto" onClick={() => dispatch(actionChangeIsHidden())} /> : <AiFillEyeInvisible className="pointer-events-auto" onClick={() => dispatch(actionChangeIsHidden())} />}
          </div>
        </div>

        <Link to="#" className="pb-8 pt-4">
          Mot de passe oublié ?
        </Link>

        <button
          type="submit"
          className="login-form-button h-20 w-40"
        >
          <Button type="normal" caption="Se connecter" />
        </button>
      </form>

    </div>
  );
}

export default Signin;
