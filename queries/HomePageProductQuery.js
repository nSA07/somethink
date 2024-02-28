export const HomePageProductQuery = `
    query HomepageProducts {
        beers {
            id,
            slug,
            nameBeer,
            brewery {
                brewery_id {
                    brewery_name,
                    slug
                }
            },
            beerImg {
                id
            },
            beerPrice,
            beerAbv,
            beerVolume,
            beerCurrency,
            beerTegs,
            hops,
            origin,
            type_of_beer,
            description
        }
    }
`
export const HomepageCategoriesQuery = `
    query HomepageCategories {
        brewery {
            id,
            brewery_name,
            slug
        }
    }
`

export const SingleProductQuery = `
    query SingleProduct($product_slug: String) {
        beers(filter: {slug: {_eq: $product_slug}}) {
            id,
            slug,
            nameBeer,
            brewery {
                brewery_id {
                    brewery_name,
                    slug
                }
            },
            beerImg {
                id
            },
            beerPrice,
            beerAbv,
            beerVolume,
            beerCurrency,
            beerTegs,
            hops,
            origin,
            type_of_beer,
            description
        }
    }
`

export const HomepageFilteredProductsQuery = `
    query HomepageProducts($brewerys:  [String]) {
        beers(filter: {brewery: {brewery_id: {slug: {_in: $brewerys}}}}) {
            id,
            slug,
            nameBeer,
            brewery {
                brewery_id {
                    brewery_name,
                    slug
                }
            },
            beerImg {
                id
            },
            beerPrice,
            beerAbv,
            beerVolume,
            beerCurrency,
            beerTegs,
            hops,
            origin,
            type_of_beer,
            description
        }
    }
`