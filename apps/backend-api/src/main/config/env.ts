require('dotenv').config()
import { z } from "zod";

const env = z
  .object({
    PORT: z.string().transform(value => Number(value)),
  })
  .parse(process.env);

export { env }
