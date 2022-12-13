class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <!-- ======= Footer ======= -->
          <section class="footer">
      <div class="container-fluid">
        <div class="row mt-5 py-5 g-2 justify-content-end">
       
          <div class="col-lg-3 col-md-6 col-sm-12">
            <img
              class="img-fluid p-2"
              src="imgs/logo.webp"
              width="200px"
              height="auto"
              alt=""
            />
            <div class="d-flex gap-2 mt-2">
            <img
            class="img-fluid p-2"
            src="imgs/xerouk.webp"
            width="140px"
            height="auto"
            alt=""
          />
          <img
          class="img-fluid p-2"
          src="imgs/quickbook.webp"
          width="140px"
          height="auto"
          alt=""
        />
      </div>

            <p class="my-3">
            Ourbookkeepingservices is a US-based company having certified bookkeepers and accountants with over 7 years of experience.
            </p>
            <div class="social d-flex gap-2">
              <a href=""><i class="bi bi-facebook"></i></a
              ><a href=""><i class="bi bi-youtube"></i></a
              ><a href=""><i class="bi bi-instagram"></i></a>
            </div>
          </div>
          <!-- col end -->
          <div class="col-lg-4 col-md-6 col-sm-12">
            <h5 class="ps-5 mb-3">Our Services</h5>
            <ul style="list-style: none">
              <li>
                <p>
                  <i class="bi bi-chevron-right"></i>
                  <a href="reconciliation.html"> Reconciliations</a>
                </p>
              </li>
              <li>
                <p>
                  <i class="bi bi-chevron-right"></i>
                  <a href="dedicate.html"> Dedicated Bookkeeping service</a>
                </p>
              </li>
              <li>
                <p>
                  <i class="bi bi-chevron-right"></i>
                  <a href="payroll-management-services.html"> Payroll Management</a>
                </p>
              </li>
              <li>
                <p>
                  <i class="bi bi-chevron-right"></i>
                  <a href="monthly-financial-report.html"> Monthly Financial Reporting</a>
                </p>
              </li>

              <li>
                <p>
                  <i class="bi bi-chevron-right"></i>
                  <a href="accounting-software.html"> Upgrade to Cloud Accounting</a>
                </p>
              </li>
              <li>
                <p>
                  <i class="bi bi-chevron-right"></i>
                  <a href="payable.html"> Payable/receivable Management</a>
                </p>
              </li>
            </ul>
          </div>
          <!-- col end -->
          <div class="col-lg-4">
            <h5 class="mb-3">Company</h5>
            <p><i class="bi bi-geo"></i> Round Rock, Texas</p>
            <p><i class="bi bi-envelope-check-fill"></i> contact@ourbookkeepingservices.com</p>
            <p><i class="bi bi-telephone-fill"></i> (978) 637 6362</p>
            <div class="d-flex gap-2 mt-lg-5">
              <p><a href="terms-condition.html">Terms of use</a></p>
              <span class="text-light">|</span>
              <p><a href="privacy-policy.html">Privacy policy</a></p>
            </div>
          </div>
          <!-- col end -->
          <p class="text-center">
            All Right Reserved&copy2022;
          </p>
          </div>
      </div>
    </section>
   <!-- End Footer -->
   `;
  }
}
customElements.define("my-footer", MyFooter);
