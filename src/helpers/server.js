import { Server, Model, Factory, Response } from "miragejs";

export default () => {  
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
        price(i) { return +`${i}00`; },
        creationDate() { return new Date() }
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
      this.urlPrefix = "https://thelonerover.github.io/catalog-spa";

      this.get("/users");
      this.get("/users/:id");
      this.post("/users", (schema, reguest) => {
        let attrs = JSON.parse(reguest.requestBody);
        let existingUser = schema.users.findBy({email: attrs.email});
        if(!existingUser) {
          return schema.users.create(attrs);
        }

        return new Response( 409, {}, { error: "The user already exists!" } );
      });
      this.patch("/users/:id");
      this.del("/users/:id");

      this.post("/login", (schema, reguest) => {
        let attrs = JSON.parse(reguest.requestBody);

        let user = schema.users.findBy({ email: attrs.email });
        const sid = Math.round(Math.random() * 10e6);
        
        if (!user) {
          return new Response(401, {}, { error: "No such user!" });
        }

        if(user.attrs.email === attrs.email && user.attrs.password === attrs.password) {
          session[sid] = {...user.attrs};

          let now = new Date();
          let cookieExpiration = new Date(now.getTime() + 24 * 3600 * 1000);
          document.cookie = `session=${sid}; domain=localhost; path=/; expires=${cookieExpiration.toUTCString()};`

          return new Response(201, {}, {email: user.attrs.email, type: user.attrs.type});
        }

        return new Response( 401, {}, { error: "Wrong username or password!" } );
      });

      this.get("/products/:id");
      this.post("/products", (schema, reguest) => {
        let attrs = JSON.parse(reguest.requestBody);
        attrs.creationDate = new Date();
        const clientSid = +document.cookie.split("=")[1];
        
        //super temporary 
        if(session[clientSid].type === "A") {
          return schema.products.create(attrs);
        } else {
          return new Response(403, {}, { error: "Forbidden!" });
        }
      });
      this.patch("/products/:id");

      this.patch("/products/:id", (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody);
        const id = request.params.id;
        let product = schema.products.find(id);

        return product.update(newAttrs);
      });
      this.del("/products/:id");

      this.get("/products", (schema, request) => {
        let offset = 8;
        const products = processProducts(schema, request);

        const numberOfPages = Math.ceil(products.length / offset);
        
        return {
          products: products.models.slice((numberOfPages - 1) * offset, numberOfPages * offset),
          numberOfPages
        };
      });
      this.get("/products/page/:number", (schema, request) => {
        let offset = 8;
        let pageNumber = request.params.number;
        const products = processProducts(schema, request);

        const numberOfPages = Math.ceil(products.length / offset);
          
        return {
          products: products.models.slice((pageNumber - 1) * offset, pageNumber * offset),
          numberOfPages
        };
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

const processProducts = (schema, request) => {
  const params = request.queryParams;
  let products = schema.products.all();

  for (let param in params) {
    switch(param) {
      case "name":
        const regex = new RegExp(params[param],"gi");
        products = products.filter(product => {
          return !!product.attrs.name.match(regex);
        });
        break;
      case "priceFrom":
        products = products.filter(product => {
          return +product.attrs.price >= +params[param];
        });
        break;
      case "priceTo":
          products = products.filter(product => {
          return +product.attrs.price <= +params[param];
        });
        break;
      case "sort":
        switch (params.sort) {
          case "name-ascend":
            products = products.sort((a, b) => a.attrs.name.localeCompare(b.attrs.name));
            break;
          case "name-descend":
            products = products.sort((a, b) => b.attrs.name.localeCompare(a.attrs.name));
            break;
          case "price-ascend":
            products = products.sort((a, b) => a.attrs.price - b.attrs.price);
            break;
          case "price-descend":
            products = products.sort((a, b) => b.attrs.price - a.attrs.price);
            break;
          case "date-ascend":
            products = products.sort((a, b) => a.attrs.creationDate - b.attrs.creationDate);
            break;
          case "date-descend":
            products = products.sort((a, b) => b.attrs.creationDate - a.attrs.creationDate);
            break;
          default: break;
        }
        break;
      default: break;
    }
  }
  return products;
}