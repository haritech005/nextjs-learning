import {data} from "../route"

export async function GET(request:Request,params:{params:{id:string}}) {
  const {id} = await params.params;
  const user = data.find((user: { id: number; }) => user.id === parseInt(id));
  return Response.json(user)
}