using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class classNotices : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Lessons");

            migrationBuilder.DropTable(
                name: "ClassesNotice");

            migrationBuilder.AlterColumn<int>(
                name: "ClassSubjectSemesterId",
                table: "Lessons",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "ClassNotice",
                columns: table => new
                {
                    ClassesId = table.Column<int>(type: "integer", nullable: false),
                    NoticesId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassNotice", x => new { x.ClassesId, x.NoticesId });
                    table.ForeignKey(
                        name: "FK_ClassNotice_Classes_ClassesId",
                        column: x => x.ClassesId,
                        principalTable: "Classes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassNotice_Notices_NoticesId",
                        column: x => x.NoticesId,
                        principalTable: "Notices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassNotice_NoticesId",
                table: "ClassNotice",
                column: "NoticesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Lessons",
                column: "ClassSubjectSemesterId",
                principalTable: "ClassSubjectSemesters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Lessons");

            migrationBuilder.DropTable(
                name: "ClassNotice");

            migrationBuilder.AlterColumn<int>(
                name: "ClassSubjectSemesterId",
                table: "Lessons",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.CreateTable(
                name: "ClassesNotice",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ClassId = table.Column<int>(type: "integer", nullable: false),
                    SemesterId = table.Column<int>(type: "integer", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: false),
                    Created = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    Slot = table.Column<int>(type: "integer", nullable: true),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Updated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassesNotice", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassesNotice_Classes_ClassId",
                        column: x => x.ClassId,
                        principalTable: "Classes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassesNotice_Semesters_SemesterId",
                        column: x => x.SemesterId,
                        principalTable: "Semesters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassesNotice_ClassId",
                table: "ClassesNotice",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassesNotice_SemesterId",
                table: "ClassesNotice",
                column: "SemesterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Lessons",
                column: "ClassSubjectSemesterId",
                principalTable: "ClassSubjectSemesters",
                principalColumn: "Id");
        }
    }
}
