import React, { Component } from 'react';
import './Loading.css';
import * as legoData from "../../Images/profile.json";
import Lottie from "react-lottie";





const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function LoadingMessage() {
    return (
        <div className="backsplash">
        <div className="splash-screen">
            <Lottie options={defaultOptions} height={120} width={120} />
        </div>
        </div>
    );
}

function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 2600);
        }

        render() {
            if (this.state.loading) return LoadingMessage();
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withSplashScreen;