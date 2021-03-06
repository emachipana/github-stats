import { BASE_URI, tokenKey } from "../config";

async function githubClient(endpoint, { method, headers, body } = {}) {
  const token = sessionStorage.getItem(tokenKey);

  if(token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers
    };
  }

  if(body) {
    headers = {
      "Content-Type": "application/json",
      ...headers
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;

  if(!response.ok) {
    if(sessionStorage.getItem(tokenKey) && response.status === 401) {
      sessionStorage.removeItem(tokenKey);
      window.location.reload();
    };

    try {
      data = await response.json();
    }catch(e) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  };

  try {
    data = await response.json();
  }catch(e) {
    data = response.statusText;
  }

  return data;
}

export default githubClient;
