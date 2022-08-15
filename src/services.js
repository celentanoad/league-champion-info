export const baseURLAll = 'https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=100';
export const baseURLOne = 'https://league-of-legends-champions.p.rapidapi.com/champions/en-us/';

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
    'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
  }
};