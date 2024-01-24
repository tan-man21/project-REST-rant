const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Oops, sorry! We can't find this page!</p>
                <img style={{width: '50%'}} src="/images/stormtrooper.jpg" alt="stormtrooper" />
                <div>
                Photo by <a href="https://unsplash.com/@danielkcheung?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniel K Cheung</a> on <a href="https://unsplash.com/photos/stormtrooper-minifigure-walking-on-the-sand-cPF2nlWcMY4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404