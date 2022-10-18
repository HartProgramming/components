import userListStyles from './UserList.module.css';
import UserItem from './UserItem';

function UserList(props){

    return(
        <ul className={userListStyles.ul}>
            {props.items.map(datum => <UserItem key={datum.user} user={datum.user} age={datum.age} />)}
        </ul>
    )
}

export default UserList;