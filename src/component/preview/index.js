import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';

import PreviewContainer from './container';

export default class PreviewDisplay extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
  }
  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <PreviewContainer className={this.props.className} />
      </MuiThemeProvider>
    );
  }
}
