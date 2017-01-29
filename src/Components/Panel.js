import React, {Component} from 'react';

class Panel extends Component {

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