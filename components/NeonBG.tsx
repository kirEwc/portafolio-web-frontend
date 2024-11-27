
export default function NeonBG () {
  return (
    <>

    {/* span detras del contenido para que se vea el fondo */}
    <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 ">
            {/* <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-32 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span> */}
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>
        {/* fin span */}

        <div className="absolute w-full h-full">
  {/* Verde - Superior Izquierda */}
  <span className="absolute top-4 left-8 w-20 h-16 bg-green-400 rounded-full blur-lg opacity-70"></span>

  {/* Azul - Superior Centro */}
  <span className="absolute top-10 left-1/3 w-20 h-20 bg-blue-400 rounded-3xl skew-y-6 blur-md opacity-60"></span>

  {/* Rojo - Superior Derecha */}
  {/* <span className="absolute top-6 right-4 w-24 h-24 bg-red-500 rounded-lg rotate-45 blur-lg opacity-80"></span> */}

  {/* Amarillo - Centro Izquierda */}
  <span className="absolute top-1/3 left-1/4 -translate-x-24 translate-y-80 w-28 h-28 bg-yellow-500 dark:bg-yellow-300 rounded-full skew-x-12 blur-md dark:blur-xl opacity-50"></span>

  {/* verde - Centro */}
  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/6 h-60 dark:h-40 bg-green-400 rounded-full rotate-12 blur-2xl dark:blur-3xl opacity-75"></span>
  {/* Rosa - Centro Derecha */}
  <span className="absolute top-1/3 right-8 left-3/4 -translate-x-80 -translate-y-32 w-24 h-24 bg-pink-400 rounded-3xl skew-y-3 blur-xl opacity-60"></span>




</div>
        
    </>
  )
}
