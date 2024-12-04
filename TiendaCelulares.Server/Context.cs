using Microsoft.EntityFrameworkCore;
using TiendaCelulares.Server.Entidades;

namespace TiendaCelulares.Server
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Celular> Celulares { get; set; }
    }
}
