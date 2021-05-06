const Queue = require("../QueueLinkedList")

describe("Queue functionality", () => {
  test(".toArray() returns an array with the contents of the queue", () => {
    const testQ = new Queue()
    testQ.enqueue(1) // act
    testQ.enqueue(2) // act
    testQ.enqueue(3) // act
    expect(testQ.toArray()).toEqual([1, 2, 3]) // assert
  })

  test(".toArray() must leave the queue intact, as if nothing had happened", () => {
    const testQ = new Queue()
    testQ.enqueue(1)
    testQ.enqueue(2)
    testQ.enqueue(3)
    testQ.toArray()
    expect(testQ.peek()).toBe(1)
    expect(testQ.isEmpty()).toBe(false)
  })

  test(".toArray() returns an empty array when the queue is empty", () => {
    const testQ = new Queue()
    expect(testQ.toArray()).toEqual([])
  })

  test(".toString() returns a string representation of the queue", () => {
    const testQ = new Queue()
    testQ.enqueue(1) // act
    testQ.enqueue(2) // act
    testQ.enqueue(3) // act
    expect(testQ.toString()).toBe('< 1, 2, 3 <=') // assert

    testQ.dequeue()
    testQ.enqueue(4)
    expect(testQ.toString()).toBe('< 2, 3, 4 <=') // assert
  })

  test(".toString() must leave the queue intact, as if nothing had happened", () => {
    const testQ = new Queue()
    testQ.enqueue(1)
    testQ.enqueue(2)
    testQ.enqueue(3)
    testQ.toString()
    expect(testQ.peek()).toBe(1)
    expect(testQ.isEmpty()).toBe(false)
  })

  test("Queue.fromArray(arr) returns a queue made out of the contents of arr", () => {
    let queue = Queue.fromArray([1, 2, 3])
    expect(queue instanceof Queue).toBe(true)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.toString()).toBe('< 1, 2, 3 <=')
  })

  test("Queue.fromArray() is a static method and not part of the instance", () => {
    let testQ = new Queue()
    expect(typeof Queue.fromArray).toBe('function')
    expect(typeof testQ.fromArray).toBe(undefined) // Should not be present in the instance
  })
})
