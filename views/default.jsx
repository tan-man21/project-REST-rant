const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                {/* <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Place</a></li>
                    </ul>
                </nav>
                <!-- Image and text --> */}
                <nav style={{backgroundColor: 'cornflowerblue', color: 'white'}} className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                <i style={{padding: '10px'}} className="fa-solid fa-utensils d-inline-block"></i>
                    Rest-Rant
                </a>
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/places">Places<span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/places/new">Add Places</a>
                </li>
                </ul>
                </nav>
                {html.children}

                <script src="https://kit.fontawesome.com/d6c9559ed6.js" crossorigin="anonymous"></script>
            </body>
        </html>
    )
  }  

module.exports = Def