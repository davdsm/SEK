// SEK portfolio data — copy lives under copy.{en,fr,pt}

function project({ slug, name, category, year, img, images, en, fr, pt }) {
  return {
    slug,
    name,
    category,
    year,
    img,
    images,
    copy: { en, fr, pt },
  };
}

export const PROJECTS = [
  project({
    slug: 'sur-mougins',
    name: 'Sur Mougins',
    category: 'new-construction',
    year: '2026',
    img: '/projects/sur-mougins/cover.jpg',
    images: [
      '/projects/sur-mougins/cover.jpg',
      '/projects/sur-mougins/gallery-01.jpg',
      '/projects/sur-mougins/gallery-02.jpg',
      '/projects/sur-mougins/gallery-03.jpg',
      '/projects/sur-mougins/gallery-04.jpg',
      '/projects/sur-mougins/gallery-05.jpg',
      '/projects/sur-mougins/gallery-06.jpg',
      '/projects/sur-mougins/gallery-07.jpg',
      '/projects/sur-mougins/gallery-08.jpg',
      '/projects/sur-mougins/gallery-09.jpg',
      '/projects/sur-mougins/gallery-10.jpg',
    ],
    en: {
      location: 'Mougins, France',
      tagline: 'Stone, cypress, and a horizon held in quiet balance',
      description: [
        'Above Mougins, the villa settles into the hillside as if it had always belonged there. Pale volumes open to the light; dry-stone walls catch the Provençal sun; a slender cypress rises beside white cyclamen like a single brushstroke against the sky.',
        'SEK composed the grounds as carefully as the house: an infinity edge that softens into the valley, lawns that breathe between terraces, a tennis court held in green. Architecture here is not a statement shouted from the ridge, but a measured conversation with stone, water, and air.',
      ],
    },
    fr: {
      location: 'Mougins, France',
      tagline: 'La pierre, le cyprès, et un horizon tenu en équilibre',
      description: [
        'Au-dessus de Mougins, la villa s’installe dans la colline comme si elle y avait toujours été. Des volumes pâles s’ouvrent à la lumière ; les murs de pierre sèche retiennent le soleil provençal ; un cyprès élancé s’élève près des cyclamens blancs, comme un seul trait contre le ciel.',
        'SEK a composé le jardin avec le même soin que la maison : un débordement d’eau qui s’adoucit vers la vallée, des pelouses qui respirent entre les terrasses, un court de tennis tenu dans le vert. Ici, l’architecture n’est pas un cri lancé depuis la crête, mais une conversation mesurée avec la pierre, l’eau et l’air.',
      ],
    },
    pt: {
      location: 'Mougins, França',
      tagline: 'Pedra, cipreste e um horizonte em equilíbrio quieto',
      description: [
        'Acima de Mougins, a villa assenta-se na encosta como se sempre ali tivesse pertencido. Volumes claros abrem-se à luz; muros de pedra seca recebem o sol provençal; um cipreste esguio ergue-se junto a ciclâmenes brancos, como um único traço contra o céu.',
        'A SEK compôs o terreno com o mesmo cuidado da casa: uma borda infinita que se suaviza no vale, relvados que respiram entre terraços, um court de ténis contido no verde. A arquitectura aqui não é um grito lançado do cume, mas uma conversa medida com a pedra, a água e o ar.',
      ],
    },
  }),

  project({
    slug: 'villa-les-loupes',
    name: 'Villa Les Loupes',
    category: 'renovation',
    year: '2026',
    img: '/projects/villa-les-loupes/cover.jpg',
    images: [
      '/projects/villa-les-loupes/cover.jpg',
      '/projects/villa-les-loupes/gallery-01.jpg',
      '/projects/villa-les-loupes/gallery-02.jpg',
      '/projects/villa-les-loupes/gallery-03.jpg',
      '/projects/villa-les-loupes/gallery-04.jpg',
      '/projects/villa-les-loupes/gallery-05.jpg',
      '/projects/villa-les-loupes/gallery-06.jpg',
      '/projects/villa-les-loupes/gallery-07.jpg',
      '/projects/villa-les-loupes/gallery-08.jpg',
      '/projects/villa-les-loupes/gallery-09.jpg',
      '/projects/villa-les-loupes/gallery-10.jpg',
      '/projects/villa-les-loupes/gallery-11.jpg',
    ],
    en: {
      location: 'French Riviera, France',
      tagline: 'A cantilever of calm above the sea',
      description: [
        'Villa Les Loupes lives in the pause between stone and water. Two loungers cast soft shadows on pale paving; the pool runs deep teal beside a charcoal edge; beyond the bamboo, the Mediterranean lies still as silk.',
        'Renovation favoured lightness over weight: white volumes that seem to float, a deck that reaches toward the blue, rooms of air where the Côte d’Azur is never far from touch. SEK shaped a home that feels suspended, intimate, and endlessly open to the horizon.',
      ],
    },
    fr: {
      location: 'Côte d’Azur, France',
      tagline: 'Un porte-à-faux de calme au-dessus de la mer',
      description: [
        'Villa Les Loupes habite la pause entre la pierre et l’eau. Deux chaises longues dessinent des ombres douces sur le dallage pâle ; la piscine s’enfonce en bleu-vert contre une bordure de charbon ; derrière le bambou, la Méditerranée reste immobile comme de la soie.',
        'La rénovation a préféré la légèreté au poids : des volumes blancs qui semblent flotter, un deck qui s’avance vers le bleu, des pièces d’air où la Côte d’Azur n’est jamais loin. SEK a façonné une maison suspendue, intime, et sans cesse ouverte à l’horizon.',
      ],
    },
    pt: {
      location: 'Riviera Francesa, França',
      tagline: 'Um balanço de calma sobre o mar',
      description: [
        'A Villa Les Loupes vive na pausa entre a pedra e a água. Dois espreguiçadores lançam sombras suaves no pavimento claro; a piscina corre em azul-petróleo junto a um bordo de carvão; para além do bambu, o Mediterrâneo fica quieto como seda.',
        'A renovação privilegiou a leveza em vez do peso: volumes brancos que parecem flutuar, um deck que se estende para o azul, salas de ar onde a Côte d’Azur nunca fica longe. A SEK moldou uma casa suspensa, íntima e sempre aberta ao horizonte.',
      ],
    },
  }),

  project({
    slug: 'les-rochers',
    name: 'Les Rochers',
    category: 'renovation',
    year: '2026',
    img: '/projects/les-rochers/cover.jpg',
    images: [
      '/projects/les-rochers/cover.jpg',
      '/projects/les-rochers/gallery-01.jpg',
      '/projects/les-rochers/gallery-02.jpg',
      '/projects/les-rochers/gallery-03.jpg',
      '/projects/les-rochers/gallery-04.jpg',
      '/projects/les-rochers/gallery-05.jpg',
      '/projects/les-rochers/gallery-06.jpg',
      '/projects/les-rochers/gallery-07.jpg',
      '/projects/les-rochers/gallery-08.jpg',
      '/projects/les-rochers/gallery-09.jpg',
      '/projects/les-rochers/gallery-10.jpg',
      '/projects/les-rochers/gallery-11.jpg',
      '/projects/les-rochers/gallery-12.jpg',
      '/projects/les-rochers/gallery-13.jpg',
      '/projects/les-rochers/gallery-14.jpg',
      '/projects/les-rochers/gallery-15.jpg',
      '/projects/les-rochers/gallery-16.jpg',
      '/projects/les-rochers/gallery-17.jpg',
      '/projects/les-rochers/gallery-18.jpg',
      '/projects/les-rochers/gallery-19.jpg',
      '/projects/les-rochers/gallery-20.jpg',
      '/projects/les-rochers/gallery-21.jpg',
      '/projects/les-rochers/gallery-22.jpg',
      '/projects/les-rochers/gallery-23.jpg',
      '/projects/les-rochers/gallery-24.jpg',
      '/projects/les-rochers/gallery-25.jpg',
      '/projects/les-rochers/gallery-26.jpg',
      '/projects/les-rochers/gallery-27.jpg',
      '/projects/les-rochers/gallery-28.jpg',
      '/projects/les-rochers/gallery-29.jpg',
      '/projects/les-rochers/gallery-30.jpg',
      '/projects/les-rochers/gallery-31.jpg',
      '/projects/les-rochers/gallery-32.jpg',
      '/projects/les-rochers/gallery-33.jpg',
      '/projects/les-rochers/gallery-34.jpg',
    ],
    en: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'Where the bay becomes a quiet companion',
      description: [
        'Les Rochers opens toward the coast like a held breath. An infinity pool mirrors pale façades and terracotta roofs; a bronze figure rests at the water’s edge; across the bay, the Riviera gathers against the mountains in soft grey light.',
        'Inside, the house speaks in quieter tones: terracotta stripes in a white bath, peach linen wrapping a sloping ceiling, a dressing corridor of cream and rose that ends in daylight. SEK restored the dialogue between cliff and craft so every room, from terrace to textile, feels composed for living beside the sea.',
      ],
    },
    fr: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'Là où la baie devient une compagne discrète',
      description: [
        'Les Rochers s’ouvre vers la côte comme une respiration retenue. Une piscine à débordement reflète les façades pâles et les toits de terre cuite ; une figure de bronze repose au bord de l’eau ; de l’autre côté de la baie, la Riviera se rassemble contre les montagnes dans une lumière grise et douce.',
        'À l’intérieur, la maison parle plus bas : des rayures terracotta dans un bain blanc, du lin pêche qui enveloppe un plafond en pente, un couloir de dressing crème et rose qui s’achève dans le jour. SEK a restauré le dialogue entre la falaise et le geste, pour que chaque pièce, de la terrasse au textile, soit composée pour vivre près de la mer.',
      ],
    },
    pt: {
      location: 'Roquebrune-Cap-Martin, França',
      tagline: 'Onde a baía se torna uma companhia quieta',
      description: [
        'Les Rochers abre-se para a costa como um fôlego contido. Uma piscina infinita espelha fachadas claras e telhados de terracota; uma figura em bronze repousa à beira da água; do outro lado da baía, a Riviera reúne-se contra as montanhas numa luz cinzenta e suave.',
        'Lá dentro, a casa fala em tons mais baixos: riscas de terracota num banho branco, linho pêssego a envolver um tecto inclinado, um corredor de dressing em creme e rosa que termina na luz do dia. A SEK restaurou o diálogo entre o penhasco e o ofício, para que cada divisão, do terraço ao tecido, fique composta para viver junto ao mar.',
      ],
    },
  }),

  project({
    slug: 'villa-martine',
    name: 'Villa Martine',
    category: 'renovation',
    year: '2020',
    img: '/projects/villa-martine/cover.jpg',
    images: [
      '/projects/villa-martine/cover.jpg',
      '/projects/villa-martine/gallery-01.jpg',
      '/projects/villa-martine/gallery-02.jpg',
      '/projects/villa-martine/gallery-03.jpg',
      '/projects/villa-martine/gallery-04.jpg',
      '/projects/villa-martine/gallery-05.jpg',
      '/projects/villa-martine/gallery-06.jpg',
      '/projects/villa-martine/gallery-07.jpg',
      '/projects/villa-martine/gallery-08.jpg',
      '/projects/villa-martine/gallery-09.jpg',
      '/projects/villa-martine/gallery-10.jpg',
      '/projects/villa-martine/gallery-11.jpg',
      '/projects/villa-martine/gallery-12.jpg',
      '/projects/villa-martine/gallery-13.jpg',
      '/projects/villa-martine/gallery-14.jpg',
      '/projects/villa-martine/gallery-15.jpg',
      '/projects/villa-martine/gallery-16.jpg',
    ],
    en: {
      location: 'French Riviera, France',
      tagline: 'A residence lifted above the coast',
      description: [
        'Villa Martine unfolds between terraces, light, and the deep blue of the Riviera. From drone views of the hillside silhouette to intimate interiors, every frame shows a home composed for Mediterranean living.',
        'Imported from the SEK Construction archive, this project gathers the craft of renovation and landscape into one continuous gesture, calm, precise, and open to the sea.',
      ],
    },
    fr: {
      location: 'Côte d’Azur, France',
      tagline: 'Une résidence élevée au-dessus de la côte',
      description: [
        'Villa Martine se déploie entre terrasses, lumière et le bleu profond de la Riviera. Des vues aériennes de la silhouette sur la colline aux intérieurs intimes, chaque image montre une maison composée pour vivre en Méditerranée.',
        'Issu des archives SEK Construction, ce projet réunit le métier de la rénovation et du paysage en un seul geste continu, calme, précis, et ouvert sur la mer.',
      ],
    },
    pt: {
      location: 'Riviera Francesa, França',
      tagline: 'Uma residência elevada sobre a costa',
      description: [
        'A Villa Martine desdobra-se entre terraços, luz e o azul profundo da Riviera. Das vistas aéreas da silhueta na encosta aos interiores íntimos, cada imagem mostra uma casa composta para viver no Mediterrâneo.',
        'Vindo do arquivo da SEK Construction, este projecto reúne o ofício da renovação e da paisagem num único gesto contínuo, calmo, preciso e aberto ao mar.',
      ],
    },
  }),

  project({
    slug: 'villa-chabrette',
    name: 'Villa Chabrette',
    category: 'renovation',
    year: '2020',
    img: '/projects/villa-chabrette/cover.jpg',
    images: [
      '/projects/villa-chabrette/cover.jpg',
      '/projects/villa-chabrette/gallery-01.jpg',
      '/projects/villa-chabrette/gallery-02.jpg',
      '/projects/villa-chabrette/gallery-03.jpg',
      '/projects/villa-chabrette/gallery-04.jpg',
      '/projects/villa-chabrette/gallery-05.jpg',
      '/projects/villa-chabrette/gallery-06.jpg',
      '/projects/villa-chabrette/gallery-07.jpg',
      '/projects/villa-chabrette/gallery-08.jpg',
      '/projects/villa-chabrette/gallery-09.jpg',
      '/projects/villa-chabrette/gallery-10.jpg',
      '/projects/villa-chabrette/gallery-11.jpg',
      '/projects/villa-chabrette/gallery-12.jpg',
      '/projects/villa-chabrette/gallery-13.jpg',
      '/projects/villa-chabrette/gallery-14.jpg',
      '/projects/villa-chabrette/gallery-15.jpg',
      '/projects/villa-chabrette/gallery-16.jpg',
      '/projects/villa-chabrette/gallery-17.jpg',
      '/projects/villa-chabrette/gallery-18.jpg',
      '/projects/villa-chabrette/gallery-19.jpg',
    ],
    en: {
      location: 'French Riviera, France',
      tagline: 'Interior calm, exterior presence',
      description: [
        'Villa Chabrette balances refined interiors with a confident outdoor presence. Stone, timber, and soft light move from room to terrace, shaping a residence that feels both intimate and open to the Riviera air.',
        'Drawn from the SEK Construction gallery, the project reads as a complete composition: architecture, finishes, and landscape held in one quiet rhythm.',
      ],
    },
    fr: {
      location: 'Côte d’Azur, France',
      tagline: 'Calme intérieur, présence extérieure',
      description: [
        'Villa Chabrette équilibre des intérieurs raffinés et une présence extérieure assurée. La pierre, le bois et une lumière douce passent de la pièce à la terrasse, façonnant une résidence à la fois intime et ouverte à l’air de la Riviera.',
        'Issu de la galerie SEK Construction, le projet se lit comme une composition complète : architecture, finitions et paysage tenus dans un même rythme discret.',
      ],
    },
    pt: {
      location: 'Riviera Francesa, França',
      tagline: 'Calma no interior, presença no exterior',
      description: [
        'A Villa Chabrette equilibra interiores refinados com uma presença exterior confiante. Pedra, madeira e luz suave passam da sala ao terraço, moldando uma residência íntima e aberta ao ar da Riviera.',
        'Retirado da galeria da SEK Construction, o projecto lê-se como uma composição completa: arquitectura, acabamentos e paisagem num mesmo ritmo quieto.',
      ],
    },
  }),

  project({
    slug: 'villa-serangan',
    name: 'Villa Serangan',
    category: 'new-construction',
    year: '2021',
    img: '/projects/villa-serangan/cover.jpg',
    images: ['/projects/villa-serangan/cover.jpg'],
    en: {
      location: 'French Riviera, France',
      tagline: 'A new silhouette on the hillside',
      description: [
        'Villa Serangan presents a clear architectural statement: clean volumes, strong horizontals, and a presence that belongs to the slope as much as to the sky.',
        'Featured on the original SEK Construction site, it marks a project where structure and landscape meet with contemporary confidence.',
      ],
    },
    fr: {
      location: 'Côte d’Azur, France',
      tagline: 'Une nouvelle silhouette sur la colline',
      description: [
        'Villa Serangan affirme une écriture claire : des volumes nets, de fortes horizontales, et une présence qui appartient autant à la pente qu’au ciel.',
        'Présentée sur le site d’origine de SEK Construction, elle marque un projet où structure et paysage se rencontrent avec une confiance contemporaine.',
      ],
    },
    pt: {
      location: 'Riviera Francesa, França',
      tagline: 'Uma nova silhueta na encosta',
      description: [
        'A Villa Serangan apresenta uma afirmação arquitectónica clara: volumes limpos, horizontais fortes e uma presença que pertence tanto ao declive como ao céu.',
        'Destacada no site original da SEK Construction, marca um projecto onde estrutura e paisagem se encontram com confiança contemporânea.',
      ],
    },
  }),

  project({
    slug: 'belle-rive-nice',
    name: 'Belle Rive',
    category: 'renovation',
    year: '2026',
    img: '/projects/belle-rive-nice/cover.jpg',
    images: [
      '/projects/belle-rive-nice/cover.jpg',
      '/projects/belle-rive-nice/gallery-01.jpg',
      '/projects/belle-rive-nice/gallery-02.jpg',
      '/projects/belle-rive-nice/gallery-03.jpg',
      '/projects/belle-rive-nice/gallery-04.jpg',
      '/projects/belle-rive-nice/gallery-05.jpg',
      '/projects/belle-rive-nice/gallery-06.jpg',
      '/projects/belle-rive-nice/gallery-07.jpg',
      '/projects/belle-rive-nice/gallery-08.jpg',
    ],
    en: {
      location: 'Nice, France',
      tagline: 'Where the bay becomes the room',
      description: [
        'Belle Rive opens itself to the Baie des Anges like a quiet invitation. Light arrives through floor-to-ceiling glass, settles on herringbone timber, and softens against classical mouldings, a dialogue between heritage proportion and contemporary calm.',
        'Every gesture was composed for the view: the quiet geometry of a pedestal table, the hush of linen chairs, the terrace tiled like a Mediterranean mosaic. Renovation here is not erasure, but a return to elegance that feels inevitable.',
      ],
    },
    fr: {
      location: 'Nice, France',
      tagline: 'Là où la baie devient la pièce',
      description: [
        'Belle Rive s’ouvre sur la Baie des Anges comme une invitation discrète. La lumière arrive par de grands vitrages, se pose sur un parquet à bâtons rompus et s’adoucit contre des moulures classiques : un dialogue entre la proportion du patrimoine et le calme contemporain.',
        'Chaque geste a été composé pour la vue : la géométrie tranquille d’une table sur pied, le silence des chaises de lin, la terrasse carrelée comme une mosaïque méditerranéenne. Rénover ici n’est pas effacer, c’est revenir à une élégance qui semble inévitable.',
      ],
    },
    pt: {
      location: 'Nice, França',
      tagline: 'Onde a baía se torna a sala',
      description: [
        'A Belle Rive abre-se à Baie des Anges como um convite quieto. A luz chega por vidros do chão ao tecto, pousa no parquet em espinha e suaviza-se contra molduras clássicas: um diálogo entre a proporção do património e a calma contemporânea.',
        'Cada gesto foi composto para a vista: a geometria serena de uma mesa de pedestal, o silêncio das cadeiras de linho, o terraço ladrilhado como um mosaico mediterrânico. Renovar aqui não é apagar, é regressar a uma elegância que parece inevitável.',
      ],
    },
  }),

  project({
    slug: 'cap-dail',
    name: "Cap d'Ail",
    category: 'renovation',
    year: '2024',
    img: '/projects/cap-dail/cover.jpg',
    images: [
      '/projects/cap-dail/cover.jpg',
      '/projects/cap-dail/gallery-01.jpg',
      '/projects/cap-dail/gallery-02.jpg',
    ],
    en: {
      location: "Cap d'Ail, France",
      tagline: 'A sanctuary drawn in water and gold',
      description: [
        "Beneath Cap d'Ail, a private spa unfolds as a study in stillness. Clear water holds the reflection of a botanical mural, leaves and birds rendered in gold and umber, while loungers wait in quiet symmetry beside a sphere of white stone.",
        'Natural light slips through tall glass; stone and timber keep the temperature of the room soft. Renovation became ritual: a place to pause, breathe, and let the Côte d’Azur dissolve into atmosphere.',
      ],
    },
    fr: {
      location: "Cap d'Ail, France",
      tagline: 'Un sanctuaire dessiné dans l’eau et l’or',
      description: [
        "Sous Cap d'Ail, un spa privé se déploie comme une étude du silence. L’eau claire retient le reflet d’une fresque botanique, feuilles et oiseaux rendus en or et ombre, tandis que des chaises longues attendent en symétrie discrète près d’une sphère de pierre blanche.",
        'La lumière naturelle glisse par de hauts vitrages ; la pierre et le bois gardent la pièce à une température douce. La rénovation est devenue rituel : un lieu pour s’arrêter, respirer, et laisser la Côte d’Azur se dissoudre en atmosphère.',
      ],
    },
    pt: {
      location: "Cap d'Ail, França",
      tagline: 'Um santuário desenhado em água e ouro',
      description: [
        "Sob Cap d'Ail, um spa privado desdobra-se como um estudo de quietude. A água clara guarda o reflexo de um mural botânico, folhas e pássaros em ouro e sombra, enquanto espreguiçadores esperam em simetria discreta junto a uma esfera de pedra branca.",
        'A luz natural desliza por vidros altos; pedra e madeira mantêm a temperatura da sala suave. A renovação tornou-se ritual: um lugar para pausar, respirar e deixar a Côte d’Azur dissolver-se em atmosfera.',
      ],
    },
  }),

  project({
    slug: 'eden-monaco',
    name: 'Eden',
    category: 'renovation',
    year: '2025',
    img: '/projects/eden-monaco/cover.jpg',
    images: [
      '/projects/eden-monaco/cover.jpg',
      '/projects/eden-monaco/gallery-01.jpg',
      '/projects/eden-monaco/gallery-02.jpg',
    ],
    en: {
      location: 'Monaco',
      tagline: 'Precision, polished to silence',
      description: [
        'Eden is written in the language of detail. Fluted plaster, veined marble, and chrome that catches cove light like liquid silver, a bathroom conceived as jewel box, where every joint and curve earns its place.',
        'In Monaco, space is precious; craftsmanship becomes the architecture. SEK shaped surfaces that feel both rigorous and sensual, a private Eden measured not in square metres, but in the quality of touch.',
      ],
    },
    fr: {
      location: 'Monaco',
      tagline: 'La précision, polie jusqu’au silence',
      description: [
        'Eden s’écrit dans le langage du détail. Un plâtre cannelé, un marbre veiné, un chrome qui captive la lumière comme de l’argent liquide : une salle de bain conçue comme un écrin, où chaque joint et chaque courbe méritent leur place.',
        'À Monaco, l’espace est précieux ; le savoir-faire devient l’architecture. SEK a façonné des surfaces à la fois rigoureuses et sensuelles, un Éden privé mesuré non en mètres carrés, mais dans la qualité du toucher.',
      ],
    },
    pt: {
      location: 'Mónaco',
      tagline: 'Precisão, polida até ao silêncio',
      description: [
        'O Eden escreve-se na linguagem do pormenor. Estuque canelado, mármore veiado e crómio que apanha a luz como prata líquida: uma casa de banho pensada como escrínio, onde cada junta e cada curva merecem o seu lugar.',
        'Em Mónaco, o espaço é precioso; o ofício torna-se a arquitectura. A SEK moldou superfícies rigorosas e sensuais, um Éden privado medido não em metros quadrados, mas na qualidade do toque.',
      ],
    },
  }),

  project({
    slug: 'mougins',
    name: 'Mougins',
    category: 'specialty-structure',
    year: '2024',
    img: '/projects/mougins/cover.jpg',
    images: [
      '/projects/mougins/cover.jpg',
      '/projects/mougins/gallery-01.jpg',
      '/projects/mougins/gallery-02.jpg',
      '/projects/mougins/gallery-03.jpg',
      '/projects/mougins/gallery-04.jpg',
    ],
    en: {
      location: 'Mougins, France',
      tagline: 'A line of water drawn toward the villa',
      description: [
        'In Mougins, the pool becomes the first room of the house, a long rectangle of deep blue mosaic, edged in pale stone, leading the eye to a white villa of clean horizontals and black-framed glass.',
        'Specialty structure here means more than engineering: it is the craft of making water, deck, and architecture feel like one composition. Loungers, umbrellas, and the quiet geometry of leisure complete a Riviera stillness that never needs to raise its voice.',
      ],
    },
    fr: {
      location: 'Mougins, France',
      tagline: 'Une ligne d’eau tirée vers la villa',
      description: [
        'À Mougins, la piscine devient la première pièce de la maison : un long rectangle de mosaïque bleu profond, bordé de pierre pâle, qui conduit le regard vers une villa blanche aux horizontales nettes et aux vitrages à cadres noirs.',
        'La structure spéciale signifie ici plus que l’ingénierie : c’est l’art de faire que l’eau, le deck et l’architecture ne fassent qu’une composition. Chaises longues, parasols et la géométrie discrète du loisir achèvent un calme de Riviera qui n’a pas besoin d’élever la voix.',
      ],
    },
    pt: {
      location: 'Mougins, França',
      tagline: 'Uma linha de água traçada até à villa',
      description: [
        'Em Mougins, a piscina torna-se a primeira sala da casa: um longo rectângulo de mosaico azul profundo, orlado de pedra clara, que conduz o olhar a uma villa branca de horizontais limpas e vidros de caixilharia negra.',
        'A estrutura especial significa aqui mais do que engenharia: é o ofício de fazer com que água, deck e arquitectura se sintam uma só composição. Espreguiçadores, guarda-sóis e a geometria quieta do lazer completam uma quietude da Riviera que nunca precisa de levantar a voz.',
      ],
    },
  }),

  project({
    slug: 'roquebrune-cap-martin',
    name: 'Roquebrune Cap Martin',
    category: 'renovation',
    year: '2024',
    img: '/projects/roquebrune-cap-martin/cover.jpg',
    images: [
      '/projects/roquebrune-cap-martin/cover.jpg',
      '/projects/roquebrune-cap-martin/gallery-01.jpg',
      '/projects/roquebrune-cap-martin/gallery-02.jpg',
      '/projects/roquebrune-cap-martin/gallery-03.jpg',
      '/projects/roquebrune-cap-martin/gallery-04.jpg',
      '/projects/roquebrune-cap-martin/gallery-05.jpg',
      '/projects/roquebrune-cap-martin/gallery-06.jpg',
      '/projects/roquebrune-cap-martin/gallery-07.jpg',
      '/projects/roquebrune-cap-martin/gallery-08.jpg',
    ],
    en: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'A villa suspended between cliff and sea',
      description: [
        'Peach plaster, soft blue shutters, and wrought-iron balconies curve above the rocks, a Mediterranean residence restored to its most cinematic self. From the garden, the bay opens wide; across the water, mountains hold the light like a painted backdrop.',
        'Renovation meant honouring character: arched terraces, terracotta pots, bougainvillea against white stone. SEK returned the house to the cliff with care, not as a museum piece, but as a living belvedere for the Riviera.',
      ],
    },
    fr: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'Une villa suspendue entre falaise et mer',
      description: [
        'Un enduit pêche, des volets bleu doux et des balcons en fer forgé s’incurvent au-dessus des rochers : une résidence méditerranéenne restaurée dans sa version la plus cinématographique. Depuis le jardin, la baie s’ouvre large ; de l’autre côté de l’eau, les montagnes retiennent la lumière comme un décor peint.',
        'Rénover, c’était honorer le caractère : terrasses en arc, pots de terre cuite, bougainvilliers contre la pierre blanche. SEK a rendu la maison à la falaise avec soin, non comme une pièce de musée, mais comme un belvédère vivant pour la Riviera.',
      ],
    },
    pt: {
      location: 'Roquebrune-Cap-Martin, França',
      tagline: 'Uma villa suspensa entre o penhasco e o mar',
      description: [
        'Reboco pêssego, portadas azul suave e varandas de ferro forjado curvam-se sobre as rochas: uma residência mediterrânica restaurada na sua versão mais cinematográfica. Do jardim, a baía abre-se larga; do outro lado da água, as montanhas seguram a luz como um fundo pintado.',
        'Renovar foi honrar o carácter: terraços em arco, vasos de terracota, buganvílias contra a pedra branca. A SEK devolveu a casa ao penhasco com cuidado, não como peça de museu, mas como um belvedere vivo para a Riviera.',
      ],
    },
  }),

  project({
    slug: 'villa-les-rochers',
    name: 'Villa Les Rochers',
    category: 'renovation',
    year: '2023',
    img: '/projects/villa-les-rochers/cover.jpg',
    images: [
      '/projects/villa-les-rochers/cover.jpg',
      '/projects/villa-les-rochers/gallery-01.jpg',
      '/projects/villa-les-rochers/gallery-02.jpg',
    ],
    en: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'Warmth woven into every surface',
      description: [
        'Villa Les Rochers is a bedroom composed like a painting: dusty rose walls, a tiled ceiling soft as evening light, and a curved alcove of shutters opening toward the coast. Patterned textiles and pale timber hold the room in a quiet embrace.',
        'Renovation here favoured atmosphere over spectacle, lamps that glow like embers, a chaise for long mornings, craft that you feel before you name it. A private world carved into the rocks, made for rest that feels luxurious and human.',
      ],
    },
    fr: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'La chaleur tissée dans chaque surface',
      description: [
        'Villa Les Rochers est une chambre composée comme un tableau : des murs rose poussiéreux, un plafond carrelé doux comme une lumière du soir, et une alcôve courbe de volets ouverts vers la côte. Textiles à motifs et bois pâle tiennent la pièce dans une étreinte discrète.',
        'La rénovation a préféré l’atmosphère au spectacle : des lampes qui luisent comme des braises, une chaise longue pour les longs matins, un métier que l’on sent avant de le nommer. Un monde privé taillé dans les rochers, fait pour un repos à la fois luxueux et humain.',
      ],
    },
    pt: {
      location: 'Roquebrune-Cap-Martin, França',
      tagline: 'Calor tecido em cada superfície',
      description: [
        'A Villa Les Rochers é um quarto composto como uma pintura: paredes rosa empoeirado, um tecto azulejado suave como luz da tarde, e uma alcova curva de portadas abertas para a costa. Têxteis com padrão e madeira clara envolvem a sala num abraço quieto.',
        'A renovação privilegiou a atmosfera em vez do espectáculo: candeeiros que brilham como brasas, uma chaise para manhãs longas, um ofício que se sente antes de se nomear. Um mundo privado talhado nas rochas, feito para um descanso luxuoso e humano.',
      ],
    },
  }),

  project({
    slug: 'roquebrune-jardins',
    name: 'Roquebrune Jardins',
    category: 'specialty-structure',
    year: '2023',
    img: '/projects/roquebrune-jardins/cover.jpg',
    images: [
      '/projects/roquebrune-jardins/cover.jpg',
      '/projects/roquebrune-jardins/gallery-01.jpg',
      '/projects/roquebrune-jardins/gallery-02.jpg',
      '/projects/roquebrune-jardins/gallery-03.jpg',
      '/projects/roquebrune-jardins/gallery-04.jpg',
      '/projects/roquebrune-jardins/gallery-05.jpg',
      '/projects/roquebrune-jardins/gallery-06.jpg',
    ],
    en: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'A garden that frames the Mediterranean',
      description: [
        'Terraces of stone, cactus, and bird-of-paradise lean toward the cobalt sea. Roquebrune Jardins is landscape as architecture, a specialty structure of retaining walls, steps, and planted rooms that turn a cliff into a living theatre of green and blue.',
        'From this garden, yachts float like brushstrokes on the horizon. SEK shaped the ground so that nature leads: every path a pause, every view a revelation, every plant a deliberate note in a Mediterranean score.',
      ],
    },
    fr: {
      location: 'Roquebrune-Cap-Martin, France',
      tagline: 'Un jardin qui encadre la Méditerranée',
      description: [
        'Des terrasses de pierre, de cactus et d’oiseaux de paradis penchent vers la mer cobalt. Roquebrune Jardins, c’est le paysage comme architecture : une structure spéciale de murs de soutènement, d’escaliers et de pièces plantées qui transforment une falaise en théâtre vivant de vert et de bleu.',
        'Depuis ce jardin, les yachts flottent comme des coups de pinceau sur l’horizon. SEK a modelé le sol pour que la nature mène : chaque chemin une pause, chaque vue une révélation, chaque plante une note délibérée dans une partition méditerranéenne.',
      ],
    },
    pt: {
      location: 'Roquebrune-Cap-Martin, França',
      tagline: 'Um jardim que enquadra o Mediterrâneo',
      description: [
        'Terraços de pedra, cactos e aves-do-paraíso inclinam-se para o mar cobalto. Roquebrune Jardins é paisagem como arquitectura: uma estrutura especial de muros de suporte, degraus e salas plantadas que transformam um penhasco num teatro vivo de verde e azul.',
        'Deste jardim, os iates flutuam como pinceladas no horizonte. A SEK moldou o terreno para que a natureza lidere: cada caminho uma pausa, cada vista uma revelação, cada planta uma nota deliberada numa partitura mediterrânica.',
      ],
    },
  }),

  project({
    slug: 'saint-jean-cap-ferrat',
    name: 'Saint-Jean-Cap-Ferrat',
    category: 'historic-restoration',
    year: '2024',
    img: '/projects/saint-jean-cap-ferrat/cover.jpg',
    images: [
      '/projects/saint-jean-cap-ferrat/cover.jpg',
      '/projects/saint-jean-cap-ferrat/gallery-01.jpg',
      '/projects/saint-jean-cap-ferrat/gallery-02.jpg',
    ],
    en: {
      location: 'Saint-Jean-Cap-Ferrat, France',
      tagline: 'Heritage held in ivory and light',
      description: [
        'On Cap-Ferrat, a neoclassical villa turns its curved facade toward the sun, stone base, ivory plaster, wrought-iron balconies, and a rooftop balustrade like a crown. Historic restoration here is a conversation across centuries: preserve the poetry, refine the life within.',
        'Olive trees shade the gravel; shutters breathe with the sea air. SEK restored proportion and dignity so the house remains what it always was, a landmark of Riviera grace, renewed for the generations who will inhabit its light.',
      ],
    },
    fr: {
      location: 'Saint-Jean-Cap-Ferrat, France',
      tagline: 'Un patrimoine tenu dans l’ivoire et la lumière',
      description: [
        'Sur Cap-Ferrat, une villa néoclassique tourne sa façade courbe vers le soleil : soubassement de pierre, enduit ivoire, balcons en fer forgé, et une balustrade de toit comme une couronne. La restauration historique est ici une conversation entre les siècles : préserver la poésie, affiner la vie à l’intérieur.',
        'Les oliviers ombragent le gravier ; les volets respirent l’air de mer. SEK a restauré la proportion et la dignité pour que la maison reste ce qu’elle a toujours été : un jalon de la grâce de la Riviera, renouvelé pour les générations qui habiteront sa lumière.',
      ],
    },
    pt: {
      location: 'Saint-Jean-Cap-Ferrat, França',
      tagline: 'Património guardado em marfim e luz',
      description: [
        'Em Cap-Ferrat, uma villa neoclássica volta a fachada curva ao sol: base de pedra, reboco marfim, varandas de ferro forjado e uma balaustrada de telhado como uma coroa. O restauro histórico é aqui uma conversa entre séculos: preservar a poesia, afinar a vida lá dentro.',
        'Oliveiras sombreiam o cascalho; as portadas respiram o ar do mar. A SEK restaurou proporção e dignidade para que a casa continue a ser o que sempre foi: um marco da graça da Riviera, renovado para as gerações que habitarão a sua luz.',
      ],
    },
  }),
];

export const CATEGORY_LABEL = {
  'new-construction': 'New Construction',
  renovation: 'Renovation',
  'historic-restoration': 'Historic Restoration',
  'specialty-structure': 'Specialty Structure',
};

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Merge locale copy onto a project for rendering. Falls back to English. */
export function localizeProject(project, locale = 'en') {
  if (!project) return null;
  const pack = project.copy?.[locale] || project.copy?.en || {};
  return {
    ...project,
    location: pack.location || '',
    tagline: pack.tagline || '',
    description: pack.description || [],
  };
}
