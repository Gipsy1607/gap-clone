import useNavigate from 'react-router-dom'

function Navbar (){
    
    const router =useNavigate();

    function routerToLogin (){
        router("/login");
    }

    return(
        <div>
            <button onclick={routerToLogin} id='Navbar'>Login</button>
        </div>
    )
}

