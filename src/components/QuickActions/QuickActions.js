import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import { MdRestaurant } from 'react-icons/md';
import { useSelector } from 'react-redux';

function QuickActions() {
  const restaurants = useSelector((state) => state.restaurant.restaurants);
  return (
    <div className="QUICKACTION px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4 text-lightTextColor dark:text-darkTextColor z-0">
      {(restaurants.length > 0) && (
        <Link to="/search">
          <button className="w-full drop-shadow-md bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor py-4 px-4 flex content-between mr-8 justify-between text-left" type="button">
            <div className="pr-8">
              <p className="pb-4 text-xl font-semibold">Chercher un restaurant</p>
              <p className="text-sm">Par restaurant, nom ou tags</p>
            </div>
            <div className="flex items-center">
              <RiSearchLine className=" text-darkAccentColor text-3xl" />
            </div>
          </button>
        </Link>
      )}
      <Link to="/restaurant/add">
        <button className="w-full drop-shadow-md bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor py-4 px-4 flex content-between mr-8 justify-between text-left" type="button">
          <div className="pr-8">
            <p className="pb-4 text-xl font-semibold">Ajouter un restaurant</p>
            <p className="text-sm">Nom, adresse, image...</p>
          </div>
          <div className="flex items-center">
            <MdRestaurant className=" text-darkAccentColor text-3xl" />
          </div>
        </button>
      </Link>

      <Link to="/addmemento/quickaction">
        <button className="w-full drop-shadow-md bg-[white] dark:bg-darkBackgroundAltColor rounded-md shadow-md border-l-4 border-l-darkAccentColor py-4 px-4 flex content-between justify-between text-left" type="button">
          <div className="pr-8">
            <p className="pb-4 text-xl font-semibold">Ecrire un mémento</p>
            <p className="text-sm">Pour mon prochain passage</p>
          </div>
          <div className="flex items-center">
            <BsPencilSquare className=" text-darkAccentColor text-3xl" />
          </div>
        </button>
      </Link>
    </div>
  );
}

export default QuickActions;
