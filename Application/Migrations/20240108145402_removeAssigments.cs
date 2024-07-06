using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class removeAssigments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_Assignments_AssignmentId",
                table: "Grades");

            migrationBuilder.DropTable(
                name: "Assignments");

            migrationBuilder.RenameColumn(
                name: "AssignmentId",
                table: "Grades",
                newName: "ClassSubjectSemesterId");

            migrationBuilder.RenameIndex(
                name: "IX_Grades_AssignmentId",
                table: "Grades",
                newName: "IX_Grades_ClassSubjectSemesterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Grades",
                column: "ClassSubjectSemesterId",
                principalTable: "ClassSubjectSemesters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Grades");

            migrationBuilder.RenameColumn(
                name: "ClassSubjectSemesterId",
                table: "Grades",
                newName: "AssignmentId");

            migrationBuilder.RenameIndex(
                name: "IX_Grades_ClassSubjectSemesterId",
                table: "Grades",
                newName: "IX_Grades_AssignmentId");

            migrationBuilder.CreateTable(
                name: "Assignments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ClassSubjectSemesterId = table.Column<int>(type: "integer", nullable: false),
                    Created = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    Updated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assignments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Assignments_ClassSubjectSemesters_ClassSubjectSemesterId",
                        column: x => x.ClassSubjectSemesterId,
                        principalTable: "ClassSubjectSemesters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_ClassSubjectSemesterId",
                table: "Assignments",
                column: "ClassSubjectSemesterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_Assignments_AssignmentId",
                table: "Grades",
                column: "AssignmentId",
                principalTable: "Assignments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
