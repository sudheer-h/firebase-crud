import {app} from './config.js'
import { getDatabase,set,ref,get,child,update,remove} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
const db=getDatabase();
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",()=>{
    let name=document.getElementById("name").value;
    let rollno=document.getElementById("rollno").value;
    let email=document.getElementById("email").value;
    let branch=document.getElementById("branch").value;
    set(ref(db, "Students/" + rollno),{
        name:name,
        rollno:rollno,
        email:email,
        branch:branch

    }).then(() => {


        alert("Successfully Updated")
    }).catch(() => {
        alert("Sorry database is not updated")
    })
})
let del=document.getElementById("delete");
del.addEventListener("click",()=>{
    let rollno=document.getElementById("rollno").value;
    remove(ref(db,"Students/"+rollno),{
        rollno:rollno
    }).then(()=>{
        alert("Data deleted successfully");
    }).catch(()=>{
        alert("Enter valid data to be deleted")
    })
})
let up=document.getElementById("update");
up.addEventListener("click",()=>{
    let name=document.getElementById("name").value;
    let rollno=document.getElementById("rollno").value;
    let email=document.getElementById("email").value;
    let branch=document.getElementById("branch").value;
    update(ref(db,"Students/"+rollno),{
        name:name,
        rollno:rollno
    }).then(()=>{
        alert("Record updated successfully");
    }).catch(()=>{
        alert("Record not updated,Try again..!!!")
    })
})




          get(child(ref(db),"Students")).then((snapshot)=>{
            
            tab.innerHTML+=`
                <style>
                #values{
                    border:1px solid black;
                }
                </style>
                <tr>
                <th id="values">Name</th>
                <th id="values">Rollno</th>
                <th id="values">Email</th>
                <th id="values">Branch</th>
                </tr>`
            for(const key in snapshot.val()){
                tab.innerHTML+=`
                <style>
                #val{
                    border:1px solid black;
                }
                </style>
                <tr>
                <td id="val">${snapshot.val()[key].name}</td>
                <td id="val">${snapshot.val()[key].rollno}</td>
                <td id="val">${snapshot.val()[key].email}</td>
                <td id="val">${snapshot.val()[key].branch}</td>
                </tr>`
            }
          })

   
