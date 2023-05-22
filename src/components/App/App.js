import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionDisconnect, putTokenInState, storeUserFromLS } from '../../actions/user';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';
import QuickActions from '../QuickActions/QuickActions';
import Restaurant from '../Restaurant/Restaurant';
import Meal from '../Meal/Meal';
import LandingPage from '../LandingPage/LandingPage';
import Search from '../Search/Search';
import EditPage from '../EditPage/EditPage';
import Profile from '../Header/Profile/Profile';
import FormMemento from '../Restaurant/Mementos/FormMemento/FormMemento';
import NotFound from '../NotFound/NotFound';

function App() {
  const hasToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  let location = useLocation();
  const dark = useSelector((state) => state.user.dark);
  const fetchingAllRestaurants = useSelector((state) => state.restaurant.fetchingAllRestaurants);
  const fetchingOneRestaurant = useSelector((state) => state.restaurant.fetchingOneRestaurant);

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    }
    catch (e) {
      return null;
    }
  };
  // Disconnect user on url change or App load or get restaurants
  location = location.pathname;
  useEffect(() => {
    if (hasToken) {
      const decodedJwt = parseJwt(hasToken);
      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch(actionDisconnect());
      }
    }
  }, [location, App, fetchingAllRestaurants, fetchingOneRestaurant]);

  useEffect(() => {
    // dispatch(putTokenInState());
    dispatch(storeUserFromLS());
  }, []);

  return (
    <div className={`${dark ? 'dark' : ''} `}>
      <div className="bg-[#fff] dark:bg-[#1E1E1E] ">
        <div className="APP bg-lightBackgroundColor dark:bg-darkBackgroundColor flex flex-col h-[100vh] w-[100vw] overflow-hidden lg:w-[60rem] m-auto shadow-[0px_0px_15px_5px_rgba(0,0,0,0.3)]">

          <Routes>
            <Route
              path="/profil"
              element={(

            !hasToken
              ? (<LandingPage />)
              : (
                <>
                  <Header />
                  <Profile />
                </>
              )
              )}
            />

            <Route
              path="/"
              element={(
            !hasToken
              ? (
                <LandingPage />
              )
              : (
                <div className="h-full flex flex-col">
                  <Header />
                  <div className="overflow-auto">
                    <p className="mx-8 text-2xl text-lightTextColor dark:text-darkTextColor py-4">Actions rapides</p>
                    <QuickActions />
                    <p className="mx-8 text-2xl text-lightTextColor dark:text-darkTextColor pt-4">Restaurants favoris</p>
                    <div className="mx-4">
                      <CardList type="restaurant" />
                    </div>
                  </div>
                </div>
              )
          )}
            />

            <Route
              path="/search"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header className="w-full" />
                <Search />
              </>
            )
          )}
            />

            <Route
              path="/addmemento/:source"
              element={(
            !hasToken
              ? (<LandingPage />)
              : (
                <>
                  <Header className="w-full" />
                  <FormMemento />
                </>
              )
        )}
            />

            <Route
              path="/editmemento/:idmemento"
              element={(
            !hasToken
              ? (<LandingPage />)
              : (
                <>
                  <Header className="w-full" />
                  <FormMemento />
                </>
              )
        )}
            />

            <Route
              path="/restaurant/:restaurantSlug"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header />
                <Restaurant />
              </>
            )
      )}
            />

            <Route
              path="/restaurant/:restaurantSlug/meal/:mealSlug"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header />
                <Meal type="meal" />
              </>
            )
      )}
            />

            <Route
              path="/restaurant/:restaurantSlug/meal/:mealSlug/edit"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header />
                <EditPage type="meal" addOrEdit="edit" />
              </>
            )
        )}
            />

            <Route
              path="/restaurant/:restaurantSlug/edit"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header />
                <EditPage type="restaurant" addOrEdit="edit" />
              </>
            )
        )}
            />

            <Route
              path="/restaurant/add"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header />
                <EditPage type="restaurant" addOrEdit="add" />
              </>
            )
        )}
            />

            <Route
              path="/meal/add/:idrestaurant"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header />
                <EditPage type="meal" addOrEdit="add" />
              </>
            )
        )}
            />

            <Route
              path="/*"
              element={(
          !hasToken
            ? (<LandingPage />)
            : (
              <>
                <Header className="absolute" />
                <NotFound />
              </>
            )
        )}
            />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
