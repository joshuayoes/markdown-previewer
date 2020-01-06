import {UPDATE_MARKDOWN} from '../actionTypes';

// placeholder state, actual intial state in ../store.js
const initalState = {
    markdown: ""
};

export default function markdown(state = initalState, action) {
    switch (action.type) {
        case UPDATE_MARKDOWN: 
            const {markdown} = action
            localStorage.setItem('previousSession', markdown);
            return {
                markdown
            }
        default: 
            return state
    }
}