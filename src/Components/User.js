import React from 'react';
import userData from '../userData.js';
import { useEffect, useState } from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faUserSlash } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/alex.jpg';



const User = () => {
    const [users, setUsers] = useState([]);
    const [userCount, setUserCount] = useState([0]);

    const addUser = () => {
        if(userCount >= 0){
            setUserCount(parseInt(userCount) + 1);
        }
    }
    const removeUser = () => {
        if(userCount > 0){
            setUserCount(userCount - 1);
        }
    }

    useEffect(() => {
        setUsers(userData);
    }, [])
    return (
        <div className="user-container">
            <div className="users">
                {
                    users.map(user =>
                        <div className="user">
                            <div className="profile">
                            <img src={image1}></img>
                            </div>
                            <h1>{user.name}</h1>
                            <div className="buttons">
                            <button id="add" className="add-btn"
                            onClick={() => addUser()}
                            ><FontAwesomeIcon icon={faUserPlus} /> Add Me</button>
                            <button className="remove-btn"
                            onClick={() => removeUser()}
                            ><FontAwesomeIcon icon={faUserSlash} /> Remove Me</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="preview">
                <h1 className="count">Total Friends Added</h1>
                <h2>{userCount}</h2>
            </div>

        </div>
    );
};

export default User;