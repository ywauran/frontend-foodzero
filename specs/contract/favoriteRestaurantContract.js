const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
    it('Should return the restaurant that has been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });

        expect(await favoriteRestaurant.getRestaurant(1))
            .toEqual({ id: 1 });
        expect(await favoriteRestaurant.getRestaurant(2))
            .toEqual({ id: 2 });
        expect(await favoriteRestaurant.getRestaurant(3))
            .toEqual(undefined);
    });

    it('Should refuse a restaurant from being added if it does not have the correct property', async () => {
        favoriteRestaurant.putRestaurant({ aProperty: 'property' });

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([]);
    });

    it('Can return all of the restaurants that have been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 1 },
                { id: 2 },
            ]);
    });

    it('Should remove favorite restaurant', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });
        favoriteRestaurant.putRestaurant({ id: 3 });
        
        await favoriteRestaurant.deleteRestauran(1);

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 2 },
                { id: 3 },
            ]);
    });

    it('Should handle request to remove a restaurant even though the restaurant has not been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });
        favoriteRestaurant.putRestaurant({ id: 3 });

        await favoriteRestaurant.deleteRestaurant(4);

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]);
    });

    it('Should be able to search for restaurants', async () => {
        favoriteRestaurant.putRestaurant({ id: 1, name: 'Restaurant a' });
        favoriteRestaurant.putRestaurant({ id: 2, name: 'Restaurant b' });
        favoriteRestaurant.putRestaurant({ id: 3, name: 'Restaurant abc' });
        favoriteRestaurant.putRestaurant({ id: 4, name: 'ini mah Restaurant abcd' });

        expect(await favoriteRestaurant.searchRestaurants('RM a'))
            .toEqual([
                { id: 1, name: 'Restaurant a' },
                { id: 3, name: 'Restaurant abc' },
                { id: 4, name: 'ini mah Restaurant abcd' },
            ]);
    });
};


// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };