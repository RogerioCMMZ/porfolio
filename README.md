# Portfólio Pessoal - Rogério Carlos Munguambe

Um portfólio moderno, responsivo e minimalista desenvolvido com HTML, CSS e JavaScript puro.

## 📂 Estrutura do Projeto

```
portfolio/
├── index.html      # Estrutura HTML principal
├── styles.css      # Estilos e design responsivo
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## ✨ Características

### Design
- ✅ Design moderno e minimalista
- ✅ Paleta de cores profissional (azul + tons neutros)
- ✅ Layout centralizado e organizado
- ✅ Totalmente responsivo (mobile-first)

### Funcionalidades
- ✅ Navbar fixa com navegação suave
- ✅ Scroll suave entre seções
- ✅ Animações de fade-in ao carregar
- ✅ Efeitos hover interativos
- ✅ Links funcionais (WhatsApp, Email, Telefone)
- ✅ Cards de projetos com hover animation
- ✅ Badges de competências interativas

### Seções
1. **HOME** - Landing page com apresentação e botões de contacto
2. **SOBRE MIM** - Descrição profissional e background
3. **PROJETOS** - 2 projetos em formato de cards
4. **COMPETÊNCIAS** - Divididas em Programação e Design
5. **CONTACTO** - Botões de contacto funcional

## 🚀 Como Usar

1. **Abrir o portfólio:**
   - Abra o arquivo `index.html` num navegador web

2. **Navegar pelo site:**
   - Use a barra de navegação fixa no topo
   - Clique em qualquer seção para scroll suave
   - Use scroll normal para navegar

3. **Contactar:**
   - Clique no botão WhatsApp para abrir conversa
   - Clique no botão Email para enviar mensagem
   - Use os botões na seção CONTACTO para enviar email ou ligar

## 🛠️ Personalização

### Mudar cores
Abra `styles.css` e procure por `:root`:
```css
:root {
    --primary-color: #0066cc;  /* Mude esta cor para alterar o tema */
    /* outros valores */
}
```

### Atualizar informações pessoais
Abra `index.html` e procure por:
- Nome: `<h1 class="name">`
- Título: `<p class="title">`
- Email: `mailto:seu-email@example.com`
- Telefone: `tel:+seunumero`

### Adicionar novos projetos
No arquivo `index.html`, na seção PROJETOS, adicione:
```html
<div class="project-card">
    <div class="project-image">
        <img src="sua-imagem.jpg" alt="Descrição">
    </div>
    <div class="project-info">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição do projeto</p>
    </div>
</div>
```

## 💻 Compatibilidade

- ✅ Chrome/Edge (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Navegadores mobile (iOS Safari, Chrome Mobile)

## 📱 Breakpoints Responsivos

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 768px
- **Small Mobile**: até 480px

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul (Destaque) | `#0066cc` | Botões, links, destaque |
| Preto | `#1a1a1a` | Texto principal |
| Cinza | `#666666` | Texto secundário |
| Branco | `#ffffff` | Fundo principal |
| Cinza Claro | `#e5e5e5` | Bordas e divisores |

## 📝 Notas

- O portfólio não requer nenhuma dependência externa
- Todas as imagens de projeto usam placeholders SVG
- O design é totalmente funcional sem JavaScript (exceto animações)
- Os links de contacto funcionam diretamente do navegador

## 🔄 Atualizações Futuras Sugeridas

- Adicionar página de projetos com mais detalhes
- Incluir blog ou artigos
- Seção de testemunhos/recomendações
- Formulário de contacto personalizado
- Integração com redes sociais
- Dark mode opcionalmente

## 📞 Contacto

- **Email**: rogeriomunguambe22@gmail.com
- **WhatsApp**: +258 855176653
- **Número**: 855176653

---

**© 2026 Rogério Carlos Munguambe. Todos os direitos reservados.**
