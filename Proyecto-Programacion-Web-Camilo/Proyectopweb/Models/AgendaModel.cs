using System;
using System.ComponentModel.DataAnnotations;
using Entidad;

namespace Proyectopweb.Models
{
    public class AgendaInputModel
    {
        [Required(ErrorMessage = "el nombre de usuario del psicologo es requerido")]
        public string idPsicologo { get; set; }
        [Required(ErrorMessage = "La fecha deseada es requerida")]
        public DateTime fechaDeseada { get; set; }
        [Required(ErrorMessage = "La hora es requerida")]
        public string horaCita { get; set; }    
       
        
        
    
    }

    public class AgendaViewModel : AgendaInputModel
    {
        public AgendaViewModel()
        {

        }
        public AgendaViewModel(Agenda agenda)
        {
            idPsicologo = agenda.idPsicologo;
            fechaDeseada = agenda.fechaDeseada;
            horaCita = agenda.horaCita;
            idAgenda = agenda.idAgenda;
           
        } 
        public int idAgenda { get; set; }
    
    }
}