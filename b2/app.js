// Bài 1: đảo ngược string:

let string = prompt("nhập 1 chuỗi:");
function reverseString(str){
    let arrString = str.split("");
    let reverse = arrString.reverse();
    let result = reverse.join("");
    return result;
}
alert(reverseString(string));


// Bài 2: Xóa phần tử trùng lặp:

let inputArr=[1, 8, 8, 9, 4, 3, 1, 5, 1, 10];

let resultArr=[];
for (let i = 0; i <= inputArr.length; i++){
    if (resultArr.includes(inputArr[i])){
    } else resultArr.push(inputArr[i])
}
alert(resultArr)

// Bài 3: Tìm và đếm phần tử xuất hiện nhiều nhất:


function findAndDelete(){
    inputArr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    let max =[0,0];
    let count =1;
    for (let i = 0; i <= inputArr.length; ++i) {
        if (inputArr[i] == inputArr[i+1]) ++count;
        else {
            if (max[1] < count){
                max[0] = inputArr[i]
                max[1] = count
            }count = 1
        }
    }
    alert(`Số ${max[0]} xuất hiện nhiều nhất với tần suất ${max[1]} lần`)
}
findAndDelete()

// Bài 4: Danh bạ:
// let nameInput = document.querySelector("#name").innerText;
// let phoneInput = document.querySelector("#phoneNumber").value
// let find = document.querySelector('#find')
// function addPhoneNumber() {
//     let items = ""
//     items += '<p>' + nameInput + '</p>' +
//         '<p>' + phoneInput + '</p>';
//     document.getElementById("items").innerHTML = items;
// }