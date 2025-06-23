import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvW2hXRB8wUVWigRgT7FfnSrl23KZcYO_TXg&s0" alt="" />
                        <label htmlFor="fileInput">
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                            <input type="file" id="fileInput" style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='NAME' />
                    <label>Email</label>
                    <input type="text" placeholder='ABC@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
