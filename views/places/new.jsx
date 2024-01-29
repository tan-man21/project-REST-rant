const React = require('react')
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form style={{margin: '7px'}} action="/places" method='POST'>
                    <div className='row'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id='name' name='name' required/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id='pic'
                        name='pic'/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' type="text" id='city'
                        name='city'/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' type="text" id='state'
                        name='state'/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" id='cuisines'
                        name='cuisines'required/>
                    </div>
                    <div style={{margin: 'auto'}}>
                        <input className='btn btn-primary' type="submit" value="Add Place"/>
                    </div>
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form