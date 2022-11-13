using System;
using Entidad;
using System.ComponentModel.DataAnnotations;

namespace Proyectopweb.Models
{
    public class PsicologoInputModel
    {
        [Required(ErrorMessage = "El tipo de identificacion es requerido")]
        public string tipoDocumento { get; set; }
        [Required(ErrorMessage = "El numero de identificacion es requerido")]
        public string identificacion {get; set;}
        [Required(ErrorMessage = "El nombre es requerido")]
        public string nombre {get; set;}
        [Required(ErrorMessage = "El apellido es requerido")]
        public string apellido {get; set;}
        [Required(ErrorMessage = "El sexo es requerido")]
        public string sexo {get; set;}
        [Required(ErrorMessage = "El telefono es requerido")]
        public string telefono {get; set;}
        [Required(ErrorMessage = "La direccion es requerida")]
        public string direccion {get; set;}
        
        [Required(ErrorMessage = "El correo es requerido")]
        public string correo {get; set;}
        [Required(ErrorMessage = "La universidad de egreso es requerida")]
        public string Universidad {get; set;}
        [Required(ErrorMessage = "El area de especialidad es requerida")]
        public string areaEspecializada { get; set; }
        
        [Required(ErrorMessage = "La fecha de finalizacion es requerida")]
        public string fechaFinalizacion {get; set;}
        [Required(ErrorMessage = "El nombre de usuario es requerido")]
        public string username {get; set;}
        [Required(ErrorMessage = "La fecha de nacimiento es requerida")]
        public string fechaNacimiento { get; set; }
        
        [Required(ErrorMessage = "La contraseña es requerida")]
        public string pass {get; set;}
        [Required(ErrorMessage = "La eps es requerida")]
        public string eps {get; set;}
        [Required(ErrorMessage = "Los meses de experiencia son requeridos")]
        public string mesesExperiencia {get; set;}
    }




    public class PsicologoViewModel : PsicologoInputModel
    {
        public PsicologoViewModel()
        {

        }
        public PsicologoViewModel(Psicologo psicologo)
        {
           identificacion = psicologo.identificacion;
           nombre = psicologo.nombre;
           apellido = psicologo.apellido;
           sexo = psicologo.sexo;
           telefono =psicologo.telefono;
           direccion =psicologo.direccion;
           correo =psicologo.correo;
           Universidad=psicologo.Universidad;
           fechaFinalizacion=psicologo.fechaFinalizacion;
           fechaNacimiento = psicologo.fechaNacimiento;
           areaEspecializada=psicologo.areaEspecializada;
           mesesExperiencia=psicologo.mesesExperiencia;
           username = psicologo.username;
           pass = psicologo.password;
           eps = psicologo.eps;
           tipoDocumento = psicologo.tipoDocumento;



        }
        public int edad {get; set;}
    }
}