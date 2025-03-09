let choice;
let n
let flag
let sum = 0
let array = []
do {
    choice = +prompt(`
        ============= MENU =============
        1. Nhập số phần tử cần nhập và giá trị các phần tử  
        2. Hiển thị các phần tử đang quản lý  
        3. Hiển thị các phần tử chẵn, tính tổng và sắp xếp giảm dần  
        4. Hiển thị giá trị lớn nhất, nhỏ nhất và vị trí của chúng  
        5. Hiển thị các số nguyên tố trong mảng và tính tổng  
        6. Nhập một số và đếm số lần xuất hiện trong mảng  
        7. Thêm một phần tử vào vị trí chỉ định  
        8. Xóa một phần tử theo giá trị  
        9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần  
        0. Thoát  
        ================================
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                let inputString = prompt(
                    "Nhập các phần tử của mảng, cách nhau bằng dấu phẩy (,):"
                  );
                  let tempArray = inputString.split(",");
                  array = [];
                  for (let i = 0; i < tempArray.length; i++) {
                    let value = +tempArray[i].trim();
                    if (isNaN(value)) {
                      console.log("Dữ liệu không hợp lệ! Hãy nhập lại.");
                      array = [];
                      break;
                    }
                    array.push(value);
                  }
                  if (array.length > 0) {
                    console.log("Mảng đã nhập:", array);
                  }
                  break;
            case 2:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                console.log(`Các phần tử trong mảng đang quản lý : ${array}`);
                break;
            case 3:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                sum = 0
                flag = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 == 0) {
                        flag = 1
                        console.log(`${array[i]  }`);
                        sum += array[i]
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    for (let j = 0; j < array.length-i-1; j++) {
                        if (array[j] < array[j+1]) {
                            let temp = array[j]
                            array[j] = array[j+1]
                            array[j+1] = temp
                        }
                    }
                }
                if (flag == 0) {
                    console.log(`Không có phần tử chẵn nào trong mảng`)
                }
                else{
                    console.log(`Tổng : ${sum}`);
                }
                break;
            case 4:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                let max = array[0]
                let min = array[0]
                for (let i = 0; i < array.length; i++) {
                    if (array[i] < min) {
                        min = array[i]
                    }
                    if (array[i] > max) {
                        max = array[i]
                    }
                }
                console.log(`Phần tử lớn nhất trong mảng : ${max}, Vị trí index : ${array.indexOf(max)}`);
                console.log(`Phần tử nhỏ nhất trong mảng : ${min}, Vị trí index : ${array.indexOf(min)}`);
                break;
            case 5:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                let prime
                flag = 0
                sum = 0
                for (let i = 0; i < array.length; i++) {
                    prime = 1
                    if (array[i] < 2) {
                        prime = 0;
                    } else {
                        for (let j = 2; j <= Math.sqrt(array[i]); j++) {
                            if (array[i] % j === 0) {
                                prime = 0;
                                break;
                            }
                        }
                    }
                    if (prime === 1) {
                        console.log(`${array[i]} `);   
                        flag = 1
                        sum += array[i]
                    }
                }
                if (flag == 0) {
                    console.log(`Mảng không có số nguyên tố`);
                }
                else{
                    console.log(`Tổng : ${sum}`);
                }
                break;
            case 6:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                let count = 0
                let searchItem = +prompt("Nhập phần tử muốn tìm kiếm")
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == searchItem) {
                        count++
                    }
                }
                if (count == 0) {
                    console.log(`Không tìm thấy`);
                }
                else{
                    console.log(`Phần tử ${searchItem} Xuất hiện ${count} lần`);
                }
                break;
            case 7:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                let addItem = +prompt("Nhập phần tử bạn muôn thêm")
                let addIndex = +prompt("Nhập vị trí muốn thêm")
                if (addIndex > n) {
                    console.log(`Vị trí không hợp lệ`);
                    break
                }
                for (let i = n; i > addIndex; i--) {
                    array[i] = array[i-1]
                }
                array[addIndex] = addItem
                break;
            case 8:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                let deleteItem = +prompt("Nhập giá trị muốn xóa")
                let deleteIndex = array.indexOf(deleteItem)
                if (deleteIndex < 0) {
                    console.log(`Không tìm thấy trong mảng`);
                    break
                }
                for (let i = deleteIndex; i < array.length; i++) {
                    array[i] = array[i+1]
                }
                n--;
                break
            case 9:
                if (array.length == 0) {
                    console.log(`Hãy nhập mảng trước`);
                    break
                }
                choice = +prompt(`
                    1, Sắp xếp mảng theo thứ tự giảm dần
                    2, Sắp xếp mảng theo thứ tự tăng dần
                    `)
                    switch (choice) {
                        case 1:
                            for (let i = 0; i < array.length; i++) {
                                for (let j = 0; j < array.length-i-1; j++) {
                                    if (array[j] < array[j+1]) {
                                        let temp = array[j]
                                        array[j] = array[j+1]
                                        array[j+1] = temp
                                    }
                                }
                            }
                            break;
                        case 2:
                            for (let i = 0; i < array.length; i++) {
                                for (let j = 0; j < array.length-i-1; j++) {
                                    if (array[j] > array[j+1]) {
                                        let temp = array[j]
                                        array[j] = array[j+1]
                                        array[j+1] = temp
                                    }
                                }
                            }
                            break;
                        default:
                            console.log("Lựa chọn không đúng");
                            break;
                    }
                break
            case 0:
                console.log(`Xin chào`);
                break;
            default:
                console.log(`Lựa chọn không đúng`);
                break;
        }
} while (choice !== 0);