<<<<<<< HEAD
// const firstNameChange = (e)=>{
//     console.log(e.target.value);
// }
// const firstNameChange = (e)=>{
//     console.log(e);
// }

const firstNameChange = (e) => {
  const val = e.target.value;
  if (val.length > 3) {
    console.log("correct");
  }
};
const submitForm = (e) => {
  e.preventDefault();

  for (let i = 0; i < e.target.length; i++) {
    const a = e.target;

    if (a[i].type == "checkbox") {
      if (a[i].checked) {
        console.log(a[i].name + "  " + a[i].value);
      }
    } else {
      console.log(a[i].name + "  " + a[i].value);
    }
  }
};
=======
// const firstNameChange = (e)=>{
//     console.log(e.target.value);
// }
// const firstNameChange = (e)=>{
//     console.log(e);
// }

const firstNameChange = (e)=>{
    const val = e.target.value;
    if(val.length>3){
        console.log('correct');
    }
}
const  submitForm = (e)=>{
    e.preventDefault();
  
    for(let i=0;i<e.target.length;i++)
    {
        const a = e.target;
        
        if(a[i].type == 'checkbox'){
            if(a[i].checked){
                console.log(a[i].name+"  "+a[i].value);
            }
        }
        else{
            console.log(a[i].name+"  "+a[i].value);
        }
    }
}
>>>>>>> 337dbe4cde9fe131f11d934f72fd889a2217b15c
