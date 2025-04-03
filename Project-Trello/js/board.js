document.querySelectorAll('.checkboxFilter').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        document.querySelectorAll('.checkboxFilter').forEach(cb => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });


  let myEditor;
      document.addEventListener("DOMContentLoaded", function () {
        ClassicEditor.create(document.querySelector("#editor"))
          .then((editor) => {
            myEditor = editor;
          })
          .catch((error) => {
            console.error("Có lỗi xảy ra khi khởi tạo CKEditor:", error);
          });
      });

      function handleGetValue() {
        console.log("Nội dung:", myEditor.getData());
      }