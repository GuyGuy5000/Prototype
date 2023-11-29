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
            <button class="dropdownbtn" tabindex="-1"><i class="nav-arrow"></i>Maintenance</button>
            <div class="dropdown-content">
                <a href="city.html" tabindex="15">Manage cities</a>
                <a href="province.html" tabindex="15">Manage provinces</a>
                <a href="manufacturer.html" tabindex="15">Manage manufacturers</a>
                <a href="type.html" tabindex="15">Manage engine types</a>
                <a href="color.html" tabindex="15">Manage colors</a>
            </div>
        </li>

        <div class="help-icon" id="help-icon">
            <span class="icon">?</span>
        </div>
        <li>
            <a href="sign-in.html" tabindex="15"><i class="fa-solid fa-user"></i></a>
        </li>
        <div class="help-box" id="help-box">
            <div class="help-content">
                <p>This is the first explanation.</p>
            </div>
            <div class="help-actions">
                <label id="pageNum" style="margin-right: 10px"></label>
                <button id="skipBtn">Skip</button>
                <button id="nextBtn">Next</button>
            </div>
        </div>
    </ul>
</nav>`;
}
