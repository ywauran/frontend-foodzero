const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('.content__heading');
    I.wait(5);
    I.see('No restaurant', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('No restaurant', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('h2 a'); 
  const firstRestaurant = locate('h2 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.wait(5);
  I.seeElement('h2 a');
  const likedRestaurantName = await I.grabTextFrom('h2 a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantName);
  // … kita akan mengisi uji coba berikutnya …
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('No restaurant', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('h2 a');
  I.click(locate('h2 a').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.wait(5);
  I.seeElement('h2 a');
  I.click(locate('h2 a').first());
  I.wait(5);
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');
  I.amOnPage('/#/like');
  I.wait(5);
  I.see('No restaurant', '.restaurant-item__not__found');
});

Scenario('go to page about us', ({ I }) => {
  I.seeElement('.nav__list');
  I.wait(5);
  I.see('ABOUT US', '.nav__item');
  I.click(locate('.nav__item').last());
  I.wait(5);
  I.amOnPage('https://github.com/ywauran');
});