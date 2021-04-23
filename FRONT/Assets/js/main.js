const $ = document;

// let button = $.querySelector("#headerButton");
// var modal = $.querySelector(".modal");
// var backdrop = $.querySelector(".backdrop");

$.addEventListener("DOMContentLoaded", () => {
    console.log("page chargée ");

    $.querySelector("#headerButton").addEventListener("click", () => {
        console.log("click");

        $.querySelector(".behindModal").style.display = "none";
        $.querySelector(".backdrop").style.display = "block";
        $.querySelector(".modal").style.display = "flex";

        $.querySelector("#formButton").addEventListener("click", async () => {
            const data = {
                firstName: $.querySelector("#firstName").value,
                lastName: $.querySelector("#lastName").value,
                email: $.querySelector("#email").value,
                message: $.querySelector("#message").value,
            };
            console.log(data);

            $.querySelector(".behindModal").style.display = "inherit";
            $.querySelector(".backdrop").style.display = "none";
            $.querySelector(".modal").style.display = "none";

            // const response = await axios.post(
            //     "http://localhost:3000/form",
            //     data
            // );
            // console.log(response);
            // alert("Merci");
        });
        $.querySelector(".backdrop").addEventListener("click", async () => {
            $.querySelector(".behindModal").style.display = "inherit";
            $.querySelector(".backdrop").style.display = "none";
            $.querySelector(".modal").style.display = "none";
        });
    });
});
