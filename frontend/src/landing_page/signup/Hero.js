// import React from "react";
// function Hero() {
//   return (
//     <div className="container mt-5 ">
//       {" "}
//       <div className="row text-center p-5">
//         {" "}
//         <h2>Open a free demat and trading account online</h2>{" "}
//         <h4 className="text-muted mt-3 p-3 mb-4">
//           {" "}
//           Start investing brokerage free and join a community of 1.6+ crore
//           investors and traders{" "}
//         </h4>{" "}
//         <div className="col-6 p-5 ">
//           {" "}
//           <img
//             src="media/images/signup.png"
//             alt="Signup"
//             style={{ width: "100%" }}
//           />{" "}
//         </div>{" "}
//         <div className="col-6 p-5 mt-3 " style={{ textAlign: "left" }}>
//           {" "}
//           <h2 className="text-left mb-3">Signup now</h2>{" "}
//           <h5 className="mb-4 fs-0.9 text-muted">
//             {" "}
//             Or track your existing application{" "}
//           </h5>{" "}
//           <input placeholder="Enter Your Number" id="signupHeroinput" />{" "}
//           <button className="mb-5 mt-4" id="signupHerobutton">
//             {" "}
//             Get OTP{" "}
//           </button>{" "}
//           <p>
//             By proceeding, you agree to the Zerodha terms & privacy policy
//           </p>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>
//   );
// }
// export default Hero;


import React, { useState } from "react";

function Hero() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone");

  // ✅ OTP bhejne ka function
  const sendOtp = async () => {
    try {
      const res = await fetch("http://localhost:3002/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (data.success) {
        alert("OTP sent: " + data.otp); // dev testing ke liye
        setStep("otp");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // ✅ OTP verify karne ka function
  const verifyOtp = async () => {
    try {
      const res = await fetch("http://localhost:3002/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // cookie ke liye important
        body: JSON.stringify({ phone, otp }),
      });
      const data = await res.json();
      if (data.success) {
        alert("OTP Verified!");
        window.location.href = "http://localhost:3001"; // ✅ dashboard pe redirect
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row text-center p-5">
        <h2>Open a free demat and trading account online</h2>
        <h4 className="text-muted mt-3 p-3 mb-4">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h4>
        <div className="col-6 p-5 ">
          <img
            src="media/images/signup.png"
            alt="Signup"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6 p-5 mt-3 " style={{ textAlign: "left" }}>
          <h2 className="text-left mb-3">Signup now</h2>
          <h5 className="mb-4 fs-0.9 text-muted">
            Or track your existing application
          </h5>

          {step === "phone" ? (
            <>
              <input
                placeholder="Enter Your Number"
                id="signupHeroinput"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                className="mb-5 mt-4"
                id="signupHerobutton"
                onClick={sendOtp}
              >
                Get OTP
              </button>
            </>
          ) : (
            <>
              <input
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="mb-5 mt-4" onClick={verifyOtp}>
                Verify OTP
              </button>
            </>
          )}

          <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

