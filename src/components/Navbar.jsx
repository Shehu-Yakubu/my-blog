import { Link } from 'reac-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Shehu Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;