export const baseURL = 'https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10';

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
    'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
  }
};