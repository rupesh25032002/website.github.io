
class alldata {
  constructor(name, snacks, qty) {
    this.name = name;
    this.snacks = snacks;
    this.qty = qty;
  }
  display() {
    let customername = formid.customer_name.value;
    let snacks = formid.snacks_name.value;
    let qty = formid.snacks_qty.value;
    let tablecustomervalue = document.getElementById("tbody");
    

    if (customername.length > 2 & snacks.length > 2 & qty > 0) {
      let amount;
      if(snacks=="Tea"){
        amount=10;
      }
      else if(snacks=="Coffe"){
        amount=15;
      }
      else if(snacks=="Samosa"){
        amount=12;
      }
      else if(snacks=="Biryani"){
        amount=50;
      }
      else if(snacks=="Jalebi"){
        amount=30;
      }
      console.log(tablecustomervalue);
      let currentvalue = `<tr>
    <td>${this.name}</td>
    <td>${this.snacks}</td>
    <td>${this.qty}</td>
    <td>${amount*this.qty}</td>
  </tr>`
      tablecustomervalue.innerHTML += currentvalue;

      formid.customer_name.value = "";
      formid.snacks_name.value = "";
      formid.snacks_qty.value = "";
    }
    console.log(tablecustomervalue.rows.length)
  }
}


function takingdata(e) {
  let formid = document.getElementById("formid");
  let customername = formid.customer_name.value;
  let snacks = formid.snacks_name.value;
  let qty = formid.snacks_qty.value;

  localStorage.setItem("name", customername);
  localStorage.setItem("snacks", snacks);
  localStorage.setItem("qty", qty);

  let getname = localStorage.getItem("name");
  let getsnacks = localStorage.getItem("snacks");
  let getqty = localStorage.getItem("qty");

  let obj = new alldata(getname, getsnacks, getqty);
  obj.display();
  e.preventDefault();

}

document.getElementById("order").addEventListener("click", takingdata);