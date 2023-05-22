import { useDispatch, useSelector } from 'react-redux';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsKeyFill } from 'react-icons/bs';
import { actionCheckRegister } from '../../../../actions/user';
import { actionChangeInputValue, actionChangeIsHidden } from '../../../../actions/field';
import Button from '../../../Button/Button';
import Field from '../../../Field/Field';

function Register() {
  const username = useSelector((state) => state.field.username);
  const emailRegister = useSelector((state) => state.field.emailRegister);
  const passwordRegister = useSelector((state) => state.field.passwordRegister);
  const isHidden = useSelector((state) => state.field.isHidden);
  const error = useSelector((state) => state.user.errorRegister);

  const dispatch = useDispatch();

  function updateLogin(event) {
    event.preventDefault();
    dispatch(actionCheckRegister());
  }

  return (
    <div className="signup">
      <form
        autoComplete="off"
        className="login-form-element flex flex-col items-center"
        onSubmit={updateLogin}
      >
        <div className="relative">
          <HiOutlineUserCircle className=" text-darkAccentColor text-3xl absolute left-10 z-10 h-10 top-2" />
          <Field
            type="username"
            name="username"
            classname="drop-shadow-md  mb-4 bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor py-4 w-80 mx-8 pl-12"
            placeholder="Username"
            value={username}
            onChange={(newValue, name) => dispatch(actionChangeInputValue(newValue, name))}
          />
        </div>
        {error && <div className="text-[red]">Cette adresse mail a déja été utilisé</div>}
        <div className="relative">

          <MdAlternateEmail className="text-darkAccentColor text-3xl absolute left-10 z-10 h-10 top-2" />
          <Field
            type="email"
            name="emailRegister"
            classname="drop-shadow-md  mb-4 bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor py-4 w-80 mx-8 pl-12"
            placeholder="Adresse Email"
            value={emailRegister}
            onChange={(newValue, name) => dispatch(actionChangeInputValue(newValue, name))}
          />
        </div>
        <div className="relative flex-col">

          <Field
            type={isHidden ? 'password' : 'text'}
            name="passwordRegister"
            classname="drop-shadow-md  mb-4 bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor  py-4 w-80 mx-8 pl-12"
            placeholder="Mot de passe"
            value={passwordRegister}
            onChange={(newValue, name) => dispatch(actionChangeInputValue(newValue, name))}
          />
          <div className="text-darkAccentColor text-3xl pointer-events-none w-full absolute bottom-2 h-full flex justify-between items-center px-11">
            <BsKeyFill className="" />
            {isHidden ? <AiFillEye className="pointer-events-auto" onClick={() => dispatch(actionChangeIsHidden())} /> : <AiFillEyeInvisible className="pointer-events-auto" onClick={() => dispatch(actionChangeIsHidden())} />}
          </div>
        </div>
        <button
          type="submit"
          className="login-form-button h-20 w-40"
        >
          <Button type="normal" caption="S'enregistrer" />
        </button>
      </form>

    </div>
  );
}

export default Register;
