from pathlib import Path
import sys
sys.path.insert(0, str(Path('tmp/allpa-brand-tools').resolve()))
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = Path(__file__).parent
# Original Bézier reconstruction of the selected full-body exploration.
D = '''M 42 252 C 39 231 27 215 27 187 C 27 152 44 137 79 137
L 141 137 C 163 137 171 128 173 108 L 180 55
C 181 43 183 34 188 28 L 191 12 C 192 6 197 5 198 10
L 198 25 L 204 10 C 207 4 211 6 210 12 L 207 27
C 218 28 224 33 225 39 C 235 41 244 47 246 52
Q 249 59 241 61 L 221 63 L 219 128
C 218 153 208 177 201 191 L 204 239 Q 204 246 210 252
L 190 252 Q 186 251 186 244 L 182 202 Q 181 196 178 193
L 176 243 Q 176 248 181 252 L 161 252 Q 156 251 157 243
L 158 191 L 116 191 Q 108 191 104 200 L 93 222
L 97 243 Q 98 248 103 252 L 82 252 Q 77 251 76 244
L 71 222 Q 70 218 73 212 L 82 190
C 73 204 62 211 60 223 L 63 244 Q 64 248 69 252 Z'''

def svg(body, view='0 0 272 272'):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}">{body}</svg>'
def mark(color='#286453'):
    return f'<path fill="{color}" d="{D}"/>'
for name,color in [('forest','#286453'),('black','#000000'),('cream','#FFFCF5')]:
    (ROOT/f'symbol-{name}.svg').write_text(svg(mark(color)),encoding='utf-8')
font = instantiateVariableFont(TTFont(ROOT/'fonts/Fraunces.ttf'), {'wght':600,'opsz':72,'SOFT':50,'WONK':0}, inplace=False)
gs = font.getGlyphSet(); cmap=font.getBestCmap(); x=0; pieces=[]
for i,ch in enumerate('allpa'):
    name=cmap[ord(ch)]; pen=SVGPathPen(gs); gs[name].draw(pen)
    pieces.append(f'<path transform="translate({x} 0)" d="{pen.getCommands()}"/>')
    x += gs[name].width + [-20,-10,-20,-20,0][i]
word = ''.join(pieces)
for name,color in [('forest','#286453'),('black','#000000'),('cream','#FFFCF5')]:
    body=f'<g transform="translate(4 2) scale(.76)">{mark(color)}</g><g fill="{color}" transform="translate(240 166) scale(.105 -.105)">{word}</g>'
    (ROOT/f'lockup-{name}.svg').write_text(svg(body,'0 0 800 230'),encoding='utf-8')
(ROOT/'app-icon.svg').write_text(svg('<rect width="1024" height="1024" fill="#286453"/><g transform="translate(135 108) scale(2.77)">'+mark('#FFFCF5')+'</g>','0 0 1024 1024'),encoding='utf-8')
board=f'''<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Allpa · Marca 01</title>
<style>@font-face{{font-family:Fraunces;src:url(fonts/Fraunces.ttf)}}*{{box-sizing:border-box}}body{{margin:0;background:#F7F5ED;color:#20352D;font:16px/1.5 system-ui}}main{{max-width:1120px;margin:auto;padding:48px 28px}}h1,h2{{font-family:Fraunces;font-weight:600}}h1{{font-size:48px;margin:12px 0}}h2{{font-size:28px}}.meta{{font-size:12px;text-transform:uppercase;letter-spacing:.12em}}.hero{{display:grid;grid-template-columns:2fr 1fr;gap:40px;align-items:center;padding:64px 0}}.hero>img{{width:100%}}.icon{{width:180px!important;border-radius:40px;justify-self:center}}section{{padding:32px 0;border-top:1px solid #ccd6cc}}.row{{display:flex;align-items:end;gap:40px;flex-wrap:wrap}}figure{{margin:0;text-align:center}}figcaption{{font-size:12px;margin-top:12px}}.inverse{{background:#286453;padding:24px;border-radius:16px}}.inverse img{{width:240px}}p{{max-width:760px}}a{{color:#286453}}@media(max-width:600px){{.hero{{grid-template-columns:1fr}}h1{{font-size:36px}}}}</style>
<main><div class="meta">Allpa / Tierra en capas / Original vectorial v1</div><h1>Una silueta que se reconoce.</h1><p>Opción 02 aprobada: alpaca de cuerpo entero. Refinamiento vectorial para revisión óptica; reconocimiento con participantes pendiente.</p>
<div class="hero"><img src="lockup-forest.svg" alt="Imagotipo Allpa con alpaca de cuerpo entero"><img class="icon" src="app-icon.svg" alt="App icon crema sobre verde"></div>
<section><h2>Reducciones reales</h2><p>Tamaños CSS a zoom 100 %. El símbolo conserva cuatro patas y dos orejas; 24 px es una prueba de estrés, no el mínimo recomendado.</p><div class="row">'''
for size in [24,32,48,64,128]:
    board+=f'<figure><img src="symbol-forest.svg" width="{size}" height="{size}" alt="Símbolo a {size} píxeles"><figcaption>{size} px</figcaption></figure>'
board+='''</div></section><section><h2>Monocromo y negativo</h2><div class="row"><img src="lockup-black.svg" width="280" alt="Imagotipo negro"><div class="inverse"><img src="lockup-cream.svg" alt="Imagotipo crema"></div></div></section><section><h2>Reglas de composición</h2><p>Área de protección: un cuarto de la altura visible del símbolo. Mínimos de trabajo: símbolo 32 px de alto; imagotipo 160 px de ancho. Verificar en el soporte final. App icon: archivo cuadrado de 1024 px, fondo a sangre y máscara aplicada por la plataforma.</p><p>Fraunces 600 · opsz 72 · SOFT 50 · WONK 0. Letras convertidas a contornos; originales tipográficos y licencia SIL OFL incluidos.</p><p>Conservar proporciones, orientación y color plano. Sin ojos añadidos, accesorios, degradados ni recortes del cuerpo. Los andenes mantienen su papel en la interfaz.</p><p><a href="symbol-forest.svg">Símbolo SVG</a> · <a href="lockup-forest.svg">Imagotipo SVG</a> · <a href="app-icon.svg">App icon SVG</a></p></section></main></html>'''
(ROOT/'index.html').write_text(board,encoding='utf-8')
print('Generated 7 SVG assets and review board.')
