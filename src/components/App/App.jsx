import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { getAPI } from '../../services/api-service';
import { Loading } from '../Loader/Loader';
import { AppStyle } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') return;

    getAPI(query, page)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Please try again!'));
      })
      .then(data => {
        if (data.hits.length === 0) {
          toast.error('Sorry, there are no images matching your search query.');
        }

        if (data.totalHits < 12 || page * 12 > data.totalHits) {
          setLoadMore(false);
        }

        setPhotos(prevState => [...prevState, ...data.hits]);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setLoading(true);
    setError(null);
  };

  const handleBtnLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <AppStyle>
      <Searchbar onSubmit={handleSearch} />
      {error && <h1>Please try again!</h1>}
      {loading && <Loading />}
      {photos.length > 0 && (
        <ImageGallery
          photos={photos}
          onLoadMore={handleBtnLoadMore}
          loadMoreBtn={loadMore}
        />
      )}
      <ToastContainer />
    </AppStyle>
  );
};
