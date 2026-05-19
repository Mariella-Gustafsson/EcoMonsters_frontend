export type MonsterAPI = {
  description: string;
  id: number;
  name: string;
  image: string;
  monster_neutral_image_url: string;
  monster_happy_image_url: string;
  monster_sad_image_url: string;
  material_type: string;
  monster_icon: string;
  monster_color: string;
};

export type Monster = {
  description: string;
  id: number;
  name: string;
  image: string;
  imageNeutral: string;
  imageHappy: string;
  imageSad: string;
  materialType: string;
  monsterIcon: string;
  monsterColor: string;
};
