const $ = document;

// let button = $.querySelector("#headerButton");
// var modal = $.querySelector(".modal");
// var backdrop = $.querySelector(".backdrop");

const closeModal = () => {
    $.querySelector(".behindModal").style.display = "inherit";
    $.querySelector(".backdrop").style.display = "none";
    $.querySelector(".modal").style.display = "none";
};

$.addEventListener("DOMContentLoaded", () => {
    console.log("page chargée ");

    $.querySelector("#headerButton").addEventListener("click", () => {
        console.log("click");

        // $.querySelector(".behindModal").style.display = "none";
        $.querySelector(".backdrop").style.display = "block";
        $.querySelector(".modal").style.display = "flex";

        $.querySelector("#formButton").addEventListener("click", async () => {
            const data = {
                firstName: $.querySelector("#firstName").value,
                lastName: $.querySelector("#lastName").value,
                email: $.querySelector("#email").value,
                subject: $.querySelector("#subject").value,
                message: $.querySelector("#message").value,
            };
            console.log(data);
            closeModal();

            const response = await axios.post(
                "http://localhost:3000/form",
                data
            );
            if (response) alert("Merci :) \nVotre message a bien été envoyé");
            // console.log(response);
        });

        $.querySelector(".backdrop").addEventListener("click", closeModal);
    });
});
