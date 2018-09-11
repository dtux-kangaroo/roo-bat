import React, {Component} from 'react';
import getDisplayName from '../../utils/getDisplayName'
export default function (loading){
    return function(WrappedComponent){
        return class extends WrappedComponent{
            componentWillUpdate(nextProps, nextState) {
                console.log('withLoading将会更新');
              }
              componentDidMount(){
                console.log('djj');
            }
            static displayName = `WithLoad(${ getDisplayName(WrappedComponent)})`;
              render(){
                  return (
                     <div>
                        {loading?<span>...</span>:<div>{super.render()}</div>}
                     </div>
                  )
              }
        }
    }
}
