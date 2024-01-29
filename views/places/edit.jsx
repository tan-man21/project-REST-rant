const React = require('react')
const Def = require('../default')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form style={{margin: '7px'}} action={`/places/${data.id}?_method=PUT`} method='POST'>
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
                    <div style={{margin: 'auto'}}>
                        <input className='btn btn-primary' type="submit" value="Done"/>
                    </div>
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form