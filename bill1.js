et totalprice=0
let p=document.createElement('p')

function additem(){
   
    let table=document.getElementById('table')
    let row=table.insertRow(table.rows.length)
    var rowCount = table.rows.length; 
    console.log(rowCount)
    var cell1=row.insertCell(0);
    var td=document.createElement("td");
    td.textContent = document.getElementById('product').value
    cell1.appendChild(td);

    var cell2=row.insertCell(1);
    var td1=document.createElement("td");
    td1.textContent = document.getElementById('price').value
    cell2.appendChild(td1);

    var cell3=row.insertCell(2);
    var td2=document.createElement("td");
    td2.textContent = document.getElementById('quantity').value
    cell3.appendChild(td2);

    var cell4=row.insertCell(3);
    var td3=document.createElement("td");
    let total=document.getElementById('price').value *  document.getElementById('quantity').value
    td3.textContent =total
    totalprice+=total
    cell4.appendChild(td3);
        
    var cell5 = row.insertCell(4);  
    var element1 = document.createElement("input");  
    element1.type = "button";  
    var btnName = "button" + (rowCount + 1);  
    element1.name = btnName;  
    element1.setAttribute('value', 'Delete'); // or element1.value = "button";  
    element1.onclick = function () { removeRow(btnName); }  
    cell5.appendChild(element1);  
     
  
    let totaldiv=document.getElementById('totaldiv')
    p.textContent=`Total Amount = ${totalprice}`
    
    totaldiv.appendChild(p)
    }
   

    function removeRow(btnName) {  
        try {  
            var table = document.getElementById('table');  
            var rowCount = table.rows.length;//4  
            for (var i = 0; i < rowCount; i++) {  
                var row = table.rows[i];  
                var rowObj = row.cells[4].childNodes[0]; //button3 
                var reduce=row.cells[3].textContent //40
                console.log(row)
                console.log(rowObj.name)
                console.log(reduce)
                let totaldiv=document.getElementById('totaldiv')
                final=totalprice-reduce 
               
                p.textContent=`Total Amount = ${final}`
                totaldiv.appendChild(p)
                if (rowObj.name == btnName) {  
                    table.deleteRow(i);  
                    rowCount--;  
                }  
            }  
            totalprice=final
        } catch (e) {  
            alert(e);  
        }  
    } 
  
  
