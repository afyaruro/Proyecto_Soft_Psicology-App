using Datos;
using Entidad;
using System;
using System.Linq;
using System.Collections.Generic;
using System.IO;
using System.Data.OleDb;
namespace Logica
{
    public class AgendaService
    {
        private readonly ConsultorioContext _context;

        public AgendaService(ConsultorioContext context)
        {
            _context = context;
        }

        public AgendaGuardarResponse Guardar(Agenda agenda)
        {
            try
            {


                var Psicologo = _context.psicologos.Find(agenda.psicologo.identificacion);
                if (Psicologo == null)
                {
                    return new AgendaGuardarResponse($"No se encuentra registrado el psicologo en el sistema");

                } else{

                agenda.psicologo = Psicologo;
                _context.agendas.Add(agenda);
                _context.SaveChanges();




                return new AgendaGuardarResponse(agenda);}
            }
            catch (Exception e)
            {
                return new AgendaGuardarResponse($"Error inesperado al Guardar: { e.Message}");
            }

        }
        public string Eliminar(string idAgenda)
        {
            try
            {
                var agenda = _context.agendas.Find(idAgenda);
                if (agenda != null)
                {
                    _context.Remove(agenda);
                    _context.SaveChanges();
                    return $"Se Eliminó el registro de la cita {idAgenda}";
                }
                return $"No fue posible eliminar el registro, porque no existe una cita con el id {idAgenda}";
            }
            catch (Exception e)
            {
                return $"Error inesperado al Eliminar: {e.Message}";
            }

        }

        public AgendaConsultaResponse Consultar()
        {
            try
            {

                return new AgendaConsultaResponse(_context.agendas.ToList());

            }
            catch (Exception e)
            {
                return new AgendaConsultaResponse($"Error inesperado al Consultar: {e.Message}");
            }

        }

        public AgendaBuscarPsicologoResponse BuscarPorPsicologo(string username){
            try
            {

                List<Agenda>  agendas = this.Consultar().Agendas;
                List<Agenda> agendasUser = new List<Agenda>();
                if (agendas == null)
                {
                    return new AgendaBuscarPsicologoResponse("No hay agendas Registradas");

                } else{
                   foreach (var item in agendas)
                 {
                    if(item.idPsicologo == username){
                        agendasUser.Add(item);
                    }
                 }

                 return new AgendaBuscarPsicologoResponse(agendasUser);
                 
                }
                //return new AgendaBuscarResponse(agenda);
            }
            catch (AgendaNoEncontradaException e)
            {
                return new AgendaBuscarPsicologoResponse("Error al Buscar:" + e.Message);
            }
        }
        public AgendaBuscarResponse Buscar(string idAgenda)
        {
            try
            {

                var agenda = _context.agendas.Find(idAgenda);
                if (agenda == null)
                {

                    throw new AgendaNoEncontradaException("No se encontraró un registro con la identificacion Solicitada");
                }
                return new AgendaBuscarResponse(agenda);
            }
            catch (AgendaNoEncontradaException e)
            {
                return new AgendaBuscarResponse("Error al Buscar:" + e.Message);
            }
            catch (Exception e)
            {
                return new AgendaBuscarResponse("Error inesperado al Buscar:" + e.Message);
            }

        }
        public List<string> nuevaLista()
        {
            List<Agenda> agenda = _context.agendas.ToList();
            List<string> listaHoraAgenda = new List<string>();

            foreach (var item in agenda)
            {

                var almacenado = item.fechaDeseada + item.horaCita;
                listaHoraAgenda.Add(almacenado);
            }
            return listaHoraAgenda;
        }

        public AgendaList buscarFechaDisponible(DateTime fecha)
        {


            try
            {
                List<Agenda> agenda = _context.agendas.ToList();
                List<string> horaCita = new List<string>();
                foreach (var item in agenda)
                {
                    if (item.fechaDeseada == fecha)
                    {
                        var almacenado = item.horaCita;
                        horaCita.Add(almacenado);
                    }

                }
                return new AgendaList(horaCita);

            }
            catch (Exception e)
            {
                return new AgendaList($"Error inesperado al Consultar: {e.Message}");
            }
        }

        public List<string> buscarPsicologo(string hora)
        {
            List<Agenda> agenda = _context.agendas.ToList();
            List<Psicologo> psicologos = _context.psicologos.ToList();
            

            List<string> nombrePsicologo = new List<string>();
            foreach (var item in agenda)
            {
                if (item.horaCita == hora)
                {
                     foreach (var p in psicologos){
                        if(p.username == item.idPsicologo){
                            var nombre = p.nombre;
                            var apellido = p.apellido;

                            nombrePsicologo.Add(nombre+" "+apellido);
                        }

                     }

                }
                    
            }
                 return nombrePsicologo;
        }
           
          
        
        
       
        public List<string> buscarTerapia(string nombrePsicologo)
        {
            List<Agenda> agenda = _context.agendas.ToList();
            List<Psicologo> psicologo = _context.psicologos.ToList();
            List<string> TerapiaPsicologo = new List<string>();
            foreach (var item in psicologo)
            {
                var nombreCompleto = item.nombre + " " + item.apellido;
                if (nombreCompleto == nombrePsicologo)
                {
                    var almacenarTerapia = item.areaEspecializada;
                    TerapiaPsicologo.Add(almacenarTerapia);
                }
            }
            return TerapiaPsicologo;
        }
    }

     public class AgendaBuscarPsicologoResponse
    {
        public List<Agenda> Agendas { get; set; }
        public string Mensaje { get; set; }
        public bool IsError { get; set; }

        public AgendaBuscarPsicologoResponse(List<Agenda> agendas)
        {
            Agendas = agendas;
            IsError = false;
        }
        public AgendaBuscarPsicologoResponse(string mensaje)
        {
            Mensaje = mensaje;
            IsError = true;
        }
    }
}
