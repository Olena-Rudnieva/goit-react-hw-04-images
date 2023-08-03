import PropTypes from 'prop-types';
import { LoadingButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return <LoadingButton onClick={onLoadMore}>Load more</LoadingButton>;
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
