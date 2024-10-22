const {NEXT_PUBLIC_API_HOST} = process.env;

export function query(url: string) {
    return fetch(`${NEXT_PUBLIC_API_HOST}/api/${url}`).then(res => res.json());
}

export  function getFeaturedProducts() { 
    return query("products?filters[isFeatured][$eq]=true&populate=*").then((res) => {
        console.log(res);
        return res;
    });
}

export function getCategories() {
    return query("categories").then((res) => {
        console.log(res);
        return res;
    });
}

