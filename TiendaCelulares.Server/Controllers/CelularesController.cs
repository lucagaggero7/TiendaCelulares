using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaCelulares.Server.Entidades;

namespace TiendaCelulares.Server.Controllers
{
    [Route("api/celulares")]
    public class CelularesController : ControllerBase
    {
        private readonly Context context;

        public CelularesController(Context context)
        {
            this.context = context;
        }


        [HttpGet]
        public async Task<List<Celular>> Get()
        {
            return await context.Celulares.ToListAsync();
        }



        [HttpGet("{id:int}", Name = "ObtenerCelularPorId")]
        public async Task<ActionResult<Celular>> Get(int id)
        {
            var celular = await context.Celulares.FirstOrDefaultAsync(x => x.Id == id);

            if (celular == null)
            {
                return NotFound();
            }

            return celular;
        }

        [HttpPost]
        public async Task<CreatedAtRouteResult> Post([FromBody] Celular celular)
        {
            context.Add(celular);

            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenerCelularPorId", new { id = celular.Id }, celular);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] Celular celular)
        {
            var existe = await context.Celulares.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            celular.Id = id;
            context.Update(celular);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var filasBorradas = await context.Celulares.Where(x => x.Id == id).ExecuteDeleteAsync();

            if (filasBorradas == 0)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
