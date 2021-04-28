const QueueArray = require("../QueueArray")

describe("QueueArray functionality", () => {
  test(".toArray() returns an array with the contents of the queue", () => {
    const testQ = new QueueArray()
    testQ.enqueue(1) // act
    testQ.enqueue(2) // act
    testQ.enqueue(3) // act
    expect(testQ.toArray()).toEqual([1, 2, 3]) // assert
  })

  test(".toArray() returns an empty array when the queue is empty", () => {
    const testQ = new QueueArray()
    expect(testQ.toArray()).toEqual([])
  })

  test(".toString() returns a string representation of the queue", () => {
    const testQ = new QueueArray()
    testQ.enqueue(1) // act
    testQ.enqueue(2) // act
    testQ.enqueue(3) // act
    expect(testQ.toString()).toBe('< 1, 2, 3 <=') // assert

    testQ.dequeue()
    testQ.enqueue(4)
    expect(testQ.toString()).toBe('< 2, 3, 4 <=') // assert
  })

  test.todo("Queue.fromArray(arr) returns a queue with made out of the contents of arr")

})
