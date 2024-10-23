import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-section">
        <div className="logo">
            <p>
            YCTz
            </p>
        </div>
        <div className="links">
            <p>Home</p>
            <p>About</p>
            <p>Music</p>
            <p>Contact</p>
            
            <div className="buttons">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
