using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class schoolUserUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parents_User_Id",
                table: "Parents");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolAdmins_User_Id",
                table: "SchoolAdmins");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_User_Id",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_User_Id",
                table: "Teachers");

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_SchoolUser_Id",
                table: "Parents",
                column: "Id",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolAdmins_Teachers_Id",
                table: "SchoolAdmins",
                column: "Id",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_SchoolUser_Id",
                table: "Students",
                column: "Id",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_SchoolUser_Id",
                table: "Teachers",
                column: "Id",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parents_SchoolUser_Id",
                table: "Parents");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolAdmins_Teachers_Id",
                table: "SchoolAdmins");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_SchoolUser_Id",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_SchoolUser_Id",
                table: "Teachers");

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_User_Id",
                table: "Parents",
                column: "Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolAdmins_User_Id",
                table: "SchoolAdmins",
                column: "Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_User_Id",
                table: "Students",
                column: "Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_User_Id",
                table: "Teachers",
                column: "Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
