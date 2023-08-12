var oldvalue=0;
var currentvalue=0;
var oper='';
var eop=false;
var txtdisplay=document.getElementById('txtDisplayid');
var innerTextdisplay=document.getElementById('lblDisplay');

 mouseover=(kim) =>
{
    //alert("yes");
    console.log(kim);
document.getElementById(kim.id).style.backgroundColor="red";
}
mouseout=(kim) =>
{
    //alert("yes");
    console.log(kim);
document.getElementById(kim.id).style.backgroundColor="grey";
}
IntakeNumber=(num) =>// Arrow function
{
    (eop===false)? txtdisplay.value += num: txtdisplay.value=num;
    
    eop=false;

    (innerTextdisplay.innerText.length>0)? //lenght check
    innerTextdisplay.innerText += num : innerTextdisplay.innerText=num; //concatination
   

   currentvalue=Math.abs(txtdisplay.value); //1

   console.log(currentvalue);

}

/* function IntakeNumber(num)
{
   /* if (eop===false)
    txtdisplay.value += num; //concatination
    else 
    txtdisplay.value=num;
    // (eop===false)?txtdisplay.value:+='
    // txtdisplay.value=num;

    (eop===false)? txtdisplay.value += num: txtdisplay.value=num;
    
    eop=false;

    //  if(innerTextdisplay.innerText.length>0) //lenght check
    //  innerTextdisplay.innerText += num; //concatination
    // else
    // innerTextdisplay.innerText=num;

    (innerTextdisplay.innerText.length>0)? //lenght check
     innerTextdisplay.innerText += num : innerTextdisplay.innerText=num; //concatination
    

    currentvalue=Math.abs(txtdisplay.value); //1

    console.log(currentvalue);
}

*/
Operater=(arth) =>
{
    eop=true;
    
    console.log(arth);
    innerTextdisplay.innerText+=arth;
     oper=arth;
    oldvalue=currentvalue; //old value is 1,current vaule = intake number
   
    console.log(oldvalue,currentvalue);
}

/*function Operater(arth)
{
 eop=true;
    
 console.log(arth);
 innerTextdisplay.innerText+=arth;
  oper=arth;
 oldvalue=currentvalue; //old value is 1,current vaule = intake number

 console.log(oldvalue,currentvalue);


}*/
Clear = () =>
{
    txtdisplay.value='';
    innerTextdisplay.innerText='';
    oldvalue=0;
    currentvalue=0;
    oper=''; 
}

/*function Clear()
{
    txtdisplay.value='';
    innerTextdisplay.innerText='';
    oldvalue=0;
    currentvalue=0;
    oper='';
}*/

IsEqualTo= () =>
{
    innerTextdisplay.innerText+='=';
//calculate();
txtdisplay.value=calculate(); 
}

/*function IsEqualTo()
{
    innerTextdisplay.innerText+='=';
//calculate();
txtdisplay.value=calculate();
}*/

//Arrow function
calculate=()=>
{
    return (oper==='+')?oldvalue+currentvalue:
     (oper==='-')?oldvalue-currentvalue:
     (oper==='*')?oldvalue*currentvalue:
     (oper==='/')?oldvalue/currentvalue:0;

}
/*function calculate()
{
    // using terinary operator
    return  (oper==='+')?oldvalue+currentvalue:
     (oper==='-')?oldvalue-currentvalue:
     (oper==='*')?oldvalue*currentvalue:
     (oper==='/')?oldvalue/currentvalue:0;

}*/

/*without return value
function calculate()
{
if(oper==='+')
document.getElementById('txtDisplayid').value=oldvalue+currentvalue;
else if (oper==='-')
document.getElementById('txtDisplayid').value=oldvalue-currentvalue;
else if (oper==='*')
{
    console.log(oldvalue,currentvalue);
    document.getElementById('txtDisplayid').value=oldvalue*currentvalue;
}

else if (oper==='/')
document.getElementById('txtDisplayid').value=oldvalue/currentvalue;
}*/