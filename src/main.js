// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS

import { header } from './componentes/header'

import { footer } from './componentes/footer'
import { login } from './vistas/login'

/* import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { home } from './vistas/home'
*/
document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = login.template
document.querySelector('footer').innerHTML = footer.template
login.script()
header.script()

footer.script()
