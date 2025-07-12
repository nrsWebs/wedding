import { defineDb, defineTable, column } from 'astro:db';

const Confirmation = defineTable({
  columns: {
    name: column.text(),
    confirmation: column.boolean(),
    plato: column.text(),
    menu: column.text()
  },
});


// https://astro.build/db/config
export default defineDb({
  tables: { Confirmation }
});
