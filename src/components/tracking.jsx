import ReactGA from "react-ga";

export const PageView = () => {  
  ReactGA.pageview(window.location.pathname +  
                   window.location.search); 
}

export const initGA = () => {  
  ReactGA.initialize(
    [
      {
        trackingId: 'G-RVEHB28TQP',
        gaOptions: { name: 'tracker1' }
      },
      {
        trackingId: 'UA-181585210-1',
        gaOptions: { name: 'tracker2' }
      }
    ],
    { debug: true, alwaysSendToDefaultTracker: false }
  );
}

/**
 * Event - Add custom tracking event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 */
export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};