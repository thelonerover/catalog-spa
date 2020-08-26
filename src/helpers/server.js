import { Server, Model, Factory, Response } from "miragejs";

export default function() {  
  let session = {};

  return new Server({
    models: {
      products: Model,
      users: Model
    },

    factories: {
      product: Factory.extend({
        name(i) { return `Product ${i}`; },
        description(i) { return `A product number ${i}`; },
        price(i) { return `${i}00`; }
      }),

      user: Factory.extend({
        name(i) { return `Name ${i}`; },
        surname(i) { return `Surname ${i}`;},
        email(i) { return `email${i}@gmail.com`},
        password(i) { return `password${i}`},
        type: "C"
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

      this.post("/login", (schema, reguest) => {
        let attrs = JSON.parse(reguest.requestBody);

        let user = schema.users.findBy({ email: attrs.email });
        const sid = Math.round(Math.random() * 10e6);
        
        if (!user) {
          return new Response(401, {}, { 
              error: "No such user!",
              errorCode: 2
            }
          );
        }

        if(user.attrs.email === attrs.email && user.attrs.password === attrs.password) {
          session[sid] = {...user.attrs};

          let now = new Date();
          let cookieExpiration = new Date(now.getTime() + 24 * 3600 * 1000);
          document.cookie = `session=${sid}; domain=localhost; path=/; expires=${cookieExpiration.toUTCString()};`

          return new Response(201, {email: user.email});
        }

        return new Response(
          401,
          {},
          { 
            error: "Wrong username or password!",
            errorCode: 3
          }
        );
      });


      this.get("/products");
      this.get("/products/:id");
      this.post("/products", (schema, reguest) => {
        let attrs = JSON.parse(reguest.requestBody);
        const clientSid = +document.cookie.split("=")[1];
        
        //super temporary 
        if(session[clientSid].type === "A") {
          return schema.products.create(attrs);
        } else {
          return new Response(403, {}, { error: "Forbidden!" });
        }
      });
      this.patch("/products/:id");
      this.del("/products/:id");

      this.get("/products/page/:number", (schema, request) => {
        let offset = 12;
        let pageNumber = request.params.number;

        return schema.products.all().slice((pageNumber - 1) * offset, pageNumber * offset);
      });
    },

    seeds(server) {
      server.create("user", {
        email: "admin@example.com",
        password: "123",
        type: "A"
      });

      for (let i = 0; i < 96; i++) {
        server.create("product");
        server.create("user");  
      }
    }
  })
}