using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastucture.Migrations
{
    /// <inheritdoc />
    public partial class SchoolAdminsSchool : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SchoolId",
                table: "SchoolAdmins",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_SchoolAdmins_SchoolId",
                table: "SchoolAdmins",
                column: "SchoolId");

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolAdmins_Schools_SchoolId",
                table: "SchoolAdmins",
                column: "SchoolId",
                principalTable: "Schools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SchoolAdmins_Schools_SchoolId",
                table: "SchoolAdmins");

            migrationBuilder.DropIndex(
                name: "IX_SchoolAdmins_SchoolId",
                table: "SchoolAdmins");

            migrationBuilder.DropColumn(
                name: "SchoolId",
                table: "SchoolAdmins");
        }
    }
}
