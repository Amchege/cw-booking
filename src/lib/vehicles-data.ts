export const VEHICLE_TYPES = [
  { value: 'SEDAN', label: 'Sedan' },
  { value: 'SUV', label: 'SUV' },
  { value: 'VAN', label: 'Van' },
  { value: 'TRUCK', label: 'Truck' },
  { value: 'PICKUP', label: 'Pickup' },
  { value: 'MOTORCYCLE', label: 'Motorcycle' },
  { value: 'BUS', label: 'Bus / Minibus' },
  { value: 'OTHER', label: 'Other (type below)' },
];

export const VEHICLE_COLORS = [
  { value: 'WHITE', label: 'White' },
  { value: 'BLACK', label: 'Black' },
  { value: 'SILVER', label: 'Silver' },
  { value: 'GRAY', label: 'Gray' },
  { value: 'RED', label: 'Red' },
  { value: 'BLUE', label: 'Blue' },
  { value: 'GREEN', label: 'Green' },
  { value: 'YELLOW', label: 'Yellow' },
  { value: 'BROWN', label: 'Brown' },
  { value: 'BEIGE', label: 'Beige' },
  { value: 'ORANGE', label: 'Orange' },
  { value: 'MAROON', label: 'Maroon' },
  { value: 'NAVY', label: 'Navy Blue' },
  { value: 'GOLD', label: 'Gold' },
  { value: 'PURPLE', label: 'Purple' },
  { value: 'OTHER', label: 'Other (type below)' },
];

export const VEHICLE_MAKES_MODELS: Record<string, string[]> = {
  TOYOTA: [
    'Land Cruiser', 'Prado', 'Hilux', 'Corolla', 'Corolla Axio', 'Corolla Fielder', 'Corolla Touring', 'Corolla Sport',
    'Camry', 'Aurion', 'Avalon', 'Rav4', 'Harrier', 'Vanguard', 'Vitz', 'Yaris', 'Yaris Cross', 'Passo', 'Roomy', 'Tank',
    'Probox', 'Succeed', 'Hiace', 'Regius Ace', 'Coaster', 'Fortuner', 'Innova', 'Aqua', 'Prius', 'Prius C', 'Prius V', 'Prius Alpha',
    'Premio', 'Allion', 'Belta', 'Viros', 'Noah', 'Voxy', 'Esquire', 'Sienta', ' Isis', 'Ipsum', 'Gaia', 'Wish',
    'Estima', 'Previa', 'Alphard', 'Vellfire', 'Crown', 'Crown Majesta', 'Crown Athlete', 'Crown Royal',
    'Mark X', 'Mark II', 'Chaser', 'Cresta', 'Verossa', 'Blade', 'Aristo', 'Celsior', 'Soarer', 'Supra', 'GR86', '86', 'bZ4X',
    '4Runner', 'FJ Cruiser', 'Sequoia', 'Tundra', 'Tacoma', 'T100', 'Hilux Surf', 'RAV4 PHV', 'Highlander', 'Kluger',
    'Pixis Epoch', 'Pixis Joy', 'Pixis Truck', 'Porte', 'Spade', 'Ractis', 'Rush', 'Avanza', 'Veloz', 'Raum', 'Ist', 'bB', 'Scion',
    'Will VS', 'Opa', 'Calty', 'Matrix', 'Solara', 'Sai', 'Mirai', 'Sienna', 'Allex', 'RunX', 'Fielder',
  ],
  NISSAN: [
    'X-Trail', 'Patrol', 'Patrol Safari', 'Armada', 'Titan', 'Frontier', 'Navara', 'NP300', 'Kicks', 'Juke', 'Murano', 'Pathfinder', 'Quest', 'Terrano',
    'Note', 'Note Aura', 'Dayz', 'Dayz Roox', 'Sunny', 'Sylphy', 'Bluebird', 'Tiida', 'Latio', 'Pulsar', 'Almera', 'Micra', 'March', 'Versa', 'Sentra',
    'AD Van', 'NV200', 'NV350 Caravan', 'Caravan', 'Serena', 'Elgrand', 'Presage', 'Lafesta', 'Cube', 'Wingroad', 'AD Expert', 'Dualis', 'Qashqai',
    'Skyline', 'Skyline Crossover', 'GT-R', 'Fairlady Z', '370Z', '350Z', '300ZX', 'Silvia', '180SX', '200SX', '240SX', 'Cima', 'Fuga', 'Fuga Hybrid',
    'President', 'Gloria', 'Cedric', 'Maxima', 'Teana', 'Altima', 'Leaf', 'Ariya', 'Sakura', 'Stagea', 'Laurel', 'Leopard', 'Liberta Villa',
  ],
  MAZDA: [
    'CX-5', 'CX-3', 'CX-8', 'CX-30', 'CX-50', 'CX-60', 'CX-70', 'CX-90', 'MX-5', 'MX-30', 'Roadster',
    'Axela', 'Mazda3', 'Mazda2', 'Mazda6', 'Demio', 'Flair', 'Flair Wagon', 'Atenza', 'Capella', 'Familia', 'Lantis',
    'Premacy', 'MPV', 'Biante', 'CX-9', ' Tribute', 'BT-50', 'Proceed', 'Bongo', 'Bongo Brawny',
    'Millenia', 'Eunos 500', 'Eunos 800', 'Xedos 6', 'Xedos 9', 'Sentia', 'Clef', 'Persona', 'Autozam', 'AZ-1', 'RX-7', 'RX-8', 'Verisa', 'Scrum',
  ],
  SUBARU: [
    'Outback', 'Outback Sport', 'Forester', 'Forester e-Boxer', 'XV', 'Crosstrek', 'Impreza', 'Impreza G4', 'Impreza Sport', 'Legacy', 'Legacy B4',
    'Levorg', 'WRX', 'WRX STI', 'WRX Sportswagon', 'Exiga', 'Tribeca', 'Baja', 'Traviq', 'Stella', 'Stella Custom', 'R2', 'R1',
    'Pleo', 'Pleo Plus', 'Sambar', 'Dias', 'Dex', 'Lucra', 'Justy', 'G3X', 'Bistro', 'Alcyone', 'SVX', 'XT', 'Solterra', 'Ascent',
  ],
  MITSUBISHI: [
    'Pajero', 'Pajero Junior', 'Pajero Mini', 'Pajero Sport', 'Montero', 'Shogun', 'Outlander', 'Outlander PHEV', 'ASX', 'RVR', 'Eclipse Cross', 'Xpander',
    'Lancer', 'Lancer Evolution', 'Lancer EX', 'Lancer Sportback', 'Galant', 'Galant Fortis', 'Legnum', 'Mirage', 'Attrage', 'Space Star', 'Carisma',
    'Delica', 'Delica D:5', 'Delica Space Gear', 'Delica Cargo', 'Chariot', 'Grandis', 'Nimbus', 'L200', 'Triton', 'Strada', 'Canter', 'Rosa', 'Fighter',
    'eK Wagon', 'eK Space', 'eK Custom', 'eK X', 'eK Active', 'Minica', 'Minica Dangan', 'Toppo', 'Toppo BJ', 'Town Box', 'i-MiEV', 'GTO', '3000GT', 'Dignity',
  ],
  MERCEDES_BENZ: [
    'A-Class', 'A-Class Sedan', 'B-Class', 'C-Class', 'C-Class Coupe', 'C-Class Cabriolet', 'CL-Class', 'CLA-Class', 'CLA Shooting Brake', 'CLS-Class', 'CLS Shooting Brake',
    'E-Class', 'E-Class Coupe', 'E-Class Cabriolet', 'EQE', 'EQE Sedan', 'EQE SUV', 'EQS', 'EQS Sedan', 'EQS SUV', 'S-Class', 'S-Class Coupe', 'S-Class Cabriolet',
    'GLA-Class', 'GLB-Class', 'GLC-Class', 'GLC Coupe', 'GLE-Class', 'GLE Coupe', 'GLS-Class', 'G-Class', 'G-Wagon', 'GLK-Class', 'ML-Class',
    'SL-Class', 'SLK-Class', 'SLC-Class', 'SLS AMG', 'AMG GT', 'AMG GT 4-Door', 'CLK-Class', 
    'V-Class', 'Viano', 'Vito', 'Sprinter', 'Metris', 'EQT', 'Citan', 'EQV',
    'Mercedes-Maybach S-Class', 'Mercedes-Maybach GLS', 'Mercedes-Maybach EQS SUV',
    '190E', '280', '300', '400', '500', '600', 'W123', 'W124', 'W140', 'W201', 'W210', 'W220',
  ],
  SUZUKI: [
    'Jimny', 'Jimny Sierra', 'Vitara', 'Vitara Brezza', 'Grand Vitara', 'Escudo', 'SX4', 'S-Cross', 'Across', 'Swift', 'Swift Sport', 'Baleno', 'Ignis',
    'Ciaz', 'Dzire', 'Alto', 'Alto Lapin', 'Alto Works', 'Wagon R', 'Wagon R Stingray', 'Wagon R Smile', 'Solio', 'Solio Bandit', 'Spacia', 'Spacia Custom',
    'Ertiga', 'Ertiga Hybrid', 'XL6', 'Every', 'Every Wagon', 'Carry', 'Super Carry',
    'Hustler', 'Hustler Cool', 'Mighty Boy', 'Cervo', 'Fronte', 'Kei', 'Twin', 'MR Wagon', 'Lapin', 'Palette', 'Samurai', 'SJ', 'X-90', 'XL7',
  ],
  VOLKSWAGEN: [
    'Golf', 'Golf GTI', 'Golf R', 'Golf Variant', 'Polo', 'Polo GTI', 'Polo Vivo', 'Virtus', 'Vento', 'Jetta', 'Passat', 'Passat Variant',
    'Tiguan', 'Tiguan Allspace', 'Touareg', 'T-Roc', 'T-Cross', 'Taos', 'Atlas', 'Teramont', 'Amarok', 'Caddy', 'Caddy Life',
    'ID.3', 'ID.4', 'ID.5', 'ID.Buzz', 'Arteon', 'Sharan', 'Touran', 'Beetle', 'Scirocco', 'Corrado',
  ],
  HONDA: [
    'Civic', 'Civic Type R', 'Civic Hatchback', 'Civic Tourer', 'Accord', 'Accord Hybrid', 'Accord Tourer', 'City', 'City Hatchback', 'Amaze', 'Jazz', 'Jazz Crosstar', 'Fit',
    'CR-V', 'CR-V Hybrid', 'CR-V e:HEV', 'HR-V', 'HR-V e:HEV', 'Vezel', 'BR-V', 'ZR-V', 'Pilot', 'Passport', 'Ridgeline', 'Odyssey', 'Odyssey Absolute',
    'Stepwgn', 'Stepwgn Spada', 'Freed', 'Freed+', 'Freed Spike', 'Mobilio', 'Mobilio Spike', 'Stream', 'Airwave', 'Fit Shuttle',
    'NSX', 'S2000', 'S660', 'Beat', 'CR-Z', 'Insight', 'Clarity', 'e:Ny1', 'e:NP1', 'Integra', 'Prelude', 'Legend', 'Sabre', 'Vamos', 'N-Box', 'N-One', 'N-Wagon', 'Life', 'Zest',
  ],
  HYUNDAI: [
    'Tucson', 'Tucson Hybrid', 'Tucson Plug-in', 'Santa Fe', 'Santa Fe Hybrid', 'Creta', 'Venue', 'Kona', 'Kona Electric', 'Bayon',
    'Accent', 'Verna', 'Elantra', 'Elantra Hybrid', 'Elantra N', 'Sonata', 'Sonata Hybrid', 'Ioniq', 'Ioniq Electric', 'Ioniq 5', 'Ioniq 6',
    'Grandeur', 'Azera', 'Staria', 'Starai Load', 'H-1', 'Starex', 'Veloster', 'Coupé', 'Genesis Coupe', 'i10', 'i20', 'i30', 'i30 N',
  ],
  KIA: [
    'Sportage', 'Sportage Hybrid', 'Sportage Plug-in', 'Sorento', 'Sorento Hybrid', 'Seltos', 'Sonet', 'Picanto', 'Morning', 'Rio', 'Rio X-Line',
    'Cerato', 'Cerato Koup', 'Forte', 'K5', 'Optima', 'Stinger', 'Cadenza', 'K8', 'K9', 'Quoris', 'Carnival', 'Sedona',
    'Soul', 'Soul EV', 'Niro', 'Niro EV', 'Niro Hybrid', 'Niro Plug-in', 'EV6', 'EV6 GT', 'EV9', 'Bongo', 'Mohave', 'K900', 'Opirus', 'Clarus', 'Sephia', 'Spectra', 'Shuma', 'Joice', 'Carens', 'Rondo', 'Venga',
  ],
  ISUZU: [
    'D-Max', 'KB Series', 'NPR', 'NQR', 'FTR', 'FVR',
    'FSR', 'Giga', 'MU-X', 'MU-7', 'Trooper', 'Rodeo', 'Amigo', 'VehiCROSS', 'Ascender', 'i-Series', 'Stylus', 'Impulse',
  ],  
  FORD: [
    'Ranger', 'Ranger Raptor', 'Everest', 'Explorer', 'Expedition', 'Bronco', 'Escape', 'Kuga', 'Ecosport', 'Puma', 'Edge',
    'Fiesta', 'Focus', 'Focus ST', 'Focus RS', 'Mondeo', 'Fusion', 'Taurus', 'Mustang', 'Mustang Mach-E', 'Galaxy', 'S-Max', 'C-Max', 'B-Max',
    'Transit', 'Transit Custom', 'Transit Courier', 'F-150', 'F-150 Lightning', 'F-250', 'F-350', 'F-450', 'Super Duty', 'Thunderbird', 'GT', 'Shelby GT500', 'Shelby GT350', 'Shelby Cobra', 'GT40', 'GT90', 'GT70', 'GT60', 'GT50',
  ],
  LAND_ROVER: [
    'Range Rover', 'Range Rover Sport', 'Range Rover Autobiography', 'Range Rover SV', 'Range Rover Velar', 'Range Rover Evoque',
    'Defender', 'Defender 90', 'Defender 110', 'Defender 130', 'Discovery', 'Discovery Sport', 'Freelander', 'LR2', 'LR3', 'LR4',
  ],
  VOLVO: [
    'XC40', 'XC40 Recharge', 'XC60', 'XC60 Recharge', 'XC90', 'XC90 Recharge', 'C40', 'S60', 'S60 Recharge', 'S90', 'S90 Recharge',
    'V60', 'V60 Cross Country', 'V90', 'V90 Cross Country', 'V40', 'V50', 'V70', 'XC70', 'EX90', 'EM90',
  ],
  AUDI: [
    'A1', 'A2', 'A3', 'A3 Sportback', 'A3 Sedan', 'A3 Cabriolet', 'S3', 'RS3', 'A4', 'A4 Avant', 'S4', 'RS4', 'A5', 'S5', 'RS5',
    'A6', 'A6 Avant', 'A6 Allroad', 'S6', 'RS6', 'RS6 Avant', 'A7', 'S7', 'RS7', 'A8', 'S8',
    'Q2', 'Q3', 'SQ3', 'RS Q3', 'Q4 e-tron', 'Q5', 'SQ5', 'Q6 e-tron', 'Q7', 'SQ7', 'Q8', 'SQ8', 'RS Q8',
    'TT', 'TTS', 'TTRS', 'R8', 'e-tron', 'e-tron GT', 'RS e-tron GT', '100', '200', '80', '90',
  ],
  PEUGEOT: [
    '3008', '5008', '2008', '208', '308', '508', 'Partner',
    'Rifter', 'Expert', 'Boxer', 'e-208', 'e-2008', 'e-308', 'e-Expert', 'e-Boxer', 'e-Traveller', 'Traveller', 'Rifter 4x4', 'Landtrek',
  ],
  LEXUS: [
    'UX', 'UX 200e', 'UX 250h', 'UX 300e', 'NX', 'NX 200t', 'NX 300h', 'NX 350h', 'NX 450h+', 'NX 400h+',
    'ES', 'ES 200', 'ES 250', 'ES 300h', 'ES 350', 'IS', 'IS 200t', 'IS 250', 'IS 300', 'IS 350', 'GS', 'GS 200t', 'GS 300', 'GS 350', 'GS 450h',
    'LS', 'LS 400', 'LS 430', 'LS 460', 'LS 500', 'LS 500h', 'LS 600h', 'LS 600hL', 'LC', 'LC 500', 'LC 50０h',
    'RX', 'RX 200t', 'RX 300', 'RX 350', 'RX 400h', 'RX 450h', 'RX 450h+', 'RX 500h', 'GX', 'GX 400', 'GX 460', 'GX 550', 'LX', 'LX 450d', 'LX 470', 'LX 570', 'LX 600',
    'LM', 'LM 300h', 'LM 350h', 'LM 500h', 'RC', 'RC 200t', 'RC 300', 'RC 350', 'SC', 'HS', 'CT', 'CT 200h', 'UC',
  ],
  BMW: [
    '1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'i3', 'i8', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'M2', 'M3', 'M4', 'M5', 'M6', 'iX', 'iX3', 'i4', 'i7', 'iX1', 'iX5', 'iX6', 'iX7', 'iX8', 'iX9', 'iX10', 'iX11', 'iX12', 'iX13', 'iX14', 'iX15', 'iX16', 'iX17', 'iX18', 'iX19', 'iX20',
  ],
  JAGUAR: [
    'F-Type', 'F-Type Coupe', 'F-Type Convertible', 'F-Pace', 'F-Pace SVR', 'E-Pace', 'I-Pace', 'XE', 'XF', 'XJ', 'XK', 'X-Type', 'S-Type', 'XJR',
  ],
  MASERATI: [
    'Ghibli', 'Ghibli Hybrid', 'Quattroporte', 'Quattroporte Trofeo', 'Levante', 'Levante Hybrid', 'Levante Trofeo', 'GranTurismo', 'GranCabrio', 'MC20', 'MC20 Cielo', 'Merak', 'Bora', 'Khamsin',
  ],
  ASTON_MARTIN: [
    'DB11', 'DB12', 'Vantage', 'Vantage Roadster', 'Vantage F1 Edition', 'DBX', 'DBX707', 'DBS', 'DBS Superleggera', 'Rapide', 'Rapide S', 'Valkyrie', 'Victor', 'Virage', 'Vanquish',
  ],
  CADILLAC: [
    'Escalade', 'Escalade ESV', 'Escalade-V', 'Lyriq', 'Celestiq', 'XT4', 'XT5', 'XT6', 'SRX', 'CT4', 'CT4-V', 'CT5', 'CT5-V', 'CTS', 'ATS', 'XTS', 'STS', 'DTS', 'DeVille',
  ],
  PORSCHE: [
    '911', '911 Carrera', '911 Turbo', '911 GT3', '911 Targa', 'Taycan', 'Taycan 4S', 'Taycan Turbo', 'Taycan Turbo S', 'Taycan Cross Turismo', 'Taycan Sport Turismo',
    'Panamera', 'Panamera Sport Turismo', 'Cayenne', 'Cayenne Coupe', 'Cayenne Turbo GT', 'Macan', 'Macan S', 'Macan GTS', 'Cayman', 'Boxster', '718 Cayman', '718 Boxster', '918 Spyder',
  ],
  GENESIS: [
    'G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80', 'GV90', 'X Concept', 'Essentia', 'Mint', 'New York Concept', 'X Concept Coupe', 'New York Concept Coupe',
  ],
  ACURA: [
    'Integra', 'TLX', 'ILX', 'RDX', 'MDX', 'NSX', 'ZDX', 'RLX', 'CL', 'RSX', 'Legend', 'Vigor', 'SLX', 'EL', 'TSX', 'RL', 'CDX',
  ],
  INFINITI: [
    'Q50', 'Q50 Hybrid', 'Q60', 'Q60 Hybrid', 'Q70', 'Q70 Hybrid', 'Q80', 'Q80 Hybrid', 'QX50', 'QX50 Hybrid', 'QX60', 'QX60 Hybrid', 'QX80', 'QX80 Hybrid',
  ],
  ALFA_ROMEO: [
    'Giulia', 'Stelvio', 'Tonale', '4C', 'Giulietta', 'MiTo', 'Spider', 'Brera', 'GTV', '159', '156', '147', '145', '164', '166',
  ],
  LOTUS: [
    'Elise', 'Exige', 'Evora', 'Emira', 'S2', 'S3', 'S4', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15', 'S16', 'S17', 'S18', 'S19', 'S20',
  ],
  LINCOLN: [
    'Navigator', 'Aviator', 'Corsair', 'Nautilus', 'Zephyr', 'Blackwood', 'MKZ', 'MKS', 'MKT', 'MKX', 'MKC', 'MKZ Hybrid', 'Continental', 'Town Car', 'LS', 'LS 460', 'LS 500', 'LS 600h L',
  ],
  BUICK: [
    'Enclave', 'Encore', 'Regal', 'LaCrosse', 'Verano', 'Excelle', 'Park Avenue', 'Skylark', 'Century', 'Electra', 'LeSabre', 'Riviera', 'Centurion', 'Electra 225', 'LeSabre Limited',
  ],
  FERRARI: [
    'Roma', 'Roma Spider', 'Portofino', 'Portofino M', 'F8 Tributo', 'F8 Spider', '812 Superfast', '812 GTS', 'SF90 Stradale', 'SF90 Spider', '296 GTB', '296 GTS', 'LaFerrari', 'Enzo', 'Purosangue', 'Monza SP1', 'Monza SP2', '488', '458', 'GTC4Lusso', 'FF', 'California',
  ],
  LAMBORGHINI: [
    'Huracan', 'Huracan Evo', 'Huracan Sterrato', 'Huracan Tecnica', 'Aventador', 'Aventador SVJ', 'Aventador Ultimae', 'Urus', 'Urus Performante', 'Urus S', 'Revuelto', 'Gallardo', 'Murcielago',
  ],
  ROLLS_ROYCE: [
    'Phantom', 'Phantom VIII', 'Phantom Extended Wheelbase', 'Ghost', 'Ghost Extended', 'Wraith', 'Dawn', 'Cullinan', 'Spectre', 'Silver Ghost', 'Silver Shadow', 'Silver Spirit', 'Silver Spur', 'Corniche', 'Camargue', 'Boat Tail',
  ],
  BENTLEY: [
    'Continental GT', 'Continental GT Speed', 'Continental GTC', 'Flying Spur', 'Flying Spur Hybrid', 'Bentayga', 'Bentayga EWB', 'Bentayga Speed', 'Mulsanne', 'Arnage', 'Azure', 'Brooklands',
  ],
  MCLAREN: [
    '570S', '570GT', '570S Spider', '600LT', '620R', '720S', '720S Spider', '720LT', '765LT', '765LT Spider', 'Artura', 'P1', 'P1 GTR', 'Speedtail', 'Senna', 'Elva', 'Solus GT', 'GT', 'MP4-12C',
  ],
  BUGATTI: [
    'Chiron', 'Chiron Sport', 'Chiron Super Sport', 'Chiron Pur Sport', 'Veyron', 'Veyron Super Sport', 'Divo', 'Centodieci', 'La Voiture Noire', 'Bolide', 'EB110', 'Type 57', 'Type 35', 'Type 41 Royale',
  ],
  KOENIGSEGG: [
    'Agera', 'Regera', 'Jesko', 'Gemera', 'One:1', 'CCX', 'CCXR', 'CCR', 'Trevita', 'Ccxr Special Edition',
  ],  
  CHEVROLET: [
    'Corvette', 'Corvette Stingray', 'Corvette Z06', 'Camaro', 'Camaro SS', 'Camaro ZL1', 'Silverado', 'Silverado 1500', 'Silverado HD', 'Colorado', 'Tahoe', 'Suburban',
    'Equinox', 'Blazer', 'Traverse', 'Trailblazer', 'Trax', 'Malibu', 'Spark', 'Sonic', 'Cruze', 'Impala', 'Bolt EV', 'Bolt EUV', 'Aveo',
  ],
  DODGE: [
    'Charger', 'Challenger', 'Durango', 'Ram 1500', 'Ram 2500', 'Ram 3500', 'Hornet',
  ],
  RAM: [
    '1500', '2500', '3500', 'Heavy Duty',
  ],
  GMC: [
    'Sierra', 'Yukon', 'Acadia', 'Terrain', 'Canyon', 'Hummer EV',
    'Hummer H2', 'Hummer H3', 'Savana', 'Envoy', 'Jimmy', 'Safari',
  ],
  JEEP: [
    'Wrangler', 'Wrangler Unlimited', 'Wrangler 4xe', 'Gladiator', 'Grand Cherokee', 'Grand Cherokee 4xe', 'Cherokee', 'Compass', 'Renegade', 'Wagoneer', 'Grand Wagoneer', 'Liberty', 'Commander', 'Patriot',
  ],
  TESLA: [
    'Model S', 'Model S Plaid', 'Model 3', 'Model 3 Performance', 'Model X', 'Model X Plaid', 'Model Y', 'Model Y Performance', 'Cybertruck', 'Roadster', 'Semi',
  ],
  RIVIAN: [
    'R1T', 'R1S', 'EDV',
  ],
  LUCID: [
    'Air', 'Gravity',
  ],
  BYD: [
    'Atto 3', 'Dolphin', 'Han', 'Tang', 'Seal', 'Song Plus',
  ],
};