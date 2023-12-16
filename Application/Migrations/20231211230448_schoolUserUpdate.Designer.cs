﻿// <auto-generated />
using System;
using Application.DB.DataContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Application.Migrations
{
    [DbContext(typeof(SchoolContext))]
    [Migration("20231211230448_schoolUserUpdate")]
    partial class schoolUserUpdate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0-rc.2.23480.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Domain.Entities_v2.School.Assignment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SubjectId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("SubjectId");

                    b.ToTable("Assignments");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.BehaviorGrade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("StudentId")
                        .HasColumnType("integer");

                    b.Property<int>("TeacherId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Value")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("StudentId");

                    b.HasIndex("TeacherId");

                    b.ToTable("BehaviorGrades");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Class", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NameId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SchoolId")
                        .HasColumnType("integer");

                    b.Property<int>("TeacherId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("SchoolId");

                    b.HasIndex("TeacherId")
                        .IsUnique();

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.ClassNotice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClassId")
                        .HasColumnType("integer");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int?>("Days")
                        .HasColumnType("integer");

                    b.Property<int>("SemesterId")
                        .HasColumnType("integer");

                    b.Property<int?>("Slot")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("ClassId");

                    b.HasIndex("SemesterId");

                    b.ToTable("ClassesNotice");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Grade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("AssignmentId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Description")
                        .HasColumnType("integer");

                    b.Property<int>("StudentId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Value")
                        .HasColumnType("integer");

                    b.Property<int>("Weight")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("AssignmentId");

                    b.HasIndex("StudentId");

                    b.ToTable("Grades");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Notice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int?>("Days")
                        .HasColumnType("integer");

                    b.Property<int>("SemesterId")
                        .HasColumnType("integer");

                    b.Property<int?>("Slot")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("SemesterId");

                    b.ToTable("Notices");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.School", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Schools");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Semester", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("BreakDuration")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("DailyLessonCount")
                        .HasColumnType("integer");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("LessonDuration")
                        .HasColumnType("integer");

                    b.Property<TimeSpan>("LessonStart")
                        .HasColumnType("interval");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SchoolId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("SchoolId");

                    b.ToTable("Semesters");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClassId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Day")
                        .HasColumnType("integer");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SemesterId")
                        .HasColumnType("integer");

                    b.Property<int>("Slot")
                        .HasColumnType("integer");

                    b.Property<int?>("StudentId")
                        .HasColumnType("integer");

                    b.Property<int>("TeacherId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("ClassId");

                    b.HasIndex("SemesterId");

                    b.HasIndex("StudentId");

                    b.HasIndex("TeacherId");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("Domain.Entities_v2.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("RefreshToken")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("RefreshTokenCreated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("RefreshTokenExpires")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("User");

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("Domain.Entities_v2.SystemAdmin", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.User");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasIndex("UserId");

                    b.ToTable("SystemAdmins", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolUser", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.User");

                    b.Property<int>("SchoolId")
                        .HasColumnType("integer");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasIndex("SchoolId");

                    b.HasIndex("UserId");

                    b.ToTable("SchoolUser");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Parent", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.SchoolUser");

                    b.Property<int>("SchoolUserId")
                        .HasColumnType("integer");

                    b.Property<int>("StudentId")
                        .HasColumnType("integer");

                    b.HasIndex("SchoolUserId");

                    b.HasIndex("StudentId");

                    b.ToTable("Parents", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Student", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.SchoolUser");

                    b.Property<int>("ClassId")
                        .HasColumnType("integer");

                    b.Property<int>("SchoolUserId")
                        .HasColumnType("integer");

                    b.HasIndex("ClassId");

                    b.HasIndex("SchoolUserId");

                    b.ToTable("Students", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Teacher", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.SchoolUser");

                    b.Property<int>("ClassId")
                        .HasColumnType("integer");

                    b.Property<int>("SchoolUserId")
                        .HasColumnType("integer");

                    b.HasIndex("SchoolUserId");

                    b.ToTable("Teachers", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolAdmin", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.Teacher");

                    b.Property<int>("TeacherId")
                        .HasColumnType("integer");

                    b.HasIndex("TeacherId");

                    b.ToTable("SchoolAdmins", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Assignment", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Subject", "Subject")
                        .WithMany()
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Subject");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.BehaviorGrade", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.Student", "Student")
                        .WithMany("ParentingMarks")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Teacher", "Teacher")
                        .WithMany("ParentingMarks")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Class", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.School", "School")
                        .WithMany("Classes")
                        .HasForeignKey("SchoolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Teacher", "Teacher")
                        .WithOne("Class")
                        .HasForeignKey("Domain.Entities_v2.School.Class", "TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("School");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.ClassNotice", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Class", "Class")
                        .WithMany()
                        .HasForeignKey("ClassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.School.Semester", "Semester")
                        .WithMany("ClassNotices")
                        .HasForeignKey("SemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Class");

                    b.Navigation("Semester");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Grade", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Assignment", "Assignment")
                        .WithMany("Grades")
                        .HasForeignKey("AssignmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Student", "Student")
                        .WithMany("Grades")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Assignment");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Notice", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Semester", "Semester")
                        .WithMany("Notices")
                        .HasForeignKey("SemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Semester");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Semester", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.School", "School")
                        .WithMany("Semesters")
                        .HasForeignKey("SchoolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("School");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Subject", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Class", "Class")
                        .WithMany("Subjects")
                        .HasForeignKey("ClassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.School.Semester", "Semester")
                        .WithMany("Subjects")
                        .HasForeignKey("SemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Student", null)
                        .WithMany("Subjects")
                        .HasForeignKey("StudentId");

                    b.HasOne("Domain.Entities_v2.Users.Teacher", "Teacher")
                        .WithMany("Subjects")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Class");

                    b.Navigation("Semester");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("Domain.Entities_v2.SystemAdmin", b =>
                {
                    b.HasOne("Domain.Entities_v2.User", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.SystemAdmin", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolUser", b =>
                {
                    b.HasOne("Domain.Entities_v2.User", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.SchoolUser", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.School.School", "School")
                        .WithMany("SchoolUsers")
                        .HasForeignKey("SchoolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("School");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Parent", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.Parent", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", "SchoolUser")
                        .WithMany()
                        .HasForeignKey("SchoolUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("SchoolUser");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Student", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Class", "Class")
                        .WithMany("Students")
                        .HasForeignKey("ClassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.Student", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", "SchoolUser")
                        .WithMany()
                        .HasForeignKey("SchoolUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Class");

                    b.Navigation("SchoolUser");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Teacher", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.Teacher", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", "SchoolUser")
                        .WithMany()
                        .HasForeignKey("SchoolUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("SchoolUser");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolAdmin", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.Teacher", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.SchoolAdmin", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Teacher", "Teacher")
                        .WithMany()
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Assignment", b =>
                {
                    b.Navigation("Grades");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Class", b =>
                {
                    b.Navigation("Students");

                    b.Navigation("Subjects");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.School", b =>
                {
                    b.Navigation("Classes");

                    b.Navigation("SchoolUsers");

                    b.Navigation("Semesters");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Semester", b =>
                {
                    b.Navigation("ClassNotices");

                    b.Navigation("Notices");

                    b.Navigation("Subjects");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Student", b =>
                {
                    b.Navigation("Grades");

                    b.Navigation("ParentingMarks");

                    b.Navigation("Subjects");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Teacher", b =>
                {
                    b.Navigation("Class")
                        .IsRequired();

                    b.Navigation("ParentingMarks");

                    b.Navigation("Subjects");
                });
#pragma warning restore 612, 618
        }
    }
}
