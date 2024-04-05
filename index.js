// * Estado
var tareas = []

// * Elementos seleccionados del HTML
var formulario = document.getElementById("formulario")
formulario.onsubmit = manejarEnvioDeFormulario

var listaEnHtml = document.getElementById('listaEnHtml')


//* Funciones que modifiquen al estado

function agregarTarea (texto) {
  tareas.push(texto)
}

function eliminarTarea () {
  
}

function resetearLasTareas () {
  tareas = []
}

function manejarEnvioDeFormulario (evento) {
  evento.preventDefault() // * Evita que el formulario se envíe
  // * conseguir el valor del input
  var tareaEscritaEnElRenglon = formulario.renglon.value
  // * agregar la tarea al estado
  agregarTarea(tareaEscritaEnElRenglon)
  agregarTareaAlHtml(tareaEscritaEnElRenglon)
  // * limpiar el renglon
  formulario.renglon.value = ""
}

function agregarTareaAlHtml (texto) {
  // * crear un elemento li
  var li = document.createElement("li")
  // * agregarle el texto de la tarea
  li.innerText = texto
  // * agregar el elemento li a la lista ul
  listaEnHtml.appendChild(li)
}
