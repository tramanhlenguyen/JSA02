//VÒNG LẶP WHILE
// let i = 9; //Biểu thức 1: Khởi tạo biến lập
// while (i>5) { //Biểu thức 2: Điều kiện lập
//     console.log(i);
//     i--; //Biểu thức 3: thay đổi biến lập sau mỗi lần lập
// }

//VÒNG LẶP DO WHILE
// let i = 15;
// do {
//     console.log(i);
//     i++;
// } while (i<15) 

//=>Vòng lặp while: check điều kiện trước khi in (nếu sai, ko in)
//Vòng lặp do-while: in trước khi check. Nếu đúng, in tiếp. Sai: chỉ in 1 lần

//VÒNG LẶP FOR
// for (let i=15; i<30; i++) {
//     console.log(i)
// }

//ARRAY (MẢNG)
let listname = ["axolotl", "platypus", "monarch"];
    //CREATE
// console.log(listname);
// console.log(typeof(listname));
// listname.push("jellyfish");
// console.log(listname)
    //READ
// console.log(listname[0])

    //UPDATE
// listname[0] = "bonjour";
// console.log(listname)

    //DELETE
// listname.pop(); = xóa phần tử cuối cùng trong mảng 
// listname.splice(1,1); = xóa phần tử ở bất kì vị trí . Tham số 1 - vị trí bắt đầu xóa. 2 - phần tử muốn xóa
// console.log(listname);


//OBJECT (VẬT THỂ)
    //READ
// let user = {
//     name : "Axolotl",
//     age : 1, 
//     job: "student", 
//     location: "idontknow",
// }
// console.log (user)

    //CREATE
// user.company="Mind X";
// console.log(user);

    //UPDATE
// user.locaton = "HN"
// console.log(user)

    //DELETE
// delete user.company
// console.log(user)
let myComputer = {
    name: "LAPTOP-17LSU5ON",
    brand: "ACER",
    model: "N17W7",
    weight: "1.3kg",
    inusefor: "3 years",
    ram: 16,
    os: "Window",
    img : "https://no1computer.vn/images/products/2022/11/08/large/acer-swift-3-sf314-h8_1667882633.jpg"
}
let product = document.getElementById("product")
let img = document.createElement("img");
 img.src = myComputer.img;
product.appendChild(img);

let brand = document.createElement('h3');
brand.innerText = myComputer.brand;
product.appendChild(brand);

let model = document.createElement('h3');
model.innerText = myComputer.model;
product.appendChild(model);

let weight = document.createElement('h3');
weight.innerText = myComputer.weight;
product.appendChild(weight);

let inusefor = document.createElement('h3');
inusefor.innerText = myComputer.inusefor;
product.appendChild(inusefor);

let ram = document.createElement('h3');
ram.innerText = myComputer.ram;
product.appendChild(ram);

let os = document.createElement('h3');
os.innerText = myComputer.os;
product.appendChild(os);

