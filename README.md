# Mitt Event Emitter Example with reactjs 
This example illustrates how we can use node event emitting system to our advantage for communication b/w components across multiple heirarchies and architectures

## How it works? 
We have a module called `EmitterKeys` which hold the constants events which the components could `listen` OR `emit` on.

both `emitting` and `listening` should happen on the same instance of emitter.

**Parent Component**
This component will fire a event `parent-to-child` with some arbitrary data after 2 seconds which should fire off the listener in the child component.

**Child Component**
This component will also fire a event `child-to-parent` with some arbitrary data which should fire off the listener in the parent component after 3 Seconds


