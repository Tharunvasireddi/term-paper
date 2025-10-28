import axios from "axios";

// Backend server URL
const API_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically if provided
function authHeaders(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// POST request
export async function post(path, body, token) {
  try {
    const res = await api.post(path, body, { headers: authHeaders(token) });
    return res.data;
  } catch (err) {
    return handleError(err);
  }
}

// GET request
export async function get(path, token) {
  try {
    const res = await api.get(path, { headers: authHeaders(token) });
    return res.data;
  } catch (err) {
    return handleError(err);
  }
}

// PUT request
export async function put(path, body, token) {
  try {
    const res = await api.put(path, body, { headers: authHeaders(token) });
    return res.data;
  } catch (err) {
    return handleError(err);
  }
}

// DELETE request
export async function del(path, token) {
  try {
    const res = await api.delete(path, { headers: authHeaders(token) });
    return res.data;
  } catch (err) {
    return handleError(err);
  }
}

// Centralized error handling
function handleError(err) {
  if (err.response) {
    // Server responded with error status
    return { message: err.response.data.message || "Server error" };
  } else if (err.request) {
    // No response from server
    return { message: "No response from server" };
  } else {
    // Something else went wrong
    return { message: err.message || "Unexpected error" };
  }
}
