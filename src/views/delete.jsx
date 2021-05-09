export function Delete(){
  const deleteAllData = () => {
    localStorage.clear('IsaacReactApp-AboutStore');
    localStorage.clear('IsaacReactApp-BlogStore');
    localStorage.clear('IsaacReactApp-UserStore');
    localStorage.clear('IsaacReactApp-DrawingStore');
    sessionStorage.clear('IsaacReactApp-SessionStore');
    window.location.reload();
  }
  return(
    <button onClick={deleteAllData}>Delete LocalStorage and SessionStorage</button>
  )
}