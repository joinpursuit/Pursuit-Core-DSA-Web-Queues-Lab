const Queue = require("../QueueLinkedList")

describe("Queue functionality", () => {
  test("enqueue should add an element to queue", () => {
    const testQ = new Queue() // Arrange/setup
    testQ.enqueue(100) // act
    expect(testQ.peek()).toBe(100) // assert
  })

  test("dequeue should remove an element from the front of the queue", () => {
    const testQ = new Queue() // Arrange/setup
    const num = 100
    testQ.enqueue(num)
    expect(testQ.dequeue()).toBe(num)
  })

  test("dequeue should throw an error if queue is empty", () => {
    const testQ = new Queue()
    expect(() => testQ.dequeue()).toThrow("Nothing to dequeue")
  })

  test("peek returns element in the front of the queue and does not remove it", () => {
    const testQ = new Queue()
    const num = 100
    testQ.enqueue(num)
    expect(testQ.peek()).toBe(100)
    expect(testQ.peek()).toBe(100)
  })

  test("isEmpty checks if the queue is empty", () => {
    const testQA = new Queue()
    testQA.enqueue(100)
    expect(testQA.isEmpty()).toBe(false)

    const testQB = new Queue()
    expect(testQB.isEmpty()).toBe(true)
  })
})
