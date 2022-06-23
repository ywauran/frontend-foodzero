import FavoriteRestaurantIdb from '../../data/favorite-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/view-search-favorite';
import FavoriteRestaurantShowPresenter from './liked-restaurants/show-favorite';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/search-favorite';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
