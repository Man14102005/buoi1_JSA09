// console.log():in ra màn hình console
console.log("Hello World");

console.log("Trần Minh Mẫn")
console.log("17")
console.log("ĐH FPT")

// global - local
// global: là một biến có thể gọi tất cả hay mọi nơi ở trong code của mình.
// vare (biến số) - const (hằng số):
var name = "Minh Mẫn"
// var: cách khai báo biến
// name: tên biến - có thể thay đổi tùy thuộc vào ngữ cảnh sử dụng
// =: gán cho nhau 1 giá trị
// "Minh Mẫn": giá trị của biến

console.log(name);
// Phương pháp cộng chuỗi name + đoạn văn
console.log(name + " đi code dạo");
console.log(name + " đi chơi");
console.log(name + " đi chơi game");

var userName = "Mẫn"
console.log(userName + " đăng nhập");
// truyền date /biến vào console.log thì sử dụng ${data}
console.log(`${userName} đăng nhập`);
// console.log(`${userName} =`)

// 1.Kiểu dữ liệu
// Kiểu số - number: số nguyên, số thực
var numberInteger = 10; // số nguyên
// Số nguyên: 10
var numberFloat = 10.5; // số thực
// Số thực: 10.5

console.log(`Số nguyên: ${numberInteger}`);
console.log("Số nguyên: " + numberInteger);

console.log(`Số thực: ${numberFloat}`);
console.log("Số thực: " + numberFloat);

//  2.Kiểu chuỗi - string ""
console.log("Học code cùng thầy Phong")

// 3.Kiểu Boolean - đúng sai nó sẽ mang 2 giá trị: true và false
console.log(true);
console.log(false);

// 4. undefinded - không xác dịnh tuy nhiên vẫn mang trong mình một giá trị bất kì
console.log(undefined);

// 5.null - rỗng và không mang bất kì giá trị hay là dữ liệu nào hết
console.log(null);

// 6.array - nơi lưu trữ các dữ liệu
var listArray = ["Trần Minh Mẫn", 17, "male", true]
// Lưu ý: null, undefined vẫn nhẫn trong Array
// Tên: Trần Minh Mẫn
console.log("Tên: " + listArray[0])
console.log(`Tên: ${listArray[0]} `)
// Tuổi: 17
console.log(`Tuổi: ${listArray[1]} `)
// Giới tính: Nam
console.log(`Giới tính: ${listArray[2]} `)
// Trong mối quan hệ: True
console.log(`Tên: ${listArray[3]} `)

// 7.object - đối tượng. Ta cần quan tâm 2 thứ: key - values
var cat = {
    name: "Dog",
    age: 4,
    fur: "Golden",
    type: "ALN",
}
console.log(cat.name)
console.log(cat.type)
console.log(cat.fur)
console.log(cat.age)
