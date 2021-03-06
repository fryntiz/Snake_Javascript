/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Clase con los datos del mapa
 */
class Mapa {
    /**
     * Constructor que inicializa el tamaño del mapa.
     * @param   {Integer}  alto   Altura del mapa, por defecto será 300
     * @param   {Integer}  ancho  Ancho del mapa, por defecto será 300
     */
    constructor(altura = 300, anchura = 300) {
        this.altura  = altura;
        this.anchura = anchura;
    }

    /**
     * Devuelve la altura del mapa
     */
    get alto() {
        return this.altura;
    }

    /**
     * Devuelve el ancho del mapa
     */
    get ancho() {
        return this.anchura;
    }

}
