import * as jose from "jose";

import { env } from "@/lib/env";
import { getItem } from "@/lib/utils/localStorage";
import { UndoIcon } from "lucide-react";

const JWT_SECRET_KEY = "stefkebrat";
const jwtSecret = new TextEncoder().encode(JWT_SECRET_KEY);

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getDatabaseTable = (entity) => getItem(env.DB_KEY)?.[entity];

export const withAuth =
  (...data) =>
  async (config) => {
    const token = config.headers.Authorization?.split(" ")[1];

    // Verifies acces token if present
    const verified = token ? await verifyToken(token) : false;

    // Returns 403 if token is invalid and auth is enabled
    if (env.USE_AUTH && !verifed) {
      return [403, { message: "Unauthorized" }];
    }

    // Calls the original mock function
    return typeof data[0] === "function" ? data[0](config) : data;
  };

