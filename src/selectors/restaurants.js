export function findRestaurant(restaurants, searchedSlug) {
  const foundRestaurant = restaurants.find((restaurant) => restaurant.slug === searchedSlug);
  return foundRestaurant;
}

export default findRestaurant;
