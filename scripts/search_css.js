// Reset hen using left-side anchors
let left_anchors = document.getElementById("left_anchors");

let left_anchors_children = left_anchors.getElementsByTagName("li");

for (let i = 0; i < left_anchors_children.length; i++) {

    left_anchors_children[i].addEventListener( "click", clearCSS );
}


// Search function
function searchCSS() {
    // Declare variables
    let input, filter, div, div_anchor, div_selector, div_first, div_setup, footer, txtValue;

    input = document.getElementById("search_field");
    filter = input.value.toUpperCase().trim();

    div = document.getElementsByClassName("first_column");
    div_anchor = document.getElementsByClassName("anchor_row");
    div_selector = document.getElementsByClassName("selector_first_column");
    div_first = document.getElementsByClassName("first_row");
    div_setup = document.getElementsByClassName("setup_row");
    footer = document.getElementsByTagName("footer");

    // Show everything if input.value - clear
    if(!filter) {

        div_first[0].style.display = "";
        div_setup[0].style.display = "";
        footer[0].style.display = "";
        for (let i = 0; i < div_anchor.length; i++) {
            div_anchor[i].style.display = "";
        }
        for (let i = 0; i < div.length; i++) {
            div[i].parentElement.style.display = "";
        }
        for (let i = 0; i < div_selector[i].length; i++) {
            div_selector[i].parentElement.style.display = "";
        }
        return;
    }


    // Hide first row
    div_first[0].style.display = "none";

    // Hide setup row
    div_setup[0].style.display = "none";

    // Hide anchors
    for (let i = 0; i < div_anchor.length; i++) {
        div_anchor[i].style.display = "none";
    }

    // Hide footer
    footer[0].style.display = "none";

    // Loop through all table rows, and hide those who don't match the search query - Main Table
    for (let i = 0; i < div.length; i++) {
        if (div[i]) {
            txtValue = div[i].textContent || div[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div[i].parentElement.style.display = "";
            } else {
                div[i].parentElement.style.display = "none";
            }
        }
    }
    // Loop through all table rows, and hide those who don't match the search query - Global Table
    for (let i = 0; i < div_selector.length; i++) {
        if (div_selector[i]) {
            txtValue = div_selector[i].textContent || div_selector[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div_selector[i].parentElement.style.display = "";
            } else {
                div_selector[i].parentElement.style.display = "none";
            }
        }
    }
}

// Clear function
function clearCSS() {
    let input;
    input = document.getElementById("search_field");
    input.value = "";
    searchCSS();
}