import CONFIG from '../../globals/config';
import {
  createRestaurantCategoriesTemplate,
  createRestaurantMenusTemplate,
  createRestaurantReviewsTemplate,
} from './restaurant-detail';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <div class="restaurant__image__info">
    <img class="restaurant__image" alt="${restaurant.name}" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
    <div class="restaurant__info">
      <h3>Informasi</h3>
        <h4>kota</h4>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
        <h4>Kategori</h4>
        <p>${createRestaurantCategoriesTemplate(restaurant.categories)}</p>
        <h4>Alamat</h4>
        <p>${restaurant.address}</p>
    </div>
  </div>
  
  <div class="restaurant__overall restaurant__desc">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__overall">
    <h3>Menu</h3>
  </div>
  <div class="restaurant__overall">
    <h3>Makanan</h3>
    <div class="restaurant__menus">
      <p>${createRestaurantMenusTemplate(restaurant.menus.foods)}</p>
    </div>
  </div>

  <div class="restaurant__overall">
    <h3>Minuman</h3>
    <div class="restaurant__menus">
      <p>${createRestaurantMenusTemplate(restaurant.menus.drinks)}</p>
    </div>
  </div>

  <div class="restaurant__overall">
    <h3>Review</h3>
  </div>
  <div class="review_overall">
    <div class="customer__review">
    ${createRestaurantReviewsTemplate(restaurant.customerReviews)}
    </div>
  </div>
  
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item" tabindex="0">
    <div class="title__item">
      <h2><a class="name" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>    
      <img class="lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Suasana di ${restaurant.name}">
    </div>
    <div class="detail__item">
      <h3 class="city">Kota ${restaurant.city}</h3>
      <h4 class="rating green">Rating: <span>${restaurant.rating}</span></h4>
      <p class="desc">${restaurant.description}</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantSearchingTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">
        </div>
        <div class="restaurant-item__content">
          <h3 class="restaurant__name searching"></a></h3>
          <p class="searching"></p>
        </div>
      </div>`;
  }
  return template;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantSearchingTemplate,
};
