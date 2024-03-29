const React = require('react')
const Def = require('../default')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form style={{margin: '7px', paddingBottom: '8px'}} action={`/places/${data.place._id}?_method=PUT`} method='POST'>
                    <div className='row'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id='name' name='name' defaultValue={data.place.name} required/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id='pic'
                        name='pic' defaultValue={data.place.pic}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' type="text" id='city'
                        name='city' defaultValue={data.place.city}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' type="text" id='state'
                        name='state' defaultValue={data.place.state}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" id='cuisines'
                        name='cuisines'required defaultValue={data.place.cuisines}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="founded">Founded Year</label>
                        <input type='number' className="form-control" id='founded' name='founded' value={data.place.founded}/>
                    </div>
                    </div>
                    <div style={{margin: 'auto'}} className='form-group col-sm-6'>
                        <input style={{backgroundColor: '#057746', color: 'white'}} className='btn' type="submit" value="Update Place"/>
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form