import PropTypes from 'prop-types';
import { SearchForm, SearchInput } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <SearchForm>
      <p>Find contacts by name</p>
      <SearchInput
        name="search"
        type="text"
        onChange={evt => onChange(evt.currentTarget.value)}
      />
    </SearchForm>
  );
};
Filter.propTypes = { onChange: PropTypes.func.isRequired };
