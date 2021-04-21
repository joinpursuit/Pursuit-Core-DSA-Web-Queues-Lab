[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Queue Data Structure Lab

## Getting Started 

* Fork this repo
* Clone the forked repository
* `cd` to the directory where you cloned it
* `npm install` to install dependencies
* `npm test` to test your solutions

## Exercises

1. Implement a Queue using an Array in `QueueArray.js`
2. Implement a Queue using a LinkedList `QueueLinkedList.js`

⚠️ Both implementations should have the same API and work exactly the same, their only difference is the underlying implementation.

### Queue API

You must implement the following methods in your Queue:

* `.enqueue(value)`: Add new element to the end of the queue.
* `.dequeue()`: Removes element from beginning of the queue and returns it.
* `.peek()`: Returns the element from beginning of the queue without removing it.
* `.isEmpty()`: Returns a boolean indicating if the queue is empty or not.
* `.toString()`: Return a string representation of the queue. For example, for a queue that has the numbers `4,10,5,7` where `4` is the front of the queue and `7` is the end of the queue return a string representation in the following format `< 4,10,5,7 <=`
* `.toArray()`: Return an array with the contents of the queue. For example, for a queue with the numbers `4,10,5,7` where `4` is the front of the queue and `7` is the end of the queue return `[4,10,5,7]`

## Submission Guidelines

* When finished, commit and push your work.
* Make a pull request on github.`
* Submit the link to your pull request on Canvas.

> *Note*: Remember to `git add`, `git commit` and `git push` regularly
