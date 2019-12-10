const URL_DOMAINS = {
  BASE: "https://api.punkapi.com",
  VERSION: "/v2",
  BEERS_RESOURCE: "/beers"
}

export function getBeersResourceURL(){
  return URL_DOMAINS.BASE + URL_DOMAINS.VERSION + URL_DOMAINS.BEERS_RESOURCE;
}

