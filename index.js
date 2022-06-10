document.getElementById("info").addEventListener("submit",(event)=>{
    event.preventDefault()
})
var arr=[]
var i=0

function represent(){
    var name=document.getElementById("ns").value
    var roll=document.getElementById("rn").value
    var sub1=document.getElementById("sub1").value
    var sub2=document.getElementById("sub2").value
    var sub3=document.getElementById("sub3").value
   i++
   var obj= {Name: name,Roll: roll,S1:sub1,S2:sub2,S3:sub3}
  arr.push(obj)
   var table=document.getElementById("details")
  var row=table.insertRow(i)
  var col1=row.insertCell(0)
  var col2=row.insertCell(1)
  var col3=row.insertCell(2)
  var col4=row.insertCell(3)

  col1.innerHTML=i

  col2.innerHTML=name
  col2.setAttribute("id",name)
  col3.innerHTML=roll
  col4.innerHTML=Number(sub1)+Number(sub2)+Number(sub3)


      var x=document.getElementById(name)
      x.addEventListener('mouseover',()=>{
        x.innerHTML=obj.Name+"<br>Subject1: "+obj.S1+"<br>Subject2: "+obj.S2+"<br>Subject3: "+obj.S3
      })
      x.addEventListener('mouseout',()=>{
        x.innerHTML=obj.Name
    })
      
  }
