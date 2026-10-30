import { defineCaseStudy } from './caseStudyContract.js';

export const NACION_CASE = defineCaseStudy({
  slug: 'banco-nacion',
  name: 'Banco de la Nación',
  methodology: 'Sistema de diseño',
  phases: ['contexto', 'tokens', 'foundations', 'componentes', 'solucion', 'adopcion', 'impacto'],
  translations: {
    es: {
      pageTitle: 'Banco de la Nación — Sistema de diseño | Rodrigo Aquije',
      headerSubtitle: 'Caso de estudio · Banco de la Nación',
      nav: { contexto: 'Contexto', tokens: 'Tokens', foundations: 'Foundations', componentes: 'Componentes', solucion: 'Solución', adopcion: 'Adopción', impacto: 'Resultados' },
      hero: {
        eyebrow: 'Banco de la Nación · Sistema de diseño · Proyecto conceptual · 2026',
        title: 'Nación, un sistema de diseño para la app del Banco de la Nación',
        intro: 'El Banco de la Nación paga los sueldos de los trabajadores del Estado y las pensiones de miles de jubilados. Diseñé Nación para ordenar su app: partí de una auditoría de la app y de la web, construí los tokens, los foundations y la biblioteca de componentes en Figma, y la apliqué a una transferencia a celular de principio a fin.',
        meta: [['Rol', 'Product Designer'], ['Duración', 'Septiembre – octubre 2026'], ['Herramientas', 'Figma · Claude Code'], ['Entregables', '68 tokens, 22 componentes, documentación y prototipo']],
        problem: 'Las tareas están escondidas en un menú de once opciones y la app no se parece a la web del banco.',
        solution: 'Un sistema con tokens en dos niveles, foundations, 22 componentes documentados y reglas claras de color y texto.',
        role: 'Me encargué de todo el proceso: auditoría, tokens, foundations, componentes, documentación, pantallas y prototipo.',
        imageAlt: 'Cuatro pantallas de Nación: inicio de sesión con la franja roja del banco, inicio con el saldo y la fecha de la pensión, revisión de la transferencia y comprobante.'
      },
      contexto: {
        label: 'Contexto y problema',
        title: 'La app actual del banco',
        intro: 'Buena parte de quienes usan la app del Banco de la Nación son personas mayores que cobran ahí su pensión. Empecé por auditar doce pantallas de la app y la web del banco.',
        appAlt: 'Doce pantallas de la app actual del Banco de la Nación, con nombres, números y cuentas cubiertos.',
        appCaption: 'Auditoría de la app actual, con los datos personales cubiertos.',
        findingsLabel: 'Hallazgos en la app',
        findings: [
          ['El menú lateral', 'Transferir, pagar, retirar, pedir un préstamo, cambiar la clave o buscar una agencia están en el mismo menú, en una lista de once opciones. Para hacer cualquier cosa primero hay que abrirlo.'],
          ['La pantalla de inicio', 'Muestra el saldo, el tipo de cambio y una promoción. Ninguna de las tareas frecuentes está ahí.'],
          ['Botones desactivados', 'Varios botones aparecen en gris y la pantalla no explica qué dato falta para activarlos.'],
          ['Cerrar sesión', 'La app pregunta si estás seguro de cerrar sesión con dos botones, NO y SÍ, y hay que volver a leer la pregunta para saber cuál tocar.']
        ],
        webAlt: 'Página de inicio de bn.com.pe con el rojo del banco, íconos de producto en dos tonos y banners con un corte curvo.',
        webTitle: 'La web del banco',
        webBody: 'En bn.com.pe el rojo es #E11E00 y los menús y textos están en Roboto. Decidí partir de ahí, porque es lo que los clientes ya ven cuando entran al banco por internet.',
        diagnosisLabel: 'Diagnóstico y respuesta',
        diagnosis: [
          ['Hay que buscar las tareas en el menú.', 'Puse las cuatro más comunes en el inicio, cada una en una tarjeta grande.'],
          ['La app no explica qué está pasando.', 'Cada pantalla dice en qué paso estás, y antes de enviar el dinero hay una pantalla para revisar los datos.'],
          ['La app y la web no se parecen.', 'Las dos usan el mismo rojo, la misma tipografía y las mismas reglas.']
        ]
      },
      tokens: {
        label: 'Design tokens',
        title: 'Tokens primitivos y semánticos',
        intro: 'Organicé los tokens en dos niveles. El primitivo guarda el valor y el semántico dice dónde se usa. Los componentes solo usan semánticos, así que un cambio de marca se hace en un solo lugar.',
        chain: [['Primitivo', 'color/primary/500', '#E11E00'], ['Semántico', 'action/primary/bg', 'fondo del botón principal'], ['Componente', 'Button · Primary', 'usa solo el semántico']],
        chainNote: 'Si el banco cambia su rojo, lo cambio una vez en el primitivo. Si un día el botón principal deja de ser rojo, solo cambio a qué primitivo apunta el semántico. En ninguno de los dos casos toco el componente.',
        primitivesTitle: 'Primitivos',
        primitivesBody: 'Son la paleta y las medidas base, nombrados por familia y tono. Ningún componente los usa directamente.',
        colorLabel: 'Color',
        dimensionsLabel: 'Medidas',
        semanticsTitle: 'Semánticos',
        semanticsBody: 'Cada uno apunta a un primitivo y describe su uso. Los agrupé por función y les asigné alcances en Figma: un token de texto solo aparece al elegir el color de un texto y uno de borde solo al elegir un borde. Cada token tiene también su variable CSS, por ejemplo var(--action-primary-bg), para que desarrollo use los mismos nombres.',
        heads: ['Token', 'Apunta a', 'Uso']
      },
      foundations: {
        label: 'Foundations',
        title: 'Color, tipografía, espacio, forma y profundidad',
        intro: 'Sobre los tokens armé los estilos base del sistema. Mantuve pocas opciones en cada uno para que todas las pantallas tengan el mismo ritmo.',
        colorTitle: 'Color',
        colorBody: 'El rojo del banco y los grises tienen cinco tonos, de 100 a 900. Error, advertencia y éxito tienen tres: el claro para el fondo, el medio para el ícono y el oscuro para el texto.',
        redsTitle: 'Los dos rojos',
        reds: [
          ['#E11E00', 'Rojo primario', 'color/primary/500 → action/primary/bg', 'Para el botón principal, el logo y los íconos de marca.'],
          ['#D92D20', 'Rojo de error', 'color/error/500 → feedback/error/accent', 'Solo para errores, y siempre acompañado de un ícono y un texto.']
        ],
        redsRule: 'También definí que ningún monto va sobre fondo rojo o rosado. El rosado claro de la marca y el del error casi no se distinguen, y un monto sobre ese fondo se puede leer como un error. Por eso el dinero siempre va sobre blanco o gris.',
        typeTitle: 'Tipografía',
        typeBody: 'Usé solo Roboto, la tipografía de los menús y textos de bn.com.pe, en cinco estilos. El cuerpo nunca baja de 16 px. La web usa Aalto en los titulares, pero es una fuente de pago, y una sola familia hace que el sistema sea más fácil de mantener.',
        spaceTitle: 'Espaciado',
        spaceBody: 'Cinco medidas, todas múltiplos de 4. Cuando una pantalla parecía pedir 12 o 20 px, cambiaba la composición antes que agregar una medida nueva.',
        shapeTitle: 'Radios y bordes',
        shapeBody: 'Tres radios y dos grosores de borde. El borde de 2 px se reserva para el foco y la opción seleccionada.',
        shadowTitle: 'Sombras',
        shadowBody: 'Tres niveles, suaves, y solo en lo que se separa del fondo.',
        gridTitle: 'Grillas',
        gridBody: 'Una grilla por tamaño de pantalla. El flujo está diseñado sobre la móvil de cuatro columnas.',
        gridHeads: ['Columnas', 'Gutter', 'Margen']
      },
      componentes: {
        label: 'Componentes',
        title: 'Una biblioteca de 22 componentes',
        intro: 'Armé la biblioteca a partir del flujo de transferencia y la organicé en cinco secciones según para qué sirve cada pieza. Cada componente tiene en Figma su descripción, sus propiedades y sus variantes, y usa solo tokens semánticos.',
        criteria: {
          title: 'Criterio para crear componentes',
          body: 'Cada vez que necesitaba una pieza, revisaba en este orden:',
          steps: [
            ['¿Ya existe?', 'Si un componente existente lo resuelve cambiando el texto o el ícono, lo reutilizo. «Transferir S/ 100.00» es el mismo botón principal con otra etiqueta.'],
            ['¿Es una variante?', 'Si solo cambia el estado y la estructura es la misma, es una variante. Un campo con error sigue siendo un Text field.'],
            ['¿Se repite?', 'Si aparece en dos o más pantallas y no encaja en nada de lo que ya hay, se vuelve componente. Así salió Inline alert.'],
            ['¿Aparece una sola vez?', 'Lo armo con piezas de la biblioteca en la misma pantalla y no lo agrego hasta que se repita. Es el caso del buscador del paso 02.']
          ],
          alt: 'Página de inicio de la biblioteca en Figma: el orden para decidir si se crea un componente y la tabla de componentes del flujo.'
        },
        libraryTitle: 'Las cinco secciones de la biblioteca',
        library: [
          { id: 'acciones', tab: 'Acciones', body: 'Lo que la persona toca para avanzar, corregir o abrir una tarea. Una sola acción principal por pantalla.', items: ['Button', 'Link', 'Action card', 'Operation row'] },
          { id: 'formularios', tab: 'Formularios', body: 'Campos, selectores y la clave de seis dígitos. La etiqueta siempre está visible y los errores llevan ícono y mensaje.', items: ['Text field', 'Help text', 'Select', 'Code input', 'Checkbox', 'Entity option'] },
          { id: 'retroalimentacion', tab: 'Retroalimentación', body: 'Avisos dentro de la pantalla, el resultado de cada operación y la tarjeta de ayuda.', items: ['Inline alert', 'Operation result', 'Help card'] },
          { id: 'dinero', tab: 'Dinero y datos', body: 'Saldos, montos, filas de detalle y movimientos. Siempre sobre blanco o gris.', items: ['Account card', 'Amount summary', 'Detail row', 'Movement row', 'Recipient row', 'Payment date card'] },
          { id: 'navegacion', tab: 'Navegación y marca', body: 'Barra superior, navegación inferior, los íconos, los pictogramas y los recursos de marca.', items: ['App bar', 'Nav item', 'Bottom navigation', '25 íconos', '6 pictogramas', 'Logo y franja de marca'] }
        ],
        libraryAlt: 'Sección de la biblioteca de Nación en Figma',
        docsTitle: 'Documentación',
        docsBody: 'Documenté a fondo los tres componentes que más se repiten. Cada ficha tiene descripción, anatomía, estados, variantes, dónde ubicarlo, ejemplos de uso correcto e incorrecto, accesibilidad y tokens.',
        docs: [
          { id: 'button', tab: 'Button', body: 'Solo puede haber un botón principal por pantalla, y su texto describe la acción, como «Continuar» o «Transferir S/ 100.00». Mide 56 px de alto y tiene dos jerarquías y seis estados. Solo se desactiva cuando en la pantalla se ve qué falta.' },
          { id: 'textfield', tab: 'Text field', body: 'La etiqueta siempre está visible encima del campo. Tiene cinco estados, y cuando hay un error se marca el borde y aparece un mensaje con ícono que dice cómo corregirlo.' },
          { id: 'inlinealert', tab: 'Inline alert', body: 'Es un aviso que aparece dentro de la pantalla. La primera línea, en negrita, dice qué pasó, y la segunda, qué puede hacer la persona. Tiene tres tipos: error, advertencia y éxito, cada uno con su propio ícono.' }
        ],
        docsAlt: 'Ficha de documentación de',
        evolution: {
          title: 'Revisiones de diseño',
          body: 'El sistema pasó por varias revisiones de diseño. Registré cada cambio en el archivo de Figma, con la fecha y el motivo.',
          items: [
            ['Primera revisión', 'Me pidieron que el banco se notara más en cada pantalla, bordes de campo más oscuros, el rojo de la marca en los íconos, fondo blanco, y sumar el inicio de sesión y la pantalla de inicio al flujo.'],
            ['Barra superior', 'Para que se notara el banco, puse la barra superior en rojo. Pero en cada pantalla quedaban dos elementos rojos grandes, la barra y el botón principal, y se peleaban la atención. Volví a la barra blanca con el logo.'],
            ['Imagen de ingreso', 'Probé ilustraciones para el inicio de sesión, pero no representaban bien al banco ni a sus clientes. Las reemplacé por una foto de la laguna del Nevado Huaytapallana, en Junín.'],
            ['Pantalla de inicio', 'La primera versión tenía accesos rápidos pequeños, como un tablero. La cambié por la pregunta «¿Qué quieres hacer hoy?» y cuatro tarjetas grandes, una debajo de otra, con nombres claros y fáciles de tocar.'],
            ['Revisión final', 'El comentario fue que la app todavía se sentía genérica y no del Banco de la Nación. Volví a la web del banco y tomé de ahí tres recursos.']
          ],
          identity: [
            ['Pictogramas', 'Seis dibujos de 48 px con trazo rojo y un relleno rosado un poco desplazado, como los íconos de productos de bn.com.pe. Para eso agregué el token icon/brand-subtle.'],
            ['Franja con curva', 'Los banners de la web terminan en un corte curvo. Lo convertí en el componente Brand/Franja, que va detrás del saludo en el inicio y del título en el inicio de sesión.'],
            ['Fecha de pago', 'El componente Payment date card dice «Tu pensión llega el 7 de noviembre», con un enlace al cronograma de pagos que el banco publica en su web.']
          ],
          pictogramsAlt: 'Ficha de los seis pictogramas de Nación, con trazo rojo y relleno rosado desplazado.',
          rule: 'Con esos cambios dejé una regla: los elementos de marca van en el inicio de sesión y en la pantalla de inicio. En las pantallas de la transferencia el fondo es blanco y solo queda el logo arriba, para que el monto y el botón se lean sin distracciones.',
          logAlt: 'Registro de decisiones del archivo de Figma, con fecha, decisión y motivo de cada cambio.'
        }
      },
      solucion: {
        label: 'Solución y UX writing',
        title: 'Transferir a un celular',
        intro: 'Apliqué el sistema a una transferencia a celular completa: diez pantallas, ocho del recorrido principal y dos para cuando algo sale mal. Todas están construidas solo con componentes de la biblioteca.',
        flowAlt: 'Recorrido principal en ocho pantallas: inicio de sesión, inicio, elegir destinataria, ingresar monto, revisar, autorizar con la clave, consultando estado y comprobante.',
        steps: [
          ['Inicio de sesión', 'Tipo de documento, número y clave de internet, los mismos datos que los clientes ya conocen.'],
          ['Inicio', 'Primero el saldo; después la fecha de la pensión, las cuatro tareas y la ayuda.'],
          ['Destinataria', 'Se ven el nombre y los últimos cuatro dígitos del celular; el resto queda oculto.'],
          ['Monto', 'Mientras escribe el monto, la persona sigue viendo a quién le envía, por dónde (Yape, Plin o BN) y desde qué cuenta.'],
          ['Revisar', 'El monto va arriba y más grande. Antes del botón hay un aviso para revisar nombre, número y monto.'],
          ['Autorizar', 'Se pide la Clave Dinámica Digital de seis dígitos, con una casilla por dígito.'],
          ['Consultando', 'Mientras el banco responde, la pantalla solo dice que está consultando.'],
          ['Comprobante', 'Muestra el monto y los datos de la operación, con dos botones: ir a mis cuentas o compartir el comprobante.']
        ],
        statesTitle: 'Estados de error y espera',
        statesAlt: 'Cuatro estados del flujo: monto con error, consultando el estado, transferencia realizada y operación no completada.',
        states: [
          ['Monto con error', 'Si el monto pasa el límite, el campo se marca y aparece el mensaje «Ingresa un monto de hasta S/ 500.00». El botón Continuar se desactiva y se entiende por qué.'],
          ['Consultando', 'Debajo del mensaje de espera hay un aviso que dice «No la envíes otra vez». Si la respuesta tarda, la persona podría pensar que falló y enviar el dinero dos veces.'],
          ['No completada', 'En vez de asumir qué pasó con el dinero, la pantalla pide revisar los movimientos y ofrece llamar al banco, así la persona no queda con una información equivocada.']
        ],
        writingLabel: 'UX writing, antes y después',
        writing: [['Sí / No', 'Transferir S/ 100.00'], ['Monto inválido', 'Ingresa un monto de hasta S/ 500.00'], ['Listo', 'Ir a mis cuentas']],
        writingNote: 'En los avisos, la primera línea dice qué pasó y la segunda qué hacer. Le hablo a la persona de tú y con frases cortas.'
      },
      adopcion: {
        label: 'Adopción',
        title: 'Gobierno, roadmap y OKR',
        intro: 'Un sistema de diseño solo funciona si un equipo lo usa y lo mantiene. Definí quién decide qué entra a la biblioteca, en qué fases se adopta y con qué objetivos se mide el piloto.',
        governanceTitle: 'Gobierno del sistema',
        governanceIntro: 'Propongo que al principio lo maneje un equipo pequeño y que después se abra a otros equipos. Si desde el primer día cualquiera puede agregar componentes, es fácil que vuelva a pasar lo de ahora, donde cada canal hace las cosas a su manera.',
        governance: [
          ['Primera etapa', 'Un diseñador y un desarrollador del equipo de la app se encargan del sistema y deciden qué se agrega.'],
          ['Cuando entren más equipos', 'La web y otros equipos pueden proponer componentes, y el equipo del sistema los revisa antes de publicarlos.'],
          ['Para proponer algo', 'Se sigue el mismo orden de la biblioteca: ver si ya existe, si basta una variante o si hace falta uno nuevo. Cada cambio se publica con su documentación y una nota.']
        ],
        roadmapTitle: 'Roadmap',
        roadmapBody: 'Planteé la adopción en tres fases. Cada una termina cuando se cumple su condición de salida, no en una fecha fija.',
        roadmap: [
          { phase: 'Fase 1', name: 'Base del sistema', time: 'Septiembre – octubre 2026', status: 'Completada', items: ['Auditoría de la app y la web', 'Tokens primitivos y semánticos', 'Foundations y 22 componentes', 'Fichas de Button, Text field e Inline alert', 'Transferencia a celular en 10 pantallas'], exit: 'El flujo completo está construido solo con la biblioteca.' },
          { phase: 'Fase 2', name: 'Piloto con el equipo de la app', time: 'Meses 1 a 3', status: 'Siguiente', items: ['Rehacer transferencias y pagos con Nación', 'Pruebas de usabilidad con cinco personas mayores', 'Auditoría con VoiceOver, TalkBack y texto al 200 %', 'Convertir el buscador de destinatarios en componente', 'Publicar la biblioteca para el equipo'], exit: 'Se cumplen los OKR del piloto.' },
          { phase: 'Fase 3', name: 'Apertura a otros equipos', time: 'Meses 4 a 6', status: 'Después', items: ['Abrir el modelo de contribución a la web y otros equipos', 'Llevar los tokens de color y tipografía a la web', 'Documentar el resto de componentes', 'Revisión mensual de la biblioteca con notas de versión'], exit: 'La app y la web comparten tokens y componentes.' }
        ],
        okrTitle: 'OKR del piloto',
        okrBody: 'Para la fase 2 definí dos objetivos, uno para las personas que usan la app y otro para el equipo que la diseña. Los resultados clave se revisan al cierre de los tres meses.',
        okrs: [
          { objective: 'Las personas mayores transfieren dinero sin ayuda', results: ['4 de 5 participantes completan una transferencia a celular sin ayuda.', 'Ningún participante confirma un monto o un destinatario equivocado.', 'Ningún participante repite el envío mientras la app consulta el estado.'] },
          { objective: 'El equipo de la app diseña con Nación', results: ['Todas las pantallas nuevas de transferencias y pagos usan solo componentes y tokens de la biblioteca.', 'El tiempo para diseñar una pantalla nueva baja a la mitad respecto de las primeras semanas del piloto.', 'Cada componente que pasa a desarrollo tiene su ficha de documentación.'] }
        ],
        okrLabel: 'Objetivo',
        krLabel: 'KR'
      },
      impacto: {
        label: 'Resultados y aprendizajes',
        title: 'Resultados',
        intro: 'Al cierre de la primera fase, Nación tiene sus tokens, foundations, biblioteca y documentación, y un flujo completo construido solo con ellos.',
        delivered: ['Auditoría de 12 pantallas de la app y de la web del banco', '31 tokens primitivos y 37 semánticos con alcances y variables CSS', 'Foundations: color, 5 estilos de texto, espaciado, radios, bordes, 3 sombras y 3 grillas', '22 componentes, 25 íconos, 6 pictogramas y recursos de marca', 'Fichas completas de 3 componentes', '10 pantallas y un prototipo navegable con 3 recorridos'],
        deliveredLabel: 'Entregables',
        checkedLabel: 'Calidad del sistema',
        checked: [
          ['100 % tokens', 'Todos los colores, textos y espacios de las diez pantallas salen de tokens o estilos.'],
          ['4,79:1', 'Contraste del texto blanco sobre el rojo del botón principal.'],
          ['11,68:1', 'Contraste del borde de los campos.'],
          ['8,28 a 13,74:1', 'Contraste de los textos de los avisos, que además tienen un ícono distinto por tipo.']
        ],
        learningsLabel: 'Aprendizajes',
        learnings: [
          ['Identidad', 'Usar el rojo y el logo del banco no bastó para que la app se sintiera del banco. Funcionó mejor tomar cosas que el banco ya usa en su web, como sus íconos, sus banners y su información de pagos.'],
          ['Reglas de color', 'La regla que más usé fue la de los dos rojos: uno para la acción principal, otro solo para errores, y ningún monto sobre rojo. Me resolvió muchas dudas al diseñar las pantallas.'],
          ['Registro de decisiones', 'Anotar cada cambio con su motivo me ayudó a sostener las decisiones en las revisiones, por ejemplo por qué la barra superior es blanca.']
        ],
        sourcesLabel: 'Fuentes',
        sources: [['Banco de la Nación, sitio oficial', 'https://www.bn.com.pe/'], ['Banco de la Nación, App BN', 'https://www.bn.com.pe/canales-digitales/app-banca-movil.asp'], ['Banco de la Nación, guía de accesibilidad', 'https://www.bn.com.pe/accesibilidad/guia-accesibilidad.asp'], ['WCAG 2.2', 'https://www.w3.org/TR/WCAG22/']],
        photoCredit: 'Foto del inicio de sesión: laguna del Nevado Huaytapallana (Junín), de Mael Bleu en Unsplash.'
      }
    },
    en: {
      pageTitle: 'Banco de la Nación — Design system | Rodrigo Aquije',
      headerSubtitle: 'Case study · Banco de la Nación',
      nav: { contexto: 'Context', tokens: 'Tokens', foundations: 'Foundations', componentes: 'Components', solucion: 'Solution', adopcion: 'Adoption', impacto: 'Results' },
      hero: {
        eyebrow: 'Banco de la Nación · Design system · Concept project · 2026',
        title: 'Nación, a design system for the Banco de la Nación app',
        intro: 'Banco de la Nación pays the salaries of Peru’s state employees and the pensions of thousands of retirees. I designed Nación to bring order to its app: I started with an audit of the app and the website, built the tokens, foundations and component library in Figma, and applied it to a phone transfer from start to finish.',
        meta: [['Role', 'Product Designer'], ['Timeline', 'September – October 2026'], ['Tools', 'Figma · Claude Code'], ['Deliverables', '68 tokens, 22 components, documentation and prototype']],
        problem: 'Tasks are hidden in an eleven-item menu, and the app looks nothing like the bank’s website.',
        solution: 'A system with two-level tokens, foundations, 22 documented components and clear rules for color and copy.',
        role: 'I owned the whole process: audit, tokens, foundations, components, documentation, screens and prototype.',
        imageAlt: 'Four Nación screens: sign-in with the bank’s red band, home with the balance and the pension date, transfer review and receipt.'
      },
      contexto: {
        label: 'Context and problem',
        title: 'The bank’s current app',
        intro: 'A large share of Banco de la Nación app users are older adults who collect their pension there. I started by auditing twelve screens of the app and the bank’s website.',
        appAlt: 'Twelve screens of the current Banco de la Nación app, with names, numbers and accounts covered.',
        appCaption: 'Audit of the current app, with personal data covered.',
        findingsLabel: 'Findings in the app',
        findings: [
          ['The side menu', 'Transferring, paying, withdrawing, applying for a loan, changing the password or finding a branch all live in the same menu, a list of eleven items. To do anything you have to open it first.'],
          ['The home screen', 'It shows the balance, the exchange rate and a promotion. None of the frequent tasks are there.'],
          ['Disabled buttons', 'Several buttons appear greyed out and the screen does not say which field is missing.'],
          ['Signing out', 'The app asks whether you are sure you want to sign out with two buttons, NO and YES, and you have to reread the question to know which one to tap.']
        ],
        webAlt: 'bn.com.pe home page with the bank’s red, two-tone product icons and banners with a curved cut.',
        webTitle: 'The bank’s website',
        webBody: 'On bn.com.pe the red is #E11E00 and menus and body text use Roboto. I decided to start from there, because that is what customers already see when they visit the bank online.',
        diagnosisLabel: 'Diagnosis and response',
        diagnosis: [
          ['You have to look for tasks in the menu.', 'I put the four most common ones on the home screen, each in a large card.'],
          ['The app doesn’t explain what is happening.', 'Each screen tells you which step you are on, and there is a review screen before the money is sent.'],
          ['The app and the website look unrelated.', 'Both use the same red, the same typeface and the same rules.']
        ]
      },
      tokens: {
        label: 'Design tokens',
        title: 'Primitive and semantic tokens',
        intro: 'I organized tokens in two levels. The primitive stores the value and the semantic token says where it is used. Components only use semantic tokens, so a brand change happens in one place.',
        chain: [['Primitive', 'color/primary/500', '#E11E00'], ['Semantic', 'action/primary/bg', 'primary button background'], ['Component', 'Button · Primary', 'uses only the semantic token']],
        chainNote: 'If the bank changes its red, I change it once in the primitive. If the primary button ever stops being red, I only change which primitive the semantic token points to. Either way, I don’t touch the component.',
        primitivesTitle: 'Primitives',
        primitivesBody: 'The palette and base measurements, named by family and tone. No component uses them directly.',
        colorLabel: 'Color',
        dimensionsLabel: 'Measurements',
        semanticsTitle: 'Semantic tokens',
        semanticsBody: 'Each one points to a primitive and describes its use. I grouped them by function and set scopes in Figma: a text token only appears when picking a text color, and a border token only when picking a border. Each token also has its CSS variable, for example var(--action-primary-bg), so development uses the same names.',
        heads: ['Token', 'Points to', 'Use']
      },
      foundations: {
        label: 'Foundations',
        title: 'Color, type, spacing, shape and depth',
        intro: 'On top of the tokens I built the system’s foundations. I kept few options in each so every screen has the same rhythm.',
        colorTitle: 'Color',
        colorBody: 'The bank red and the greys have five tones, from 100 to 900. Error, warning and success have three: the light one for the background, the mid one for the icon and the dark one for text.',
        redsTitle: 'The two reds',
        reds: [
          ['#E11E00', 'Primary red', 'color/primary/500 → action/primary/bg', 'For the primary button, the logo and brand icons.'],
          ['#D92D20', 'Error red', 'color/error/500 → feedback/error/accent', 'Only for errors, always with an icon and text.']
        ],
        redsRule: 'I also decided that no amount goes on a red or pink background. The brand’s light pink and the error pink are almost the same, and an amount on that background can read as an error. So money always sits on white or grey.',
        typeTitle: 'Typography',
        typeBody: 'I only used Roboto, the menu and body typeface of bn.com.pe, in five styles. Body text never goes below 16 px. The website uses Aalto for headlines, but it is a paid font, and a single family makes the system easier to maintain.',
        spaceTitle: 'Spacing',
        spaceBody: 'Five values, all multiples of 4. When a screen seemed to need 12 or 20 px, I changed the layout instead of adding a new value.',
        shapeTitle: 'Radii and borders',
        shapeBody: 'Three radii and two border widths. The 2 px border is reserved for focus and the selected option.',
        shadowTitle: 'Shadows',
        shadowBody: 'Three soft levels, used only on what separates from the background.',
        gridTitle: 'Grids',
        gridBody: 'One grid per screen size. The flow is designed on the four-column mobile grid.',
        gridHeads: ['Columns', 'Gutter', 'Margin']
      },
      componentes: {
        label: 'Components',
        title: 'A library of 22 components',
        intro: 'I built the library from the transfer flow and organized it into five sections based on what each piece is for. In Figma, every component has its description, properties and variants, and uses only semantic tokens.',
        criteria: {
          title: 'Criteria for new components',
          body: 'Every time I needed a piece, I checked in this order:',
          steps: [
            ['Does it exist?', 'If an existing component solves it by changing the text or icon, I reuse it. “Transfer S/ 100.00” is the same primary button with another label.'],
            ['Is it a variant?', 'If only the state changes and the structure stays the same, it is a variant. A field with an error is still a Text field.'],
            ['Does it repeat?', 'If it shows up on two or more screens and doesn’t fit anything that exists, it becomes a component. That is how Inline alert came about.'],
            ['Does it appear once?', 'I build it from library pieces on that screen and don’t add it until it repeats. That is the case of the search in step 02.']
          ],
          alt: 'Library start page in Figma: the order for deciding whether to create a component and the table of flow components.'
        },
        libraryTitle: 'The five library sections',
        library: [
          { id: 'acciones', tab: 'Actions', body: 'What people tap to move forward, correct or open a task. One primary action per screen.', items: ['Button', 'Link', 'Action card', 'Operation row'] },
          { id: 'formularios', tab: 'Forms', body: 'Fields, selectors and the six-digit code. The label is always visible and errors come with an icon and a message.', items: ['Text field', 'Help text', 'Select', 'Code input', 'Checkbox', 'Entity option'] },
          { id: 'retroalimentacion', tab: 'Feedback', body: 'In-screen alerts, the result of each operation and the help card.', items: ['Inline alert', 'Operation result', 'Help card'] },
          { id: 'dinero', tab: 'Money and data', body: 'Balances, amounts, detail rows and transactions. Always on white or grey.', items: ['Account card', 'Amount summary', 'Detail row', 'Movement row', 'Recipient row', 'Payment date card'] },
          { id: 'navegacion', tab: 'Navigation and brand', body: 'Top bar, bottom navigation, icons, pictograms and brand assets.', items: ['App bar', 'Nav item', 'Bottom navigation', '25 icons', '6 pictograms', 'Logo and brand band'] }
        ],
        libraryAlt: 'Nación library section in Figma',
        docsTitle: 'Documentation',
        docsBody: 'I fully documented the three components that repeat the most. Each sheet has description, anatomy, states, variants, placement, correct and incorrect use, accessibility and tokens.',
        docs: [
          { id: 'button', tab: 'Button', body: 'There can only be one primary button per screen, and its label describes the action, like “Continue” or “Transfer S/ 100.00.” It is 56 px tall, with two hierarchies and six states. It is only disabled when the screen shows what is missing.' },
          { id: 'textfield', tab: 'Text field', body: 'The label is always visible above the field. It has five states, and when there is an error the border is marked and a message with an icon explains how to fix it.' },
          { id: 'inlinealert', tab: 'Inline alert', body: 'A message that appears inside the screen. The first line, in bold, says what happened, and the second, what the person can do. It has three types, error, warning and success, each with its own icon.' }
        ],
        docsAlt: 'Documentation sheet for',
        evolution: {
          title: 'Design reviews',
          body: 'The system went through several design reviews. I logged every change in the Figma file, with the date and the reason.',
          items: [
            ['First review', 'The feedback asked for the bank to show more on every screen, darker field borders, the brand red on icons, a white background, and adding the sign-in and home screens to the flow.'],
            ['Top bar', 'To make the bank more visible, I made the top bar red. But every screen then had two large red elements, the bar and the primary button, competing for attention. I went back to a white bar with the logo.'],
            ['Sign-in image', 'I tried illustrations for sign-in, but they didn’t represent the bank or its customers well. I replaced them with a photo of the Nevado Huaytapallana lagoon in Junín.'],
            ['Home screen', 'The first version had small shortcuts, like a dashboard. I replaced it with the question “What do you want to do today?” and four large cards, one under the other, with clear names and easy to tap.'],
            ['Final review', 'The feedback was that the app still felt generic and not like Banco de la Nación. I went back to the bank’s website and took three devices from it.']
          ],
          identity: [
            ['Pictograms', 'Six 48 px drawings with a red stroke and a slightly offset pink fill, like the product icons on bn.com.pe. I added the icon/brand-subtle token for them.'],
            ['Curved band', 'The website’s banners end in a curved cut. I turned it into the Brand/Franja component, placed behind the greeting on home and the title on sign-in.'],
            ['Payment date', 'The Payment date card component says “Your pension arrives on November 7,” with a link to the payment calendar the bank publishes on its website.']
          ],
          pictogramsAlt: 'Sheet with the six Nación pictograms, with a red stroke and an offset pink fill.',
          rule: 'With those changes I set a rule: brand elements go on the sign-in and home screens. The transfer screens have a white background with only the logo at the top, so the amount and the button read without distractions.',
          logAlt: 'Decision log in the Figma file, with the date, decision and reason for each change.'
        }
      },
      solucion: {
        label: 'Solution and UX writing',
        title: 'Sending money to a phone number',
        intro: 'I applied the system to a complete phone transfer: ten screens, eight for the main path and two for when something goes wrong. All of them are built only from library components.',
        flowAlt: 'Main path in eight screens: sign-in, home, choose recipient, enter amount, review, authorize with the code, checking status and receipt.',
        steps: [
          ['Sign-in', 'Document type, number and internet password, the same data customers already know.'],
          ['Home', 'The balance first; then the pension date, the four tasks and help.'],
          ['Recipient', 'You see the name and the last four digits of the phone number; the rest is hidden.'],
          ['Amount', 'While typing the amount, the person still sees who they are sending to, through which service (Yape, Plin or BN) and from which account.'],
          ['Review', 'The amount sits at the top, larger. Before the button, a message asks to check the name, number and amount.'],
          ['Authorize', 'It asks for the six-digit dynamic code, with one box per digit.'],
          ['Checking', 'While the bank responds, the screen only says it is checking.'],
          ['Receipt', 'It shows the amount and the operation details, with two buttons: go to my accounts or share the receipt.']
        ],
        statesTitle: 'Error and waiting states',
        statesAlt: 'Four flow states: amount with error, checking status, transfer completed and operation not completed.',
        states: [
          ['Amount with error', 'If the amount is over the limit, the field is marked and the message “Enter an amount up to S/ 500.00” appears. The Continue button is disabled and it is clear why.'],
          ['Checking', 'Under the waiting message there is a note that says “Don’t send it again.” If the answer takes a while, the person might think it failed and send the money twice.'],
          ['Not completed', 'Instead of assuming what happened to the money, the screen asks the person to check their transactions and offers a call to the bank, so nobody is left with the wrong information.']
        ],
        writingLabel: 'UX writing, before and after',
        writing: [['Yes / No', 'Transfer S/ 100.00'], ['Invalid amount', 'Enter an amount up to S/ 500.00'], ['Done', 'Go to my accounts']],
        writingNote: 'In alerts, the first line says what happened and the second what to do. The copy uses the informal “tú” and short sentences.'
      },
      adopcion: {
        label: 'Adoption',
        title: 'Governance, roadmap and OKRs',
        intro: 'A design system only works if a team uses it and maintains it. I defined who decides what goes into the library, the phases of adoption and the objectives used to measure the pilot.',
        governanceTitle: 'System governance',
        governanceIntro: 'I propose that a small team runs it at first and that it opens to other teams later. If anyone can add components from day one, it is easy to end up where things are now, with each channel doing its own thing.',
        governance: [
          ['First stage', 'One designer and one developer from the app team own the system and decide what gets added.'],
          ['When more teams join', 'The website and other teams can propose components, and the system team reviews them before publishing.'],
          ['To propose something', 'Follow the same order as the library: check whether it exists, whether a variant is enough or whether a new one is needed. Every change is published with its documentation and a note.']
        ],
        roadmapTitle: 'Roadmap',
        roadmapBody: 'I planned adoption in three phases. Each one ends when its exit condition is met, not on a fixed date.',
        roadmap: [
          { phase: 'Phase 1', name: 'System foundation', time: 'September – October 2026', status: 'Completed', items: ['Audit of the app and the website', 'Primitive and semantic tokens', 'Foundations and 22 components', 'Spec sheets for Button, Text field and Inline alert', 'Phone transfer in 10 screens'], exit: 'The full flow is built only with the library.' },
          { phase: 'Phase 2', name: 'Pilot with the app team', time: 'Months 1 to 3', status: 'Next', items: ['Rebuild transfers and payments with Nación', 'Usability tests with five older adults', 'Audit with VoiceOver, TalkBack and 200% text', 'Turn the recipient search into a component', 'Publish the library to the team'], exit: 'The pilot OKRs are met.' },
          { phase: 'Phase 3', name: 'Opening to other teams', time: 'Months 4 to 6', status: 'Later', items: ['Open the contribution model to the website and other teams', 'Bring color and type tokens to the website', 'Document the remaining components', 'Monthly library review with release notes'], exit: 'The app and the website share tokens and components.' }
        ],
        okrTitle: 'Pilot OKRs',
        okrBody: 'For phase 2 I set two objectives, one for the people who use the app and one for the team that designs it. Key results are reviewed at the end of the three months.',
        okrs: [
          { objective: 'Older adults send money without help', results: ['4 out of 5 participants complete a phone transfer without help.', 'No participant confirms a wrong amount or recipient.', 'No participant resends the money while the app checks the status.'] },
          { objective: 'The app team designs with Nación', results: ['Every new transfer and payment screen uses only library components and tokens.', 'The time to design a new screen drops by half compared with the first weeks of the pilot.', 'Every component that goes to development has its spec sheet.'] }
        ],
        okrLabel: 'Objective',
        krLabel: 'KR'
      },
      impacto: {
        label: 'Results and learnings',
        title: 'Results',
        intro: 'At the end of the first phase, Nación has its tokens, foundations, library and documentation, and a complete flow built only with them.',
        delivered: ['Audit of 12 app screens and the bank’s website', '31 primitive and 37 semantic tokens with scopes and CSS variables', 'Foundations: color, 5 text styles, spacing, radii, borders, 3 shadows and 3 grids', '22 components, 25 icons, 6 pictograms and brand assets', 'Full spec sheets for 3 components', '10 screens and a clickable prototype with 3 paths'],
        deliveredLabel: 'Deliverables',
        checkedLabel: 'System quality',
        checked: [
          ['100% tokens', 'Every color, text style and spacing value on the ten screens comes from tokens or styles.'],
          ['4.79:1', 'Contrast of white text on the primary button red.'],
          ['11.68:1', 'Contrast of the field border.'],
          ['8.28 to 13.74:1', 'Contrast of the alert text; each alert type also has its own icon.']
        ],
        learningsLabel: 'Learnings',
        learnings: [
          ['Identity', 'Using the bank’s red and logo wasn’t enough for the app to feel like the bank. What worked better was taking things the bank already uses on its website, like its icons, its banners and its payment information.'],
          ['Color rules', 'The rule I used most was the one about the two reds: one for the main action, another only for errors, and no amount on red. It settled a lot of questions while designing the screens.'],
          ['Decision log', 'Writing down every change with its reason helped me defend decisions in reviews, for example why the top bar is white.']
        ],
        sourcesLabel: 'Sources',
        sources: [['Banco de la Nación, official site', 'https://www.bn.com.pe/'], ['Banco de la Nación, App BN', 'https://www.bn.com.pe/canales-digitales/app-banca-movil.asp'], ['Banco de la Nación, accessibility guide', 'https://www.bn.com.pe/accesibilidad/guia-accesibilidad.asp'], ['WCAG 2.2', 'https://www.w3.org/TR/WCAG22/']],
        photoCredit: 'Sign-in photo: Nevado Huaytapallana lagoon (Junín), by Mael Bleu on Unsplash.'
      }
    }
  }
});
