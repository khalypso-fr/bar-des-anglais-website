import { getCollection } from 'astro:content';
import type { menu } from '~/content/config';
import type { z } from 'astro/zod';

export type Menu = z.infer<typeof menu>;

let _menu: {
  manger: Menu;
  boire: Menu;
};

export const fetchMenu = async () => {
  if (!_menu) {
    const menuCollection = await getCollection('menu');
    const { data: manger } = menuCollection.find(({ id }) => id === 'manger.md')!;
    const { data: boire } = menuCollection.find(({ id }) => id === 'boire.md')!;
    _menu = { manger, boire };
  }
  return _menu;
};
