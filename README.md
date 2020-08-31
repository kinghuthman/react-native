# REACT NATIVE

## Course Overview

- Physical Device Setup

  - npm install after changing into the rn-starter folder
  - npm start
  - Install expo on phone
  - Install expo on machine if needed
  - Scan qr code that pops up in browser
    - Toggle to tunnel if connection issue
  - Making Changes

## Working with Content

### Overview of React Components

- ..

### Showing a Custom Component

- Stack navigator is an object that decides what content we are going to show on the screen at any given time
- StyleSheet.create to create css

### Common Questions and Answers

- What's that 'Text' thing?
  - A 'primitive' React element. Used to show some basic content on the screen.
    - Text
      - Show some text to the user. Any text placed outside of a 'Text' will result in an error
    - View
      - General purpose element used for grouping other elements or styling
    - Image
      - Show an image
    - Button
      - Show a button the user can press. Give us some feedback whenever the user presses it
- What's that HTML looking stuff?
  - JSX! It is a 'dialect' of Javascript that tells React what content we want to show
    - Babel converts jsx into plain javascript
- What's that 'appNavigator' in the 'App.js' file?
  - Its a tool from a library called 'React Navigation' that is used to show different screens to the user
- How's that 'styles' thing work?
  - The 'StyleSheet.create()' function validates a set of styling rules that we pass into it. We can use it or pass styling directly into an element

### Rules of JSX

- We can assemble different JSX elements like normal HTML
- We configure different JSX elements using 'props'
- We can refer to JS variables inside of a JSX block by using curly braces
  - one big exception is javascript objects
- We can assign JSX elements to a variable, then show that variable inside of a JSX block

### One Common Error

- One valid way to return a multi line jsx statement is by using the return keyword with an open and close parenthesis
- Another way is to write out the opening tag with all of the jsx after it, prefaced by the return keyword and no open and close parenthesis
  - return 'opening tag-View' jsx elements 'closing tag-View'
- Placing the opening tag below the return keyword returns nothing
  - needs to opening up next to the return keyword or wrapped with parenthesis

## List Building - With Style!

### Building Lists

- ehh

### The FlatList Element

- Lists
  - Always starts off with an array of records that we want to represent on the screen in some fashion
    - array of objects
    - array of numbers
    - strings..
    - Starting point is an array
- FlatList Element
  - Turns array into a list of elements
  - We are required to pass in a 'prop' of 'data' - the array of data that we are going to create a bunch of elements out of
  - Also required to pass in a 'renderItem' prop - function that will turn each individual item into an element
  - If you are coming form React on the web, you might be used to 'mapping' an array of data to build a list - FlatList is better with RN
    - Has a bunch of optimizations to render lists on mobile devices
  - 'renderItem' is called with each individual element
    - that element argument is misleading and not exactly the items from the array
    - it has a couple of properties
      - the item property that will have the element from that array
    - destructure to get item without typing out element
      - the index property, where that element is in the array
      - save space

### Why a Key Property?

- Changing the original array of data effects a list when there is no key provided
  - react native rebuilds the list/array if you don't provide a key
    - will manipulate the incorrect index if a key is not provided
- the key allows react native to detect change in the behavior of a list and respond accordingly without unwanted side-effects
  - idea behind the key
    - track different objects and detect when one is updated without having to rebuild array
    - key allows react native to tie the definition of some particular object of data with the actual element on the screen and tag it with the same exact key
    - the key is mostly a performance optimization...
    - it's a performance optimization making updates to our list

### Solving the key issue

- There are two different ways
  - add a key property for each object
    - the requirement of a key property
      - is that it must be a string
      - it must be consistent between renders and it must be unique compared to all the other objects inside of the array of data
      - this is before runtime
  - app keyExtractor property to FlatList element
    - this will use an anon function whose argument will be each object in the array,
      - use this to return a unique character amongst the list
      - this is done at runtime
  - keyExtractor is just one line of code, the other you have to provide the key property
    - really want to keep the data inside of the object to just the data itself

### A few props around FlatList

- In order to make sure that the list spans all the way past the bottom of the screen we can add in a property like marginVertical
  - marginVertical provides spacing around each element
- horizontal
  - tells react native you want to scroll through the list horizontally
- showsHorizontalScrollIndicator
  - property to control scroll bar

## Navigating users between screens

### Button types

- Buttons with React Native
  - Button
    - Very simple component for showing a button and detecting a press
  - TouchableOpacity
    - Highly customizable component that can detect a press on just about any kind of element

### Button in Action

- Button
  - onPress is a specific property that the button element expects
  - Doesn't take in text between two tags
  - It is a single closing element that takes in a title property with datatype string
  - Styled

### Touchable Opacity in Action

- Not a self-closing tag
- Gets no styling
  - except for the fadeout effect
  - fadeout effect applies to anything within the element's tags
- multiple elements can be placed within this element but it will all have the touch/button effect which can be useful depending on the use case

## Navigating Users Between Screens

### Navigating with React Navigation

- React Navigation / Stack Navigator
  - An object, decides what to show on the screen at any given time
  - When the stack navigator shows any one of these different components,
    - it renders it in the process it passes down a set of configuration options(props)
      - props are not limited to just primitive elements created by React Native however, components that we create can also receive props as well
      - whenever a component that we create is passed a props object, it always shows up as as the first argument to this function
      - reads as ...
        - a props object (top level)
          - navigation property points to an object
            - and that navigation object has keys of actions
      - specifically for that stack navigator - navigate is a function we can use to change the content that is visible on the screen of our device, takes a string that should match one of the different route names that are defined in the createStackNavigator object

### Destructing Props

- curly braces inside of parenthesis can use navigation now instead of props

## Building Reusable Components

### Component Reuse with Props

- ...

### Parent-Child Relationship

- Anytime we want to make some reusable component that we expect to reuse several times over create it inside of a separate directory components
  - Import that 'child' component into the parent component of where we want to display it

### Communicating from Parent to Child

- When a component is passed into the parent, we can give that component any prop name we want (only components from react or others do the need to be specific)
  - the prop system shows up as an object within the child component
    - this object contains the props that were passed into the component via the parent
      - the name we gave the child component will be listed as a key in this object
        - child component should return that prop if want to display it

### Showing Images

- Image is a primitive self closing element
  - takes a property called source which should route to the relative path of the image

### Passing Images as

- Has a number identifier when using require to point to a particular image

## State Management in React Components

### State in Components

- Props
  - System to pass data from a parent to child
- State
  - System to track a piece of data that will change over time. If that data changes, our app will 'rerender'
- Three Questions
  - What piece of data is changing in our app?
  - What type of data is it?
  - What is the data's starting (default) value?

### Screen Boilerplate

- ..

### State in Action

- By default react does not watch any variable nor wait for it to update to display the change
- useState is a function to create variables that are essentially watched to update the components on the screen as intended
  - can initialize to any type of data
  - Anytime we want to update or change a piece of state, never modify it directly. React does not detect direct changes
    - Instead anytime we want to change a state variable, use the second variable that was destructured off of useState
      - [counter, setCounter] = useState(0)
        - counter is the variable that is displayed
        - setCounter updates that variable 'counter'
          - setCounter(counter + 1)

### Notes on State

- React automatically 'rerenders' or re-runs after an event ex. (onPress())
  - React does not initialize again
- Never directly modify a state variable. React does not detect this change! Only use the setter funciton
- We can name the state variable anything we wish
- Track any kind of data that changes over time - number, string, array of objects, etc
- when a component is rerendered, all of its children get rerendered too
- A state variable can be passed to a child component! At this point the state variable is now being used as props

### App Overview

- ..

### Generating Random Colors

- Math.Random() returns a number between 0 and 1

### Showing Colors with a FlatList

- Only have to use destructuring on render item

### App Overview

- ..

### Reusable Color Adjuster

- ..

### Coordinating State

- Carefully think about where we place state
  - In our screens or components?
  - Where are we using this data specifically?
  - What reads the state variables?
  - What changes the state variables?
- Generally, we create state variables in the most parent component that needs to read or change a state value
  - How does the child component change the parent's state values?
    - Pass a callback function down to the children as a prop
      - In that callback, it can invoke that function and make a change to that state value that will change the state value inside of the parent, causing it to re-render, which will then re-render the child
  - If a child needs to read a state value, the parent can pass it down as as prop

### Passing Callbacks to Children

- ..

### Tying State Values Together

- ..

### Validating State Change

- ..

### Reusable State Updates

- ..

### Introduction to Reducers

- reducer (method used for useReducer)
  - function that gets called with two objects
    - argument #1
      - object that has all of our state in it
    - argument #2
      - object that describes the update we want to make
    - we look at argument #2 and use it to decide how to change argument #1
    - NEVER change argument #1 directly
    - We MUST always return a value to be used as argument #1

### Creating a Reducer

- To manage state we either are using a reducer or the useState hook (setState(?))
- useReducer is preferable to useState when using 'complex' state logic
  - const [state, dispatch] = useReducer(reducer, initial value for state object)
    - 'reducer' is a function
      - best to make this function outside of the function object that holds/implements useReducer
        - confusion of state can be troublesome
      - first argument is the state object
      - second argument describes how we change that state object
        - usually called 'action'
      - the function's object uses a switch statement for each of our properties
        - it rebuilds state from scratch and returns a new object, the new object will have the update
        - return {...state, property: state.property + action.amount}
          - return a brand new object
          - {...state, property: state.property + action.amount}
            - ...state
              - take all of the existing properties out of our state object
              - and copy and paste them into that brand new object
            - property: state.property (+ || - || w.e update) action.amount
              - overwrite the existing property we want to update
    - state will initially be equal to the 'initial value for state object'
    - never modify state directly

### Applying State with a Reducer

- when we call useReducer that gives us back two things
  - our current state
    - anytime our state object changes, the entire component is going to re-render
  - how do we run that reducer and make that change?
    - dispatch
      - runMyReducer
      - invoke it
      - pass in an argument to use as our action object

### Restoring Validation

- when we return a value from our reducer, our component will re-render
- whatever is returned from the reducer will be provided to the state

### Community Convention in Reducers

- type
  - String that describes the exact change operation we want to make
- payload
  - Some data that is critical to the change operation

### Exercise

-..

### Handling Input

- TextInput (primitive)
  - Has 0 styling applied to it, with the exception of some height
  - Add styling right away

### Two Important Props

- ios
  - auto-corrects automatically
    - autoCorrect={}
      - true
      - false
  - capitalizes automatically
    - autoCapitalize=
      - characters
      - none
      - sentences
      - words

### Weird Things with Text and State

- TextInput
  - has a state property that holds the input we track
    - parent should not reach down directly into child and try to inspect its state
    - component/screen should hold state that represents what is inside of TextInput
      - everytime we render component/screen, show that input element and pass two props
        - value
          - TextInput is programmed to receive this prop
          - this is what displays state
        - callback function called onChangeText
          - this will set state
          - TextInput is programmed to receive this prop
          - Anytime a user changes the text, we want to update our state variable inside of our text screen
  - ALWAYS USE THIS PATTERN FOR TEXT INPUT

### Exercise

- ..

## How to Handle Screen Layout

### Layout with React Native

- Layout Systems
  - Box Object Model
    - The height/width of an element + the space around it
      - Use this to affect the positioning of a single element
  - Flex Box
    - How some number of sibling elements get laid out inside a parent
      - Use this to position multiple elements with a common parent
    - Position
      - How a single element gets laid out inside a parent
        - Use this to override Box Object + Flex Box

### Basics of Box Object Model

- Box Object Model

  - 'Content' and 'Padding' sections show background color, Border and Margin do not
  - from inside to out

    - content -> padding -> border -> margin

      - content is the actual content
        - height
      - padding is the space between the content and border
        - padding
        - paddingTop
        - paddingBottom
        - paddingHorizontal
        - paddingVertical
      - border encompasses the content and padding
        - borderWidth
        - borderTopWidth
        - borderBottomWidth
      - margin is the space between the element's border and another element's border

        - margin
        - marginTop
        - marginBottom
        - marginVertical
        - marginHorizontal

### Align Items With Flex (parent)

- alignItems (on parent)
  - stretch (default)
    - attempt to stretch and take up as much horizontal space as it possibly can
  - flex-start
    - condense down to the left hand side as close as it possibly can
  - center
    - center everything horizontally
  - flex-end
    - condense down to the right hand side as close as it possibly can

### Flex Direction (parent)

- flexDirection (on parent)
  - controls whether children are laid out vertically or horizontally
    - column (default)
      - align the items horizontally...
    - row
      - vertically...
  - changes the way alignItems works

### Justify Content (parent)

- changes how the children are laid out vertically inside the parent
  - very similar to align items
  - flexDirection:
    - column
      - justifyContent will work vertically
    - opposite of alignItems
  - flexDirection:
    - row
      - justifyContent will work horizontally
    - opposite of alignItems
- lays out children along the 'primary axis'. Primary axis is whatever 'flexDirection' is set to
- flex-start (on parent)(default)
  - top
- center (on parent)
  - center
- flex-end (on parent)
  - shove down
- space-between (on parent)
  - space between each child evenly distributed
- space-around (on parent)
  - similar to space-between but adds in space at the top and bottom

### Flex Values

- parent
  - alignItems
  - justifyContent
  - flexDirection
- child
  - flex
    - makes a child in a parent take up as much space as possible
  - alignSelf
    - overrides the value of align items on the parent element
    - flex-end
      - pushes child all the way to the right
    - center
      - center
    - flex-start
      - pushes child all the way to the left
    - stretch
      - child takes as much space as possible

### The Position Property

- By default every element that we place has a property with the value of relative
- absolute
  - ignored by siblings
  - still obeys some flex-box rules set by the parent (positional)
    - align-items: 'center'
      - obeyed
    - align-items: 'stretch'
      - ignored

### Top, Bottom, Left, Right

- adds in a little bit of extra spacing between one element and a sibling
  - shifts the element without moving its sibling

### Absolute Fill Objects

- Trick to have child expand and fill up entire height and width of the parent view element
- first set the position absolute property that would make sure it is completely ignoring its sibling elements
- could also set a top bottom left right value of 0
- ...StyleSheet.absoluteFillObject is something react-native implemented to the same thing

### Applying Layout Systems

- Apply Box Object Model Rules
  - Is position 'absolute'?
    - no
      - Apply all flex box rules considering siblings
      - Place element inside parent
      - Apply top, left, right, bottom
    - yes
      - Apply some flex rules, ignore all siblings
      - Apply top, left, right, bottom

### Exercise

- ..

## Restaurant Search App

### App Overview

- User can search for restaurant
- Display results of search on screen
  - cheaper ones first to high tier
  - scroll horizontally
  - user can tap on restaurant
    - images from restaurant will appear on screen

### Project Generation

- expo-cli
  - Adds in a ton of default config to use features common in apps, like icons, video, better camera use, etc
  - Created because react-native-cli didn't give you enough out of the box
  - NAVIGATION Setup
    - <https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15778212#content>
- react-native-cli
  - Default CLI to generate a project.
  - Requires a lot of extra work to add in common features

### Yelp Signup

- using the yelp api
  - yelp.com/fusion - documentation

### Yelp Walkthrough

- ..

### React Native Navigation

- React provides a couple of different objects for navigating users around an app
- three important objects to understand are the..
  - StackNavigator
  - BottomTabNavigator
  - DrawerNavigator
  - these objects take different screens/components and wire them together in some automagic fashion

### Assembling a Navigator

- App.js is a special file
  - anything that is exported from that device is going to be taken from react native and be shown on the screen
    - createStackNavigator is a function that takes two objects as arguments
      - first object lists the screens
      - second object are configurations
        - intialRouteName
        - defaultNavigationOptions is an object that takes additional properties
          - title

### Architecture Approach

- What reusable components can we use?

### Starting the SearchBar

- ..

### Displaying Icons

- expo/vector icons
  - <https://icons.expo.fyi/>
- Import the icons library to display it

### Search Bar Styling

- ..

### Managing State

- At the parent component is where state will be held
  - pass callback to child to update state
- other components might need to use that state property

### Detecting Editing Complete

- onEndEditing={() =>}
  - anytime a user hits enter/ok

## Using Outside APIs

### Configuring Axios

- fetch
  - Built in function for making requests
  - error handling is a bit weird
  - requires us to write a lot of wrapper code to make it work 'sensibly'
- axios
  - separate library for making requests
  - easy to use, sensible defaults
  - increases our app size (very, very slightly)

### Making The Request

- passing a params in axios call will append any key onto the end of the initial path

### Error Handling

- ..

### Running an Initial Search

- default search when app loads up

## Making Hooks Reusable

### The UseEffect Hook

- useEffect's Second Argument
  - useEffect(()=> {})
    - run the arrow function every time the component is rendered
  - useEffect(()=> {},[])
    - run the arrow function only when the component is first rendered, if there is an empty array as the second argument
  - useState(() => {}, [value])
    - run the arrow function only when the component is first rendered, and when the 'value' changes

### Extracting Hook Logic

- Want to keep all things related to api calls in a separate hook file

### Showing Search Results

-..

### Grouping Results

- ..

### FlatList Rendering

- ..

## Navigation With Parameters

### Showing a Single List

- ..

### Showing Additional Info

- Image elements will collapse itself unless given a height and width

### Hiding Scroll Bars

- ScrollView is used to wrap around elements to make them vertically scrollable on the screen

### Constraining View Elements

- flex: 1
  - only try to use the actual visible screen that is visible

### Empty Elements

- A view element can sometimes be destructive or interrupt the layout we're looking for
- A view element can accidentally span off the screen in an attempt to fit all of its contents
- So instead of using view can use <></>
  - empty element that will automatically be rendered on the screen by RN
    - RN will not any of this content to go off the edge of the screen

### Spacing on the Search Bar

- ..

### Reminder on Navigation

- Each screen rendered by the stackNavigator has props that is an object with several properties, most importantly 'navigation'

### Navigating from a Child Component

- pass down functions needed as a prop
- TouchableOpacity
  - fades out any child elements placed inside of it

### WithNavigator Helper

- Special Function that we can pass our component into
- Returns a special version of a component that has access to the navigation prop that it needs to make use of with navigation

### Communicating Between Screens

- can pass an object as a second argument for the navigate method that contains properties to pass onto the screen we are navigating to
  - navigation.navigate('goToThisScreen', {id: item.id})
  - use getParams method to access that key
    - navigation.getParams('id')

### Fetching a Single Restaurant

- Anytime we talk about rerendering a component we are talking about making use of state
- Usually when we expect to have an array of objects we'll have a default value of an empty array.
  - Usually a default value of null which indicates that we do not yet have any data available.
  - Eventually going to have to make sure that result is not null when looking to access data

### Showing a List of Images

-..

### One Last Fix

-..

## Advanced State Management with Context

### App Overview

- Blog
- CRUD
- DATA MANAGEMENT

### Issues With Data

- Will be making use of a global state management pattern
  - manage all of our state inside of on single location

### Initial Setup

-..

### Wrapping the Navigator

- Assign the app container to a reference and return it in an exported anon function
  - const App = createAppContainer(navigation)
  - export default () => { return <App />}

### Introduction to Context

- Props
  - Communicates information from a parent directly down to a child
  - Easy to setup
  - To communicate data down multiple layers, we have to write a lot of code
- Context
  - Moves information from a parent to some nested child
  - Complicated to setup, lots of special terms
  - Easy to communicate data from a parent to a super nested child

### Adding Context

- React.createContext()
  - used as a pipe to connect to 'store'
  - ex. const BlogContext = React.createContext();
- Store
  - ded
- Children
  - unrelated to context
    - different feature in react we are taking advantage of
  - CustomComponent is an element
    - elements wrapped with this tag will be passed as a prop called 'children'
    - allows us to accept some other component more or less as an argument

### Moving Data With Context

- Provider

  - When a context object is created, we get something called a provider
  - The provider accepts whatever information we provide it, and will make available for all of our child components

- useContext
  - function that analyzes a context object and gives us access to it's value prop

### Rending a Lists of Posts

-..

### Adding State with Context

-..

### It works

- Context is just the system of communicating information

### Opportunity to improve

- useReducer

### Updating With useReducer

-..

### Automating Context Creation

- custom context
  - a method that will take in three arguments
    - reducer, actions, initialState
    - method with two functions that will be exported

### More Automatic Creation

- loop through the actions object, take the function needed and call it with the dispatch argument, that will give us back the function associated with the key from the actions object, that function will pass on down into our value prop within our Provider
- // actions === { addBlogPost: (dispatch) => {return () => {}}}

### A bit of Styling

-..

### Deleting Posts

-..

### Updating the Reducer

-..

### Navigation on Tap

-..

### Retrieving Single Posts

-..

### Create Screen

-..

### Header Navigation

- Can hook our screens up to navigationOptions to provide it an object that can be used to customize the different things that displayed on our screen

### Displaying a Form

- Even though we are making use of context here and we're trying to centralize all of our state in one location we can still have a local state inside of one single component
- Controlled Input
  - Adding state to a text input

### Saving a New Post

-..

### Navigation on Save

-..

### The Edit Icon Link

-..

### Communicating Info to Edit Screen

-..

### Initializing State from Context

-..

### Extracting Form Logic

-..

### Customizing OnSubmit

-..

### Initial Form Valueslu

-..

### Default Props

- can set default props on a component
  - Component.defaultProps = {}

### Editing Action Function

### Editing in a Reducer

### Navigating Backwards

## Data API Sync

### JSON Server and Ngrok Setup

- two terminals to run server and ngrok
- ngrok gives us access to our localhost
- yarn start, yarn run jsonserver yarn run ngrok

### Making a Request

-..

### Remote Fetch of Posts

-..

### Creating Posts With Posts Requests

-..

### Refetching on Navigation

- addListener
  - an event handler that waits to see how the screen behaves and performs a method that was passed to it as a second argument
  - make sure to clean up by using .remove()

### Deleting a Post

-..

### Editing a Post

-..

## In-App Authentication

### Server Setup

- password: pass321word
- link <https://cloud.mongodb.com/v2/5f4aa7862fbb6617536cdcc1#metrics/replicaSet/5f4aa88ee73d161b8809da02/explorer/%3Cdbname%3E/users/find>

### Navigation Design

- Types of navigation
  - Stack Navigator
    - Classic back-and-forth between different nested screens
  - Bottom Tab Navigator
    - Shows a tab bar at the bottom with buttons to navigate between screens
  - Switch Navigator
    - Abrupt, 100% cuts between different screens
  - Drawer Navigator
    - Shows a fly-out menu from one side of the device
- This was a really good section to come back to for future navigation designs

### A Lot of BOILERPLATE

-..

### Navigator Hookup

- lowercase key for navigator is just a reference to another navigation stack

### React Native Elements

- Button element from react-native has very little customization options commpared to button from Elements

### Helper Style Components

- Spacing
  - Rather than styling each element make a helper component with some styling that does the work

### Styling Odds and Ends

- To hide the header add navigation options (header: () => false)
- flex: 1 will cause the view to expand and fill up as much space as it can
  - justifyContent: center will center the contents

### Input Props

- secureTextEntry
  - hides passwords
- autoCorrect
  - expects a boolean
- autoCapitalize
  - none, words, sentence? possibly more need to check docs
