import {UPDATE_MARKDOWN} from '../actionTypes';

const initalState = {
    markdown: "Something is up"
};

export default function markdown(state = initalState, action) {
    switch (action.type) {
        case UPDATE_MARKDOWN: 
            const {markdown} = action
            return {
                markdown
            }
        default: 
            return state
    }
}