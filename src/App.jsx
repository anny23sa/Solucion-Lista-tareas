import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { tareasIniciales } from "./TareasIniciales.jsx";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
//import Buscador from "./components/Buscador";
import Alert from "./components/Alert";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // definicion de state del arreglo y de los mensajes
  const [listaTareas, setListaTareas] = useState(tareasIniciales);
  //const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });

  console.log("Valores del arreglo en App.jsx: ", listaTareas)

  // Función para procesar el formulario llamada desde Formulario.jsx
  const enviarFormulario = (nombreTarea) => {
    console.log("Valor de tarea recibido desde Formulario.jsx: ", nombreTarea)
    setListaTareas([
      ...listaTareas,
      { nombre: nombreTarea, completada: false },
    ]); // Agregamos la tarea al arreglo
  };

  

  // funcion para modificar state del arreglo cambian tarea de false a true
  const completarTarea = (tarea) => {
    const nuevasTareas = [...listaTareas]; // Copiamos las tareas anteriores
    const index = nuevasTareas.findIndex((el) => el.nombre === tarea.nombre); // Buscamos la tarea a modificar
    nuevasTareas[index].completada = true;
    setListaTareas(nuevasTareas);
  };

  // funcion para modificar state del arreglo eliminando tareas
  const eliminarTarea = (tarea) => {
    const listaEliminada = listaTareas.filter(el => el.nombre !== tarea.nombre)
    setListaTareas(listaEliminada)
  }



 // renderizacion del componente
  return (
    <>
      <div className="mx-4">
      <h1 className="text-start">Lista de colaboradores</h1>
        {/* <Row>
          <Col sm={4}>
            <Buscador search={search} onChange={handleChange} />
          </Col>
        </Row> */}
        <Row>
          <Col sm={12} md={9}>
             {/* llamada al componente Listado pasando como props funciones */}
            <Listado tareas={listaTareas} elimina={eliminarTarea} completa={completarTarea} />
          </Col>
          <Col md={3} className="">
            <h2>Agregar colaborador</h2>
            <Formulario onSubmit={enviarFormulario} setAlert={setAlert} /> {/* pasando funciones */}

            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>} {/* busqueda perezosa se llama esto en el llamado al Alert uno de los hijos es el mensaje */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
