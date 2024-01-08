using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class init1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Assignments_CssSubjectCounts_ClassSubjectSemesterId",
                table: "Assignments");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjectSemesters_Classes_ClassId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjectSemesters_CssSubjectCounts_ClassSubjectSemester~",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjectSemesters_Semesters_SemesterId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjectSemesters_Subjects_SubjectId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_CssSubjectCounts_ClassSubjectSemesterId",
                table: "Lessons");

            migrationBuilder.DropTable(
                name: "CssSubjectCounts");

            migrationBuilder.DropIndex(
                name: "IX_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropColumn(
                name: "ClassSubjectSemesterId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropColumn(
                name: "CssSubjectCountId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropColumn(
                name: "Day",
                table: "ClassSubjectSemesters");

            migrationBuilder.RenameColumn(
                name: "Slot",
                table: "ClassSubjectSemesters",
                newName: "Count");

            migrationBuilder.AlterColumn<int>(
                name: "SubjectId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SemesterId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ClassId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "ClassSubjectSemesterInstances",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Created = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Updated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    Day = table.Column<int>(type: "integer", nullable: false),
                    Slot = table.Column<int>(type: "integer", nullable: false),
                    ClassSubjectSemesterId = table.Column<int>(type: "integer", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassSubjectSemesterInstances", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassSubjectSemesterInstances_ClassSubjectSemesters_ClassSu~",
                        column: x => x.ClassSubjectSemesterId,
                        principalTable: "ClassSubjectSemesters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassSubjectSemesterInstances_ClassSubjectSemesterId",
                table: "ClassSubjectSemesterInstances",
                column: "ClassSubjectSemesterId");
            
            migrationBuilder.AddForeignKey(
                name: "FK_Assignments_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Assignments",
                column: "ClassSubjectSemesterId",
                principalTable: "ClassSubjectSemesters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubjectSemesters_Classes_ClassId",
                table: "ClassSubjectSemesters",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubjectSemesters_Semesters_SemesterId",
                table: "ClassSubjectSemesters",
                column: "SemesterId",
                principalTable: "Semesters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubjectSemesters_Subjects_SubjectId",
                table: "ClassSubjectSemesters",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Lessons",
                column: "ClassSubjectSemesterId",
                principalTable: "ClassSubjectSemesters",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Assignments_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Assignments");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjectSemesters_Classes_ClassId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjectSemesters_Semesters_SemesterId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjectSemesters_Subjects_SubjectId",
                table: "ClassSubjectSemesters");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "Lessons");

            migrationBuilder.DropTable(
                name: "ClassSubjectSemesterInstances");

            migrationBuilder.RenameColumn(
                name: "Count",
                table: "ClassSubjectSemesters",
                newName: "Slot");

            migrationBuilder.AlterColumn<int>(
                name: "SubjectId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "SemesterId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "ClassId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "ClassSubjectSemesterId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CssSubjectCountId",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Day",
                table: "ClassSubjectSemesters",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "CssSubjectCounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ClassId = table.Column<int>(type: "integer", nullable: false),
                    SemesterId = table.Column<int>(type: "integer", nullable: false),
                    SubjectId = table.Column<int>(type: "integer", nullable: false),
                    Count = table.Column<int>(type: "integer", nullable: false),
                    Created = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    Updated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CssSubjectCounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CssSubjectCounts_Classes_ClassId",
                        column: x => x.ClassId,
                        principalTable: "Classes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CssSubjectCounts_Semesters_SemesterId",
                        column: x => x.SemesterId,
                        principalTable: "Semesters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CssSubjectCounts_Subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassSubjectSemesters_ClassSubjectSemesterId",
                table: "ClassSubjectSemesters",
                column: "ClassSubjectSemesterId");

            migrationBuilder.CreateIndex(
                name: "IX_CssSubjectCounts_ClassId",
                table: "CssSubjectCounts",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_CssSubjectCounts_SemesterId",
                table: "CssSubjectCounts",
                column: "SemesterId");

            migrationBuilder.CreateIndex(
                name: "IX_CssSubjectCounts_SubjectId",
                table: "CssSubjectCounts",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Assignments_CssSubjectCounts_ClassSubjectSemesterId",
                table: "Assignments",
                column: "ClassSubjectSemesterId",
                principalTable: "CssSubjectCounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubjectSemesters_Classes_ClassId",
                table: "ClassSubjectSemesters",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubjectSemesters_Semesters_SemesterId",
                table: "ClassSubjectSemesters",
                column: "SemesterId",
                principalTable: "Semesters",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubjectSemesters_Subjects_SubjectId",
                table: "ClassSubjectSemesters",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_CssSubjectCounts_ClassSubjectSemesterId",
                table: "Lessons",
                column: "ClassSubjectSemesterId",
                principalTable: "CssSubjectCounts",
                principalColumn: "Id");
        }
    }
}
