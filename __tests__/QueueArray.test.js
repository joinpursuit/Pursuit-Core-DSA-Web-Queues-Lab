const QueueArray = require("../QueueArray")

describe("QueueArray functionality", () => {
  test("enqueue should add an element to queue", () => {
    const testQ = new QueueArray() // Arrange/setup
    testQ.enqueue(100) // act
    expect(testQ.peek()).toBe(100) // assert
  })

  test("dequeue should remove an element from the front of the queue", () => {
    const testQ = new QueueArray() // Arrange/setup
    const num = 100
    testQ.enqueue(num)
    expect(testQ.dequeue()).toBe(num)
  })

  test("dequeue should throw an error if queue is empty", () => {
    const testQ = new QueueArray()
    expect(() => testQ.dequeue()).toThrow("Nothing to dequeue")
  })

  test("peek returns element in the front of the queue and does not remove it", () => {
    const testQ = new QueueArray()
    const num = 100
    testQ.enqueue(num)
    expect(testQ.peek()).toBe(100)
    expect(testQ.peek()).toBe(100)
  })

  test("isEmpty checks if the queue is empty", () => {
    const testQA = new QueueArray()
    testQA.enqueue(100)
    expect(testQA.isEmpty()).toBe(false)

    const testQB = new QueueArray()
    expect(testQB.isEmpty()).toBe(true)
  })
})
