const app = require("../app");
const request = require("supertest");

describe("aladdin", () => {
  it("Should output 0 as lowest index", async () => {
    const { body } = await request(app)
      .post("/api/aladdin")
      .send({
        number: 4,
        magic: [3, 2, 5, 4],
        distance: [2, 3, 4, 2]
      });
    expect(body.output).toBe(0);
  });

  it("should return -1 if array is empty", async () => {
    const { body } = await request(app)
      .post("/api/aladdin")
      .send({
        number: 4,
        magic: [3, 2, 5, 4],
        distance: []
      });
    expect(body.output).toBe(-1);
  });

  it("should return -1 if there's no solution", async () => {
    const { body } = await request(app)
      .post("/api/aladdin")
      .send({
        number: 0,
        magic: [3, 2, 5, 4],
        distance: [2, 3, 5, 6]
      });
    expect(body.output).toBe(-1);
  });

  it("should return an object containing output", async () => {
    const { body } = await request(app)
      .post("/api/aladdin")
      .send({
        number: 4,
        magic: [3, 2, 5, 4],
        distance: [2, 3, 5, 2]
      });
    expect(body).toMatchObject({ output: 0 });
  });

  it("should return object containing value 4", async () => {
    const { body } = await request(app)
      .post("/api/aladdin")
      .send({
        number: 6,
        magic: [11, 3, 2, 5, 4, 8],
        distance: [19, 12, 3, 14, 2, 7]
      });
    expect(body).toMatchObject({ output: 4 });
  });
});
