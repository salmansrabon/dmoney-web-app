import React from "react";
import adminLayout from "../hoc/adminLayout"

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <div className="dashboard">
              <h1>Hello World</h1>
            </div>
        </>
    }
}

export default adminLayout(DashboardPage);