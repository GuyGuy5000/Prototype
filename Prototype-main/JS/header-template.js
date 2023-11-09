let header = document.getElementById("header");

AddHeader();

function AddHeader() {
    header.innerHTML = String.raw`
<a class="home-link" href="index.html" tabindex="1">
    <img src="images/FixIt.png" alt="FixIt Logo" id="fixlogo">
</a>
<nav>
<ul>
    <li class="dropdown">
        <button class="dropdownbtn" tabindex="2"><i class="nav-arrow"></i>Customers</button>
        <div class="dropdown-content">
            <a href="create_customer.html" tabindex="3">Add new customer</a>
            <a href="view_customer.html" tabindex="5">Search customers</a>
        </div>
    </li>

    <li class="dropdown">
        <button class="dropdownbtn" tabindex="6"><i class="nav-arrow"></i>Repair</button>
        <div class="dropdown-content">
            <a href="view_repairs.html" tabindex="8">Repairs list</a>
        </div>
    </li>

    <li class="dropdown">
        <button class="dropdownbtn" tabindex="-1"><i class="nav-arrow"></i>Maintenance</button>
        <div class="dropdown-content">
            <a href="city.html" tabindex="15">Manage cities</a>
            <a href="province.html" tabindex="15">Manage provinces</a>
            <a href="manufacturer.html" tabindex="15">Manage manufacturers</a>
            <a href="type.html" tabindex="15">Manage engine types</a>
            <a href="color.html" tabindex="15">Manage colors</a>
        </div>
    </li>

    <li>
        <a href="sign-in.html" tabindex="15"><i class="fa-solid fa-user"></i></a>
    </li>
</ul>
</nav>`;
}
