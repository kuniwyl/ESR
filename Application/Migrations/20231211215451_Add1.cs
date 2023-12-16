using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class Add1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parents_SchoolUser_SchoolUserId",
                table: "Parents");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_SchoolUser_SchoolUserId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_SchoolUser_SchoolUserId",
                table: "Teachers");

            migrationBuilder.DropTable(
                name: "SchoolUser");

            migrationBuilder.AddColumn<int>(
                name: "SchoolId",
                table: "User",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SchoolUser_UserId",
                table: "User",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_SchoolId",
                table: "User",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_User_SchoolUser_UserId",
                table: "User",
                column: "SchoolUser_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_User_SchoolUserId",
                table: "Parents",
                column: "SchoolUserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_User_SchoolUserId",
                table: "Students",
                column: "SchoolUserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_User_SchoolUserId",
                table: "Teachers",
                column: "SchoolUserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Schools_SchoolId",
                table: "User",
                column: "SchoolId",
                principalTable: "Schools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_User_User_SchoolUser_UserId",
                table: "User",
                column: "SchoolUser_UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parents_User_SchoolUserId",
                table: "Parents");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_User_SchoolUserId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_User_SchoolUserId",
                table: "Teachers");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Schools_SchoolId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_User_SchoolUser_UserId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_SchoolId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_SchoolUser_UserId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "SchoolId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "SchoolUser_UserId",
                table: "User");

            migrationBuilder.CreateTable(
                name: "SchoolUser",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SchoolId = table.Column<int>(type: "integer", nullable: false),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    Created = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Updated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchoolUser", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SchoolUser_Schools_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "Schools",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SchoolUser_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SchoolUser_SchoolId",
                table: "SchoolUser",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolUser_UserId",
                table: "SchoolUser",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_SchoolUser_SchoolUserId",
                table: "Parents",
                column: "SchoolUserId",
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
                name: "FK_Teachers_SchoolUser_SchoolUserId",
                table: "Teachers",
                column: "SchoolUserId",
                principalTable: "SchoolUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
