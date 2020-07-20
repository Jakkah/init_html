import * as $ from 'jquery'
/**
 * @name App
 * @author Yassir - Juil. 2020
 * @version 1.0.0
 * @abstract Entry point of the current app
 */
class App{
    constructor() {
        console.log('App is running !')
    }
}

// App launcher
$(document).ready(
    () => {
        new App() // Créer une instance de la classe App
    }
)