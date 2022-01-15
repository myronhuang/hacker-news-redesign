//Check Local Storage for Saved State
export const checkLocalStorage = (key) => {
    try{
      const stringifiedState = localStorage.getItem("state");

      if (stringifiedState === null) {
        return undefined;
      }
      
      return JSON.parse(stringifiedState)[key];
  
    }catch(err){
      console.log(err);
      return undefined;
    }
  }
  
//Saves Current State to Local Storage
export const saveStateToLocalStorage = (state) => {
    try {
      const stringifiedState = JSON.stringify(state);
      localStorage.setItem("state", stringifiedState);
  
    } catch (err) {
      return undefined;
    }
  }