using Domain.Entities_v2;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Users;
using Microsoft.EntityFrameworkCore;

namespace Application.DB.DataContext;

public class SchoolContext : DbContext
{
    // School
    public DbSet<Assignment> Assignments { get; set; } = null!;
    public DbSet<BehaviorGrade> BehaviorGrades { get; set; } = null!;
    public DbSet<Class> Classes { get; set; } = null!;
    public DbSet<ClassNotice> ClassesNotice { get; set; } = null!;
    
    public DbSet<Grade> Grades { get; set; } = null!;
    public DbSet<Notice> Notices { get; set; } = null!;
    public DbSet<School> Schools { get; set; } = null!;
    public DbSet<Semester> Semesters { get; set; } = null!;
    public DbSet<Subject> Subjects { get; set; } = null!;
    
    // Users
    public DbSet<SchoolAdmin> SchoolAdmins { get; set; } = null!;
    public DbSet<SystemAdmin> SystemAdmins { get; set; } = null!;
    public DbSet<Student> Students { get; set; } = null!;
    public DbSet<Teacher> Teachers { get; set; } = null!;
    public DbSet<Parent> Parents { get; set; } = null!;
    public DbSet<SchoolUser> SchoolUsers { get; set; } = null!;
    public DbSet<User> Users { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=localhost;Database=School;Username=postgres;Password=1234");
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Teacher>()
            .HasOne(t => t.Class)
            .WithOne(c => c.Teacher)
            .HasForeignKey<Class>(c => c.TeacherId);

        modelBuilder.Entity<SystemAdmin>().ToTable("SystemAdmins");
        modelBuilder.Entity<SchoolAdmin>().ToTable("SchoolAdmins");
        modelBuilder.Entity<Student>().ToTable("Students");
        modelBuilder.Entity<Teacher>().ToTable("Teachers");
        modelBuilder.Entity<Parent>().ToTable("Parents");
        modelBuilder.Entity<SchoolUser>().ToTable("SchoolUsers");
        modelBuilder.Entity<User>().ToTable("Users");
        
        base.OnModelCreating(modelBuilder);
    }
}