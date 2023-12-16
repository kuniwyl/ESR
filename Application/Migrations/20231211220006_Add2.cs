using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class Add2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_User_SchoolUser_UserId",
                table: "User");

            migrationBuilder.CreateIndex(
                name: "IX_User_SchoolUser_UserId_SchoolId",
                table: "User",
                columns: new[] { "SchoolUser_UserId", "SchoolId" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_User_SchoolUser_UserId_SchoolId",
                table: "User");

            migrationBuilder.CreateIndex(
                name: "IX_User_SchoolUser_UserId",
                table: "User",
                column: "SchoolUser_UserId");
        }
    }
}
