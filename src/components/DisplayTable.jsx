import React from 'react'



function DisplayTable(data, repositories) {
  return (
    <div>
        <table className='ui celled table'>
  <thead>
    <tr><th>Name</th>
    <th>Avatar</th>
    <th>Location</th>
    <th>Bio</th>
    <th>repositories</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>{data.name}</td>
      <td>{!data.avatar_url ? " " :(
          <img className='ui small circular image'
          src={data.avatar_url}
          alt={data.avatar_url}/>
      )}</td>
        <td>{data.location}</td>
        <td>{data.bio}</td>
        <td>{repositories.map(repo =>(
            <div className='ui relaxed divided list' key={repo.name}>
                <div className="item">
                <i className='large github middle aligned icon'>

                </i>
                <div className='content'>
                    <a href={repo.html_url} className='header'>
                        {repo.name}
                    </a>
                </div>
                </div>

            </div>
        ))}</td>
    </tr>
  </tbody>
        </table>

    </div>
  )
}
export default DisplayTable

