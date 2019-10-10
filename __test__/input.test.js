const app = require("../app");
const request = require("supertest")(app);

describe("remove input", () => {
  it("Should output object without the deleted item", async () => {
    const { body } = await request.delete("/api/remove-item/type").send({
      data: {
        type: "durban",
        crux: "Indices",
        color: "green",
        title: "Indict the idiot"
      }
    });
    expect(body.status).toEqual({
      color: "green",
      crux: "Indices",
      title: "Indict the idiot"
    });
  });

  it('Should output "attribute not found" if the item does not exist', async () => {
    const { body } = await request.delete("/api/remove-item/tit").send({
      data: {
        type: "durban",
        crux: "Indices",
        color: "green",
        title: "Indict the idiot"
      }
    });
    expect(body.status).toBe("attribute not found");
  });
});
