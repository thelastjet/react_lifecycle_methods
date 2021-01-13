# React_Template

Template for React exercises

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: git clone <repo_name>
  cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the README.md file to complete exercises
- Open the app.js file to get started

## Exercise

- Here is a basic App classcomponent rendered in the browser through index.js. 

1. Initialize state in the App class component, and define a new property called "text" with some string as the value.

2. Your new component should display both values from props and state. (Hint: you have two options here - you can either concatenate these strings in the same pair of JSX curly braces, or you can place two sets of braces for each string. Your choice! Choose wisely.)

\*Add an input element to your App. Use the component's state to define its placeholder attribute. Add an "onChange" event to the input, and then handle the event to set a new property on the App's state that will be tied to the input's value attribute (pro tip: name this something appropriate considering it is an input event). Replace any "wrapping" divs with the <React.Fragment> tag. How does that change the ReactDOM? Why might that be important?

\*NOTE: Any methods you define on the class (i.e., between the constructor and render methods) should have this structure:

handleEvent(params) { // do something useful }

\*HOWEVER: Any event handlers you define in JSX elements should use arrow notation (and the concise body syntax, where applicable):

onEvent={(params) => this.handleEvent(params)}

\*Add a button beneath that input. When clicked, the button should invoke a method defined on the class to toggle a "hasLoaded" state property, which has a default value of false.

\*Before you return your elements to be rendered, check whether or not the hasLoaded property is true. If it is, return the elements that you have already defined; otherwise, return a new heading with the text "Loading..." and a button beneath it that is identical to the one you created in step 8. What happens? Which React elements are displayed first, and why?

\*If you can answer the questions at the end of the previous task, you already have an intuitive understanding of the lifecycle of a React Component. Given this, you can start thinking about invoking methods when these lifecycle events take place. So, write a new method with the name componentDidMount, which will set the state property "hasLoaded" to true. Now what happens when the application re-renders? Which React elements are displayed first, and why?

\*Note: It is indeed correct if you don't see your "Loading..." button anymore. The lifecycle method will seemingly set some initial state values for you!

\*BONUS:

\*You should have three state properties at this point. Set the one that contains just a string (that was being used for your

in the first few tasks) to the props value that you passed in to in step 3. Then, for the time being, remove the props parameters from the constructor and super methods. What happens?
\*Manually revert your state property back to a regular string. Now what happens? What's going on here?
