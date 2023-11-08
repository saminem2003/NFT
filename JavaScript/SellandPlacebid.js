function showBidForm() {

    var notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = "Please fill in all required fields";
    notification.style.display = "none"; 

    var bidForm = document.createElement("form");
    bidForm.classList.add("bid-form"); 
    bidForm.setAttribute("onsubmit", "submitBid(event)");


    var bidNameLabel = document.createElement("label");
    bidNameLabel.textContent = "Your name: ";
    var bidName = document.createElement("input");
    bidName.setAttribute("type", "text");
    bidName.setAttribute("placeholder", "Your name");
    bidName.required = true;

    var bidAmountLabel = document.createElement("label");
    bidAmountLabel.textContent = "Bid amount: ";
    var bidAmount = document.createElement("input");
    bidAmount.setAttribute("type", "number");
    bidAmount.setAttribute("placeholder", "Bid amount");
    bidAmount.required = true;

    var bidCardLabel = document.createElement("label");
    bidCardLabel.textContent = "Card type: ";
    var bidCard = document.createElement("input");
    bidCard.setAttribute("type", "Card type");
    bidCard.setAttribute("placeholder", "numbers and characters");
    bidCard.required = true;

    var bidCommentLabel = document.createElement("label");
    bidCommentLabel.textContent = "Comment: ";
    var bidComment = document.createElement("textarea");
    bidComment.setAttribute("placeholder", "Comment");

    // Create submit and cancel buttons
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";

    var cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("type", "button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", function () {
        document.body.removeChild(bidForm);
    });

    bidForm.appendChild(bidNameLabel);
    bidForm.appendChild(bidName);
    bidForm.appendChild(bidAmountLabel);
    bidForm.appendChild(bidAmount);
    bidForm.appendChild(bidCardLabel);
    bidForm.appendChild(bidCard);
    bidForm.appendChild(bidCommentLabel);
    bidForm.appendChild(bidComment);

    var buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.marginTop = "10px";
    buttonsDiv.appendChild(submitBtn);
    buttonsDiv.appendChild(cancelBtn);
    bidForm.appendChild(buttonsDiv);

    document.body.appendChild(bidForm);
    document.body.appendChild(notification);
}

function submitBid(event) {
    event.preventDefault(); 
    var bidForm = document.querySelector(".bid-form");
    if (bidForm.checkValidity()) {

        bidForm.reset(); 
        alert("Your bid has been taken")
        document.querySelector(".notification").style.display = "none"; 
        document.body.removeChild(bidForm);
    } else {

        document.querySelector(".notification").style.display = "block";
    }
}
