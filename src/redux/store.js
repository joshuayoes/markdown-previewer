import { createStore } from 'redux'
import rootReducer from './reducers/index';

const initalMarkdown = 
`# Heading 1 
## Heading 2

[GitHub](http://github.com)

\`inline code\`

\`\`\`
Code blocks
\`\`\`

* Item 1
* Item 2
* Item 2a
* Item 2b

> Block quote

**bolded text.**

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)`;

const initialState = {
    markdown: initalMarkdown
}

export default createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);