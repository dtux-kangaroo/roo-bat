import React, {Component} from 'react';
import getDisplayName from '../../utils/getDisplayName'
  export default function (WrappedComponent) {
    return class WithHeader extends Component {
       static displayName = `WithHeader(${ getDisplayName(WrappedComponent)})`;
      render() {
        return (<div>
          <div className="base-header">
            我是标题--我特别美-真的
          </div>
          <WrappedComponent data={{test:25}} {...this.props}/>
        </div>
        )}
    }
  }
