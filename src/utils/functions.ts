/* this functions checks is localstorage available to read or write */

export function isLocalStorageAccessible() {
  if (typeof localStorage === 'object') {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  return false;
}
