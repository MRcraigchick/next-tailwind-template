export const serverDomain = `http://localhost:3001`;

function constructServerURL(endpoint) {
  return `${serverDomain}${endpoint}`;
}

export async function getRequest(endpoint, headers = {}) {
  const result = await fetch(constructServerURL(endpoint), {
    method: "GET",
    headers: {
      ...headers,
    },
  });
  return result;
}

export async function postRequest(endpoint, data, headers = {}) {
  const result = await fetch(constructServerURL(endpoint), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
  return result;
}

export async function deleteRequest(endpoint, data, headers = {}) {
  const result = await fetch(constructServerURL(endpoint), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: data && JSON.stringify(data),
  });
  return result;
}

export async function putRequest(endpoint, data, headers = {}) {
  const result = await fetch(constructServerURL(endpoint), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: data && JSON.stringify(data),
  });
  return result;
}

export async function searchRequest(endpoint, queryObj) {
  const url = new URL(constructServerURL(endpoint));
  Object.keys(queryObj).forEach((key) =>
    url.searchParams.append(key, queryObj[key])
  );
  const result = await fetch(url);
  return result;
}
