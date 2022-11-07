using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "codigo_3",
                table: "tratamientos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "codigo_4",
                table: "tratamientos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "descripcion_3",
                table: "tratamientos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "descripcion_4",
                table: "tratamientos",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserName = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Estado = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    MobilePhone = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserName);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropColumn(
                name: "codigo_3",
                table: "tratamientos");

            migrationBuilder.DropColumn(
                name: "codigo_4",
                table: "tratamientos");

            migrationBuilder.DropColumn(
                name: "descripcion_3",
                table: "tratamientos");

            migrationBuilder.DropColumn(
                name: "descripcion_4",
                table: "tratamientos");
        }
    }
}
