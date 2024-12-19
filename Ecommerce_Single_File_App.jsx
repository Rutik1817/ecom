
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">ShopEase</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/slider1.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to ShopEase</h5>
              <p>Your one-stop shop for everything.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/slider2.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Great Deals Await</h5>
              <p>Check out our latest collections.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Shop by Category */}
      <section className="container mt-5">
        <h2 className="text-center">Shop by Category</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <img src="images/category1.jpg" className="card-img-top" alt="Category 1" />
              <div className="card-body">
                <h5 className="card-title">Electronics</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="images/category2.jpg" className="card-img-top" alt="Category 2" />
              <div className="card-body">
                <h5 className="card-title">Fashion</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="images/category3.jpg" className="card-img-top" alt="Category 3" />
              <div className="card-body">
                <h5 className="card-title">Home & Living</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="container mt-5">
        <h2 className="text-center">Latest Products</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="card">
              <img src="images/product1.jpg" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">$100</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="images/product2.jpg" className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">$120</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="images/product3.jpg" className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">$90</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="images/product4.jpg" className="card-img-top" alt="Product 4" />
              <div className="card-body">
                <h5 className="card-title">Product 4</h5>
                <p className="card-text">$150</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 ShopEase. All Rights Reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      <button id="scrollToTopBtn" className="btn btn-dark">⬆</button>
    </div>
  );
}

export default App;
