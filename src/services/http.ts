export async function http<T>(
  url: string,
  config: RequestInit = {}
): Promise<T> {
  return await fetch(url, config).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

export async function get<T>(
  url: string,
  config: RequestInit = {
    method: "GET",
  }
): Promise<T> {
  return await http<T>(url, config).then((data) => data as T);
}

export async function post<T>(
  url: string,
  data: any,
  config: RequestInit = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }
): Promise<T> {
  return await http<T>(url, config);
}

export async function put<T>(
  url: string,
  data: any,
  config: RequestInit = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }
): Promise<T> {
  return await http<T>(url, config);
}

export async function del<T>(
  url: string,
  config: RequestInit = {
    method: "DELETE",
  }
): Promise<T> {
  return await http<T>(url, config);
}

export async function patch<T>(
  url: string,
  data: any,
  config: RequestInit = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }
): Promise<T> {
  return await http<T>(url, config);
}
