import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SeachbarHead,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.warn('What are you looking for?');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SeachbarHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch style={{ width: 20, height: 20 }} />
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </SeachbarHead>
  );
};

// export class Searchbar extends Component {
//   state = { query: '' };

//   handleChange = event => {
//     this.setState({ query: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { query } = this.state;

//     if (query.trim() === '') {
//       toast.warn('What are you looking for?');
//       return;
//     }
//     this.props.onSubmit(query);
//     this.setState({ query: '' });
//   };

//   render() {
//     const { query } = this.state;
//     return (
//       <SeachbarHead>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit">
//             <ImSearch style={{ width: 20, height: 20 }} />
//           </SearchFormButton>

//           <SearchFormInput
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={query}
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </SeachbarHead>
//     );
//   }
// }
