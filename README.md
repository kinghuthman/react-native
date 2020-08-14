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
    -

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
