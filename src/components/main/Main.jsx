import './main.css'

function Main() {
  return (
    <div>
      <section className='hero'>
        <div className="container">
          <p>Food app</p>
          <h1>Why stay hungry when <br /> you can order form Bella Onojie</h1>
          <span>Download the bella onoje’s food app now on</span>
          <div className="hero-btn-block">
            <button>Playstore</button>
            <button>App Store</button>
          </div>
        </div>
      </section>
      <div className="img container">
        <img src="./phones.png" alt="" />
      </div>
      <div className="line"></div>
      <h2>How the app works</h2>
      <section className='account'>
        <div className="container">
          <img src="./info-phone.png" alt="" />
          <div className="text-account">
            <p>Create an account</p>
            <h3>Create/login to an existing <br />
              account to get started</h3>
            <span>An account is created with your email <br />
              and a desired password</span>
          </div>
        </div>
      </section>
      <section className='account'>
        <div className="container">
          <div className="text-account">
            <p>Explore varieties</p>
            <h3>Shop for your favorites <br />
              meal as e dey hot.</h3>
            <span>Shop for your favorite meals or drinks <br />
              and enjoy while doing it.</span>
          </div>
          <img src="./phone-info.png" alt="" />
        </div>
      </section>
      <section className='account'>
        <div className="container">
          <img src="./phone3.png" alt="" />
          <div className="text-account">
            <p>Checkout</p>
            <h3>When you done check out <br /> and get it delivered.</h3>
            <span>When you done check out and get it <br />
              delivered with ease.</span>
          </div>
        </div>
      </section>
      <section className='footer-info'>
        <div className="container">
          <h1>Download the app now.</h1>
          <p>Available on your favorite store. Start your premium experience now</p>
          <div className="hero-btn-block">
            <button>Playstore</button>
            <button>App Store</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main