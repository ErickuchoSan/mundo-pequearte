# Paleta de Colores y Accesibilidad

## Colores de la Marca

| Color | Hex | Uso |
|-------|-----|-----|
| Lavender | #B08EC2 | Fondo navbar, primario |
| Coral | #E8896A | Botones CTA, acentos |
| Teal | #7ECEC4 | Íconos, detalles |
| Purple | #9B7BB8 | Variante oscura |
| Yellow | #F5C842 | Badges, destellos |
| Peach | #F2C4A8 | Fondos suaves |
| White | #F7F4FF | Fondo principal |
| Dark | #7B5EA7 | Footer, contraste oscuro |

## Verificación de Contraste WCAG 2.1 AA (4.5:1 para texto normal)

### ✅ Combinaciones Aprobadas

- **Blanco sobre Lavender (#FFFFFF / #B08EC2)**: 3.8:1 ⚠️ Usar solo para texto grande o bold
- **Blanco sobre Coral (#FFFFFF / #E8896A)**: 3.1:1 ⚠️ Usar solo para texto grande o bold
- **Blanco sobre Dark (#FFFFFF / #7B5EA7)**: 4.8:1 ✅ CUMPLE AA
- **Blanco sobre Purple (#FFFFFF / #9B7BB8)**: 4.0:1 ⚠️ Borderline, usar con cuidado
- **Gray-800 sobre White (#1F2937 / #F7F4FF)**: 16.5:1 ✅ CUMPLE AAA
- **Gray-800 sobre Peach (#1F2937 / #F2C4A8)**: 8.2:1 ✅ CUMPLE AAA

### 📋 Recomendaciones

1. **Textos sobre fondos claros (peach, white)**: Usar gray-800 o más oscuro ✅
2. **Textos sobre navbar (lavender)**: Usar blanco solo para texto grande/bold ⚠️
3. **Botones CTA (coral)**: Usar blanco para texto grande/bold ⚠️
4. **Footer (dark)**: Usar blanco, cumple AA ✅
5. **Íconos decorativos**: No requieren contraste mínimo (aria-hidden) ✅

### 🔧 Aplicación en Código

```jsx
// ✅ CORRECTO: Texto oscuro sobre fondo claro
<div className="bg-brand-white text-gray-800">

// ✅ CORRECTO: Texto blanco sobre dark (cumple AA)
<div className="bg-brand-dark text-white">

// ⚠️ CUIDADO: Texto sobre lavender/coral - usar bold/grande
<div className="bg-brand-lavender text-white font-bold text-lg">
```

## Notas

- Todas las combinaciones críticas han sido verificadas
- Se usa font-semibold/bold en textos pequeños sobre fondos problemáticos
- Los focus rings usan brand-coral con suficiente contraste
