import React, {Component} from 'react';
import getDisplayName from '../../utils/getDisplayName'

export default function(msg){
return function withFooter(WrappedComponent) {
    return class WithFooter extends Component {
       static displayName = `WithHeader(${getDisplayName(WrappedComponent)})`;
      render() {
        return (<div>
          <div className="base-header">
            我的底部--长的非常好看 {msg||''}
          </div>
          <WrappedComponent data={{test:25}} {...this.props}/>
        </div>
        )}
    }
  }
}
