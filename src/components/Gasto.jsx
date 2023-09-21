import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css";
import {formatearFecha} from '../helpers';

import icono1 from '../img/icono_ahorro.svg'
import icono2 from '../img/icono_casa.svg'
import icono3 from '../img/icono_comida.svg'
import icono4 from '../img/icono_gastos.svg'
import icono5 from '../img/icono_ocio.svg'
import icono6 from '../img/icono_salud.svg'
import icono7 from '../img/icono_suscripciones.svg'

const dicIcon = {
    ahorro: icono1,
    casa: icono2,
    comida: icono3,
    gastos: icono4,
    ocio: icono5,
    salud: icono6,
    suscripciones: icono7,
}

const Gasto = ({gasto, setGastoEditar}) => {
    const {categoria, nombre, cantidad, id, fecha} = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('Eliminar')}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions = {leadingActions()}
            trailingActions = {trailingActions()}
        >
            <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img 
                        src={dicIcon[categoria]}
                        alt='Icono Gasto'
                    />
                    <div className="descripcion-gasto">
                        <p className="categoria">
                            {categoria}
                        </p>
                        <p className="nombre-gasto">
                            {nombre}
                        </p>
                        <p className="fecha-gasto">
                            Agregado el: {''}
                            <span>{formatearFecha(fecha)}</span>
                        </p>
                    </div>
                </div>
                    <p className='cantidad-gasto'>
                        ${cantidad}
                    </p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto