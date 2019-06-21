const defaultState = {
id:'',
name:'',
email:'',
};

export default function(state=defaultState, action) {
  switch(action.type) {
    case 'loginInfo':
      return {
        ...state,
        id:action.value.id,
        name:action.value.name,
        email:action.value.email,
      };      
    case 'logoutInfo':
    console.log("output:logout")
    return defaultState;
    default:
      return defaultState;
  }
}
