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

  test("Queue.fromArray(arr) returns a queue made out of the contents of arr", () => {
    let queue = QueueArray.fromArray([1, 2, 3])
    expect(queue instanceof QueueArray).toBe(true)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.toString()).toBe('< 1, 2, 3 <=')
  })

  test("Queue.fromArray() is a static method and not part of the instance", () => {
    let testQ = new QueueArray()
    expect(typeof QueueArray.fromArray).toBe('function')
    expect(typeof testQ.fromArray).toBe(undefined) // Should not be present in the instance
  })
})
