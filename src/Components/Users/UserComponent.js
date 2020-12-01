import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {user} = this.props;

        return (
            <div>
                <h3>{user.name} - {user.age} - {user.status.toString()} : {user.address.city} - {user.address.country} -
                    {user.address.street} - {user.address.houseNumber} </h3>
            </div>
        );
    }
}

export default UserComponent;