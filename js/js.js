let z = document.getElementById("big")
let p = document.getElementById("p")

  // let div = document.createElement('div');
  // div.className = "alert";
  // let divv = document.createElement('p');

  // let c = document.createElement('div')
  // c.className = "c"
  // document.body.append(c);
  // let div1 = document.createElement('p');
  // let div2 = document.createElement('p');
  // let img = document.createElement("img")
  // img.src = "img/1.jpg"
  // img.style.width = "100"
  // div1.className = "alert1";
  // div2.className = "alert2";
  // divv.className = "alert3";

  // div1.innerHTML = "Samsung Galaxy S22 Ultra 256GB (Black)";
  // div2.innerHTML = "<strong>Всемd привет!</strong> Вы прочитали важное сообщение.";
  // c.append(img)
  // c.append(div1);
  // c.append(div2);




  // let c1 = document.createElement('div')
  // c1.className = "c1"
  // document.body.append(c1);
  // let div3 = document.createElement('p');
  // let div4 = document.createElement('p');
  // let img1 = document.createElement("img")
  // img1.src = "img/2.png"
  // img1.style.width = "100"
  // div3.className = "alert1";
  // div4.className = "alert2";
  // divv.className = "alert3";
  // div3.innerHTML = "Samsung Galaxy S22 Ultra 256GB (Green)";
  // div4.innerHTML = "<strong>Всемd привет!</strong> 583,900դր.";
  // c1.append(img1)
  // c1.append(div3);
  // c1.append(div4);

  // let c2 = document.createElement('div')
  // c2.className = "c2"
  // document.body.append(c2);
  // let div5 = document.createElement('p');
  // let div6 = document.createElement('p');
  // let img2 = document.createElement("img")
  // img2.src = "img/3.png"
  // img2.style.width = "100"
  // div5.className = "alert1";
  // div6.className = "alert2";
  // divv.className = "alert3";

  // div5.innerHTML = "Samsung Galaxy S22 Ultra 256GB (Black)";
  // div6.innerHTML = "<strong>Всемd привет!</strong> Вы прочитали важное сообщение.";
  // c2.append(img2)
  // c2.append(div5);
  // c2.append(div6);

let x = [
 {nkar:"img/1.jpg",name: "IPHONE-256GB", prase:"249,900դր", hin:"<del>260,000դր</del>"},
{  nkar:"img/2.png",name: "SAMSUNG-256GB(white)", prase:"583,900դր", hin:"<del>600,000դր</del>"},
 { nkar:"img/3.png",name: "SAMSUNG-256GB(black)", prase:"583,900դր", hin:"<del>600,000դր</del>"},


]

for (var i = 0; i < x.length; i++) {
  let c1 = document.createElement('div')
  c1.className = "c1"
  let img = document.createElement("img")
  img.src = x[i].nkar
  img.style.width = "200px"
  z.append(c1);
  c1.append(img);
  let div1 = document.createElement('p');
  let div2 = document.createElement('p');
  let div3 = document.createElement('p');

  div1.innerHTML = x[i].name
  div2.innerHTML =x[i].prase
  c1.append(div1)
  c1.append(div2)
  div3.innerHTML =x[i].hin
  c1.append(div3)
  div2.className = "div2"
  div1.className = "div1"


}
      

// function newFunction() {
//   Object.create(
//     let, p1 = document.createElement('p'));
//   p1.className = "p1";
//   document.body.append(div);

//   Object(
//     let, p2 = document.createElement('p'));
//   p2.className = "p2";


//   Object(
//     let, p3 = document.createElement('p'));
//   p3.style.color = "red";

//   Object(
//     let, p4 = document.createElement('p'));
//   p4.style.color = "red";

//   Object(
//     let, p5 = document.createElement('p'));
//   p5.style.color = "red";

   
// }
