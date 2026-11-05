import React from "react";

function InvestmentOptions() {
  return (
    <div className="container mt-5 ">
      <h2 className="mb-3 text-center">
        Investment options with Zerodha demat account
      </h2> <br/>
      <div className="row mb-4 align-items-center  mt-5 ms-5">
        <div className="col-6 d-flex align-items-center  ">
          <img
            src="media/stocks-acop.svg"
            alt="Stocks"
            className="img-fluid me-3"
            style={{ width: "100px" }}
          />
          <div>
            <h4>Stocks</h4>
            <p className="text-muted">
              Invest in all exchange-listed <br />
              securities
            </p>
          </div>
        </div>

        <div className="col-6 d-flex align-items-center mt-5 ">
          <img
            src="media/mf-acop.svg"
            alt="Mutual Funds"
            className="img-fluid me-3"
            style={{ width: "100px" }}
          />
          <div>
            <h4>Mutual Funds</h4>
            <p className="text-muted">
              Invest in commission-free <br />
              direct mutual funds
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-4 align-items-center ms-5 ">
        <div className="col-6 d-flex align-items-center">
          <img
            src="media/ipo-acop.svg"
            alt="IPO"
            className="img-fluid me-3"
            style={{ width: "100px" }}
          />
          <div>
            <h4>IPO</h4>
            <p className="text-muted">
              Apply to the latest IPOs <br /> instantly via UPI
            </p>
          </div>
        </div>

        <div className="col-6 d-flex align-items-center  ">
          <img
            src="media/fo-acop.svg"
            alt="Futures & Options"
            className="img-fluid me-3"
            style={{ width: "100px" }}
          />
          <div>
            <h4>Futures & Options</h4>
            <p className="text-muted">
              Hedge and mitigate market risk <br />
              through simplified F&O trading
            </p>
          </div>
        </div>
      </div><br/>
      <div class="text-center">
        <button
          className="p-2 btn btn-primary fs-5 mt-4 mb-5"
          style={{ width: "23%", margin: "0 auto" }}
        >
          Explore Investments
        </button>
      </div>
{/* SECOND SECTION OF PAGE */}


      <br></br><br/><br/>
      <h2 className="mb-5 text-center">
        Steps to open a demat account with Zerodha
      </h2><br/>
      <div className="row mb-5 ">
        <div className="col-6 mt-3 ">
          <img src="media/steps-acop.svg" alt="" style={{ width: "65%" }} />
        </div>
        <div className="col-6 text-muted mt-4">
          <h4 className="d-flex align-items-center">
            <span className="number-circle me-2">01</span>
            Enter the requested details
          </h4><hr></hr>
          
          <h4 className="d-flex align-items-center">
            <span className="number-circle me-2">02</span>
            Complete e-sign & verification
          </h4>
         <hr></hr>
          <h4 className="d-flex align-items-center ">
            <span className="number-circle me-2">03</span>
            Start investing!
          </h4>
        </div>
      </div>


{/* THIRD SECTION OF PAGE */}

      <br></br><br/>
      <div className="row mt-5 ">
        <div className="col-6 mt-3 ">
          <img src="media/acop-benefits.svg" alt="" style={{ width: "75%" }} />
          <h3>Benefits of opening a Zerodha demat account</h3>
        </div>
        <div className="col-6  mt-4">
          <h4 className="d-flex align-items-center mb-4">Unbeatable pricing</h4>
          <p className="fs-0.5 text-muted">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>
         
          <h4 className="d-flex align-items-center mb-4">
            Best investing experience
          </h4>
          <p className="fs-0.5 text-muted">
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>
          
          <h4 className="d-flex align-items-center mb-4">No spam or gimmicks</h4>
          <p className="fs-0.5 text-muted">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>
          <h4 className="d-flex align-items-center mb-4">The Zerodha universe</h4>
          <p className="fs-0.5 text-muted">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvestmentOptions;
