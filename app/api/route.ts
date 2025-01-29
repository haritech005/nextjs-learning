export const users = [
  { id: 1, name: "hari", age: 33 },
  { id: 2, name: "Saran", age: 21 },
];

export async function GET() {
  return new Response(JSON.stringify(users), { //change the js object into JSON and pass into new response
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const user = await request.json(); // if user gives the request means that request which is converted into json 
  const newUser = {
    id: users.length + 1, //this newUser object get the request from the user variable and converted as a new obj
    name: user.name,
    age: user.age,
  };
  users.push(newUser) 
  return new Response(JSON.stringify(newUser), { // chang the js object to json format and passing  
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

