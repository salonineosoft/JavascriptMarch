let arr = [];
function Add() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "Pls add data";
  } else {
    arr.push(name);
    //console.log(arr);
    var tbl = document.getElementById("root");
    var tr = document.createElement("tr");
    var sn = tr.appendChild(document.createElement("td"));
    var nm = tr.appendChild(document.createElement("td"));
    var edit = tr.appendChild(document.createElement("td"));
    var dlt = tr.appendChild(document.createElement("td"));
    for (let i = 0; i < arr.length; i++) {
      sn.innerHTML = i + 1;
      nm.innerHTML = arr[i];
      dlt.innerHTML = `<button class="fa fa-trash-o ml-3" aria-hidden="true" style="font-size:30px;color:red;" onclick="delFunc(${i})">Delete</button>`;
      edit.innerHTML = `<button class="fa fa-pencil-square-o ml-3" aria-hidden="true" style="font-size:30px;color:red;" onclick="editFunc(${i})">Edit</button>`;
      tbl.appendChild(tr);
    }
    document.getElementById('name').value="";
  }
}

function updatebybtn(i) {
    var addbtn = document.getElementById('btn');
    addbtn.style.display = 'inline';
    var editbtn = document.getElementById('edit');
    editbtn.style.display = 'none';
    if(document.getElementById('name').value == "") {
        document.getElementById('msg').innerHTML ="pls fill";
    }
    else{
        arr[i] =  document.getElementById('name').value;
        update();
        console.log(arr[i]);
    }
}

function editFunc(i) {
var addbtn = document.getElementById('btn');
addbtn.style.display = "none";
var editbtn = document.getElementById('edit');
document.getElementById('name').value = arr[i];
editbtn.innerHTML = `<button id="uid" onclick="updatebybtn(${i})">update</button>`
editbtn.style.display = "inline";
}

function update() {
    var tbl = document.getElementById('root');
    tbl.innerHTML = ""
    for(let i=0; i<arr.length; i++){
    var tr = document.createElement("tr");
    var sn = tr.appendChild(document.createElement("td"));
    var nm = tr.appendChild(document.createElement("td"));
    var edit = tr.appendChild(document.createElement("td"));
    var dlt = tr.appendChild(document.createElement("td"));
    sn.innerHTML = i + 1;
    nm.innerHTML = arr[i];
    dlt.innerHTML = `<button class="fa fa-trash-o ml-3" aria-hidden="true" style="font-size:30px;color:red;" onclick="delFunc(${i})">Delete</button>`;
    edit.innerHTML = `<button class="fa fa-pencil-square-o ml-3" aria-hidden="true" style="font-size:30px;color:red;" onclick="editFunc(${i})">Edit</button>`;
    tbl.appendChild(tr);
  }
  document.getElementById('name').value="";
    }


function delFunc(i) {
  arr.splice(i, 1);
  update();
}