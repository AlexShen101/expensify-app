export { login, logout }

const login = (uid) => ({
    type: 'LOGIN',
    uid
})

const logout = () => ({
    type: 'LOGOUT'
})