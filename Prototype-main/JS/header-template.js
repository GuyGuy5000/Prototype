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
            <button class="dropdownbtn" tabindex="1"><i class="nav-arrow"></i>Reports</button>
            <div class="dropdown-content">
                <a href="warranty-details.html" tabindex="1">Warranty Report</a>
                <a href="customreport-details.html" tabindex="1">Custom Report</a>
            </div>
        </li>
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
                <a href="repair-request.html" tabindex="8">Repair request</a>
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

        <div class="help-icon" id="help-icon" accesskey="h" tabindex="15">
            <span class="icon">?</span>
        </div>
        <li>
            <a href="sign-in.html" tabindex="16"><i class="fa-solid fa-user"></i></a>
        </li>
        <div class="help-box" id="help-box">
            <div class="help-content">
                <p>This is the first explanation.</p>
            </div>
            <div class="help-actions">
                <label id="pageNum" style="margin-right: 10px"></label>
                <button id="skipBtn" tabindex="15">Skip</button>
                <button id="nextBtn" tabindex="15">Next</button>
            </div>
        </div>
    </ul>
</nav>`;
}
