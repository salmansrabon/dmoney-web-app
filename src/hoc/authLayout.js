import React from "react";
const authLayout = (ChildComponent) => {
    class AuthLayout extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {};
        }

        render(){
            return <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <img alt="hey" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"/>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-6 offset-xl-1">
                            <ChildComponent {...this.props} />
                        </div>
                    </div>
                </div>
            </section>
        </>
        }
    }

    return AuthLayout;
}

export default authLayout;