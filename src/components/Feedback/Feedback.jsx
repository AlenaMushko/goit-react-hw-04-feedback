import PropTypes from 'prop-types';
import {List, Button, Item} from './Feedback.styled'

export const Feedback = ({ options, onLeaveFeedback}) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item key={option}>
            <Button  type="button" name={option}
             onClick={() => {
            onLeaveFeedback(option);
          }}
            >
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

Feedback.propType = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.number.isRequired,
    })).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}