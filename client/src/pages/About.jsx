import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function About() {
    const [ID, setID] = useState('');
    const [data, setdata] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('userTokenID')) {
            setID(Cookies.get('userTokenID'));
        } else {
            navigate('/login');
        }
    }, [navigate]);


    const fetchData = async () => {
        const URI = `http://localhost:5500/api/user/getData?id=${ID}`;
        const response = await axios.get(URI);
        const result = response.data;
        setdata(result);
    }
    useEffect(() => {
        fetchData();
    });

    return (
        <div className="about">
            <div className="info">
                <table>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td>First Name</td>
                        {/* <td>{data.user.fname}</td> */}
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>Last Name</td>
                        {/* <td>{data.user.lname}</td> */}
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td>Email Address</td>
                        {/* <td>{data.user.email}</td> */}
                    </tr>
                </table>
            </div>
            <div className="links">
                <Link to='/edit' className='aboutLink'>Edit profile</Link>
                <Link to='/changePassword' className='aboutLink'>Change Password</Link>
            </div>
        </div>
    )
}