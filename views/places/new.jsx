const React = require('react')
const Def = require('../default')

function new_form(data) {
    let message = ''
        if(data.message){
            message = (
                <h4 className='alert alert-warning' role='alert'>
                    {data.message}
                </h4>
            )
        }

    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form style={{margin: '7px'}} action="/places" method='POST'>
                    <div className='row'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id='name' name='name' required/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="text" id='pic'
                        name='pic'
                        pattern="https?://.+" title="Include http://"
                        defaultValue={'https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
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
                    <div className='form-group'>
                        <label htmlFor="founded">Founded Year</label>
                        <input type='number' className="form-control" id='founded' name='founded' value={new Date().getFullYear()}/>
                    </div>
                    <div style={{margin: 'auto'}}>
                        <input style={{backgroundColor: '#057746', color: 'white'}} className='btn' type="submit" value="Add Place"/>
                    </div>
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form