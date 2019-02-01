using Microsoft.EntityFrameworkCore;
using SortAlgorithms.API.Models;

namespace SortAlgorithms.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options) : base(options)
        {}
        public DbSet<User> Users { get; set; }

    }

}