import * as React from 'react';
import {Component} from 'react';

export interface PanelProps {

}

class Panel extends Component<PanelProps, undefined> {

  render() {
    const panelStyle = {
      float: 'left',
      width: '50%'
    };
    const { children, ...props} = this.props;
    return (
      <div {...props} style={panelStyle}>
        {children}
      </div>
    )
  }
}

export default Panel;