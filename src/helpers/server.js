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
        email(i) {
          return `email${i}@gmail.com`
        },
        password(i) { 
          return `password${i}`
        },
      })
    },

    routes() {
      this.get("/users");
      this.post("/users", schema => schema.users.find(1).attrs);
      
      this.get("/products");
      this.get("/products/:id");
      this.post("/products");
      this.patch("/products/:id");
      this.del("/products/:id");

      this.get("/products/page/:number", (schema, request) => {
        let offset = 10;
        let pageNumber = request.params.number;
        return schema.products.all().slice((pageNumber - 1) * offset, pageNumber * offset);
      });
    },

    seeds(server) {
      for (let i = 0; i < 50; i++) {
        server.create("product");
        server.create("user");  
      }
    }
  })
}