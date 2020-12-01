import React, {Component} from 'react';

class UserWithAddressComponent extends Component {
    render() {
        let {user} = this.props;

        return (
            <div>
                <h3>{user.name} - {user.age} - {user.status.toString()} : {user.address.city} - {user.address.street} {user.address.number}</h3>
            </div>
        );
    }
}

export default UserWithAddressComponent;