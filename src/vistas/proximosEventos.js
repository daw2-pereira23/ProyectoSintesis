
export const proximosEventos = {
  template: `
    <div class="col-12 background-radial-gradient overflow-hidden">
      <style>
          
          
      #radius-shape-1 {
          height: 220px;
          width: 220px;
          top: -60px;
          left: -130px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
      }
  
      #radius-shape-2 {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
          bottom: -60px;
          right: -110px;
          width: 300px;
          height: 300px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
      }
  
      .bg-glass {
          background-color: hsla(0, 0%, 100%, 0.9) !important;
          backdrop-filter: saturate(200%) blur(25px);
      }
      </style>
          <div class="container col-12 d-flex justify-content-center">
              <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
              Tablon de eventos <br/>
              <span style="color: hsl(218, 81%, 75%)">Salimos <strong>Tonight ?</strong></span>
              <o/h1>
          </div>
          <div class="container">
          <div class="row row-striped">
              <div class="col-2 text-right">
                  <h1 class="display-4"><span class="badge badge-secondary">16</span></h1>
                  <h2>MARZO</h2>
              </div>
              <div class="col-10">
                  <h3 class="text-uppercase"><strong>Mandanga de RazzMatazz</strong></h3>
                  <ul class="list-inline">
                      <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i>Jueves</li>
                      <li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i>00:00 - 06:00</li>
                      <li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i>Calle Pamplona 28</li>
                  </ul>
                  <p>Si al leer “Yo quiero bailar toda la noche” se te va el pie, no le des más vueltas: la “Mandanga de Razzmatazz” es tu fiesta. Una refrescante fiesta donde bailarás hits por un tubo y donde te será imposible estarte quieto. “Bailoteo & Cachondeo” en modo non stop!!! No te lo pienses dos veces, ponte calzado cómodo y ven a bailar con nosotros..</p>
              </div>
          </div>
          <div class="row row-striped">
              <div class="col-2 text-right">
                  <h1 class="display-4"><span class="badge badge-secondary">Waka Bull Night</span></h1>
                  <h2>Marzo</h2>
              </div>
              <div class="col-10">
                  <h3 class="text-uppercase"><strong>Waka Sabadell</strong></h3>
                  <ul class="list-inline">
                      <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i>Viernes</li>
                      <li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i>00</li>
                      <li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> Room 4019</li>
                  </ul>
                  <p>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </div>
      </div>
      `,
  script: () => {

  }
}
