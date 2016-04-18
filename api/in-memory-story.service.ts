export class InMemoryStoryService {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let forms = [
      {
        "id": 11,
        "name": "Form - 11",
        "description": "---"
      }
    ];

    return { forms };
  }
}