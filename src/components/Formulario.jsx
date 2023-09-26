import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// recibe como props una funcion de usuario y una funcion de seteo de State
const Formulario = ({ onSubmit, setAlert }) => {
  // state de tarea individual del formulario
  const [tarea, setTarea] = useState("");

  // captura valores del input de formulario de datos
  const capturaInput = (e) => {
    setTarea(e.target.value);
  };

  // controla ejecucion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valor de Tarea en funcion procesar formulario de datos: ",tarea, typeof tarea)

    if (
      tarea === "" 
    ) {

      /* llamada a la funcion que setea el componente Alert recibida desde App para mostrar error de datos */
      setAlert({
        error: true,
        msg: "Completa informacion de tarea !",
        color: "danger",
      });
      return;
    }

    // llamada a funcion de agregar Tarea al Arreglo listaTareas que esta en App.jsx
    onSubmit(tarea);
    
    /* llamada a la funcion que setea el componente Alert recibida desde App por exito de operacion */
    setAlert({
      error: false,
      msg: "Tarea agregada exitosamente !",
      color: "success",
    });

    // limpiar el Input de Tarea
    setTarea("");
  };

 // renderizacion del componente Formulario
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Control
            type="text"
            placeholder="Nombre de tarea"
            name="nombre"
            className="my-3"
            onChange={capturaInput}
            value={tarea}
          />
          <Button variant="primary" type="submit" className="w-100">
            Agregar Tarea
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;
