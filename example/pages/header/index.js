import React from 'react';
import {withHeader} from 'release/dist/roo-bat.min';
import Layout from 'layout/layout';
import './style.scss';
@withHeader
export default class Footer extends React.Component {

    render() {
        console.log(this.props,'this.props')
        return (
            <div>
                this is footer!!!
            </div>
        );
    }
};

