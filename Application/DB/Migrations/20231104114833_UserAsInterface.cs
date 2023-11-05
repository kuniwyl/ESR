using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Infrastucture.Migrations
{
    /// <inheritdoc />
    public partial class UserAsInterface : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_User_StudentId",
                table: "Grades");

            migrationBuilder.DropForeignKey(
                name: "FK_Notices_User_StudentId",
                table: "Notices");

            migrationBuilder.DropForeignKey(
                name: "FK_Notices_User_TeacherId",
                table: "Notices");

            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_User_TeacherId",
                table: "Subjects");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Classes_ClassId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Classes_Student_ClassId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Schools_SchoolId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Schools_SchoolId1",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Schools_SchoolId2",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Subjects_SubjectId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_User_StudentId",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_SchoolId1",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_SchoolId2",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_Student_ClassId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_StudentId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_SubjectId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "User");

            migrationBuilder.DropColumn(
                name: "SchoolId1",
                table: "User");

            migrationBuilder.DropColumn(
                name: "SchoolId2",
                table: "User");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Student_ClassId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "SubjectId",
                table: "User");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Teachers");

            migrationBuilder.RenameIndex(
                name: "IX_User_SchoolId",
                table: "Teachers",
                newName: "IX_Teachers_SchoolId");

            migrationBuilder.RenameIndex(
                name: "IX_User_ClassId",
                table: "Teachers",
                newName: "IX_Teachers_ClassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Teachers",
                table: "Teachers",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "SchoolAdmins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Login = table.Column<string>(type: "text", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<int>(type: "integer", nullable: false),
                    RefreshToken = table.Column<string>(type: "text", nullable: false),
                    RefreshTokenCreated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    RefreshTokenExpires = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchoolAdmins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Login = table.Column<string>(type: "text", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<int>(type: "integer", nullable: false),
                    RefreshToken = table.Column<string>(type: "text", nullable: false),
                    RefreshTokenCreated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    RefreshTokenExpires = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ClassId = table.Column<int>(type: "integer", nullable: true),
                    SchoolId = table.Column<int>(type: "integer", nullable: true),
                    SubjectId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Students_Classes_ClassId",
                        column: x => x.ClassId,
                        principalTable: "Classes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Students_Schools_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "Schools",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Students_Subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subjects",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SystemAdmins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Login = table.Column<string>(type: "text", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<int>(type: "integer", nullable: false),
                    RefreshToken = table.Column<string>(type: "text", nullable: false),
                    RefreshTokenCreated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    RefreshTokenExpires = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SystemAdmins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Parents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Login = table.Column<string>(type: "text", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<int>(type: "integer", nullable: false),
                    RefreshToken = table.Column<string>(type: "text", nullable: false),
                    RefreshTokenCreated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    RefreshTokenExpires = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    StudentId = table.Column<int>(type: "integer", nullable: false),
                    SchoolId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Parents_Schools_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "Schools",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Parents_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Parents_SchoolId",
                table: "Parents",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_Parents_StudentId",
                table: "Parents",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_ClassId",
                table: "Students",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_SchoolId",
                table: "Students",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_SubjectId",
                table: "Students",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_Students_StudentId",
                table: "Grades",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notices_Students_StudentId",
                table: "Notices",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notices_Teachers_TeacherId",
                table: "Notices",
                column: "TeacherId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_Teachers_TeacherId",
                table: "Subjects",
                column: "TeacherId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_Classes_ClassId",
                table: "Teachers",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_Schools_SchoolId",
                table: "Teachers",
                column: "SchoolId",
                principalTable: "Schools",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_Students_StudentId",
                table: "Grades");

            migrationBuilder.DropForeignKey(
                name: "FK_Notices_Students_StudentId",
                table: "Notices");

            migrationBuilder.DropForeignKey(
                name: "FK_Notices_Teachers_TeacherId",
                table: "Notices");

            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_Teachers_TeacherId",
                table: "Subjects");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_Classes_ClassId",
                table: "Teachers");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_Schools_SchoolId",
                table: "Teachers");

            migrationBuilder.DropTable(
                name: "Parents");

            migrationBuilder.DropTable(
                name: "SchoolAdmins");

            migrationBuilder.DropTable(
                name: "SystemAdmins");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Teachers",
                table: "Teachers");

            migrationBuilder.RenameTable(
                name: "Teachers",
                newName: "User");

            migrationBuilder.RenameIndex(
                name: "IX_Teachers_SchoolId",
                table: "User",
                newName: "IX_User_SchoolId");

            migrationBuilder.RenameIndex(
                name: "IX_Teachers_ClassId",
                table: "User",
                newName: "IX_User_ClassId");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "User",
                type: "character varying(13)",
                maxLength: 13,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "SchoolId1",
                table: "User",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SchoolId2",
                table: "User",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "User",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Student_ClassId",
                table: "User",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SubjectId",
                table: "User",
                type: "integer",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_User_SchoolId1",
                table: "User",
                column: "SchoolId1");

            migrationBuilder.CreateIndex(
                name: "IX_User_SchoolId2",
                table: "User",
                column: "SchoolId2");

            migrationBuilder.CreateIndex(
                name: "IX_User_Student_ClassId",
                table: "User",
                column: "Student_ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_User_StudentId",
                table: "User",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_User_SubjectId",
                table: "User",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_User_StudentId",
                table: "Grades",
                column: "StudentId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notices_User_StudentId",
                table: "Notices",
                column: "StudentId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notices_User_TeacherId",
                table: "Notices",
                column: "TeacherId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_User_TeacherId",
                table: "Subjects",
                column: "TeacherId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Classes_ClassId",
                table: "User",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Classes_Student_ClassId",
                table: "User",
                column: "Student_ClassId",
                principalTable: "Classes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Schools_SchoolId",
                table: "User",
                column: "SchoolId",
                principalTable: "Schools",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Schools_SchoolId1",
                table: "User",
                column: "SchoolId1",
                principalTable: "Schools",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Schools_SchoolId2",
                table: "User",
                column: "SchoolId2",
                principalTable: "Schools",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Subjects_SubjectId",
                table: "User",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_User_User_StudentId",
                table: "User",
                column: "StudentId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
