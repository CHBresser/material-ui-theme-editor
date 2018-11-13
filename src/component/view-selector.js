import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import DesktopWindows from '@material-ui/icons/DesktopWindows';
import Smartphone from '@material-ui/icons/Smartphone';

const styles = () => ({
  root: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
  },
});

class ViewSelector extends React.PureComponent { 
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };
  
  handleChange = (e, value) =>
    this.props.onChange(value);

  render() {
    return (
      <ToggleButtonGroup
        exclusive
        onChange={this.handleChange}
        value={this.props.value}
      >
        <ToggleButton value="mobile">
          <Smartphone />
        </ToggleButton>
        <ToggleButton value="desktop">
          <DesktopWindows />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default withStyles(styles)(ViewSelector);
