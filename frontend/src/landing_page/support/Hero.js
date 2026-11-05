function Hero() {
  return (
    <section className="container-fuild " id="supportHero">
      <div className=" pt-5  " id="supportWrapper">
        <h4 className="mb-1"> Support Portal </h4>
        <a href="9">Track Ticket</a>
      </div>
      <div className="row p-5   ">
        <div className="col-6 p-5 ">
          <h1 className="fs-3 mb-3">
            {" "}
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br /><br/>
         
              <a href="9">Track account opening</a>&nbsp;&nbsp;&nbsp;
           
              <a href="9">Track segment activation</a>&nbsp;&nbsp;&nbsp;
            
              <a href="9">Intraday margins</a>&nbsp;&nbsp;&nbsp;<br/>
           
              
              <a href="9">Kite user manual</a>
           
        </div>
        <div className="col-6 p-5  ">
          <h1 className="fs-3"> Featured</h1>
          <ol>
            <li>
              <a href="9">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="9">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
