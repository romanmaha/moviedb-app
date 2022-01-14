import BaseAPI from './index';

class MovieService extends BaseAPI {
  async getPopular(page) {
    return await this.makeRequest(`/movie/popular`, 'get', { params: { page } });
  }
  async getPopularSerials(page) {
    return await this.makeRequest(`/tv/popular`, 'get', { params: { page } });
  }
  async getTopRatedSerials(page) {
    return await this.makeRequest(`/tv/top_rated`, 'get', { params: { page } });
  }
  async getLatestSerials(page) {
    return await this.makeRequest(`/tv/latest`, 'get', { params: { page } });
  }
  async getTopRatedMovies(page) {
    return await this.makeRequest(`/movie/top_rated`, 'get', { params: { page } });
  }
  async getNowPlayingMovies(page) {
    return await this.makeRequest(`/movie/now_playing`, 'get', { params: { page } });
  }
  async getWeeksTrendingMovies(page) {
    return await this.makeRequest(`/trending/all/week`, 'get', { params: { page } });
  }
  async getMovieDetailsById(id) {
    return await this.makeRequest(`/movie/${id}`, 'get');
  }
  async getSerialDetailsById(id) {
    return await this.makeRequest(`/tv/${id}`, 'get');
  }
  async getMovieActorsById(id) {
    return await this.makeRequest(`/movie/${id}/credits`, 'get');
  }
  async getSerialsActorsById(id) {
    return await this.makeRequest(`/tv/${id}/credits`, 'get');
  }
  async getAllActors(page) {
    return await this.makeRequest(`/person/popular`, 'get', { params: { page } });
  }
  async getActorDetaileById(id) {
    return await this.makeRequest(`/person/${id}`, 'get');
  }
  async getOtherMoviesByActorId(id) {
    return await this.makeRequest(`/person/${id}/movie_credits`, 'get');
  }
  async searchMovie(query) {
    return await this.makeRequest(`search/movie`, 'get', { params: { query, page: 1 } });
  }
  async searchSerial(query) {
    return await this.makeRequest(`search/tv`, 'get', { params: { query, page: 1 } });
  }
  async searchActors(query) {
    return await this.makeRequest(`search/person`, 'get', { params: { query, page: 1 } });
  }
}

export default new MovieService();
