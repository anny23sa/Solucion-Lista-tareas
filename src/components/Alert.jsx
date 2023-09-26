// recibe los hijos y el color para mensaje
const Alert = ({ children, color }) => {
    console.log("Valores de los children recibidos: ", children)
    return (
      <>
        <div className={`alert alert-${color} my-2`}>{children}</div>
      </>
    );
  };
  
  export default Alert
  