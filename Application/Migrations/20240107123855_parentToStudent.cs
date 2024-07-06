using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class parentToStudent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Parents_StudentId",
                table: "Parents");

            migrationBuilder.CreateIndex(
                name: "IX_Parents_StudentId",
                table: "Parents",
                column: "StudentId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Parents_StudentId",
                table: "Parents");

            migrationBuilder.CreateIndex(
                name: "IX_Parents_StudentId",
                table: "Parents",
                column: "StudentId");
        }
    }
}
