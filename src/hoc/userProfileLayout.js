import React from "react";
import adminLayout from "../hoc/adminLayout"
import "./../assets/css/profile.css"

const userProfileLayout = (ChildComponent) => {
    class UserProfilePageHoc extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {}
        }
    
        render(){
            return <>
                <div className="profile">
                                <div className="profile-content">
                                    <ChildComponent {...this.props} />
                                </div>
                            </div>
            </>
        }
    }

    return adminLayout(UserProfilePageHoc);
}


export default userProfileLayout;