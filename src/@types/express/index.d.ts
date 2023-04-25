import { Edge } from "edge.js";

declare global {
  namespace Express {
    interface Request {
      id_user?: string;
      rule_user?: string;
    }
  }
}
