let books = [];
function addBook(id, title, author, year, price, isAvailable) {
    let book = {
        id: id,
        title: title,
        author: author,
        year: year,
        price: price,
        isAvailable: isAvailable
    };
    books.push(book);
    alert("Sách đã được thêm thành công!");
}
function displayBooks() {
    if (books.length === 0) {
        alert("Không có sách trong thư viện.");
    } else {
        let bookList = "Danh sách sách trong thư viện:\n";
        books.forEach(book => {
            bookList += `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Price: ${book.price}, Available: ${book.isAvailable}\n`;
        });
        alert(bookList);
    }
}
function searchBook(title) {
    let result = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (result.length > 0) {
        let searchResult = "Kết quả tìm kiếm:\n";
        result.forEach(book => {
            searchResult += `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Price: ${book.price}, Available: ${book.isAvailable ? 'Có thể mượn' : 'Đã mượn'}\n`;
        });
        alert(searchResult);
    } else {
        alert("Không tìm thấy sách với tiêu đề này.");
    }
}
function updateBook(id, isAvailable) {
    let book = books.find(book => book.id === id);
    if (book) {
        book.isAvailable = isAvailable;
        alert(`Trạng thái sách với ID ${id} đã được cập nhật.`);
    } else {
        alert("Không tìm thấy sách với ID này.");
    }
}
function deleteBook(id) {
    let index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        let bookDelete = books[index];
            books.splice(index, 1);
            alert(`Sách "${bookDelete.title}" đã bị xóa.`);
    } else {
        alert("Không tìm thấy sách với ID này.");
    }
}
function sortBooks() {
    books.sort((a, b) => a.price - b.price);
    alert("Danh sách sách đã được sắp xếp theo giá tăng dần.");
}
    let choice=0;
    do {
        choice = +prompt(
            `------ MENU ------
            1. Thêm sách mới
            2. Hiển thị danh sách sách
            3. Tìm kiếm sách theo tiêu đề
            4. Cập nhật trạng thái mượn/trả sách theo ID
            5. Xóa sách theo ID
            6. Sắp xếp sách theo giá tăng dần
            7. Thoát
            Chọn chức năng (1-7):`
        );
        switch (choice) {
            case 1:
                let id = parseInt(prompt("Nhập ID sách:"));
                let title = prompt("Nhập tên sách:");
                let author = prompt("Nhập tác giả:");
                let year = parseInt(prompt("Nhập năm xuất bản:"));
                let price = parseFloat(prompt("Nhập giá sách:"));
                let isAvailable = prompt("Trạng thái (true/false)").toLowerCase();
                addBook(id, title, author, year, price, isAvailable);
                break;
            case 2:
                displayBooks();
                break;
            case 3:
                let searchTitle = prompt("Nhập tiêu đề sách để tìm kiếm:");
                searchBook(searchTitle);
                break;
            case 4:
                let updateId = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái:"));
                let isAvailableNe = prompt("Trạng thái mới (true/false):").toLowerCase();
                updateBook(updateId, isAvailableNe);
                break;
            case 5:
                let deleteId = parseInt(prompt("Nhập ID sách cần xóa:"));
                deleteBook(deleteId);
                break;
            case 6:
                sortBooks();
                break;
            case 7:
                break;
            default:
                alert("Chức năng không hợp lệ, vui lòng chọn lại.");
        }
    } while (choice !== 7);
