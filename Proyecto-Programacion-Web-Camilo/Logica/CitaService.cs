using Datos;
using Entidad;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Logica
{
    public class CitaService
    {
        private readonly ConsultorioContext _context;

        public CitaService(ConsultorioContext context)
        {
            _context = context;
        }

        public CitaGuardarResponse Guardar(Cita cita)
        {
            try
            {
                var Paciente=_context.pacientes.Find(cita.paciente.identificacion);
                if (Paciente== null)
                {
                    return new CitaGuardarResponse($"No se encuentra registrada la persona en el sistema");
                  
                }
                cita.paciente=Paciente;
                _context.citas.Add(cita);
                _context.SaveChanges();
                return new CitaGuardarResponse(cita);
            }
            catch (Exception e)
            {
                return new CitaGuardarResponse($"Error inesperado al Guardar: { e.Message}");
            }

        }
        public string Eliminar(string idCita)
        {
            try
            {
                var cita = _context.citas.Find(idCita);
                if (cita != null)
                {
                    _context.Remove(cita);
                    _context.SaveChanges();
                    return $"Se Eliminó el registro de la cita {idCita}";
                }
                return $"No fue posible eliminar el registro, porque no existe una cita con el id {idCita}";
            }
            catch (Exception e)
            {
                return $"Error inesperado al Eliminar: {e.Message}";
            }
            
        }
        public CitaConsultaResponse Consultar()
        {
            try
            {

                return new CitaConsultaResponse(_context.citas.ToList());

            }
            catch (Exception e)
            {
                return new CitaConsultaResponse($"Error inesperado al Consultar: {e.Message}");
            }
            
        }
        public CitaBuscarResponse Buscar(string idCita)
        {
            try
            {
        
                var cita = _context.citas.Find(idCita);
                if (cita == null)
                {
                    
                    throw new CitaNoEncontradaException("No se encontraró un registro con la identificacion Solicitada");
                }
                return new CitaBuscarResponse(cita);
            }
            catch (CitaNoEncontradaException e)
            {
                return new CitaBuscarResponse("Error al Buscar:" + e.Message);
            }
            catch (Exception e)
            {
                return new CitaBuscarResponse("Error inesperado al Buscar:" + e.Message);
            }
            
        }

        public BuscarCitaxIdPacienteResponse BuscarCitasporIdPaciente(string username){
                List<Cita>  citas = this.Consultar().Citas;
                List<Cita> citasUser = new List<Cita>();
            try{

                if (citas == null)
                {
                    return new BuscarCitaxIdPacienteResponse("No hay citas Registradas");

                } else{
                   foreach (var item in citas)
                 {
                    if(item.idPaciente == username){
                        citasUser.Add(item);
                    }
                 }

                 return new BuscarCitaxIdPacienteResponse(citasUser);
                 
                }
            }catch (CitaNoEncontradaException e)
            {
                return new BuscarCitaxIdPacienteResponse("Error al Buscar:" + e.Message);
            }
        }


        public string nombrePaciente(string id){
            
            List<Cita> citas=_context.citas.ToList();
            List<Paciente> pacientes=_context.pacientes.ToList();
            string nombre="";
            foreach(var item in citas){
                if(item.idPaciente==id){
                     foreach(var e in pacientes){
                        if(item.idPaciente==e.identificacion){
                            nombre=e.nombre+" "+e.apellido;
                        }
                    }
                }
               
            }
            return nombre;
        }

       
    }

     public class BuscarCitaxIdPacienteResponse
    {
        public List<Cita> Citas { get; set; }
        public string Mensaje { get; set; }
        public bool IsError { get; set; }

        public BuscarCitaxIdPacienteResponse(List<Cita> citas)
        {
            Citas = citas;
            IsError = false;
        }
        public BuscarCitaxIdPacienteResponse(string mensaje)
        {
            Mensaje = mensaje;
            IsError = true;
        }
    }
}
