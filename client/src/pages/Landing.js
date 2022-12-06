import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components/index'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className = "container page">
                <div>
                    <h1> Job <span>Tracking</span> App</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. </p>
                    <Link to="/register" className = "btn btn-hero">
                        Login/Register 
                    </Link>
                </div>
                <img src = {main} alt = "job search" className = "img main-img" ></img>
            </div>
        </Wrapper>
    )
}

export default Landing