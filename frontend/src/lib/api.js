import axios from "axios";

// Prefer explicit backend URL if provided, else rely on CRA proxy via "/api"
const baseURL = process.env.REACT_APP_BACKEND_URL
  ? `${process.env.REACT_APP_BACKEND_URL}/api`
  : "/api";

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export async function submitContactForm(contactData) {
  const response = await apiClient.post("/contact", contactData);
  return response.data;
}

export async function createStatusCheck(clientName) {
  const response = await apiClient.post("/status", { client_name: clientName });
  return response.data;
}

export async function getStatusChecks() {
  const response = await apiClient.get("/status");
  return response.data;
}

export async function healthCheck() {
  const response = await apiClient.get("/healthz");
  return response.data;
}

