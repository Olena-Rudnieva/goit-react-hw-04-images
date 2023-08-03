const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37130379-4004eb1f0f9bfd5f433c52abe';

export const getAPI = (q, perPage, page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  });
  return fetch(`${BASE_URL}?${params}`);
};
