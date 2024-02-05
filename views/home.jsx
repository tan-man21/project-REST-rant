const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img className="rounded mx-auto d-block" style={{width: '45%'}} src="/images/fruits-veggies.jpg" alt="Fruits and Veggies" />
                    <div style={{color: 'black'}} className='text-center'>
                    Photo by <a href="https://unsplash.com/@ellaolsson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ella Olsson</a> on <a href="https://unsplash.com/photos/assorted-fruits-and-vegetable-on-brown-wooden-chopping-board-2IxTgsgFi-s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <br />
                <div className='text-center'>
                <a href="/places">
                    <button style={{marginBottom: '10px', backgroundColor: '#057746', color: 'white'}} className='btn'>Places Page</button>
                </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home