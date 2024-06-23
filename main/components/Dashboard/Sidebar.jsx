import './Sidebar.css';
import logo from '../Images/logo.jpg'


const Sidebar = () => {
    return (
        <div className='sidenav'>
            
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li>
                    <a href='/Dashboard'>Home</a>
                </li>
                <li>
                    <a href='/'>Activities</a>
                </li>
                <li>
                    <a href='/'>Submissions</a>
                </li>
                <li>
                    <a href='/'>Event</a>
                </li>
                <li>
                    <a href='/'>Calendar</a>
                </li>
                <li>
                    <a href='/'>Profile</a>
                </li>
                <li>
                    <a href='/'>Messages</a>
                </li>
                <li>
                    <a href='/'>Settings</a>
                </li>
            </ul>
            </div>
    )
}

export default Sidebar