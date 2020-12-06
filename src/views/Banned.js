import React from "react";

export default function Banned(props) {
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
              src="/images/banned/endossulfam.png"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Endossulfam</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/images/banned/pentaclorofenol.png"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Pentaclorofenol</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/images/banned/monocrotofos.png"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Monocrotofós</h5>
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
            <th scope="col">Danos</th>
            <th scope="col">Ano de Banimento</th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          <tr>
            <th scope="row">1</th>
            <td>Endossulfam</td>
            <td>Reprodução, Infertilidade</td>
            <td>2010</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cihexatina</td>
            <td>Problemas de visão, Hidrocefalia</td>
            <td>2011</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Tricloform</td>
            <td>Danos neuronológicos</td>
            <td>2010</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Monocrotofós</td>
            <td>Ausência de dossiê toxicológico</td>
            <td>2006</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Pentaclorofenol</td>
            <td>Desregula hormônios, tóxico ao fígado e rins</td>
            <td>2005</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Lindano</td>
            <td>Cancerigeno, tóxico ao fígado e rins</td>
            <td>1985</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Metamidofós</td>
            <td>Tóxica ao sistema imune e sistema neurológico</td>
            <td>2012</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Parationa Metílica</td>
            <td>Tóxica ao sistema imune e sistema neurológico</td>
            <td>2016</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Procloraz</td>
            <td>Distúrbios homonais</td>
            <td>2016</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
