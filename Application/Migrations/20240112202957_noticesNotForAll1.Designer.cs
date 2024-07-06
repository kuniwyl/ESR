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
    [Migration("20240112202957_noticesNotForAll1")]
    partial class noticesNotForAll1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0-rc.2.23480.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ClassNotice", b =>
                {
                    b.Property<int>("ClassesId")
                        .HasColumnType("integer");

                    b.Property<int>("NoticesId")
                        .HasColumnType("integer");

                    b.HasKey("ClassesId", "NoticesId");

                    b.HasIndex("NoticesId");

                    b.ToTable("ClassNotice");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Apartment")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("House")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Addresses");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.BehaviorGrade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

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

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("NameId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SchoolId")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
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

            modelBuilder.Entity("Domain.Entities_v2.School.ClassSubjectSemester", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClassId")
                        .HasColumnType("integer");

                    b.Property<int>("Count")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("SemesterId")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<int>("SubjectId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("ClassId");

                    b.HasIndex("SemesterId");

                    b.HasIndex("SubjectId");

                    b.ToTable("ClassSubjectSemesters");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.ClassSubjectSemesterInstance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClassSubjectSemesterId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Day")
                        .HasColumnType("integer");

                    b.Property<int>("Slot")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("ClassSubjectSemesterId");

                    b.ToTable("ClassSubjectSemesterInstances");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.FinalGrade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClassSubjectSemesterId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<int>("StudentId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Value")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ClassSubjectSemesterId");

                    b.HasIndex("StudentId");

                    b.ToTable("FinalGrades");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Grade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClassSubjectSemesterId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Status")
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

                    b.HasIndex("ClassSubjectSemesterId");

                    b.HasIndex("StudentId");

                    b.ToTable("Grades");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Lesson", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClassSubjectSemesterId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("ClassSubjectSemesterId");

                    b.ToTable("Lessons");
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

                    b.Property<DateOnly>("Date")
                        .HasColumnType("date");

                    b.Property<bool>("IsNotForAll")
                        .HasColumnType("boolean");

                    b.Property<int>("SemesterId")
                        .HasColumnType("integer");

                    b.Property<int?>("Slot")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
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

            modelBuilder.Entity("Domain.Entities_v2.School.Presence", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("LessonId")
                        .HasColumnType("integer");

                    b.Property<int>("PresenceStatus")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<int>("StudentId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("LessonId");

                    b.HasIndex("StudentId");

                    b.ToTable("Presences");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.School", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("AddressId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Website")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

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

                    b.Property<string>("LessonStart")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SchoolId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

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

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SchoolId")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<int>("TeacherId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("SchoolId");

                    b.HasIndex("TeacherId");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("AddressId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("timestamp with time zone");

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

                    b.Property<string>("Phone")
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

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.ToTable("Users", (string)null);

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolUser", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.User");

                    b.Property<int>("SchoolId")
                        .HasColumnType("integer");

                    b.HasIndex("SchoolId");

                    b.ToTable("SchoolUsers", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SystemAdmin", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.User");

                    b.ToTable("SystemAdmins", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Parent", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.SchoolUser");

                    b.Property<int>("StudentId")
                        .HasColumnType("integer");

                    b.HasIndex("StudentId")
                        .IsUnique();

                    b.ToTable("Parents", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Student", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.SchoolUser");

                    b.Property<int>("ClassId")
                        .HasColumnType("integer");

                    b.Property<string>("Pesel")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasIndex("ClassId");

                    b.ToTable("Students", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Teacher", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.SchoolUser");

                    b.Property<int>("ClassId")
                        .HasColumnType("integer");

                    b.ToTable("Teachers", (string)null);
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolAdmin", b =>
                {
                    b.HasBaseType("Domain.Entities_v2.Users.Teacher");

                    b.ToTable("SchoolAdmins", (string)null);
                });

            modelBuilder.Entity("ClassNotice", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Class", null)
                        .WithMany()
                        .HasForeignKey("ClassesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.School.Notice", null)
                        .WithMany()
                        .HasForeignKey("NoticesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
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

            modelBuilder.Entity("Domain.Entities_v2.School.ClassSubjectSemester", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Class", "Class")
                        .WithMany("ClassSubjectSemesters")
                        .HasForeignKey("ClassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.School.Semester", "Semester")
                        .WithMany("ClassSubjectSemesters")
                        .HasForeignKey("SemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.School.Subject", "Subject")
                        .WithMany("ClassSubjectSemesters")
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Class");

                    b.Navigation("Semester");

                    b.Navigation("Subject");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.ClassSubjectSemesterInstance", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.ClassSubjectSemester", "ClassSubjectSemester")
                        .WithMany("ClassSubjectSemesterInstances")
                        .HasForeignKey("ClassSubjectSemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ClassSubjectSemester");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.FinalGrade", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.ClassSubjectSemester", "ClassSubjectSemester")
                        .WithMany("FinalGrades")
                        .HasForeignKey("ClassSubjectSemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Student", "Student")
                        .WithMany("FinalGrades")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ClassSubjectSemester");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Grade", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.ClassSubjectSemester", "ClassSubjectSemester")
                        .WithMany("Grades")
                        .HasForeignKey("ClassSubjectSemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Student", "Student")
                        .WithMany("Grades")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ClassSubjectSemester");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Lesson", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.ClassSubjectSemester", "ClassSubjectSemester")
                        .WithMany("Lessons")
                        .HasForeignKey("ClassSubjectSemesterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ClassSubjectSemester");
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

            modelBuilder.Entity("Domain.Entities_v2.School.Presence", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Lesson", "Lesson")
                        .WithMany("Presences")
                        .HasForeignKey("LessonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Student", "Student")
                        .WithMany("Presences")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Lesson");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.School", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");
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
                    b.HasOne("Domain.Entities_v2.School.School", "School")
                        .WithMany()
                        .HasForeignKey("SchoolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Teacher", "Teacher")
                        .WithMany("Subjects")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("School");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.User", b =>
                {
                    b.HasOne("Domain.Entities_v2.School.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolUser", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.User", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.SchoolUser", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.School.School", "School")
                        .WithMany("SchoolUsers")
                        .HasForeignKey("SchoolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("School");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SystemAdmin", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.User", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.SystemAdmin", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Parent", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.Parent", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities_v2.Users.Student", "Student")
                        .WithOne("Parent")
                        .HasForeignKey("Domain.Entities_v2.Users.Parent", "StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

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

                    b.Navigation("Class");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Teacher", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.SchoolUser", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.Teacher", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.SchoolAdmin", b =>
                {
                    b.HasOne("Domain.Entities_v2.Users.Teacher", null)
                        .WithOne()
                        .HasForeignKey("Domain.Entities_v2.Users.SchoolAdmin", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Class", b =>
                {
                    b.Navigation("ClassSubjectSemesters");

                    b.Navigation("Students");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.ClassSubjectSemester", b =>
                {
                    b.Navigation("ClassSubjectSemesterInstances");

                    b.Navigation("FinalGrades");

                    b.Navigation("Grades");

                    b.Navigation("Lessons");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Lesson", b =>
                {
                    b.Navigation("Presences");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.School", b =>
                {
                    b.Navigation("Classes");

                    b.Navigation("SchoolUsers");

                    b.Navigation("Semesters");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Semester", b =>
                {
                    b.Navigation("ClassSubjectSemesters");

                    b.Navigation("Notices");
                });

            modelBuilder.Entity("Domain.Entities_v2.School.Subject", b =>
                {
                    b.Navigation("ClassSubjectSemesters");
                });

            modelBuilder.Entity("Domain.Entities_v2.Users.Student", b =>
                {
                    b.Navigation("FinalGrades");

                    b.Navigation("Grades");

                    b.Navigation("Parent")
                        .IsRequired();

                    b.Navigation("ParentingMarks");

                    b.Navigation("Presences");
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
