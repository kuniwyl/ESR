using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class noticesNotForAll3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassNotice_Classes_ClassesId",
                table: "ClassNotice");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassNotice_Notices_NoticesId",
                table: "ClassNotice");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassNotice",
                table: "ClassNotice");

            migrationBuilder.DropIndex(
                name: "IX_ClassNotice_NoticesId",
                table: "ClassNotice");

            migrationBuilder.RenameColumn(
                name: "NoticesId",
                table: "ClassNotice",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "ClassesId",
                table: "ClassNotice",
                newName: "NoticeId");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "ClassNotice",
                type: "integer",
                nullable: false,
                defaultValue: 0)
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddColumn<int>(
                name: "ClassId",
                table: "ClassNotice",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "ClassNotice",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Updated",
                table: "ClassNotice",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassNotice",
                table: "ClassNotice",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_ClassNotice_ClassId",
                table: "ClassNotice",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassNotice_NoticeId",
                table: "ClassNotice",
                column: "NoticeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassNotice_Classes_ClassId",
                table: "ClassNotice",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassNotice_Notices_NoticeId",
                table: "ClassNotice",
                column: "NoticeId",
                principalTable: "Notices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassNotice_Classes_ClassId",
                table: "ClassNotice");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassNotice_Notices_NoticeId",
                table: "ClassNotice");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassNotice",
                table: "ClassNotice");

            migrationBuilder.DropIndex(
                name: "IX_ClassNotice_ClassId",
                table: "ClassNotice");

            migrationBuilder.DropIndex(
                name: "IX_ClassNotice_NoticeId",
                table: "ClassNotice");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "ClassNotice");

            migrationBuilder.DropColumn(
                name: "ClassId",
                table: "ClassNotice");

            migrationBuilder.DropColumn(
                name: "Created",
                table: "ClassNotice");

            migrationBuilder.DropColumn(
                name: "Updated",
                table: "ClassNotice");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "ClassNotice",
                newName: "NoticesId");

            migrationBuilder.RenameColumn(
                name: "NoticeId",
                table: "ClassNotice",
                newName: "ClassesId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassNotice",
                table: "ClassNotice",
                columns: new[] { "ClassesId", "NoticesId" });

            migrationBuilder.CreateIndex(
                name: "IX_ClassNotice_NoticesId",
                table: "ClassNotice",
                column: "NoticesId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassNotice_Classes_ClassesId",
                table: "ClassNotice",
                column: "ClassesId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassNotice_Notices_NoticesId",
                table: "ClassNotice",
                column: "NoticesId",
                principalTable: "Notices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
