let stickyElementStyle = null;
let stickyElementTop = 0;

// main_abs = $("#main_abs");
// sticky_elmt = $("#sticky_elmt");

let main_abs = document.getElementById("main_abs");
let sticky_elmt = document.getElementById("sticky_elmt");
let under_main_abs = document.getElementById("under_main_abs");

function determineStickyState(element) {
  setTimeout(() => {}, 200);

  let main_abs_top = main_abs.getBoundingClientRect().top;
  let main_abs_btm = main_abs.getBoundingClientRect().bottom;
  let sticky_elmt_btm = sticky_elmt.getBoundingClientRect().bottom;
  let sticky_elmt_height = sticky_elmt.getBoundingClientRect().height;

  sticky_elmt.style.top = `${topOfSticky(sticky_elmt)}px`;

  console.log("ssvsdvdsv " + window.scrollY);

  if (
    isScrolledIntoView(sticky_elmt) == true &&
    main_abs.style.position != "fixed"
  ) {
    // alert("rebdfbfdached");
    main_abs.style.position = "fixed";
    main_abs.style.top = `${main_abs_top}px`;
    under_main_abs.style.marginTop = `${main_abs_btm}px`;
    window.scrollTo(0, 2);
  } else if (window.scrollY < 1 && main_abs.style.position == "fixed") {
    main_abs.style.position = "relative";
    main_abs.style.top = `${0}px`;
    under_main_abs.style.marginTop = `${10}px`;
    // window.scrollTo(0, main_abs_btm);

    // alert("reached");
  }
}

window.addEventListener("scroll", determineStickyState);

alert("fish main ded");

function isScrolledIntoView(elem) {
  let docViwBtm = window.innerHeight;
  let elemBtm = elem.getBoundingClientRect().bottom;
  return elemBtm <= docViwBtm;
}

function topOfSticky(elem) {
  console.log(window.innerHeight - elem.getBoundingClientRect().height);
  return window.innerHeight - elem.getBoundingClientRect().height;
}
