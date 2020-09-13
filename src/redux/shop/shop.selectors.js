import {
    createSelector
} from 'reselect';

const selectShop = state => {
    return state.shop;
};

export const selectCollections = createSelector(
    [selectShop],
    shop => {
        return shop.collections;
    },
);


export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => {
        return (collections ? collections[collectionUrlParam] : null);
    }
);


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => {
        return shop.isFetching;
    }
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => {
        return !!shop.collections
    }
);