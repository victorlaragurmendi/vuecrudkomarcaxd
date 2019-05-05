document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#appPacientes',
        data: {
            // Input nombre
            nombre: '',
            // Input edad
            edad: '',
            // Ver o no ver el formulario de actualizar
            formActualizar: true,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input edad dentro del formulario de actualizar
            edadActualizar: '',
            // Lista de pacientes
            pacientes: [],
            promesa 

        },
        methods: {
            crearPaciente: function () {
                // Anyadimos a nuestra lista
                this.pacientes.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    edad: this.edad
                });
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.edad = '';
            },
            verFormActualizar: function (paciente_id) {
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = paciente_id;
                this.nombreActualizar = this.pacientes[paciente_id].nombre;
                this.edadActualizar = this.pacientes[paciente_id].edad;
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarPaciente: function (paciente_id) {
                // Borramos de la lista
                this.pacientes.splice(paciente_id, 1);
            },
            guardarActualizacion: function (paciente_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;
                // Actualizamos los datos
                this.pacientes[paciente_id].nombre = this.nombreActualizar;
                this.pacientes[paciente_id].edad = this.edadActualizar;
            },
            guardarActualizacion: function (paciente_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;
                // Actualizamos los datos
                this.pacientes[paciente_id].nombre = this.nombreActualizar;
                this.pacientes[paciente_id].edad = this.edadActualizar;
                var ejemplo = function(){}
                return new Promise((result, reject) => {
                    setTimeout(() => {
                        if(!users.filter(u => u.id == paciente_id)){
                            reject(" no existe usuario con ese id")
                        }
                        resolve(ejemplo)
                    }, 2000)
                })
            },

        }
    });
});

main = function(){
    guardarActualizacion().then(res => res()).catch(err => console.log(err))
}