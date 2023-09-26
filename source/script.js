function toggleMenu(id) {
    var menu = document.getElementById(id);
    var main = document.getElementById("main");
    if (menu.style.display == "none") {
        menu.style.display = "flex";
        main.style.display = "none";
    } else {
        menu.style.display = "none";

        if (id == "dropdown-content") {
          main.style.display = "block";
        }
        
    }
    
}

function displaycontact() {
    alert('For further information about Dance Health Alliance™ please contact us by phone or email.\n' +
     'Phone: 1300 183 342 or 1300 183 342 \n'+ 'Email: info@dancehealthalliance.org.au');
}