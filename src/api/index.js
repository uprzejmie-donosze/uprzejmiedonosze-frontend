import { APIClient } from "./client";

const API_HOST = process.env.API_HOST;
export const apiClient = new APIClient(API_HOST);
