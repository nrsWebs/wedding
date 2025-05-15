import { db } from 'astro:db';
import { Confirmation } from 'astro:db';

export async function POST(request: Request) {
  const formData = await request.formData();

  const names = formData.getAll('name[]');

  const platos: string[] = [];
  for (let i = 0; i < names.length; i++) {
    const plato = formData.get(`plato_${i}`);
    platos.push(plato?.toString() ?? 'no especificado');
  }

  const records = names.map((name, i) => ({
    name: name.toString(),
    confirmation: true,
    plato: platos[i],
  }));

  await db.insert(Confirmation).values(records);

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
    },
  });
}
