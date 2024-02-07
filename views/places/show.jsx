const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>No Comments Yet!</h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not Yet Rated
        </h3>
    )
    if(data.place.comments.length){
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++){
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} Stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className='border' style={{paddingBottom: '8px'}}>
                    <h3 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</h3>
                    <p>{c.content}</p>
                    <h5>
                        <strong style={{color: '#057746'}}>- {c.author}</strong>
                    </h5>
                    <h6>Rating: {c.stars}</h6>
                    <form action={`/places/${data.place._id}/comment/${c._id}?_method=DELETE`} method='POST'>
                        <input type="submit" className='btn' value='Delete Comment' style={{color: '#dc3545', borderColor: '#dc3545'}}/>
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
            <div className="row">
            <div className="col-sm-6">
                <div className="card bg-light m-3">
                <div className="card-body">
                    <img style={{width: '100%'}} src={data.place.pic} alt={data.place.name} />
                    <p>Located in {data.place.city}, {data.place.state}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card bg-light m-3">
                <div className="card-body">
                    <h1 className="card-title place-name">{data.place.name}</h1>
                    <h3 className="card-title">Rating</h3>
                    <p className='card-text show'>{rating}</p>
                    <h3 className='card-title'>Description</h3>
                    <p className='card-text show'>Serving {data.place.cuisines}</p>
                    <p className='card-text show'>{data.place.showEstablished()}</p>
                <a href={`/places/${data.place._id}/edit`} className='btn btn-warning' style={{marginBottom: '30px', marginTop: '10px'}}>Edit</a>
                <form action={`/places/${data.place._id}?_method=DELETE`} method='POST'>
                    <button type='submit' className='btn btn-danger' href>Delete</button>
                </form>
                </div>
                </div>
            </div>
            </div>
            <div className="card bg-light m-3">
            <div className="card-header">
                Read about us below!
            </div>
            <div className="card-body">
                <h3 className="card-title">Comments</h3>
                <p className="card-text show">{comments}</p>
            </div>
            </div>
            <div>
            <h1>Drop a Comment!</h1>
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                <div className='row'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="author">Author</label>
                        <input className='form-control' id='author' name='author'/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="content">Content</label>
                        <input className='form-control' type='textarea' id='content' name='content' required/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="stars">Star Rating</label>
                        <input className='form-control' type='number' id='stars' name='stars' min={0.5} max={5.0} step={0.5} required/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="rant">Rant?</label>
                        <input className='form-control' type='checkbox' id='rant' name='rant'/>
                    </div>
                    <div style={{margin: 'auto'}}>
                        <input style={{backgroundColor: '#057746', color: 'white', marginBottom: '10px'}} className='btn' type="submit" value="Add Comment"/>
                    </div>
                </div>
                </form>
            </div>
            </main>
        </Def>
    )
}

module.exports = show