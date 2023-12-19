import { APIClient } from "./client";

const API_HOST = process.env.API_HOST || "http://localhost:8080";
export const apiClient = new APIClient(API_HOST);
