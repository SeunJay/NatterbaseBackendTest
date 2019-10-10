const app = require("../app");
const request = require("supertest")(app);

describe("Data validation", () => {
  it("should return valid", async () => {
    const { body } = await request.post("/api/check-data").send({
      data: {
        type: "durban",
        crux: "Indices",
        color: "green",
        title: "Indict the idiot"
      },
      rules: ["type", "crux", "color", "title"]
    });
    expect(body.status).toBe("valid");
  });

  it("Should return title as the missing value", async () => {
    const { body } = await request.post("/api/check-data").send({
      data: {
        type: "durban",
        crux: "Indices",
        color: "green"
      },
      rules: ["type", "crux", "color", "title"]
    });
    expect(body.status).toEqual(["title"]);
  });

  it("Should return title as the missing value", async () => {
    const { body } = await request.post("/api/check-data").send({
      data: {
        type: "durban",
        crux: "Indices"
      },
      rules: ["type", "crux", "color", "title"]
    });
    expect(body.status).toEqual(["color", "title"]);
  });
});
