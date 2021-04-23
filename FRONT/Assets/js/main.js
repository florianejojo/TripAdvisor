const $ = document;

// let button = $.querySelector("#formButton");
// var modal = $.querySelector(".modal");
// var backdrop = $.querySelector(".backdrop");

$.addEventListener("DOMContentLoaded", () => {
    console.log("page chargée ");

    $.querySelector("#formButton").addEventListener("click", async () => {
        console.log("click");
        $.querySelector(".behindModal").style.display = "none";

        $.querySelector(".backdrop").style.display = "block";
        $.querySelector(".modal").style.display = "flex";

        // const data = {
        //     firstName: $.querySelector("#firstName").value,
        //     lastName: $.querySelector("#lastName").value,
        //     email: $.querySelector("#email").value,
        //     message: $.querySelector("#message").value,
        // };

        // const response = await axios.post("http://localhost:3000/form", data);
        // console.log(response);
        // alert("Merci");
    });
});
