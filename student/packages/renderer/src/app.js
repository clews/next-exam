
/**
 * @license GPL LICENSE
 * Copyright (c) 2021 Thomas Michael Weissel
 * 
 * This program is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the Free Software Foundation,
 * either version 3 of the License, or any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * You should have received a copy of the GNU General Public License along with this program.
 * If not, see <http://www.gnu.org/licenses/>
 */




import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import i18n from './locales/locales.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/custom.scss'

// ACHTUNG: Der Import von Swal wird beibehalten, aber wir entfernen den fehlerhaften
// Swal.defaults Aufruf und verschieben die Konfiguration in die Plugin-Optionen.
import Swal from 'sweetalert2'; 

// --- START DES BEREINIGTEN CODE ---

// Globale Optionen für das VueSweetalert2 Plugin
const options = {
    confirmButtonColor: '#198754',
    cancelButtonColor: '#ff7674',
    
    // HIER verschieben wir den globalen Hook (als Teil der Standardoptionen)
    didOpen: (popup) => {
        // Elemente finden: popup (vom Hook übergeben), Container und Backdrop (über DOM-Query)
        const elementsToControl = [
            popup, 
            document.querySelector('.swal2-container'), 
        ];
        
        // Transitions entfernen, um Flimmern bei schnellen Events (wie Druck) zu verhindern
        elementsToControl
            .filter(el => el)
            .forEach(el => {
                el.style.transition = 'none';
                el.style.animation = 'none';
                el.style.webkitAnimation = 'none';
                el.style.webkitTransition = 'none';
            });
    }
};

// --- ENDE DES BEREINIGTEN CODE ---

const router = createRouter()
const vApp = createApp(App)


vApp.use(router)
vApp.use(i18n)
// Das Plugin wird mit den Optionen installiert, die nun den globalen didOpen Hook enthalten.
vApp.use(VueSweetalert2, options) 

// console.log(vApp)

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
    vApp.mount('#app')
})
