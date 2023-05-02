import React from 'react';

class Customer extends React.Component {
    render() {
        return (
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.allmoney}</p>
            <p>{this.props.todaymoney}</p>
            <p>{this.props.nowmoney}</p>
        </div>
        )
    }
}

export default Customer;
