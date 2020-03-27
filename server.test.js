const request = require("supertest");

const server = require("./server");

const mockRes = [
  {
    id: 1,
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    id: 2,
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    id: 3,
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  }
];

describe("server.js", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });

    it("should return JSON", function() {
      return request(server)
        .get("/")
        .then(response => {
          expect(response.type).toMatch(/json/i);
        });
    });

    it("should respond with list of quotes", function() {
      return request(server)
        .get("/quotes")
        .then(response => {
          expect(response.body).toHaveLength(3);
          expect(response.body).not.toHaveLength(0);
          expect(response.body).toMatchObject(mockRes);
        });
    });
  });
});
