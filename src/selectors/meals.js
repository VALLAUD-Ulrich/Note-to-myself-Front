export function findMeal(restaurants, restaurantSlug, mealSlug) {
  const restaurantMeals = restaurants.find((restaurant) => restaurant.slug === restaurantSlug).meals;
  const meal = restaurantMeals.find((restaurantMeal) => restaurantMeal.slug === mealSlug);
  return meal;
}

export default findMeal;
