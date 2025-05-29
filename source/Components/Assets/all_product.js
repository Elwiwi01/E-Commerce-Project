import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
import p4_img from './product_4.png';
import p5_img from './product_5.png';
import p6_img from './product_6.png';
import p7_img from './product_7.png';
import p8_img from './product_8.png';
import p9_img from './product_9.png';
import p10_img from './product_10.png';
import p11_img from './product_11.png';
import p12_img from './product_12.png';
import p13_img from './product_13.png';
import p14_img from './product_14.png';
import p15_img from './product_15.png';
import p16_img from './product_16.png';
import p17_img from './product_17.png';
import p18_img from './product_18.png';
import p19_img from './product_19.png';
import p20_img from './product_20.png';
import p21_img from './product_21.png';
import p22_img from './product_22.png';
import p23_img from './product_23.png';
import p24_img from './product_24.png';
import p25_img from './product_25.png';
import p26_img from './product_26.png';
import p27_img from './product_27.png';
import p28_img from './product_28.png';
import p29_img from './product_29.png';
import p30_img from './product_30.png';
import p31_img from './product_31.png';
import p32_img from './product_32.png';
import p33_img from './product_33.png';
import p34_img from './product_34.png';
import p35_img from './product_35.png';
import p36_img from './product_36.png';
import p37_img from './product_37.png';
import p38_img from './product_38.png';
import p39_img from './product_39.png';
import p40_img from './product_40.png';

let all_product = [
  {
    id: 1,
    name: "Pearl Stud Gold Earrings",
    category: "earrings",
    image: p1_img,
    new_price: 500.0,
    old_price: 650.0,
    description: "Crafted with premium stainless steel and a lustrous pearl, these earrings offer lasting beauty and classic elegance for any occasion.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 2,
    name: "Square Geometric Gold Earrings",
    category: "earrings",
    image: p2_img,
    new_price: 500.0,
    old_price: 650.0,
    description: "Geometric and modern, these large square earrings are forged in stainless steel for long-lasting shine and structural integrity.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 3,
    name: "Studded Hoop Gold Earrings",
    category: "earrings",
    image: p3_img,
    new_price: 500.0,
    old_price: 650.0,
    description: "Designed to stand out, these bold hoops are studded and made with anti-rust stainless steel to keep their brilliance over time.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 4,
    name: "Pearl Drop Gold Earrings",
    category: "earrings",
    image: p4_img,
    new_price: 300.0,
    old_price: 450.0,
    description: "Minimal yet refined, these pearl studs are crafted from hypoallergenic stainless steel for a safe and elegant everyday accessory.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 5,
    name: "Rectangular Gold Earrings",
    category: "earrings",
    image: p5_img,
    new_price: 500.0,
    old_price: 650.0,
    description: "With a bold rectangular design, these earrings offer a contemporary touch, built from stainless steel for durability and shine.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 6,
    name: "Floral Gold Earrings",
    category: "earrings",
    image: p6_img,
    new_price: 500.0,
    old_price: 650.0,
    description: "Inspired by nature, these floral earrings are made with stainless steel and plated for a rich, lasting golden finish.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 7,
    name: "Teardrop Gold Earrings",
    category: "earrings",
    image: p7_img,
    new_price: 500.0,
    old_price: 650.0,
    description: "Elegant teardrop shapes give these stainless steel earrings timeless charm and a lightweight feel for all-day comfort.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 8,
    name: "Loop Studded Gold Hoops",
    category: "earrings",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Featuring intricate studs and loop design, these stainless steel hoops deliver durability with a modern twist.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 9,
    name: "Bow Gold Earrings",
    category: "earrings",
    image: p9_img,
    new_price: 300.0,
    old_price: 450.0,
    description: "These charming bow earrings are crafted from stainless steel, offering a dainty aesthetic with strong build quality.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 10,
    name: "Emerald Hoop Gold Earrings",
    category: "earrings",
    image: p10_img,
    new_price: 500.0,
    old_price: 650.0,
    description: "Set with radiant emerald-like stones, these hoops are constructed from stainless steel for a luxurious and lasting look.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 11,
    name: "Star Cluster Gold Ring",
    category: "rings",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Shine bright with this star cluster ring, made of polished stainless steel for a lasting celestial statement.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 12,
    name: "Pearl Gold Ring",
    category: "rings",
    image: p12_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "A luminous pearl sits elegantly atop stainless steel, giving this ring an elegant yet durable design.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 13,
    name: "Serpent Wrap Gold Ring",
    category: "rings",
    image: p13_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "This serpent ring wraps elegantly around your finger, made of resilient stainless steel with golden detailing.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 14,
    name: "Heart Gold Ring",
    category: "rings",
    image: p14_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "Delicate and romantic, this stainless steel ring features a White marbled heart symbol perfect for everyday love.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 15,
    name: "Minimalist Heart Gold Ring",
    category: "rings",
    image: p15_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "With clean lines and subtle charm, this heart ring is crafted from rust-resistant stainless steel.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 16,
    name: "Sunray Gold Ring",
    category: "rings",
    image: p16_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "This ring radiates style with a sunray-inspired accent, crafted from durable stainless steel for daily wear.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 17,
    name: "Swoop Design Gold Ring",
    category: "rings",
    image: p17_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "Make a bold statement with this swooping design ring, engineered in stainless steel for a lasting impact.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 18,
    name: "Triple Gem Gold Ring",
    category: "rings",
    image: p18_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "Three sparkling gems sit proudly on this stainless steel ring, adding brilliance and balance to your look.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 19,
    name: "Teardrop Cluster Gold Ring",
    category: "rings",
    image: p19_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "Elegant teardrop shapes are clustered for effect, all set in durable stainless steel for a graceful silhouette.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 20,
    name: "Leaf Wrap Gold Ring",
    category: "rings",
    image: p20_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "Inspired by nature’s grace, this leaf wrap ring crafted from stainless steel adds organic charm.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 21,
    name: "Triple Band Gold Bracelet",
    category: "bracelets",
    image: p21_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "This triple bands bracelet offers a layered look, crafted with stainless steel for strength and shine.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 22,
    name: "Teardrop Gold Bracelet",
    category: "bracelets",
    image: p22_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "Classic droplet design in stainless steel that balances durability and sophisticated style.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 23,
    name: "Studded Gold Bracelet",
    category: "bracelets",
    image: p23_img,
    new_price: 450.0,
    old_price: 550.0,
    description: "Make a statement with this studded gold bracelet, engineered in stainless steel for long-lasting appeal.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 24,
    name: "Chained Gold Bracelet",
    category: "bracelets",
    image: p24_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "This stainless steel chained bracelet is a perfect piece for everyday romantic flair.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 25,
    name: "Leaf Gold Bracelet",
    category: "bracelets",
    image: p25_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "Leaf shapes adorn this stainless steel bracelet, combining modern design with durable materials.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 26,
    name: "Shell Charm Gold Bracelet",
    category: "bracelets",
    image: p26_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "This gold charm bracelet is made from anti-rust stainless steel perfect for an everyday summer look.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 27,
    name: "Bold Chained Gold Bracelet",
    category: "bracelets",
    image: p27_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "This Bold Bracelet made from anti-rust stainless steel is perfect to make a statement.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 28,
    name: "Heart Charm Gold Bracelet",
    category: "bracelets",
    image: p28_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "This simple heart design is crafted in stainless steel for texture and long-lasting wear.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 29,
    name: "Star Charm Gold Bracelet",
    category: "bracelets",
    image: p29_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "The simple design makes this stainless steel perfect for dainty summer accessory.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 30,
    name: "Layered Gold Bracelet",
    category: "bracelets",
    image: p30_img,
    new_price: 200.0,
    old_price: 350.0,
    description: "The layered chains add elegance to this stainless steel bracelet, perfect for formal and casual wear.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 31,
    name: "Chunky Oval Necklace",
    category: "necklaces",
    image: p31_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "This oval pendant gold chain necklace shines with a premium stainless steel finish for everyday elegance.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 32,
    name: "Chunky Pearl Necklace",
    category: "necklaces",
    image: p32_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "Make a bold entrance with this chunky pearl necklace crafted from durable stainless steel.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 33,
    name: "Studded Moon Necklace",
    category: "necklaces",
    image: p33_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "This delicate pendant necklace features a moon charm on a fine stainless steel chain for everyday wear.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 34,
    name: "Pearl Layered Necklace",
    category: "necklaces",
    image: p34_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "Minimalist layed pendant necklace crafted from rust-resistant stainless steel.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 35,
    name: "Chunky Shells Necklace",
    category: "necklaces",
    image: p35_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "This Statement piece on a stainless steel chain offers a perfect everyday summer accessory.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 36,
    name: "Small Shells Necklace",
    category: "necklaces",
    image: p36_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "Dainty summer design creates a stunning gold necklace made from sturdy stainless steel.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 37,
    name: "Love Knot Necklace",
    category: "necklaces",
    image: p37_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "Modern and romantic, this gold necklace is crafted from stainless steel for durability and shine.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 38,
    name: "Small Hearts Necklace",
    category: "necklaces",
    image: p38_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "This dainty heart pendant necklace, crafted from stainless steel for a an everyday look.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 39,
    name: "Small Bow Necklace",
    category: "necklaces",
    image: p39_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "A delicate golden bow pendant hangs from a stainless steel chain, bringing delicate elegance.",
    views: 0,
    purchases: 0,
    display_count: 0
  },
  {
    id: 40,
    name: " White Rose Necklace",
    category: "necklaces",
    image: p40_img,
    new_price: 800.0,
    old_price: 1000.0,
    description: "A delicate golden rose pendant hangs from a stainless steel chain, bringing nature-inspired elegance.",
    views: 0,
    purchases: 0,
    display_count: 0
  }
];

export default all_product;

export const incrementViews = (id) => {
  const product = all_product.find(p => p.id === id);
  if (product) {
    product.views += 1;
  }
};

export const incrementPurchases = (id) => {
  const product = all_product.find(p => p.id === id);
  if (product) {
    product.purchases += 1;
  }
};