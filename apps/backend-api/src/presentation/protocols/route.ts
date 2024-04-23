import { Router } from "express";

export interface RouteExpressInjector {
  handle(router: Router): void;
}
