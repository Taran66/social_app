import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

export default function Profile(){
    return(
        <div>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/posts/post3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/4.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sofia Anderson</h4>
                            <span className="profileInfoDesc">Hello My Friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>

        </div>
    )
}