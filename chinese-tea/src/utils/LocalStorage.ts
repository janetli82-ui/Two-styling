export function setSavedItem(key: string, value: unknown) {
  try{
    window.localStorage.setItem(key, JSON.stringify(value));
  }catch(error){
    console.log(error);
  }
}

export function getSavedItem(key: string){
  try{
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  }catch(error){
    console.log(error);
  }
}
