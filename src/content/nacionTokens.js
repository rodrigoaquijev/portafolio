// Valores tomados de las variables y estilos del archivo de Figma de Nación.

export const PRIMITIVE_COLORS = [
  { family: 'primary', tokens: [['100', '#FFE5DF'], ['300', '#FF8C7A'], ['500', '#E11E00'], ['700', '#A41608'], ['900', '#590C04']] },
  { family: 'grey', tokens: [['100', '#FAFAFA'], ['300', '#CACDD0'], ['500', '#939A9F'], ['700', '#626A70'], ['900', '#323639']] },
  { family: 'error', tokens: [['100', '#FEF2F2'], ['500', '#D92D20'], ['900', '#510A0A']] },
  { family: 'warning', tokens: [['100', '#FFFBE0'], ['500', '#F5D90A'], ['900', '#594B00']] },
  { family: 'success', tokens: [['100', '#F0FDF4'], ['500', '#22A447'], ['900', '#073B1C']] },
  { family: 'base', tokens: [['white', '#FFFFFF'], ['cream/100', '#F8F3EA']] }
];

export const PRIMITIVE_DIMENSIONS = [
  ['space/1', '4'], ['space/2', '8'], ['space/4', '16'], ['space/6', '24'], ['space/8', '32'],
  ['radius/sm', '8'], ['radius/md', '16'], ['radius/full', '9999'],
  ['border/width/default', '1'], ['border/width/emphasis', '2']
];

// [token, primitivo, hex, uso es, uso en]
export const SEMANTIC_GROUPS = [
  { es: 'Texto', en: 'Text', tokens: [
    ['text/default', 'grey/900', '#323639', 'Títulos y cuerpo', 'Headings and body'],
    ['text/secondary', 'grey/700', '#626A70', 'Ayudas, metadata y etiquetas secundarias', 'Hints, metadata and secondary labels'],
    ['text/disabled', 'grey/700', '#626A70', 'Texto de controles deshabilitados', 'Disabled control text'],
    ['text/on-action', 'white', '#FFFFFF', 'Texto sobre el botón principal', 'Text on the primary button'],
    ['text/on-brand', 'white', '#FFFFFF', 'Texto e íconos sobre la franja de marca (4,79:1)', 'Text and icons on the brand band (4.79:1)'],
    ['text/brand', 'primary/700', '#A41608', 'Enlaces y texto de marca (6,4:1)', 'Links and brand text (6.4:1)']
  ] },
  { es: 'Superficies', en: 'Surfaces', tokens: [
    ['surface/default', 'white', '#FFFFFF', 'Fondo de pantalla', 'Screen background'],
    ['surface/raised', 'white', '#FFFFFF', 'Tarjetas y bloques con saldos o montos', 'Cards and blocks with balances or amounts'],
    ['surface/brand', 'primary/500', '#E11E00', 'Franja de marca en ingreso e inicio', 'Brand band on sign-in and home'],
    ['surface/warm', 'cream/100', '#F8F3EA', 'Tarjeta de ayuda; nunca bajo montos', 'Help card; never under amounts']
  ] },
  { es: 'Acciones', en: 'Actions', tokens: [
    ['action/primary/bg', 'primary/500', '#E11E00', 'Botón principal', 'Primary button'],
    ['action/primary/bg-hover', 'primary/700', '#A41608', 'Botón principal: hover', 'Primary button: hover'],
    ['action/primary/bg-pressed', 'primary/900', '#590C04', 'Botón principal: pressed', 'Primary button: pressed'],
    ['action/secondary/bg', 'grey/100', '#FAFAFA', 'Botón secundario', 'Secondary button'],
    ['action/secondary/bg-hover', 'primary/100', '#FFE5DF', 'Botón secundario: hover y pressed', 'Secondary button: hover and pressed'],
    ['action/secondary/border', 'grey/900', '#323639', 'Borde del botón secundario', 'Secondary button border'],
    ['action/secondary/border-pressed', 'primary/700', '#A41608', 'Borde del secundario: pressed', 'Secondary border: pressed'],
    ['action/disabled/bg', 'grey/300', '#CACDD0', 'Fondo de acción deshabilitada', 'Disabled action background'],
    ['action/disabled/border', 'grey/300', '#CACDD0', 'Borde de control deshabilitado', 'Disabled control border']
  ] },
  { es: 'Campos y bordes', en: 'Fields and borders', tokens: [
    ['field/bg', 'grey/100', '#FAFAFA', 'Fondo de campo', 'Field background'],
    ['field/border/default', 'grey/900', '#323639', 'Borde de campo (12,6:1 sobre blanco)', 'Field border (12.6:1 on white)'],
    ['field/border/error', 'error/500', '#D92D20', 'Borde de campo inválido', 'Invalid field border'],
    ['border/divider', 'grey/300', '#CACDD0', 'Separadores; nunca la única señal de un control', 'Dividers; never the only cue for a control'],
    ['border/selected', 'grey/900', '#323639', 'Opción seleccionada, 2 px y en neutro', 'Selected option, 2 px and neutral'],
    ['focus/ring', 'primary/700', '#A41608', 'Anillo de foco de 2 px con separación de 2 px', '2 px focus ring with a 2 px offset']
  ] },
  { es: 'Íconos', en: 'Icons', tokens: [
    ['icon/default', 'grey/900', '#323639', 'Íconos informativos', 'Informational icons'],
    ['icon/brand', 'primary/500', '#E11E00', 'Íconos de marca y navegación activa', 'Brand icons and active navigation'],
    ['icon/brand-subtle', 'primary/100', '#FFE5DF', 'Relleno de los pictogramas', 'Pictogram fill']
  ] },
  { es: 'Retroalimentación', en: 'Feedback', tokens: [
    ['feedback/error/bg', 'error/100', '#FEF2F2', 'Fondo del aviso de error', 'Error alert background'],
    ['feedback/error/fg', 'error/900', '#510A0A', 'Texto e ícono de error', 'Error text and icon'],
    ['feedback/error/accent', 'error/500', '#D92D20', 'Acento de error; no se usa como texto', 'Error accent; not for text'],
    ['feedback/warning/bg', 'warning/100', '#FFFBE0', 'Fondo del aviso de advertencia', 'Warning alert background'],
    ['feedback/warning/fg', 'warning/900', '#594B00', 'Texto e ícono de advertencia', 'Warning text and icon'],
    ['feedback/warning/accent', 'warning/500', '#F5D90A', 'Acento de advertencia', 'Warning accent'],
    ['feedback/success/bg', 'success/100', '#F0FDF4', 'Fondo del aviso de éxito', 'Success alert background'],
    ['feedback/success/fg', 'success/900', '#073B1C', 'Texto e ícono de éxito', 'Success text and icon'],
    ['feedback/success/accent', 'success/500', '#22A447', 'Acento de éxito', 'Success accent']
  ] }
];

// [estilo, peso, tamaño, interlineado, peso CSS, muestra es, muestra en]
export const TYPE_STYLES = [
  ['type/heading', 'Bold', 32, 40, 700, 'Hola, Elena', 'Hi, Elena'],
  ['type/title', 'Bold', 24, 32, 700, 'Revisa los datos', 'Check the details'],
  ['type/subtitle', 'Medium', 20, 28, 500, 'Transferir a un celular', 'Send to a phone number'],
  ['type/body-strong', 'Medium', 16, 24, 500, 'No la envíes otra vez', 'Don’t send it again'],
  ['type/body', 'Regular', 16, 24, 400, 'Confirma que el número y el monto sean correctos.', 'Make sure the number and the amount are correct.']
];

// [token, px, uso es, uso en]
export const SPACING = [
  ['space/1', 4, 'Entre etiqueta y ayuda', 'Between label and hint'],
  ['space/2', 8, 'Entre etiqueta y campo', 'Between label and field'],
  ['space/4', 16, 'Entre campos y padding de botones', 'Between fields and button padding'],
  ['space/6', 24, 'Márgenes de pantalla y padding de tarjetas', 'Screen margins and card padding'],
  ['space/8', 32, 'Entre bloques de una pantalla', 'Between blocks on a screen']
];

export const RADII = [
  ['radius/sm', 8, 'Botones y campos', 'Buttons and fields'],
  ['radius/md', 16, 'Tarjetas', 'Cards'],
  ['radius/full', 9999, 'Avatares e indicadores', 'Avatars and indicators']
];

export const BORDERS = [
  ['border/width/default', 1, 'Campos, tarjetas y separadores', 'Fields, cards and dividers'],
  ['border/width/emphasis', 2, 'Foco y opción seleccionada', 'Focus and selected option']
];

// [estilo, CSS, uso es, uso en]
export const SHADOWS = [
  ['shadow/sm', '0 2px 8px rgba(50,54,57,.08)', 'Superficie elevada', 'Raised surface'],
  ['shadow/md', '0 4px 16px rgba(50,54,57,.12)', 'Menús y popovers', 'Menus and popovers'],
  ['shadow/lg', '0 8px 32px rgba(50,54,57,.16)', 'Diálogos y paneles', 'Dialogs and panels']
];

// [estilo, columnas, gutter, margen, viewport]
export const GRIDS = [
  ['grid/mobile', 4, 16, 24, '390 × 844'],
  ['grid/tablet', 8, 16, 32, '768 × 1024'],
  ['grid/desktop', 12, 24, 120, '1440 × 900']
];
