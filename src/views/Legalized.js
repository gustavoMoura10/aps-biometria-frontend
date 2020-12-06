import React from "react";

export default function Legalized(props) {
  return (
    <div className=" w-100">
      <div
        id="carouselExampleIndicators"
        class="carousel slide mx-auto col-sm-6 mb-4 mt-4 bg-secondary"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="/images/legalized/dinotefuran.png"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Dinotefuran</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/images/legalized/fluopirame.png"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Fluopirame</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/images/legalized/sulfoxaflor.png"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Sulfoxaflor</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <table class="table table-striped col-sm-6 mx-auto">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Formula</th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          <tr>
            <th scope="row">1</th>
            <td>Dinotefuran</td>
            <td>C7H14N4O3</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dinotefuran</td>
            <td>C7H14N4O3</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Sulfoxaflor</td>
            <td>C10H10F3N3OS</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Fluopirame</td>
            <td>C16H11ClF6N2O</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
