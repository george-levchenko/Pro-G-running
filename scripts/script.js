
let menu = document.getElementById("menu");              // Responsive menu
menu.addEventListener( "click", getResponsive );

function getResponsive() {
    let elem = document.getElementsByClassName("not_responsive");
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList.toggle("responsive");
    }
}



let table_row = document.getElementsByClassName( "table_row" ); // for all pages

for (let i = 0; i < table_row.length; i++) {

    table_row[i].addEventListener( "click", clickerRow );
}


function clickerRow(){                                   // for all pages
	let div = this.getElementsByTagName( 'div' );

    for (let i = 0; i < div.length; i++) {

        div[i].classList.toggle( "extended_row" );
    }
}


let setup_row = document.getElementsByClassName( "setup_row" ); // for CSS

for (let i = 0; i < setup_row.length; i++) {

    setup_row[i].addEventListener( "click", clickerSetupRow );
}

function clickerSetupRow(){                                      // for CSS
    let div = document.getElementsByClassName( "setup_child" );

    for (let i = 0; i < div.length; i++) {
        div[i].classList.toggle( "hidden" );
    }
}


let theory_row = document.getElementsByClassName( "theory_row" ); // for Bootstrap

for (let i = 0; i < theory_row.length; i++) {

    theory_row[i].addEventListener( "click", clickerTheoryRow );
}

function clickerTheoryRow(){                                      // for Bootstrap

    this.classList.toggle( "extended_theory" );
}

let tips_table_row = document.getElementsByClassName( "tips_table_row" ); // for Bootstrap

for (let i = 0; i < tips_table_row.length; i++) {

    tips_table_row[i].addEventListener( "click", clickerRow );
}