using System;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class Persona
    {
        [Key]
        public string username {get; set;}
        public string password {get; set;}
        public string eps {get; set;}
        public string identificacion {get; set;}
        public string tipoDocumento { get; set; }
        public string nombre {get; set;}
        public string apellido {get; set;}
        public string sexo {get; set;}
        public string fechaNacimiento { get; set; }   
        public string telefono {get; set;}
        public string direccion {get; set;}
        public string correo {get; set;}

         
    }
}
