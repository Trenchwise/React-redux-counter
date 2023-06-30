Redux from video React Classes Redux

Redux

Does two things:

    - Holds the data
    - Holds the ability to manipulate the data

We call this the redux store.

You take all the state and put it a seperate box to the side, which is not part of the oneway data flow.

You also take the logic that manipulates the state and put it in a special box called the store

Each component has the ability to access/subscribe to the store which contains all the data. So no need to prop drill.

To use redux you need to install redux and react redux

- npm i redux
- npm i react-redux

// This is the way of connecting to the store

import {connect} from "react-redux"

React redux - Is a way of allowing react to talk to reduct.

Then - the component needs to be wrapped in a special method called connect. You do this down in export.

✅ The connect method lets the component interact with redux.

export default connect(mapStateToProps)(App);;

Then the below function needs to be declared.

// example from Russel's demo
function mapStateToProps() {
return { count: state.count} // here you return what state you want.
}

The job of the function is to tell the store, what you want from the store. Its like a shopping list - you explain what you want.

All the state now lives in the store. So each component only recieves props.

A component sends a message to the store telling it manipulate the data. When you connect a component to the store it also gives you dispatch.

✅ Dispatch - sends an objec. it has a type inside it.

class App extends Component {

add = () {
this.props.dispatch({type: "INCREMENT"})

}
}

export default App;

What this component does is it subcribes the data from the store and its able to send messages to the store to say that the data needs to be changed. This component doesn't hold state or logic. Its only job is to tell the store to change data and display data which it has extracted from the store.

1. - need to create initial state.

This is the starting point for some of the data

2. create the logic for the state - to do this you use a reducer function.

Reducer ✅

A reducer takes one or more things and gives you one thing back.
You give it your old state
Your action which has been dispatched. It then applies the action to the data. Then it gives you back new data.
A reducer uses switch statements. they switch on the type

The Store manipulates the data using the reducer function

Need to wrap the app in a provider

Now

As usual. We seperate by concern.

A new folder called store is added into src. Inside this goes two files - initialState and reducer. Which are both js files.

The reducer file contains all the logic that manipulates the state.

InitialState file contains all the initial States.

The moment a component recieves new props it automatically rerenders itself.
