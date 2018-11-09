import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    display: 'block',
    textAlign: 'center',
    padding: theme.spacing.unit,
    paddingBottom: 0,
  },
  image: {
    maxWidth: 100,
  },
});

class LogoButton extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  render() {
    return (
      <a
        className={this.props.classes.root}
        href="https://www.inyoursaas.io/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="In Your Saas Logo"
          className={this.props.classes.image}
          src="logo.png"
        />
      </a>
    );
  }
}

export default withStyles(styles)(LogoButton);
