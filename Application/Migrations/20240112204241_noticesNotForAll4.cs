using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Application.Migrations
{
    /// <inheritdoc />
    public partial class noticesNotForAll4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameTable(
                name: "ClassNotice",
                newName: "ClassNotices");

            migrationBuilder.RenameIndex(
                name: "IX_ClassNotice_NoticeId",
                table: "ClassNotices",
                newName: "IX_ClassNotices_NoticeId");

            migrationBuilder.RenameIndex(
                name: "IX_ClassNotice_ClassId",
                table: "ClassNotices",
                newName: "IX_ClassNotices_ClassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassNotices",
                table: "ClassNotices",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassNotices_Classes_ClassId",
                table: "ClassNotices",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassNotices_Notices_NoticeId",
                table: "ClassNotices",
                column: "NoticeId",
                principalTable: "Notices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassNotices_Classes_ClassId",
                table: "ClassNotices");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassNotices_Notices_NoticeId",
                table: "ClassNotices");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassNotices",
                table: "ClassNotices");

            migrationBuilder.RenameTable(
                name: "ClassNotices",
                newName: "ClassNotice");

            migrationBuilder.RenameIndex(
                name: "IX_ClassNotices_NoticeId",
                table: "ClassNotice",
                newName: "IX_ClassNotice_NoticeId");

            migrationBuilder.RenameIndex(
                name: "IX_ClassNotices_ClassId",
                table: "ClassNotice",
                newName: "IX_ClassNotice_ClassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassNotice",
                table: "ClassNotice",
                column: "Id");

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
    }
}
