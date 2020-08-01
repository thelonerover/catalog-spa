import { Server, Model, Factory } from "miragejs";

export default function() {  
  return new Server({
    models: {
      products: Model,
      users: Model
    },

    factories: {
      product: Factory.extend({
        name(i) {
          return `Product ${i}`;
        },
        description(i) {
          return `A product number ${i}`;
        },
        price(i) {
          return `${i}00`;
        }
      }),

      user: Factory.extend({
        name(i) {
          return `Name ${i}`;
        },
        surname(i) {
          return `Surname ${i}`;
        },
        login(i) {
          return `login${i}`
        },
        password(i) { 
          return `password${i}`
        },
      })
    },

    routes() {
      this.get("/users");
      this.post("/users", schema => { 
        return schema.users.find(1).attrs;
      });

      this.get("/products");
      this.get("/products/:id");
      this.post("/products");
      this.patch("/products/:id");
      this.del("/products/:id");
    },

    seeds(server) {
      for (let i = 0; i < 50; i++) {
        server.create("product");
        server.create("user");
      }
    },
  });
}

  // server.get("/products/:id", (schema, ) => {});