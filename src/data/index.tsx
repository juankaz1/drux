
export type SustanciaNombre = string;
export const listaSustancias: SustanciaNombre[] = [
    "Marihuana (pgl)",
    "Cocaína",
    "Tusi",
    "MDMA",
    "LSD",
    "Nexus",
    "Hongos",
    "Ketamina",
    "GHB",
    "DMT",
    "Mescalina",
    "Anfetamina",
    "Metanfetamina",
    "Nbome",
    "Heroina"
    


    // ... agregue otras sustancias según sea necesario
  ];

interface Referencias {
    [key: string]: string[];
}
export const diccionarioReferencias: Referencias = {
  "Marihuana (pgl)": ['ak47', 'tropicana poisson', 'skunk', 'cheese', 'lemon haze'],
    "Cocaína": [],
    "Tusi": [],
    "Comprimido MDMA": ['lapiz', 'barcelona', 'estrella', 'corazon', 'tesla'],
    "Cristales MDMA": [],
    "LSD": ['hoffman', 'fresa', 'casa'],
    "Comprimido Nexus": [],
    "Polvo Nexus": [],
    "Hongos": ['golden teacher', 'mazatapec'],
    "Ketamina": [],
    "GHB": [],
    "DMT": [],
    "Mescalina": [],
    "Anfetamina": [],
    "Metanfetamina": [],
    "Nbome": [],
    "Heroina": []
};

export type ColorNombre = string;
export const diccionarioColores = [
  'BLANCO', 'GRIS', 'AMARILLO', 'ROSADO', 'AZUL', 'MORADO', 'DORADO', 'NARANJA', 'VERDE', 'ROJO', 'NEGRO', 'BEIGE', 'MARRON', 'OTRO'

];