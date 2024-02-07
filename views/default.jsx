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
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm p-1 mb-3">
                <a className="navbar-brand" href="/">
                <i style={{padding: '10px'}} className="fa-solid fa-utensils d-inline-block"></i>
                    Rest-Rant
                </a>
                <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="/places">Places<span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/places/new">Add Places</a>
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