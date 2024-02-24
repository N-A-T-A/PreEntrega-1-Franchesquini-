export const NavBar = () => {
    return (<>
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-4" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Canela</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav position-relative top-50 start-50" >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perros
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Alimentos</a></li>
                <li><a class="dropdown-item" href="#">juguetes</a></li>
                {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gatos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Alimentos</a></li>
                <li><a class="dropdown-item" href="#">juguetes</a></li>
                {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </li>
          </ul>
          <div>
            <button id="BotonCart" type="button" class="btn position-relative">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">10 <span class="visually-hidden"></span></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </button> 
          </div>
        </div>
      </div>
    </nav>    
    </div>    

    
    </>) ;
}

// export default NavBar;