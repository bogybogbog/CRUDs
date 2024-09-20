var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategortInput = document.getElementById("productCategort");
var ProductDescriptionInput = document.getElementById("ProductDescription");
var productImageInput = document.getElementById("productImage");
var myRow = document.getElementById("myRow");
var searchInput = document.getElementById("searchInput");
var addBtn = document.getElementById("addBtn");
var editBtn = document.getElementById("editBtn");
var myIndex;
var ProductList;

if (localStorage.getItem("products") == null) {
  ProductList = [];
} else {
  ProductList = JSON.parse(localStorage.getItem("products"));
  display(ProductList);
}
function addProduct() {
  // console.log(productImageInput.files[0].name);
  if (
    productNameInput.classList.contains("is-valid") &&
    productPriceInput.classList.contains("is-valid") &&
    productCategortInput.classList.contains("is-valid") &&
    ProductDescriptionInput.classList.contains("is-valid")
  ) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategortInput.value,
      desc: ProductDescriptionInput.value,
      img: `crudImg/${productImageInput.files[0]?.name}`, // optional chaning
    };
    ProductList.push(product);
    localStorage.setItem("products", JSON.stringify(ProductList));
    console.log(ProductList);
    clear();
    display(ProductList);
  } else {
    alert("not valid data");
  }
}
function display(arr) {
  var cartona = "";
  for (var i = 0; i < arr.length; i++) {
    cartona += `<div class="col-md-2">
          <div class="item">
            <img src="${arr[i].img}" class="w-100" alt="">
            <h2 class="h5">Name : ${arr[i].name}</h2>
            <p>Price :${arr[i].price} </p>
            <p>Category :${arr[i].category} </p>
            <p>Desc : ${arr[i].desc} </p>
            <button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm w-100">Delete <i class="fas fa-trash-alt ms-3"></i></button>
            <button onclick="updateProduct(${i})" class="btn btn-outline-info btn-sm w-100 my-2">Update <i class="fas fa-pen-alt ms-3"></i></button>
          </div>
        </div>`;
  }
  myRow.innerHTML = cartona;
}
function clear() {
  productNameInput.value = null;
  productPriceInput.value = null;
  ProductDescriptionInput.value = null;
  productCategortInput.value = null;
  productImageInput.value = null;
}
function deleteProduct(deletedIndex) {
  ProductList.splice(deletedIndex, 1);
  display(ProductList);
  localStorage.setItem("products", JSON.stringify(ProductList));
  console.log(ProductList);
}
function search() {
  // var word = searchInput.value;
  // var cartona = "";
  // for (var i = 0; i < ProductList.length; i++) {
  //   if (ProductList[i].name.toLowerCase().includes(word.toLowerCase())) {
  //     cartona += `<div class="col-md-2">
  //         <div class="item">
  //           <img src="css/5bc2f42d9f9d5c2db96e7aa2_Img.png" class="w-100" alt="">
  //           <h2 class="h5">Name : ${ProductList[i].name}</h2>
  //           <p>Price :${ProductList[i].price} </p>
  //           <p>Category :${ProductList[i].category} </p>
  //           <p>Desc : ${ProductList[i].desc} </p>
  //           <button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm w-100">Delete <i class="fas fa-trash-alt ms-3"></i></button>
  //           <button onclick="updateProduct(${i})" class="btn btn-outline-info btn-sm w-100 my-2">Update <i class="fas fa-pen-alt ms-3"></i></button>
  //         </div>
  //       </div>`;
  //   }
  // }
  // myRow.innerHTML = cartona;
  var word = searchInput.value;
  var searchedList = [];
  for (var i = 0; i < ProductList.length; i++) {
    if (ProductList[i].name.toLowerCase().includes(word.toLowerCase())) {
      searchedList.push(ProductList[i]);
    }
  }
  display(searchedList);
}
function valedate(element) {
  var redex = {
    productName: /^[A-Z][a-z]{2,7}$/,
    productPrice: /^[1-9][0-9]{0,4}$/,
    productCategort: /^(tv|mobile|screen|pc)$/i,
    ProductDescription: /^.{0,10}$/,
  };
  // console.log(redex[element.id]);

  if (redex[element.id].test(element.value)) {
    // console.log("match");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    // console.log("not match");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.replace("d-none", "d-block");
  }
}
function updateProduct(updatedIndex) {
  console.log(updatedIndex);
  myIndex = updatedIndex;
  productNameInput.value = ProductList[updatedIndex].name;
  productPriceInput.value = ProductList[updatedIndex].price;
  productCategortInput.value = ProductList[updatedIndex].category;
  ProductDescriptionInput.value = ProductList[updatedIndex].desc;
  productNameInput.classList.add("is-valid")
  productPriceInput.classList.add("is-valid")
  productCategortInput.classList.add("is-valid")
  ProductDescriptionInput.classList.add("is-valid")

  addBtn.classList.add("d-none");
  // editBtn.classList.replace("d-none", "d-block");
  editBtn.classList.remove("d-none");
}
function editProduct() {
  if (
    productNameInput.classList.contains("is-valid") &&
    productPriceInput.classList.contains("is-valid") &&
    productCategortInput.classList.contains("is-valid") &&
    ProductDescriptionInput.classList.contains("is-valid")
  ) {
    console.log(myIndex);
    ProductList[myIndex].name = productNameInput.value;
    ProductList[myIndex].price = productPriceInput.value;
    ProductList[myIndex].category = ProductDescriptionInput.value;
    ProductList[myIndex].desc = productCategortInput.value;
    localStorage.setItem("products", JSON.stringify(ProductList));
  
    display(ProductList);
    addBtn.classList.remove("d-none");
    // editBtn.classList.replace("d-none", "d-block");
    editBtn.classList.add("d-none")
  }
else alert("not valid data")
}
// localStorage.setItem("userName", "ahmed");
// var x = localStorage.getItem("userName");  
// console.log(x);
// localStorage.clear();
// var x = localStorage.length;

//  ! string ////////////////////////

// var x = "samsung".charAt(3)
// var x = "samsung".at(-2)
// console.log(x[3]);
// var x = "samsung".slice(-5,-2)
// var x = "samsung".substring(1,4)
// var x = "samsung".toLocaleLowerCase("en")
// var x = "samsung".concat(" ahhh")
// var x = "   samsung   ".trim()
// var x = "   samsung   ".trimStart()
// var x = "   samsung   ".trimEnd()
// var x = "i am ahmed trying to work on that project".split(" ")
// var x = "i am ahmed trying to work on that project".split(" ").splice(0,3)
// var x = "i am ahmed trying to work on that project".split(" ").splice(0,3).join(" ")
// var x = "samsung".toLocaleLowerCase().includes("SAM".toLowerCase())
// var x = "i am ahmed trying to work on that project on".replace("on", "##")
// var x = "i am ahmed trying to work on that project on".replaceAll("on", "##")
// var x = "samsung".padStart(15, "$")
// var x = "samsung".padEnd(15, "$")
// var x = "samsung".length
// console.log(x);

// ! regex ==> validation ////////////////////////

// ^ ====> start
// $ ====> end
// \ ====> if u want to inser any char after this sympol
// "   * ====> {0,} from 0 char to infinity   "
//     + ====> {1,} from 1 char to infinity
// "   ? ====> {0,1} no char or just 1   "
//     d ====> [0-9]  "digit"  use it like "\d"
//     D ====> [^0-9]  "digit"  use it like "\D"  // ? ========> not
//     w ====> [0-9a-zA-Z_]   use it like "\w"
//     W ====> [^0-9a-zA-Z_]   use it like "\W"   // ? ========> not
// \s ====> space
// . ====> matches any char

// var x = /ab/; //includes ab
// var x = /[abc]/; //choose just on char from abc 'small'
// var x = /[^abc]/; //choose just on char not abc 'small' // ? ========> not
// var x = /[a-z]/; //choose just on char from a to z 'small'
// var x = /[0-9]/; //choose just on char from  0 to 9
// var x = /[a-z0-9]/; //choose just on char from a to z 'small' or from 0 to 9
// var x = /web[0-9]web/; //choose just on char from  0 to 9 ===> "web8web"
// var x = /[0-9]{4}/; //choose just 4 times on char from  0 to 9 ===> 1424
// var x = /[0-9]{4,7}/; //choose just 4 till 7 times on char from  0 to 9 ===> 1424 or 42454
// var x = /[0-9]{4,}/; //choose just 4 till infinity times on char from  0 to 9 ===> 1424 or 424543455323...
// var x = /web(developer|designer)/; // "webdeveloper" or "webdesigner"
// var x = /^01[1025][0-9]{8}$/; // egyption number
// the replace() string method can take redex and the "g" means global its like replaseAll() and "i" means case insensetive
// var x = "i am ahmed trying to work on that project on".replace(/ON/gi, "##")
// console.log(x);
