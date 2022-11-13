using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entidad
{
    public class Paciente: Persona
    {
      
        public List<Cita> citas { get; set; }
    }
}