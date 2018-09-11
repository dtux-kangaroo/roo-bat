import React from 'react';
import {withFooter} from 'release/dist/roo-bat.min';
import Layout from 'layout/layout';
import './style.scss';
import 'clipboard'
@withFooter('美的很')
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name: ''
        }
     }
    render() {
        console.log(this.props,'this.props')
        return (
            <div>
                this is footer!!!
                <input id="bar" onChange={(e)=>{this.setState({value:e.target.value})}} value={this.state.value||'s'}/>

                <button className="btn" data-clipboard-action="cut" data-clipboard-target="#bar">
                    Cut to clipboard
                </button>
            </div>
        );
    }
};

