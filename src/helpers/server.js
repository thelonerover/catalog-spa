import { Server, Model } from "miragejs";
import products from "../data/products";
import users from "../data/users";

export default function() {  
  return new Server({
    models: {
      product: Model,
      user: Model
    },

    routes() {
      this.get("/users", users);
      this.post("/users", users[0]);

      this.get("/products", products);
      this.get("/products/:id");
      this.post("/products");
      this.patch("/products/:id");
      this.del("/products/:id");
    },

    seeds(server) {
      products.map(product, () => { server.create("product", product)});
      products.map(users, () => { server.create("user", users)});
    },
  });
}

  // server.get("/products/:id", (schema, ) => {});