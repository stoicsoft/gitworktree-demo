function login(username, password) {
  // TODO: real auth
  return { ok: username === 'admin' && password === 'secret', token: 'fake-jwt' }
}

function logout(token) {
  return { ok: true, token: null }
}

module.exports = { login, logout }
