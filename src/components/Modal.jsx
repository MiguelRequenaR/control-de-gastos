import { useState } from "react"
import Mensaje from "./Mensaje"
import icono from "../img/cerrar.svg"

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState("")
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, cantidad, categoria].includes("")){
            setMensaje("Todos los campos son obligatorios")
            
            setTimeout(() => {
                setMensaje('')
            }, 1000);
            return;
        }
        guardarGasto({nombre, cantidad, categoria})
    }


  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={icono}
                alt="cerrar modal"
                onClick={ocultarModal}
            />
        </div>
        <form onSubmit={handleSubmit} action="" className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Añade el nuevo gasto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id="cantidad"
                    type="number"
                    placeholder="Añade la cantidad: ejm.300"
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Categoría</label>
                <select 
                    name="" id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">
                        -- Seleccione --
                    </option>
                    <option value="ahorro">
                        Ahorro
                    </option>
                    <option value="comida">
                        Comida
                    </option>
                    <option value="casa">
                        Casa
                    </option>
                    <option value="gastos">
                        Gastos Varios
                    </option>
                    <option value="ocio">
                        Ocio
                    </option>
                    <option value="salud">
                        Salud
                    </option>
                    <option value="suscripciones">
                        Suscripciones
                    </option>
                </select>
                
            </div>

            <input type="submit" value="Añadir gasto" />

        </form>
    </div>
  )
}

export default Modal