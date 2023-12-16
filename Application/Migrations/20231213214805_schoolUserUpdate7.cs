using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class schoolUserUpdate7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parents_SchoolUser_Id",
                table: "Parents");

            migrationBuilder.DropForeignKey(
                name: "FK_Parents_SchoolUser_SchoolUserId",
                table: "Parents");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolAdmins_Teachers_TeacherId",
                table: "SchoolAdmins");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolUser_Schools_SchoolId",
                table: "SchoolUser");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolUser_User_Id",
                table: "SchoolUser");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolUser_User_UserId",
                table: "SchoolUser");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_SchoolUser_Id",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_SchoolUser_SchoolUserId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_SystemAdmins_User_Id",
                table: "SystemAdmins");

            migrationBuilder.DropForeignKey(
                name: "FK_SystemAdmins_User_UserId",
                table: "SystemAdmins");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_SchoolUser_Id",
                table: "Teachers");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_SchoolUser_SchoolUserId",
                table: "Teachers");

            migrationBuilder.DropIndex(
                name: "IX_Teachers_SchoolUserId",
                table: "Teachers");

            migrationBuilder.DropIndex(
                name: "IX_SystemAdmins_UserId",
                table: "SystemAdmins");

            migrationBuilder.DropIndex(
                name: "IX_Students_SchoolUserId",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_SchoolAdmins_TeacherId",
                table: "SchoolAdmins");

            migrationBuilder.DropIndex(
                name: "IX_Parents_SchoolUserId",
                table: "Parents");

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SchoolUser",
                table: "SchoolUser");

            migrationBuilder.DropIndex(
                name: "IX_SchoolUser_UserId",
                table: "SchoolUser");

            migrationBuilder.DropColumn(
                name: "SchoolUserId",
                table: "Teachers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "SystemAdmins");

            migrationBuilder.DropColumn(
                name: "SchoolUserId",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "TeacherId",
                table: "SchoolAdmins");

            migrationBuilder.DropColumn(
                name: "SchoolUserId",
                table: "Parents");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "SchoolUser");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Users");

            migrationBuilder.RenameTable(
                name: "SchoolUser",
                newName: "SchoolUsers");

            migrationBuilder.RenameIndex(
                name: "IX_SchoolUser_SchoolId",
                table: "SchoolUsers",
                newName: "IX_SchoolUsers_SchoolId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SchoolUsers",
                table: "SchoolUsers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_SchoolUsers_Id",
                table: "Parents",
                column: "Id",
                principalTable: "SchoolUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolUsers_Schools_SchoolId",
                table: "SchoolUsers",
                column: "SchoolId",
                principalTable: "Schools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolUsers_Users_Id",
                table: "SchoolUsers",
                column: "Id",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_SchoolUsers_Id",
                table: "Students",
                column: "Id",
                principalTable: "SchoolUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SystemAdmins_Users_Id",
                table: "SystemAdmins",
                column: "Id",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_SchoolUsers_Id",
                table: "Teachers",
                column: "Id",
                principalTable: "SchoolUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parents_SchoolUsers_Id",
                table: "Parents");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolUsers_Schools_SchoolId",
                table: "SchoolUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_SchoolUsers_Users_Id",
                table: "SchoolUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_SchoolUsers_Id",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_SystemAdmins_Users_Id",
                table: "SystemAdmins");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_SchoolUsers_Id",
                table: "Teachers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SchoolUsers",
                table: "SchoolUsers");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "User");

            migrationBuilder.RenameTable(
                name: "SchoolUsers",
                newName: "SchoolUser");

            migrationBuilder.RenameIndex(
                name: "IX_SchoolUsers_SchoolId",
                table: "SchoolUser",
                newName: "IX_SchoolUser_SchoolId");

            migrationBuilder.AddColumn<int>(
                name: "SchoolUserId",
                table: "Teachers",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "SystemAdmins",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SchoolUserId",
                table: "Students",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TeacherId",
                table: "SchoolAdmins",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SchoolUserId",
                table: "Parents",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "SchoolUser",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SchoolUser",
                table: "SchoolUser",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Teachers_SchoolUserId",
                table: "Teachers",
                column: "SchoolUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SystemAdmins_UserId",
                table: "SystemAdmins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_SchoolUserId",
                table: "Students",
                column: "SchoolUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolAdmins_TeacherId",
                table: "SchoolAdmins",
                column: "TeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_Parents_SchoolUserId",
                table: "Parents",
                column: "SchoolUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolUser_UserId",
                table: "SchoolUser",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_SchoolUser_Id",
                table: "Parents",
                column: "Id",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_SchoolUser_SchoolUserId",
                table: "Parents",
                column: "SchoolUserId",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolAdmins_Teachers_TeacherId",
                table: "SchoolAdmins",
                column: "TeacherId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolUser_Schools_SchoolId",
                table: "SchoolUser",
                column: "SchoolId",
                principalTable: "Schools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolUser_User_Id",
                table: "SchoolUser",
                column: "Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolUser_User_UserId",
                table: "SchoolUser",
                column: "UserId",
                principalTable: "User",
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
                name: "FK_Students_SchoolUser_SchoolUserId",
                table: "Students",
                column: "SchoolUserId",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SystemAdmins_User_Id",
                table: "SystemAdmins",
                column: "Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SystemAdmins_User_UserId",
                table: "SystemAdmins",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_SchoolUser_Id",
                table: "Teachers",
                column: "Id",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_SchoolUser_SchoolUserId",
                table: "Teachers",
                column: "SchoolUserId",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
