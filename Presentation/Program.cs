using System.Text;
using Application.AutoMapper;
using Application.DB.DataContext;
using Application.IServices.Auth;
using Application.IServices.School;
using Application.IServices.Users;
using Domain.Entities_v2.Users;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Presentation.Repositories;
using Presentation.Repositories.SchoolRepositories;
using Presentation.Repositories.UsersRepositories;
using Presentation.Services;
using Presentation.Services.SchoolServices;
using Presentation.Services.UsersService;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

//////////////////////// Repositories ////////////////////////
// School
builder.Services.AddScoped<IAssignmentRepository, AssignmentRepository>();
builder.Services.AddScoped<IBehaviourGradeRepository, BehaviourGradeRepository>();
builder.Services.AddScoped<IClassNoticeRepository, ClassNoticeRepository>();
builder.Services.AddScoped<IClassRepository, ClassRepository>();
builder.Services.AddScoped<IGradeRepository, GradeRepository>();
builder.Services.AddScoped<INoticeRepository, NoticeRepository>();
builder.Services.AddScoped<ISchoolRepository, SchoolRepository>();
builder.Services.AddScoped<ISemesterRepository, SemesterRepository>();
builder.Services.AddScoped<ISubjectRepository, SubjectRepository>();
// Users
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<ITeacherRepository, TeacherRepository>();
builder.Services.AddScoped<IParentRepository, ParentRepository>();
builder.Services.AddScoped<ISchoolAdminRepository, SchoolAdminRepository>();
builder.Services.AddScoped<ISystemAdminRepository, SystemAdminRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

//////////////////////// Services ////////////////////////
// School
builder.Services.AddScoped<IAssignmentService, AssignmentService>();
builder.Services.AddScoped<IBehaviorGradeService, BehaviorGradeService>();
builder.Services.AddScoped<IClassNoticeService, ClassNoticeService>();
builder.Services.AddScoped<IClassService, ClassService>();
builder.Services.AddScoped<IGradeService, GradeService>();
builder.Services.AddScoped<INoticeService, NoticeService>();
builder.Services.AddScoped<ISchoolService, SchoolService>();
builder.Services.AddScoped<ISemesterService, SemesterService>();
builder.Services.AddScoped<ISubjectService, SubjectService>();
// Users
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddScoped<ITeacherService, TeacherService>();
builder.Services.AddScoped<IParentService, ParentService>();
builder.Services.AddScoped<ISchoolAdminService, SchoolAdminService>();
builder.Services.AddScoped<ISystemAdminService, SystemAdminService>();
// Auth
builder.Services.AddScoped<IAuthService, AuthService>();

//////////////////////// Context ////////////////////////
builder.Services.AddDbContext<SchoolContext>();

//////////////////////// Others ////////////////////////
// AutoMapper
builder.Services.AddAutoMapper(typeof(AutoMapperProfile));
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>();
});

// Authentication
builder.Services.AddHttpContextAccessor();
builder.Services.AddAuthentication().AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        ValidateAudience = false,
        ValidateIssuer = false,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
            builder.Configuration.GetSection("JWTKey:Secret").Value!))
    };
});

// CORS
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: "Open",
        policy  =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

// Swagger TimeSpan
builder.Services.AddSwaggerGen(options =>
{
    options.MapType<TimeSpan>(() => new OpenApiSchema
    {
        Type = "string",
        Example = new OpenApiString("00:00:00")
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("Open");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run("https://localhost:5000");