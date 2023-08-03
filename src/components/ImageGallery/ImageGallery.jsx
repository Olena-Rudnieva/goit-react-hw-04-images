import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { Button } from '../Button/Button';

export const ImageGallery = ({ photos, onLoadMore, loadMoreBtn }) => {
  return (
    <>
      <Gallery>
        {photos.map(photo => {
          return (
            <ImageGalleryItem
              key={photo.id}
              smallPicture={photo.webformatURL}
              bigPicture={photo.largeImageURL}
            />
          );
        })}
      </Gallery>
      {loadMoreBtn && <Button onLoadMore={onLoadMore} />}
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  loadMoreBtn: PropTypes.bool.isRequired,
};
