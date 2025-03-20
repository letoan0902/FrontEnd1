let meo = document.querySelectorAll(".meo");

for (let i = 0; i < meo.length; i++) {
    meo[i].addEventListener("click", function() {
        if (this.style.width === "100vw") {
            this.style.position = "";
            this.style.left = "";
            this.style.width = "200px";
            this.style.height = "200px";
        } else {
            this.style.position = "fixed";
            this.style.top = "0";
            this.style.left = "0";
            this.style.width = "100vw";
            this.style.height = "100vh";
        }
    });
}