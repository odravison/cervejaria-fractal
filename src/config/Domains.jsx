const URL_DOMAINS = {
  BASE: "https://api.punkapi.com",
  VERSION: "/v2",
  BEERS_RESOURCE: "/beers"
}

export function getBeersResourceURL(){
  return URL_DOMAINS.BASE + URL_DOMAINS.VERSION + URL_DOMAINS.BEERS_RESOURCE;
}

export function getPageableString({ page, per_page }){
  return `?page=${page}&per_page=${per_page}`;
}

export function getPagebleBeersResourceURL({ page, per_page }){
  return `${getBeersResourceURL()}${getPageableString({page, per_page})}`;
}

export function getBeerByIdResourceURL({ id }) {
  return `${getBeersResourceURL()}/${id}`;
}