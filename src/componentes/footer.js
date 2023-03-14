import { proximosEventos } from '../vistas/proximosEventos'

export const footer = {
  template: `
    <nav class="navbar navbar-light bg-light d-flex justify-content-center align-items-center">
        <div class="mt-1 ">
            <i class="fa-solid fa-magnifying-glass logos"></i>
        </div>
        <div class="mt-1 ps-5 logos">
            <i class="fa-regular fa-user"></i>
        </div>
        <div class="mt-1 ps-5">
            <i class="fa-solid fa-ticket logos"></i>
        </div>
        <div class="mt-1 ps-5">
            <i class="fa-solid fa-arrow-right logos"></i>
        </div>
        <div class="mt-1 ps-5">
            <i class="fa-solid fa-calendar-days logos" id="proximosEventos"></i>
        </div>
    </nav>
    `,
  script: () => {
    document.querySelector('#proximosEventos').addEventListener('click', () => {
      document.querySelector('main').innerHTML = proximosEventos.template
    })
  }
}
