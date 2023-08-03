import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { getAPI } from '../../services/api-service';
import { Loading } from '../Loader/Loader';
import { AppStyle } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    perPage: 12,
    page: 1,
    loading: false,
    loadMore: true,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, perPage } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      if (prevState.query !== query) {
        this.setState({ loading: true, page: 1, photos: [] });
      }

      getAPI(query, perPage, page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Please try again!'));
        })
        .then(data => {
          if (data.hits.length === 0) {
            toast.error(
              'Sorry, there are no images matching your search query.'
            );
          }

          if (data.totalHits < perPage || page * perPage > data.totalHits) {
            this.setState({ loadMore: false });
          }

          this.setState(prevState => ({
            photos: [...prevState.photos, ...data.hits],
          }));
        })
        .catch(error => {
          this.setState({ error });
          console.log(error.message);
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleSearch = query => {
    this.setState({ query });
  };

  handleBtnLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { error, loading, photos, loadMore } = this.state;
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <h1>Please try again!</h1>}
        {loading && <Loading />}
        {photos.length > 0 && (
          <ImageGallery
            photos={photos}
            onLoadMore={this.handleBtnLoadMore}
            loadMoreBtn={loadMore}
          />
        )}
        <ToastContainer />
      </AppStyle>
    );
  }
}
