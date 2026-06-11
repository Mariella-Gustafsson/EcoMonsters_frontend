import type { ItemsAPI } from "../types/item";
import type { MonsterAPI, Monster } from "../types/monster";

export async function fetchMonsters(): Promise<Monster[]> {
  const response = await fetch("http://localhost:5000/api/monsters");
  const data = await response.json();
  return data.map((monster: MonsterAPI) => ({
    id: monster.id,
    description: monster.description,
    name: monster.name,
    image: `http://localhost:5000${monster.monster_neutral_image_url}`,
    imageNeutral: `http://localhost:5000${monster.monster_neutral_image_url}`,
    imageHappy: `http://localhost:5000${monster.monster_happy_image_url}`,
    imageSad: `http://localhost:5000${monster.monster_sad_image_url}`,
    imageEating: `http://localhost:5000${monster.monster_eating_image_url}`,
    materialType: monster.material_type,
    monsterIcon: `http://localhost:5000${monster.monster_icon}`,
    monsterColor: monster.monster_color,
  }));
}

export async function fetchItems() {
  const response = await fetch("http://localhost:5000/api/items");
  const data = await response.json();
  return data.map((item: ItemsAPI) => ({
    id: item.id,
    name: item.name,
    image: `http://localhost:5000${item.image_url}`,
    materialType: item.correct_material,
    status: "unsorted",
  }));
}
