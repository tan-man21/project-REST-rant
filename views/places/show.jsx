const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
            <div className="row">
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <img style={{width: '100%'}} src={data.place.pic} alt={data.place.name} />
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div style={{border: 'none'}} className="card">
                <div className="card-body">
                    <h1 style={{color: 'cornflowerblue'}} className="card-title">{data.place.name}</h1>
                    <h3 className="card-title">Rating</h3>
                    <p className='card-text'>Not Yet Rated</p>
                    <h3 className='card-title'>Description</h3>
                    <p className='card-text'>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                </div>
                </div>
            </div>
            </div>
            <div class="card">
            <div class="card-header">
                Read about us below!
            </div>
            <div class="card-body">
                <h3 class="card-title">Comments</h3>
                <p class="card-text">No Comments Yet!</p>
            </div>
            </div>
            </main>
        </Def>
    )
}

module.exports = show