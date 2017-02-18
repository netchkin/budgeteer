import * as React from 'react';
import {Component} from 'react';

export interface AppBarProps {

}

class AppBar extends Component<AppBarProps, undefined> {
  render() {
    const { children, ...props } = this.props;
    return (
      <div {...props}>
        {children}
      </div>
    )
  }
}

export default AppBar;