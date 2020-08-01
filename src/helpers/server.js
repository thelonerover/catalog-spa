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
      this.get("/products/:id", (schema, request) => {
        let id = request.params.id;
        return schema.product.find(id);
      });
      this.post("/products", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.product.create(attrs);
      });
      this.update("/products/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let product = schema.product.find(id);
        return product.update(newAttrs);
      });
      this.delete("/products/:id", (schema, request) => {
        let id = request.params.id;
        return schema.product.find(id).destroy();
      });
    },

    seeds(server) {
      products.map(product, () => { server.create("product", product)});
      products.map(users, () => { server.create("user", users)});
    },
  });
}

  // server.get("/products/:id", (schema, ) => {});