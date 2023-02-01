//Підключення бібліотеки axios
const axios = require('axios').default;

export default class GalleryApiService {
  constructor() {
    this.searchQuery;
    this.page = 0;
  }

  async fetchCards() {
    this.incrementPage();
    const MAIN_WAY = 'https://pixabay.com/api/';
    const url = `${MAIN_WAY}?key=32654742-e9cf5ff441fe0e6054809dea8&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    try {
      const response = await axios.get(url);
      console.log(response.data.hits);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 0;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
