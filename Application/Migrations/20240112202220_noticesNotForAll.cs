using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class noticesNotForAll : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsNotForAll",
                table: "Notices",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsNotForAll",
                table: "Notices");
        }
    }
}
