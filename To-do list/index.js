
let id="no"; //bcz of i problm we tk no
showData();
showEmpty();
//localStorage.clear();
function manageData() {
    document.getElementById('msg').innerHTML=""; // remove msg 
    let name = document.getElementById('name').value;
    if(name=='') {
        document.getElementById('msg').innerHTML = "please enter Task name";
    }
    else {
        if(id=='no') {
            let arr = JSON.parse(localStorage.getItem('crud'));
            console.log(arr);
            if(arr == null) {
                let data =[name];
                localStorage.setItem('crud',JSON.stringify(data));
            } else {
                arr.push(name);
                localStorage.setItem('crud',JSON.stringify(arr));
            }
            document.getElementById('name').value=''; //clear form
            document.getElementById('msg').innerHTML="Data Inserted succefully.";
        } else {
            let arr = JSON.parse(localStorage.getItem('crud'));
            arr[id] = name;
            localStorage.setItem('crud',JSON.stringify(arr));
            document.getElementById('msg').innerHTML="Data Updated succefully.";
        }
        document.getElementById('name').value=''; //clear form
        showData();
    }
}

function deleteData(rid) {
let arr = JSON.parse(localStorage.getItem('crud'));
arr.splice(rid,1);
localStorage.setItem('crud',JSON.stringify(arr));
document.getElementById('msgdlt').innerHTML="Data deleted succefully.";
showData();
}

function editData(rid) {
    id=rid;
    let arr = JSON.parse(localStorage.getItem('crud'));
    document.getElementById('name').value = arr[rid];
}

function showData() {
 let arr = JSON.parse(localStorage.getItem('crud'));
 if(arr!=null) {
     let html='';
     let sn =1;
     for(let k in arr) {
         html = html+ 
         `<tr><td class="text-center">${sn}</td><td class="text-center">${arr[k]}</td>  <td>
         <a href='javascript:void(0)' onclick="editData(${k})" class=" edit btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
         </svg></a>
      <a href='javascript:void(0)' onclick="deleteData(${k})" class=" edit btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg></a></td><td id="empty"></td></tr>`;
         sn++;
       
        // console.log(html);
     }
     document.getElementById('root').innerHTML=html; //root tbody id
 }

}

// function showEmpty() {
//     let arr = JSON.parse(localStorage.getItem('crud'));
//     if(arr=="") {
//         document.getElementById('empty').innerHTML="Empty"; //root tbody id
//     }
// }

