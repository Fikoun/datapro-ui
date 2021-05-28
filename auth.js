const baseUrl = process.env.API_BASE_URL

async function query(path, params = null, config = {}) {
  let url
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  const response = await fetch(`${url}`, config)
  const data = await response.json()
  return data
}

async function getQuery(path, params) {
  return await query(path, params)
}

async function updateQuery(path, params, body) {
  return await query(path, params,
    {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });
}

export { baseUrl, getQuery, updateQuery }