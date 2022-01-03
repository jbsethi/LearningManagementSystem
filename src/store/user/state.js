function isAuthCookie() {
  return true;
}

const state = {
  isLoggedIn: isAuthCookie(),
}

export default state