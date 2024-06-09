import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {
    const {toggleSidebar} = useGlobalContext();
  return (
    <nav>
        <div className="nav-center">
            <h3 className="logo">Strapi</h3>
            <button className="toggle-btn" onClick={toggleSidebar}>
                <FaBars/>
            </button>
            {/* nav links later */}
        </div>
    </nav>
  )
}
export default Navbar