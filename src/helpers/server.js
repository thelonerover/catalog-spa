import { Server } from "miragejs";

export default function () {  
  let server = new Server();
  
  server.get("/users", {
    users: [
      {
        id: 1,
        name: "Ivan",
        surname: "Ivanov",
      },
      {
        id: 2,
        name: "Pavel",
        surname: "Pavlov"
      },
      {
        id: 3,
        name: "Slava",
        surname: "SLAV"
      }
    ]
  });

  server.post("/users", {
    user: {
      id: 1,
      name: "Ivan",
      surname: "Ivanov",
    },
    jwt: "aaaaaaa.bbbbbbbb.ccccccc"
  });
}

// server.get("/products", {
//   products: [],
// });

// server.post("/users", () => ({
//   users: [],
// }));

// server.post("/login", () => ({
// }));

// server.get("/profile", () => ({
// }));