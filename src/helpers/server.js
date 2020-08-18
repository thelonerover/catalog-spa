import { Server, Model, Factory, Response } from "miragejs";

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
      this.get("/users/:id");
      this.post("/users", (schema, reguest) => {
        let attrs = JSON.parse(reguest.requestBody);
        let existingUser = schema.users.findBy({email: attrs.email});
        if(!existingUser) {
          return schema.users.create(attrs);
        }

        return new Response(
          409,
          {},
          { 
            error: "The user already exists!",
            errorCode: 1
          }
        );
      });
      this.patch("/users/:id");
      this.del("/users/:id");
      
      // this.post("/login", schema => schema.users.find(1).attrs);

      this.post("/login", (schema, reguest) => {
        let attrs = JSON.parse(reguest.requestBody);

        let existingUser = schema.users.findBy({ email: attrs.email });

        if (!existingUser) {
          return new Response(401, {}, { 
              error: "No such user!",
              errorCode: 2
            }
          );
        }

        if(existingUser.email === attrs.email && existingUser.password === attrs.password) {
          return new Response( 201, {}, { 
              //temporary stuff
              isLogged: true
            }
          );
        }

        return new Response(
          401,
          {},
          { 
            error: "Wrong username or password!",
            errorCode: 2
          }
        );
      });


      this.get("/products");
      this.get("/products/:id");
      this.post("/products");
      this.patch("/products/:id");
      this.del("/products/:id");

      this.get("/products/page/:number", (schema, request) => {
        let offset = 12;
        let pageNumber = request.params.number;
        return schema.products.all().slice((pageNumber - 1) * offset, pageNumber * offset);
      });
    },

    seeds(server) {
      for (let i = 0; i < 96; i++) {
        server.create("product");
        server.create("user");  
      }
    }
  })
}