import userItemStyles from './UserItem.module.css';

function UserItem(props){

    return(
            <li className={userItemStyles.div} key={props.user}>
                <p className={userItemStyles.p}>{props.user} ({props.age} years old)</p>
            </li>
    )
}

export default UserItem;