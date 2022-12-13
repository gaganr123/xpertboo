class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- ======= Header ======= -->
  <header class="myHeader-about">
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <div class="container p-0">
      <a href="index.html" class="ms-2">
        <img
          class="img-fluid"
          id="navImg"
          src="imgs/logo.webp"
          width="110px"
          height="auto"
          alt=""
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="services"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul class="dropdown-menu border-0" aria-labelledby="services">
              <li>
                <a class="dropdown-item" href="dedicate.html"
                  >Dedicated Bookkeeping service</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="payroll-management-services.html"
                  >Payroll Management</a
                >
              </li>

              <li>
                <a class="dropdown-item" href="monthly-financial-report.html"
                  >Monthly Financial Reporting</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="accounting-software.html"
                  >Upgrade to Cloud Accounting</a
                >
              </li>

              <li>
                <a class="dropdown-item" href="receivable.html"
                  >Receivable/payable Management</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="reconciliation.html"
                  >Reconciliations</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="about"
              id="about"
              href="about.html"
              >About Us</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="pricing"
              id="pricing"
              href="pricing.html"
              >Pricing</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" id="blog" href="blog.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <!-- end -->
      <div class="call me-3">
        <a href="tel:9835678"
          ><i class="bi bi-telephone-outbound-fill"></i
        ></a>
      </div>
      <!-- end call -->
    </div>
  </nav>
</header>
  <!-- End Header -->
  `;
  }
}
customElements.define("my-header", MyHeader);
