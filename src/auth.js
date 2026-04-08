const USERS = {
  admin: 'secret',
  alice: 'wonderland',
  bob: 'builder',
}

function login(username, password) {
  if (USERS[username] === password) {
    return { ok: true, token: `token-for-${username}` }
  }
  return { ok: false, token: null, error: 'invalid credentials' }
}

function logout(token) {
  return { ok: true, token: null }
}

module.exports = { login, logout }
