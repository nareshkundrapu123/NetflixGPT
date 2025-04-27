export const checkValidData= (emial,password)=>{


 const isEmailvalid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emial);
 const isPasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 if(!isEmailvalid) return "Email ID is not valid";
 if(!isPasswordvalid) return "Password is not valid";
 
 
 return null;


};