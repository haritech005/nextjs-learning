export const data = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
    { id: 2, name: "Jane", email: "jane@gmail.com" },
  ];
  
  export async function GET() {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  
  export async function POST(request: Request) {
    const body = await request.json();
    const newData = {
      id: data.length + 1,
      name: body.name,
      email: body.email,
    };
    data.push(newData);
    return new Response(JSON.stringify(data), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }
  