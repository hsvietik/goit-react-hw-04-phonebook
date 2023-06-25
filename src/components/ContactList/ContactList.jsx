import PropTypes from 'prop-types';
import {
  List,
  Item,
  ContactName,
  DeleteButton,
  DeleteIcon,
} from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactName>
              {name}: {number}
            </ContactName>
            <DeleteButton type="button" onClick={() => deleteContact(id)}>
              <DeleteIcon />
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
