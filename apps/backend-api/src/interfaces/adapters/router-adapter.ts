import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";

 export interface RouterAdapter {
   route(httpRequest: HttpRequest): Promise<HttpResponse>
 }
 