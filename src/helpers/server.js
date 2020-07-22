import { Server } from "miragejs";

export default function () {  
  let server = new Server();
  
  server.get("/users", {
    users: [
      {
        id: 1,
        name: "Ivan",
        surname: "Ivanov"
      }
    ],
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