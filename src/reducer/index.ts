const defaultState = {
  about_business:'',
  country:'',
  email:'',
  name:'',
  phone:'',
  privateKey:'',
  provider_name:'',
  provider_type:'',
  publicKey:'',
  website:'',
};

export default function(state=defaultState, action) {
  switch(action.type) {
    case 'loginInfo':
      return {
        ...state,
        about_business:action.value.about_business,
        country:action.value.country,
        email:action.value.email,
        name:action.value.name,
        phone:action.value.phone,
        privateKey:action.value.privateKey,
        provider_name:action.value.provider_name,
        provider_type:action.value.provider_type,
        publicKey:action.value.publicKey,
        website:action.value.website,
      };      
    case 'logoutInfo':
    console.log("output:logout")
    return defaultState;
    default:
      return defaultState;
  }
}
