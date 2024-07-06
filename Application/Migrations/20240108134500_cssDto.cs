using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class cssDto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CssSubjectCountId",
                table: "Assignments");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CssSubjectCountId",
                table: "Assignments",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
