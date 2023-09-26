import Table from 'react-bootstrap/Table';

// recibe el arreglo y las funciones de usuario relacionadas para cambio de state
const Listado = ({ tareas, elimina, completa }) => {

  console.log("Valor de tareas en Listado: ", tareas)

  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Accion 1</th>
            <th>Accion 2</th>
          </tr>
        </thead>
        <tbody>
        {tareas.map((tarea) => (
            <tr key={tarea.nombre} style={tarea.completada === true ? { textDecoration: "line-through" } : {}}>
              <td>{tarea.nombre}</td>
              <td>{tarea.completada === false ? (
                  <button onClick={() => completa(tarea)}> Completar </button> ) : ("")}
              </td>
              <td><button onClick={() => elimina(tarea)}>Borrar</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;
