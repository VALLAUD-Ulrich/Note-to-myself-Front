import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import { actionToggleBulletLogin, actionChangeBulletTab } from '../../../actions/user';

function Bullet() {
  const dispatch = useDispatch();
  const bulletPoint = useSelector((state) => state.user.bulletPoint);
  return (
    <div className="p-8 flex flex-col justify-between items-center absolute bottom-0 text-center">
      <div className="dark:text-darkTextColor text-lightTextColor pb-12">
        {(bulletPoint === 1)
        && <p className="">Note To Myself permet de se laisser des notes personnelles sur un plat ou sur un restaurant</p>}

        {(bulletPoint === 2)
        && <p className="">Une note par moi et pour moi afin de m’aider à mieux choisir lors de mon prochain passage</p>}

        {(bulletPoint === 3)
          && <p className="">Une notification des mémentos que je me suis laissé quand je rentre dans un restaurant</p>}
      </div>

      <Link
        onClick={() => {
          dispatch(actionToggleBulletLogin());
        }}
        className="mb-8 text-darkTextColor"
      >
        <Button type="normal" caption="Se connecter" classes="text-lightTextColor dark:text-darkTextColor" />
      </Link>

      <div className="w-full flex justify-center ">
        <Link
          to="#"
          onClick={() => {
            dispatch(actionChangeBulletTab(1));
          }}
          className={`w-12 h-2 rounded-lg mr-4 ${bulletPoint === 1 ? 'bg-lightAccentColor dark:bg-darkAccentColor' : 'bg-darkBackgroundColor dark:bg-lightBackgroundColor'}`}
        />
        <Link
          to="#"
          onClick={() => {
            dispatch(actionChangeBulletTab(2));
          }}
          className={`w-12 h-2 rounded-lg mr-4 ${bulletPoint === 2 ? 'bg-lightAccentColor dark:bg-darkAccentColor' : 'bg-darkBackgroundColor dark:bg-lightBackgroundColor'}`}
        />
        <Link
          to="#"
          onClick={() => {
            dispatch(actionChangeBulletTab(3));
          }}
          className={`w-12 h-2 rounded-lg mr-4 ${bulletPoint === 3 ? 'bg-lightAccentColor dark:bg-darkAccentColor' : 'bg-darkBackgroundColor dark:bg-lightBackgroundColor'}`}
        />
      </div>

    </div>
  );
}

export default Bullet;
