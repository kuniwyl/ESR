using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.DB.DataContext;

public class SchoolContext : DbContext
{
    public DbSet<Assignment> Assignments { get; set; } = null!;
    public DbSet<Class> Classes { get; set; } = null!;
    public DbSet<Grade> Grades { get; set; } = null!;
    public DbSet<Notice> Notices { get; set; } = null!;
    public DbSet<Parent> Parents { get; set; } = null!;
    public DbSet<School> Schools { get; set; } = null!;
    public DbSet<SchoolAdmin> SchoolAdmins { get; set; } = null!;
    public DbSet<SystemAdmin> SystemAdmins { get; set; } = null!;
    public DbSet<Student> Students { get; set; } = null!;
    public DbSet<Subject> Subjects { get; set; } = null!;
    public DbSet<Teacher> Teachers { get; set; } = null!;
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=ESR;Username=postgres;Password=1234;");
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Class>()
            .HasOne(c => c.Teacher)
            .WithOne(t => t.Class)
            .HasForeignKey<Teacher>(t => t.ClassId);
        
        base.OnModelCreating(modelBuilder);
    }
}