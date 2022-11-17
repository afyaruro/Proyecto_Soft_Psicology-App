using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class Nueva3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "enfermedades",
                columns: table => new
                {
                    idEnfermedad = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Codigo_3 = table.Column<string>(nullable: true),
                    Descripcion_3 = table.Column<string>(nullable: true),
                    Codigo_4 = table.Column<string>(nullable: true),
                    Descripcion_4 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_enfermedades", x => x.idEnfermedad);
                });

            migrationBuilder.CreateTable(
                name: "pacientes",
                columns: table => new
                {
                    username = table.Column<string>(nullable: false),
                    password = table.Column<string>(nullable: true),
                    eps = table.Column<string>(nullable: true),
                    identificacion = table.Column<string>(nullable: true),
                    tipoDocumento = table.Column<string>(nullable: true),
                    nombre = table.Column<string>(nullable: true),
                    apellido = table.Column<string>(nullable: true),
                    sexo = table.Column<string>(nullable: true),
                    fechaNacimiento = table.Column<DateTime>(nullable: false),
                    edad = table.Column<int>(nullable: false),
                    telefono = table.Column<string>(nullable: true),
                    direccion = table.Column<string>(nullable: true),
                    correo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pacientes", x => x.username);
                });

            migrationBuilder.CreateTable(
                name: "psicologos",
                columns: table => new
                {
                    username = table.Column<string>(nullable: false),
                    password = table.Column<string>(nullable: true),
                    eps = table.Column<string>(nullable: true),
                    identificacion = table.Column<string>(nullable: true),
                    tipoDocumento = table.Column<string>(nullable: true),
                    nombre = table.Column<string>(nullable: true),
                    apellido = table.Column<string>(nullable: true),
                    sexo = table.Column<string>(nullable: true),
                    fechaNacimiento = table.Column<DateTime>(nullable: false),
                    edad = table.Column<int>(nullable: false),
                    telefono = table.Column<string>(nullable: true),
                    direccion = table.Column<string>(nullable: true),
                    correo = table.Column<string>(nullable: true),
                    Universidad = table.Column<string>(nullable: true),
                    fechaFinalizacion = table.Column<string>(nullable: true),
                    areaEspecializada = table.Column<string>(nullable: true),
                    mesesExperiencia = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_psicologos", x => x.username);
                });

            migrationBuilder.CreateTable(
                name: "citas",
                columns: table => new
                {
                    idCita = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idPaciente = table.Column<string>(nullable: true),
                    pacienteusername = table.Column<string>(nullable: true),
                    tiposSolicitud = table.Column<string>(nullable: true),
                    fechaDeseada = table.Column<DateTime>(nullable: false),
                    nombre = table.Column<string>(nullable: true),
                    horaCita = table.Column<string>(nullable: true),
                    nombrePaciente = table.Column<string>(nullable: true),
                    estado = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_citas", x => x.idCita);
                    table.ForeignKey(
                        name: "FK_citas_pacientes_pacienteusername",
                        column: x => x.pacienteusername,
                        principalTable: "pacientes",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "evaluaciones",
                columns: table => new
                {
                    IdEvaluacion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    identificacionPaciente = table.Column<string>(nullable: true),
                    pacienteusername = table.Column<string>(nullable: true),
                    identificacionPsicologo = table.Column<string>(nullable: true),
                    Psicologousername = table.Column<string>(nullable: true),
                    fecha = table.Column<DateTime>(nullable: false),
                    diagnostico = table.Column<string>(nullable: true),
                    nombrePaciente = table.Column<string>(nullable: true),
                    ocupacion = table.Column<string>(nullable: true),
                    lugar = table.Column<string>(nullable: true),
                    nombrePsicologo = table.Column<string>(nullable: true),
                    consulta = table.Column<string>(nullable: true),
                    observacion = table.Column<string>(nullable: true),
                    prueba = table.Column<string>(nullable: true),
                    analisis = table.Column<string>(nullable: true),
                    pronostico = table.Column<string>(nullable: true),
                    recomendacion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_evaluaciones", x => x.IdEvaluacion);
                    table.ForeignKey(
                        name: "FK_evaluaciones_psicologos_Psicologousername",
                        column: x => x.Psicologousername,
                        principalTable: "psicologos",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_evaluaciones_pacientes_pacienteusername",
                        column: x => x.pacienteusername,
                        principalTable: "pacientes",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "tratamientos",
                columns: table => new
                {
                    IdTratamiento = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    identificacionPaciente = table.Column<string>(nullable: true),
                    pacienteusername = table.Column<string>(nullable: true),
                    identificacionPsicologo = table.Column<string>(nullable: true),
                    Psicologousername = table.Column<string>(nullable: true),
                    fecha = table.Column<DateTime>(nullable: false),
                    codigo_3 = table.Column<string>(nullable: true),
                    codigo_4 = table.Column<string>(nullable: true),
                    descripcion_3 = table.Column<string>(nullable: true),
                    descripcion_4 = table.Column<string>(nullable: true),
                    medicacion = table.Column<string>(nullable: true),
                    tratamientoPaso = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tratamientos", x => x.IdTratamiento);
                    table.ForeignKey(
                        name: "FK_tratamientos_psicologos_Psicologousername",
                        column: x => x.Psicologousername,
                        principalTable: "psicologos",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tratamientos_pacientes_pacienteusername",
                        column: x => x.pacienteusername,
                        principalTable: "pacientes",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "agendas",
                columns: table => new
                {
                    idAgenda = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idPsicologo = table.Column<string>(nullable: true),
                    psicologousername = table.Column<string>(nullable: true),
                    idCita = table.Column<int>(nullable: false),
                    citaidCita = table.Column<int>(nullable: true),
                    fechaDeseada = table.Column<DateTime>(nullable: false),
                    horaCita = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_agendas", x => x.idAgenda);
                    table.ForeignKey(
                        name: "FK_agendas_citas_citaidCita",
                        column: x => x.citaidCita,
                        principalTable: "citas",
                        principalColumn: "idCita",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_agendas_psicologos_psicologousername",
                        column: x => x.psicologousername,
                        principalTable: "psicologos",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_agendas_citaidCita",
                table: "agendas",
                column: "citaidCita");

            migrationBuilder.CreateIndex(
                name: "IX_agendas_psicologousername",
                table: "agendas",
                column: "psicologousername");

            migrationBuilder.CreateIndex(
                name: "IX_citas_pacienteusername",
                table: "citas",
                column: "pacienteusername");

            migrationBuilder.CreateIndex(
                name: "IX_evaluaciones_Psicologousername",
                table: "evaluaciones",
                column: "Psicologousername");

            migrationBuilder.CreateIndex(
                name: "IX_evaluaciones_pacienteusername",
                table: "evaluaciones",
                column: "pacienteusername");

            migrationBuilder.CreateIndex(
                name: "IX_tratamientos_Psicologousername",
                table: "tratamientos",
                column: "Psicologousername");

            migrationBuilder.CreateIndex(
                name: "IX_tratamientos_pacienteusername",
                table: "tratamientos",
                column: "pacienteusername");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "agendas");

            migrationBuilder.DropTable(
                name: "enfermedades");

            migrationBuilder.DropTable(
                name: "evaluaciones");

            migrationBuilder.DropTable(
                name: "tratamientos");

            migrationBuilder.DropTable(
                name: "citas");

            migrationBuilder.DropTable(
                name: "psicologos");

            migrationBuilder.DropTable(
                name: "pacientes");
        }
    }
}
