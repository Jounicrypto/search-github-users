import React, { useState } from 'react'
import DisplayTable from './DisplayTable';



const Profile = () =>{
    const [data, setData]= useState({});
    const [username, setUsername] = useState('');
    const [repositories, setRepositories ] = useState([])

    const onChangeHandler = e =>{
        setUsername(e.target.value);
    }
    const submitHandler = async e =>{
        e.preventDefault();
        const profile = await fetch ('https://api.github.com/users/user');
        const profileJson = await profile.json()
        // console.log(profileJson)
        const repositories = await fetch (profileJson.repos_url)
        const repoJson = await repositories.json();
        // console.log(repoJson)
        if(profileJson ){
            setData(profileJson)
            setRepositories(repoJson)
        }

    }
    return (
        <>
        <div style={{ padding:20 }}>
            <div className="ui search">
                <div className="ui icon input">
                    <i className="search icon"></i>
                    <input className='prompt'
                    type="text" value={username}
                    onChange={onChangeHandler}
                    placeholder='Github Username'/>
                </div>
            </div>
                <button className='ui primary button' type="submit" onClick={submitHandler}>
                <i className='github icon'>Search</i>
                </button>
                <DisplayTable data={data} repositories={repositories}/>
        </div>
        </>
    )
}

export default Profile;




