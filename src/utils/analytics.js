import ReactGA from 'react-ga';
import { useEffect } from 'react';

export const useAnalytics = () => {
    const analytics = process.env.REACT_APP_GOOGLE_ANALYTICS;

    useEffect(() => {
        ReactGA.initialize(analytics);
        ReactGA.pageview('/Home');
    }, [analytics]);
}

export const event = ({category, action, label}) => {
    // ReactGA.event({category: category, action: action, label: label});
};